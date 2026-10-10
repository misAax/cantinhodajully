"use client";

import { useEffect, useState } from "react";
import { Check, Heart, RotateCcw } from "lucide-react";
import CreatorProfile from "../../components/CreatorProfile";
import SiteFooter from "../../components/SiteFooter";
import { trackPresellEvent } from "../lib/analytics";
import { withAllowedUtms } from "../lib/utm";
import { pageConfig, type PuzzleTile } from "../config";

function continueToCommunity() {
  trackPresellEvent("presell01_continue");
  window.location.assign(withAllowedUtms(pageConfig.destination));
}

function shuffleTiles(tiles: readonly PuzzleTile[]) {
  const shuffled = [...tiles];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function Puzzle({ onComplete }: { onComplete: (complete: boolean) => void }) {
  const [tiles, setTiles] = useState<PuzzleTile[]>(() => [...pageConfig.puzzleTiles]);
  const [selectedHearts, setSelectedHearts] = useState<string[]>([]);
  const [wrongSelections, setWrongSelections] = useState<string[]>([]);

  useEffect(() => {
    setTiles(shuffleTiles(pageConfig.puzzleTiles));
  }, []);

  const complete = selectedHearts.length === 3;

  function toggleTile(tile: PuzzleTile) {
    if (tile.isHeart) {
      const nextSelected = selectedHearts.includes(tile.id)
        ? selectedHearts.filter((id) => id !== tile.id)
        : [...selectedHearts, tile.id];
      setSelectedHearts(nextSelected);
      if (nextSelected.length === 3) {
        trackPresellEvent("presell01_puzzle_complete");
      }
      onComplete(nextSelected.length === 3);
      return;
    }

    setWrongSelections((selected) =>
      selected.includes(tile.id)
        ? selected.filter((id) => id !== tile.id)
        : [...selected, tile.id],
    );
  }

  function resetPuzzle() {
    setSelectedHearts([]);
    setWrongSelections([]);
    setTiles(shuffleTiles(pageConfig.puzzleTiles));
    onComplete(false);
  }

  return (
    <section className="puzzle-card" aria-labelledby="puzzle-instructions">
      <div className="puzzle-heading">
        <p id="puzzle-instructions">{pageConfig.puzzleInstructions}</p>
        <span className="puzzle-counter" aria-live="polite">
          {selectedHearts.length} de 3
        </span>
      </div>

      <div className="progress-dots" role="img" aria-label={`${selectedHearts.length} de 3 corações encontrados`}>
        {[0, 1, 2].map((index) => (
          <span
            className={`progress-dot ${index < selectedHearts.length ? "is-filled" : ""}`}
            key={index}
          />
        ))}
      </div>

      <div className="puzzle-grid" role="group" aria-label="Desafio dos corações">
        {tiles.map((tile, index) => {
          const Icon = tile.icon;
          const isCorrect = selectedHearts.includes(tile.id);
          const isWrong = wrongSelections.includes(tile.id);

          return (
            <button
              aria-label={`Peça ${index + 1}: ${tile.label}${isCorrect ? ", encontrada" : ""}${isWrong ? ", selecionada" : ""}`}
              aria-pressed={isCorrect || isWrong}
              className={`puzzle-tile ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}`}
              key={tile.id}
              onClick={() => toggleTile(tile)}
              type="button"
            >
              <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
              {isCorrect && <Check className="tile-check" aria-hidden="true" size={12} />}
            </button>
          );
        })}
      </div>

      <p className={`completion-message ${complete ? "is-visible" : ""}`} aria-live="polite">
        {complete ? pageConfig.completionText : "\u00a0"}
      </p>
      {complete && (
        <button className="reset-button puzzle-reset" onClick={resetPuzzle} type="button">
          <RotateCcw size={13} aria-hidden="true" />
          Jogar novamente
        </button>
      )}
    </section>
  );
}

function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <h2 id="benefits-heading">{pageConfig.benefitsTitle}</h2>
      <ul>
        {pageConfig.benefits.map((benefit) => (
          <li key={benefit}>
            <Heart size={14} fill="currentColor" strokeWidth={1.6} aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  const [complete, setComplete] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    trackPresellEvent("presell01_view");
  }, []);

  return (
    <main className="page-shell">
      <div className="main-content">
        <section className="intro" aria-labelledby="page-title">
          <CreatorProfile />
          <div className="decorative-hearts" aria-hidden="true">
            <Heart className="heart-one" size={14} fill="currentColor" />
            <Heart className="heart-two" size={10} fill="currentColor" />
          </div>
          <h1 id="page-title">{pageConfig.title}</h1>
          <p>{pageConfig.subtitle}</p>
        </section>

        <Puzzle onComplete={setComplete} />
        <div className="action-area">
          <button
            className="continue-button"
            aria-busy={isNavigating}
            disabled={!complete || isNavigating}
            onClick={() => {
              setIsNavigating(true);
              continueToCommunity();
            }}
            type="button"
          >
            {isNavigating ? "Abrindo o próximo passo..." : pageConfig.continueText}
          </button>
          {complete && (
            <p className="cta-microcopy">{pageConfig.continueMicrocopy}</p>
          )}
        </div>

        <Benefits />
      </div>

      <SiteFooter />
    </main>
  );
}
