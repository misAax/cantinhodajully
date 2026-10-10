"use client";

import { useEffect, useRef, useState } from "react";
import { pageConfig } from "../app/config";
import { trackPresellEvent } from "../app/lib/analytics";
import { withAllowedUtms } from "../app/lib/utm";

const REDIRECT_DELAY_MS = 700;

export default function AgeRedirectConfirmation() {
  const [isPreparing, setIsPreparing] = useState(false);
  const redirectStarted = useRef(false);

  useEffect(() => {
    trackPresellEvent("presell02_view");
  }, []);

  function confirmAge() {
    if (redirectStarted.current) return;

    redirectStarted.current = true;
    setIsPreparing(true);
    trackPresellEvent("presell02_age_declaration_confirmed");

    window.setTimeout(() => {
      window.location.assign(withAllowedUtms(pageConfig.telegramUrl));
    }, REDIRECT_DELAY_MS);
  }

  return (
    <section className="age-gate" aria-label="Confirmação de maioridade">
      <label className="age-checkbox">
        <input
          checked={isPreparing}
          disabled={isPreparing}
          onChange={confirmAge}
          type="checkbox"
        />
        <span>{pageConfig.ageConfirmationText}</span>
      </label>
      <p className="age-followup">{pageConfig.ageFollowupText}</p>
      <p className="age-disclaimer">{pageConfig.ageDisclaimer}</p>
      {isPreparing && (
        <p className="preparing-message" role="status" aria-live="polite">
          {pageConfig.preparingMessage}
        </p>
      )}
    </section>
  );
}
