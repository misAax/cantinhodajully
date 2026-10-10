import type { LucideIcon } from "lucide-react";
import { BookHeart, Gift, Heart, Star } from "lucide-react";

export type PuzzleTile = {
  id: string;
  label: string;
  icon: LucideIcon;
  isHeart: boolean;
};

export const pageConfig = {
  creatorName: "Julinha",
  creatorPhoto: "/images/julinha-profile.jpg",
  creatorPhotoPosition: "center 36%",
  title: "Um espacinho especial pra você 💗",
  subtitle: "Antes de continuar, tenho um desafio bem rapidinho!",
  puzzleInstructions: "Encontre os três corações entre os desenhos.",
  benefitsTitle: "O que você vai encontrar na comunidade?",
  benefits: [
    "Conteúdos exclusivos para membros.",
    "Novidades e materiais especiais.",
    "Acesso e informações pelo Telegram.",
  ],
  continueText: "Quero descobrir o que vem agora ♡",
  completionText: "Oba, você encontrou todos os corações! 💗",
  continueMicrocopy: "Seu próximo passo está te esperando.",
  footerNote: "Conheça os detalhes e condições antes de participar.",
  destination: "/acesso",
  contactEmail: "contato@seudominio.com",
  telegramUrl:
    "https://serverflow.dad/l/861c7e89?utm_source=tiktok&utm_campaign=__CAMPAIGN_NAME__|__CAMPAIGN_ID__&utm_medium=__AID_NAME__|__AID__&utm_content=__CID_NAME__|__CID__&utm_term=__PLACEMENT__&utm_id=__CAMPAIGN_ID__",
  accessTitle: "Meu espaço exclusivo te espera 💗",
  accessSubtitle: "Antes de continuar, preciso confirmar uma coisinha...",
  adultNotice: "Conteúdo adulto — exclusivo para maiores de 18 anos.",
  ageConfirmationText:
    "Confirmo que tenho 18 anos ou mais e desejo continuar.",
  ageFollowupText:
    "Após confirmar, você será direcionado para conhecer os planos e as condições no Telegram.",
  ageDisclaimer:
    "Esta confirmação é declaratória e não comprova sua idade. Se exigido pela legislação aplicável, integre uma verificação etária apropriada antes de disponibilizar o conteúdo.",
  preparingMessage: "Preparando seu acesso... 💗",
  colors: {
    hotPink: "#ff69b4",
    deepPink: "#ff1493",
    pink: "#ffc0cb",
    lightPink: "#ffb6c1",
    text: "#38252f",
    muted: "#745e69",
    white: "#ffffff",
    background: "#fff8fb",
  },
  puzzleTiles: [
    { id: "heart-1", label: "Coração", icon: Heart, isHeart: true },
    { id: "star", label: "Estrela", icon: Star, isHeart: false },
    { id: "heart-2", label: "Coração", icon: Heart, isHeart: true },
    { id: "gift", label: "Presente", icon: Gift, isHeart: false },
    { id: "heart-3", label: "Coração", icon: Heart, isHeart: true },
    { id: "book", label: "Livro", icon: BookHeart, isHeart: false },
  ] satisfies PuzzleTile[],
} as const;
