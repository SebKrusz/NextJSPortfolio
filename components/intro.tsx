import Image from "next/image";
import React from "react";

export default function Intro() {
	return (
		<section>
			<div className="flex items-center justify-center">
				<div>
					<Image
						src="https://i.imgur.com/CoHwYRn.png"
						alt="Sebastian Kruszewski Portrait"
						width={192}
						height={192}
						quality={80}
						priority={true}
					/>
				</div>
			</div>
		</section>
	);
}
