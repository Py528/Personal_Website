import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	return (
		<div className="flex justify-center items-center w-full py-12 bg-white">
			<section
				id="contact"
				className="contact py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 justify-center items-center flex flex-col"
			>
				<div className="container flex flex-col justify-center gap-10">
					<div className="contact__content flex flex-col justify-center gap-10 md:gap-16 lg:gap-20">
						<div className="contact__title">
							<p className="text-[#008cff] font-bold text-md md:text-lg leading-[1rem] mb-[.5rem] uppercase">
								contact
							</p>
							<h3 className="text-[#333] text-xl md:text-2xl font-bold">Don't be shy! Hit me up! 👇</h3>
						</div>
						<div className="contact__icons py-4 md:py-8 lg:py-12 flex flex-col md:flex-row justify-center md:justify-start items-center">
							<div className="contact__icon-box md:mr-8 w-80 flex items-center gap-8">
								<span className="relative rounded-full bg-white w-10 h-10 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-18 h-18 shadow-lg"></div>
									<FontAwesomeIcon
										icon={faMapLocationDot}
										beatFade
										size="2xl"
										style={{ color: '#008cff' }}
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</span>
								<div className="contact__info">
									<h3 className="text-[#333] text-lg md:text-xl font-extrabold">Location</h3>
									<p className="text-[#888] text-md md:text-lg">Pune, India</p>
								</div>
							</div>
							<div className="contact__icon-box mt-6 md:mt-0 w-80 flex items-center gap-8">
								<span className="relative rounded-full bg-white w-10 h-10 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-18 h-18 shadow-lg"></div>
									<FontAwesomeIcon
										icon={faEnvelopeOpenText}
										beatFade
										size="2xl"
										style={{ color: '#008cff' }}
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</span>
								<div className="contact__info">
									<h3 className="text-[#333] text-lg md:text-xl font-extrabold">Mail</h3>
									<a
										className="text-[#888] text-md md:text-lg"
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
