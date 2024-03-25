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
		title: "Apprenticeship",
		location: "British Columbia Institute of Technology, Vancouver",
		description: "I began my apprenticeship in Electrical.",
		icon: React.createElement(LuGraduationCap),
		date: "2019",
	},
	{
		title: "Apprentice Electrician",
		location: "Vancouver, BC",
		description:
			"I worked as an Electrician for almost 5 years with Houle Electric, specializing in Lighting Controls and serving as a Construction Electrician across institutional, commercial, and industrial settings.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2023",
	},
	{
		title: "Journeyman Electrician",
		location: "Vancouver, BC",
		description:
			"After accumulating 8,000 hours of work experience, I passed the Red Seal Electrician exam, becoming a certified Electrician in Canada. I was awarded the title of Journeyman Electrician.",
		icon: React.createElement(CgWorkAlt),
		date: "2023",
	},
	{
		title: "BrainStation Full-Stack Web Development Bootcamp",
		location: "Vancouver, BC",
		description:
			"I completed BrainStation's Web Development Bootcamp, an immersive program designed to equip participants with the latest skills in web design and development. This intensive training honed my abilities in front-end and back-end technologies, enabling me to build responsive, user-centered websites and applications. The curriculum's hands-on approach, focused on real-world projects, has prepared me to tackle diverse web development challenges effectively.",
		icon: React.createElement(FaReact),
		date: "2023",
	},
	{
		title: "Full-Stack Developer",
		location: "Vancouver, BC",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Node, Express, Next.js, TypeScript, Tailwind, Prisma and MySQL. I'm currently looking for full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "Present",
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
			"This platform is designed to empower gamers by providing a comprehensive set of tools for safe and informed Counter-Strike trading.",
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
	"MySQL",
	"GraphQL",
	"Express",
	"PostgreSQL",
	"Python",
	"Framer Motion",
	"NextAuth",
	"OAuth",
	"MongoDB",
	"Pusher",
	"Cloudinary",
] as const;
