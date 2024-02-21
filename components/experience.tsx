"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
const fadeInAnimationVariants = {
	initial: { opacity: 0, y: 100 },
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.05 * index },
	}),
};

export default function Experience() {
	console.log(useSectionInView("Skills").inView);
	const { ref } = useSectionInView("Experience", 0.5);
	return (
		<section id="experience" ref={ref}>
			<SectionHeading> My experience </SectionHeading>
			<VerticalTimeline lineColor="">
				{experiencesData.map((item, index) => (
					<motion.div
						className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						custom={index}
						key={index}>
						<VerticalTimelineElement
							visible={true}
							contentStyle={{
								background: "#f3f4f6",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							icon={item.icon}
							iconStyle={{
								background: "white",
								fontSize: "1.5rem",
							}}
							contentArrowStyle={{
								borderRight: ".4rem solid #9ca3af",
							}}
							date={item.date}>
							<h3 className="font-semibold capitalize">
								{item.title}
							</h3>
							<p className="font-normal !mt-0">{item.location}</p>
							<p className="!mt-1 !font-normal text-gray-700">
								{item.description}
							</p>
						</VerticalTimelineElement>
					</motion.div>
				))}
			</VerticalTimeline>
		</section>
	);
}
