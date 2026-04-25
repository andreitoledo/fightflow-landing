import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import TvIcon from "@mui/icons-material/Tv";
import type { ReactNode } from "react";

export type LandingFeature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const features: LandingFeature[] = [
  {
    icon: <HowToRegIcon fontSize="large" />,
    title: "Inscrições organizadas",
    description:
      "Centralize atletas, categorias e dados do evento sem depender de planilhas soltas.",
  },
  {
    icon: <SportsKabaddiIcon fontSize="large" />,
    title: "Operação de lutas",
    description:
      "Controle partidas, resultados, chaves e andamento do campeonato em uma única tela.",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: "Arbitragem digital",
    description:
      "Votação por bandeiras ou notas, com fluxo pensado para eventos reais de capoeira.",
  },
  {
    icon: <TvIcon fontSize="large" />,
    title: "Telões ao vivo",
    description:
      "Exiba chaveamento, placar e informações do evento com visual moderno para o público.",
  },
];
