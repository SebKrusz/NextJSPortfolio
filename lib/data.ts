import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/instock.png";
import rmtdevImg from "@/public/cskb.png";
import wordanalyticsImg from "@/public/brainflix.jpg";
import tarkovchat from "@/public/TarkovChat.png";
import consulting from "@/public/Consulting.png";

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
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Node, Express, Next.js, TypeScript, Tailwind, Prisma and MySQL along with maybe other skills. I'm currently looking for full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2024",
	},
	{
		title: "Kleinberg Consulting Full-Stack Developer",
		location: "Vancouver, BC",
		description:
			"Working under short-term contract for a consulting firm that specializes in helping businesses grow using the latest and greatest web-tools.",
		icon: React.createElement(CgWorkAlt),
		date: "Present",
	},
] as const;

export const projectsData = [
	{
		title: "inStock",
		description:
			"An Inventory Management System made to be scalable for larger businesses. ",
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
		title: "Counter-Strike Knowledge Base",
		description:
			"A platform designed as a comprehensive set of tools for safe and informed trading of cosmetic Counter-Strike items.",
		tags: ["React", "Node", "Express", "MySQL", "SCSS/SASS", "Postman"],
		imageUrl: rmtdevImg,
	},
	{
		title: "BrainFlix",
		description: "A prototype for a video streaming platform.",
		tags: ["React", "Node", "Express", "MySQL", "SCSS/SASS", "Postman"],
		imageUrl: wordanalyticsImg,
	},
	{
		title: "Tarkov Chat",
		description:
			"An app that allows users to create an account, log in, create groups and chat with other users in real-time.",
		tags: [
			"Next.js",
			"TypeScript",
			"Next-Auth",
			"MongoDB",
			"Next Cloudinary",
			"Pusher",
		],
		imageUrl: tarkovchat,
	},
	{
		title: "Kleinberg Consulting",
		description:
			"A website for a consulting firm that I am doing contract work for that specializes in helping businesses grow using the latest and greatest web-tools.",
		tags: [
			"React",
			"Axios",
			"Zoho CRM",
			"Framer Motion",
			"Node",
			"Express",
		],
		imageUrl: consulting,
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
	"Zoho CRM",
] as const;
