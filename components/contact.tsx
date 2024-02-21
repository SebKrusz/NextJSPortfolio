import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function contact() {
	return (
		<section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
			<SectionHeading> Contact me </SectionHeading>
			<p className="text-gray-700">
				Please contact me directly at{" "}
				<a
					className="underline"
					href="mailto:SebastianKruszewskii@gmail.com">
					SebastianKruszewskii@gmail.com
				</a>{" "}
				or through this form
			</p>
			<form className="mt-10">
				<input
					className="h-14 rounded-lg border border-black/10"
					type="email"
				/>
				<textarea />
				<button type="submit">
					Send
					<FaPaperPlane />
				</button>
			</form>
		</section>
	);
}
