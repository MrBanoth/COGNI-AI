import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";

function About() {
	return (
		<>
			<Header_01 />
			<main className="main-wrapper relative overflow-hidden">
				{/*...::: Breadcrumb Section Start :::... */}
				<section id="section-breadcrumb">
					{/* Section Spacer */}
					<div className="breadcrumb-wrapper">
						{/* Section Container */}
						<div className="global-container">
							<div className="breadcrumb-block pt-8 sm:pt-0">
								<h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">About Us</h1>
								<ul className="breadcrumb-nav">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>About</li>
								</ul>
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Breadcrumb Section End :::... */}
				{/*...::: About Us Section Start :::... */}
				{/* Moved: Pioneering AI Innovation Since 2020 section START */}
				<section id="content-section-2">
					{/* Section Spacer */}
					<div className="pb-20 pt-0 xl:pb-[150px] xl:pt-0">
						{/* Section Container */}
						<div className="global-container">
							<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
								{/* Content Left Block */}
								<div
									className="jos order-2 overflow-hidden rounded-md"
									data-jos_animation="fade-left"
								>
									<Image
										src="/assets/img/th-1/about-image.png"
										alt="content-image-2"
										width={526}
										height={550}
										className="h-auto w-full"
									/>
								</div>
								{/* Content Right Block */}
								<div className="jos order-1" data-jos_animation="fade-right">
									{/* Section Content Block */}
									<div className="mb-6">
										<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6 -mt-6">Pioneering AI Innovation Since 2020</h2>
									</div>
									{/* Section Content Block */}
									<div className="text-lg leading-[1.4] lg:text-[21px]">
										<p className="mb-7 last:mb-0">
										Based in Delaware, our AI-focused startup is dedicated to delivering cutting-edge artificial intelligence solutions. We specialize in providing tailored AI services to clients across industries, developing innovative in-house AI products, and offering highly skilled AI specialists as IT consultants.
									</p>
									<p className="mb-7 last:mb-0">
										Our mission is to empower businesses with intelligent, data-driven capabilities that drive growth, efficiency, and innovation. With a passion for solving complex challenges, we position ourselves as a trusted partner in the evolving AI landscape, delivering measurable results across various sectors including healthcare, finance, retail, and manufacturing.
									</p>
										<Link
											href="/contact"
											className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
										>
											Get in touch
										</Link>
									</div>
								</div>
								{/* Content Right Block */}
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/* Moved: Pioneering AI Innovation Since 2020 section END */}
				<section id="about-hero-section">
					{/* Section Spacer */}
					<div className="mb-20 lg:mb-24">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="jos mb-10 text-center lg:mb-12 xl:mb-20">
								<div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
									<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Empowering the Future with Intelligent AI Solutions</h2>
									<p className="mt-4 text-lg text-gray-600">
									  Headquartered in Delaware, Cogni AI Solutions INC is a pioneering force in artificial intelligence, delivering transformative solutions that drive business innovation and growth across industries.
									</p>
								</div>
							</div>
							{/* Section Content Block */}
							{/* Featured Content Grid */}
							<div className="jos grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" data-jos_animation="fade-up">
								{/* Feature 1 */}
								<div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm border border-gray-200">
									<div className="w-12 h-12 bg-black bg-opacity-5 rounded-full flex items-center justify-center mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-colorOrangyRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<h3 className="text-xl font-bold mb-2">Custom AI Solutions</h3>
									<p className="text-gray-600">Tailored AI services including Custom AI Solution Development, AI Model Development & Integration, and Data Engineering & Analytics.</p>
								</div>

								{/* Feature 2 */}
								<div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm border border-gray-200">
									<div className="w-12 h-12 bg-black bg-opacity-5 rounded-full flex items-center justify-center mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-colorOrangyRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>
									<h3 className="text-xl font-bold mb-2">AI Specialists & Consultants</h3>
									<p className="text-gray-600">Providing skilled AI developers, data scientists, and ML engineers as extended team members through our AI Resource Augmentation services.</p>
								</div>

								{/* Feature 3 */}
								<div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm border border-gray-200">
									<div className="w-12 h-12 bg-black bg-opacity-5 rounded-full flex items-center justify-center mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-colorOrangyRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
									</div>
									<h3 className="text-xl font-bold mb-2">AI Consulting & Strategy</h3>
									<p className="text-gray-600">Helping clients define AI roadmaps, use cases, and implementation plans with our expert AI Consulting & Strategy services.</p>
								</div>
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: About Us Section End :::... */}
				{/*...::: About Funfact Start :::... */}
				<section id="about-funfact-section">
					{/* Section Container */}
					<div className="global-container">
						{/* Counter Section - Always horizontal, no scrolling */}
						<div className="py-8">
							<ul className="flex flex-row flex-wrap sm:flex-nowrap justify-around gap-2 px-2 text-center max-w-5xl mx-auto">
								{/* Counter Items */}
								<li className="jos flex flex-col items-center flex-1 w-1/4 px-1" data-jos_delay="0.1">
									<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-colorOrangyRed" data-module="countup">
										<span className="start-number" data-countup-number={150}>150</span>+
									</h3>
									<span className="block text-xs sm:text-sm md:text-base font-normal text-black">
										AI Solutions Deployed
									</span>
								</li>

								{/* Counter Items */}
								<li className="jos flex flex-col items-center flex-1 w-1/4 px-1" data-jos_delay="0.2">
									<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-colorOrangyRed" data-module="countup">
										<span className="start-number" data-countup-number={98}>98</span>%
									</h3>
									<span className="block text-xs sm:text-sm md:text-base font-normal text-black">
										Client Retention Rate
									</span>
								</li>

								{/* Counter Items */}
								<li className="jos flex flex-col items-center flex-1 w-1/4 px-1" data-jos_delay="0.3">
									<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-colorOrangyRed" data-module="countup">
										<span className="start-number" data-countup-number={25}>25</span>+
									</h3>
									<span className="block text-xs sm:text-sm md:text-base font-normal text-black">
										Industry Recognitions
									</span>
								</li>

								{/* Counter Items */}
								<li className="jos flex flex-col items-center flex-1 w-1/4 px-1" data-jos_delay="0.4">
									<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-colorOrangyRed" data-module="countup">
										<span className="start-number" data-countup-number={50}>50</span>+
									</h3>
									<span className="block text-xs sm:text-sm md:text-base font-normal text-black">
										Global Partners
									</span>
								</li>
							</ul>
						</div>
						{/* Counter Scroll */}
					</div>
					{/* Section Container */}
				</section>
				{/*...::: About Funfact Start :::... */}
				{/*...::: Core Value Section Start :::... */}
				<section id="core-value" className="mb-16 lg:mb-24 xl:mb-32">
					{/* Section Spacer */}
					<div className="jos mx-5 rounded-[50px] bg-black px-[20px] pb-32 pt-20 sm:px-[50px] sm:pb-24 md:mx-[50px] lg:px-[100px] lg:pb-32 xl:pt-[130px] xl:pb-40">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="mb-10 text-center lg:mb-12 xl:mb-20">
								<div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
									<h2 className="text-white">
										The core values behind our work
									</h2>
								</div>
							</div>
							{/* Section Content Block */}
							{/* Horizontal Separator */}
							<div className="mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0" />
							{/* Core Value list */}
							<ul className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap">
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/img/th-1/core-value-icon-1.svg"
												alt="core-value-icon-1"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Innovation</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We lead the AI revolution by developing groundbreaking solutions that push the boundaries of what&apos;s possible with artificial intelligence.
									</p>
								</li>
								{/* Core Value Item */}
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/img/th-1/core-value-icon-2.svg"
												alt="core-value-icon-2"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Excellence</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We set the highest standards in AI development, ensuring our solutions deliver exceptional performance, reliability, and business impact.
									</p>
								</li>
								{/* Core Value Item */}
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/img/th-1/core-value-icon-3.svg"
												alt="core-value-icon-3"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Collaboration</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We believe in the power of partnership, working closely with clients to co-create AI solutions that drive real business transformation.
									</p>
								</li>
								{/* Core Value Item */}
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/img/th-1/core-value-icon-4.svg"
												alt="core-value-icon-4"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Ethical AI</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We are committed to responsible AI development, ensuring our solutions are fair, transparent, and aligned with the highest ethical standards.
									</p>
								</li>
								{/* Core Value Item */}
							</ul>
							{/* Core Value list */}
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Core Value Section End :::... */}
			
				{/* About Contact Section - Commented Out
				<section id="about-conact">
					<div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
						<div className="global-container">
							<div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">
								<div
									className="jos order-2 overflow-hidden rounded-[20px] md:order-1"
									data-jos_animation="fade-right"
								>
									<Image
										src="/assets/img/th-1/about-contact-img.jpg"
										alt="about-contact-img"
										width={526}
										height={550}
										className="h-auto w-full"
									/>
								</div>
								<div
									className="jos order-1 md:order-2"
									data-jos_animation="fade-left"
								>
									<div className="mb-10 max-w-2xl">
										<h2>Let's talk about your project</h2>
									</div>
									<ul className="flex flex-col gap-6">
										<li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
											Email:
											<Link
												href="mailto:info@example.com"
												className="text-white hover:text-colorOrangyRed"
											>
												info@example.com
											</Link>
										</li>
										<li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
											Phone:
											<Link
												href="tel:+1234567890"
												className="text-white hover:text-colorOrangyRed"
											>
												(123) 456-7890
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				*/}
			</main>
			<Footer_01/>
		</>
	);
}

export default About;
