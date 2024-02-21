"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
	const { ref, inView } = useSectionInView("Experience");

	return (
		<section id="experience" className="scroll-mt-28 mb-28 sm:40" ref={ref}>
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor="">
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							// Set visible based on the inView property
							visible={inView}
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
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
