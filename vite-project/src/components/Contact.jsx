import React from 'react';
function Contact() {
	return (
		<div className=" flex justify-start items-center w-screen py-24 bg-white">
			<section
				id="contact"
				class="contact bg-[#f8f8f8] py-[1rem] px-[5rem] md:px-[10rem] lg:px-[15rem] xl:px-[20rem]"
			>
				<div class="container">
					<div class="contact__content">
						<div class="contact__title">
							<p className="text-[#008cff] font-bold text-md leading-[1rem] mb-[.5rem] uppercase">
								contact
							</p>
							<h3 className="text-[#333] text-[1.5rem] font-bold">Don't be shy! Hit me up! 👇</h3>
						</div>
						<div class="contact__icons">
							<div class="contact__icon-box">
								<span>
									<i class="fa-solid fa-map-location-dot"></i>
								</span>
								<div class="contact__info">
									<h3>Location</h3>
									<p>Belgrade, Serbia</p>
								</div>
							</div>
							<div class="contact__icon-box">
								<span>
									<i class="fa-solid fa-envelope-open-text"></i>
								</span>
								<div class="contact__info">
									<h3>Mail</h3>
									<a href="mailto:stefan.topallovic@gmail.com">stefan.topallovic@gmail.com</a>
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
