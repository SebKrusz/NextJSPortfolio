"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about">
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				{" "}
				After graduating with a red-seal in{" "}
				<span className="font-medium">Electrical</span>, I decided to
				pursue my passion for programming. I enrolled in a coding
				bootcamp and learned{" "}
				<span className="font-medium">full-stack web development</span>.{" "}
				<span className="italic">
					My favorite part of programming & web development
				</span>{" "}
				is making useful applications that are modern and sleek. I{" "}
				<span className="underline">love</span> the feeling of making
				something and having people use it. I have the inclination that
				it's how a chef feels when they see their patrons enjoying thier
				meals from the kitchen. It's a warm, fuzzy feeling that keeps me
				coming back. My core stack is{" "}
				<span className="font-medium">
					React, Node.js, Express.js and MySQL
				</span>
				. I am also familiar with Next.js, TypeScript, MongoDB and
				PostgreSQL. I am always looking to learn new technologies. I am
				currently looking for a{" "}
				<span className="font-medium">full-time position</span> as a
				software developer.
			</p>
			<p>
				{" "}
				<span className="italic">When I'm not coding</span>, I enjoy
				playing video games, watching video essays, and working out. I
				enjoy <span className="font-medium">learning new things</span>,
				I am currently learning about{" "}
				<span className="font-medium">paleolithic history</span>.
			</p>
		</motion.section>
	);
}
