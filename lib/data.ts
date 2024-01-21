import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import campiImg from "@/public/campi.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IMSET",
    location: "Sousse, TN",
    description: "I haven't graduated yet .",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "HK Vision",
    location: "Ouardanine, Monastir",
    description: "I worked as a Full-stack developer for 6 Months .",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Tunisia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes NodeJS , React, Next.js, TypeScript and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Campi.tn",
    description:
      "Campi is the most comprehensive resource for beautiful private campsites. Discover and reserve tent camping, RV parks, cabins, treehouses, and glamping.",
    tags: ["php", "html", "css", "javascript"],
    imageUrl: campiImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
] as const;
