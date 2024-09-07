import { IconType } from "react-icons";
import { FaAngular, FaAws, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiMysql, SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

export interface CardListItem {
  label: string;
  icon?: IconType;
}

export const frontEndListItems: CardListItem[] = [
  {
    label: "HTML",
    icon: FaHtml5,
  },
  {
    label: "CSS",
    icon: FaCss3,
  },
  {
    label: "JavaScript",
    icon: FaJs,
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "ReactJS",
    icon: FaReact,
  },
  {
    label: "Angular",
    icon: FaAngular,
  },
];

export const backEndListItems: CardListItem[] = [
  {
    label: "NodeJS",
    icon: FaNodeJs,
  },
  {
    label: "NestJS",
    icon: SiNestjs,
  },
  {
    label: "MySQL",
    icon: SiMysql,
  },
  {
    label: "Postgres",
    icon: SiPostgresql,
  },
  {
    label: "AWS",
    icon: FaAws,
  },
];
