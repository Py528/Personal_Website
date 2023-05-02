import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	return (
		<div className=" flex justify-start items-center w-full py-12 bg-white">
			<section
				id="contact"
				class="contact py-[1rem] px-[4rem] md:px-[10rem] lg:px-[15rem] xl:px-[20rem] w-full h-96 justify-center items-center flex flex-col"
			>
				<div class="container  flex flex-col justify-center gap-10">
					<div class="contact__content flex flex-col justify-center gap-16">
						<div class="contact__title">
							<p className="text-[#008cff] font-bold text-md leading-[1rem] mb-[.5rem] uppercase">
								contact
							</p>
							<h3 className="text-[#333] text-[1.5rem] font-bold">Don't be shy! Hit me up! 👇</h3>
						</div>
						<div class="contact__icons py-[1rem] flex justify-start items-center ">
							<div
								class="contact__icon-box w-80 flex items-center gap-8
"
							>
								<span class="relative rounded-full bg-white w-10 h-10 shadow-md flex justify-center items-center">
									<div class="absolute rounded-full bg-white w-18 h-18 shadow-lg"></div>
									<FontAwesomeIcon
										icon={faMapLocationDot}
										beatFade
										size="2xl"
										style={{ color: '#008cff' }}
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</span>
								<div class="contact__info">
									<h3 className="text-[#333] text-[1rem] font-extrabold">Location</h3>
									<p className="text-[#888] text-[1rem]">Pune, India</p>
								</div>
							</div>
							<div
								class="contact__icon-box w-80 flex items-center gap-8
"
							>
								<span class="relative rounded-full bg-white w-10 h-10 shadow-md flex justify-center items-center">
									<div class="absolute rounded-full bg-white w-18 h-18 shadow-lg"></div>
									<FontAwesomeIcon
										icon={faEnvelopeOpenText}
										beatFade
										size="2xl"
										style={{ color: '#008cff' }}
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</span>
								<div class="contact__info">
									<h3 className="text-[#333] text-[1rem] font-extrabold">Mail</h3>
									<a
										className="text-[#888] text-[1rem]"
										href="mailto:pranaav.shinde5280@gmail.com"
									>
										pranaav.shinde5280@gmail.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
