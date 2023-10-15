import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Contact() {
	return (
		<div className="flex justify-center items-center mx-auto overflow-hidden">
			<section
				id="contact"
				className="contact py-8 px-4 justify-center items-center flex flex-col"
			>
				<div className="container flex flex-col justify-center gap-10">
					<div className="contact__content flex flex-col justify-center gap-10">
						<div className="contact__title">
							<p className="text-blue-600 font-bold lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs leading-normal mb-0.5 uppercase">
								contact
							</p>
							<h3 className="text-gray-700 lg:text-2xl md:text-xl sm:text-lg xs:text-base 2xs:text-sm text-xs leading-normal font-bold">
								Don't be shy! Hit me up! 👇
							</h3>
						</div>

						<div className="contact__icons py-4 flex flex-col md:flex-row justify-center md:justify-start items-center flex-wrap">
							<div className="contact__icon-box md:mr-8 w-full md:w-80 flex items-center flex-col sm:flex-row gap-8">
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
								<div className="contact__info flex flex-col justify-center items-center md:items-start">
									<h3 className="text-gray-700 text-lg md:text-xl font-extrabold">Location</h3>
									<p className="text-gray-600 text-sm md:text-base">Pune, India</p>
								</div>
							</div>
							<div className="contact__icon-box mt-6 md:mt-0 w-full md:w-80 flex items-center flex-col sm:flex-row gap-8">
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
								<div className="contact__info flex flex-col justify-center items-center md:items-start">
									<h3 className="text-gray-700 text-lg md:text-xl font-extrabold">Mail</h3>
									<a
										className="text-gray-600 text-sm md:text-base"
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
