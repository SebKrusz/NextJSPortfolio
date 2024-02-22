"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact", 0.5);
	const { pending } = useFormStatus();

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}>
			<SectionHeading> Contact me </SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{" "}
				<a
					className="underline"
					href="mailto:SebastianKruszewskii@gmail.com">
					SebastianKruszewskii@gmail.com
				</a>{" "}
				or through this form
			</p>
			<form
				className="mt-10 flex flex-col"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					} else {
						toast.success("Message sent");
					}
				}}>
				<input
					className="h-14 px-4 rounded-lg borderBlack"
					type="email"
					name="senderEmail"
					required
					maxLength={1500}
					placeholder="Your Email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
					name="message"
					placeholder="Your Message.."
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
