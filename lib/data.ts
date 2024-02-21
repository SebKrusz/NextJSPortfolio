import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/instock.png";
import rmtdevImg from "@/public/cskb.png";
import wordanalyticsImg from "@/public/brainflix.jpg";

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
		title: "Graduated bootcamp",
		location: "Miami, FL",
		description:
			"I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2019",
	},
	{
		title: "Front-End Developer",
		location: "Orlando, FL",
		description:
			"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Full-Stack Developer",
		location: "Houston, TX",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "inStock",
		description:
			"This project involves building a full-stack React application, 'InStock,' for an Inventory Management System catering to a Fortune 500 client.",
		tags: [
			"React",
			"Node",
			"Express",
			"MySQL",
			"SCSS/SASS",
			"Postman",
			"Figma",
			"Jira",
		],
		imageUrl: corpcommentImg,
	},
	{
		title: "CSKB",
		description:
			"This platform is designed to empower gamers by providing a comprehensive set of tools for safe and informed Counter-Strike trading. Whether you're checking links, analyzing in-game items, or seeking influencers and websites, our knowledge base has you covered.",
		tags: ["React", "Node", "Express", "MySQL", "SCSS/SASS", "Postman"],
		imageUrl: rmtdevImg,
	},
	{
		title: "BrainFlix",
		description:
			"Tasked with building a prototype for a video streaming platform, this project involves creating a video streaming application.",
		tags: ["React", "Node", "Express", "MySQL", "SCSS/SASS", "Postman"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MongoDB",
	"GraphQL",
	"Express",
	"PostgreSQL",
	"Python",
	"Framer Motion",
] as const;
