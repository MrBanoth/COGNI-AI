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
					<div className="breadcrumb-wrapper">
						<div className="global-container">
							<div className="breadcrumb-block pt-4 sm:pt-0">
								<h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">About Us</h1>
								<ul className="breadcrumb-nav">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>About</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/*...::: Breadcrumb Section End :::... */}

				{/*...::: About Us Section Start :::... */}
				<section id="content-section-2">
					<div className="pb-0 pt-0">
						<div className="global-container">
							<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
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
								<div
									className="jos order-1"
									data-jos_animation="fade-right"
								>
									<div className="mb-6">
										<h2>Pioneering AI Innovation Since 2020</h2>
									</div>
									<div className="text-lg leading-[1.4] lg:text-[21px]">
										<p className="mb-7 last:mb-0">
											At Cogni, we are at the forefront of artificial intelligence innovation, 
											helping businesses transform their operations through cutting-edge AI solutions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*...::: Core Value Section Start :::... */}
				<section className="bg-colorCodGray py-20 text-white xl:py-[130px]">
					<div className="global-container">
						<div className="mb-16 md:mb-20 lg:mb-[100px] xl:mb-[120px]">
							<div className="mb-6 md:max-w-max">
								<h2 className="text-white">The core values behind our work</h2>
							</div>
							<div className="h-[4px] w-full rounded bg-colorCodGray" />
							<ul className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap">
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-100 sm:pt-6 lg:pt-10">
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
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-100 sm:pt-6 lg:pt-10">
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
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-100 sm:pt-6 lg:pt-10">
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
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-100 sm:pt-6 lg:pt-10">
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
							</ul>
						</div>
					</div>
				</section>

				{/*...::: About Contact Section Start :::... */}
				<section id="about-contact" className="bg-colorCodGray py-20 text-white xl:py-[130px]">
					<div className="global-container">
						<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
							<div className="jos order-2 overflow-hidden rounded-md" data-jos_animation="fade-left">
								<Image
									src="/assets/img/th-1/about-contact-img.jpg"
									alt="about-contact-img"
									width={526}
									height={550}
									className="h-auto w-full"
								/>
							</div>
							<div className="jos order-1 md:order-2" data-jos_animation="fade-down">
								<div className="text-lg leading-[1.4] text-white lg:text-[21px]">
									<p className="mb-7 last:mb-0">
										AI accessible and beneficial for organizations, and we
										look forward to partnering with businesses to achieve
										their AI goals.
									</p>
								</div>
								<ul className="mt-10 flex flex-col gap-6 font-dmSans text-[30px] tracking-[1.33] lg:mt-14 lg:gap-y-3 xl:mt-[70px]">
									<li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
										Website:
										<Link
											rel="noopener noreferrer"
											href="https://www.example.com"
											className="text-white hover:text-colorOrangyRed"
										>
											www.example.com
										</Link>
									</li>
									<li className="flex flex-col gap-x-2 leading-tight text-colorOrangyRed lg:flex-row lg:leading-normal">
										Email:
										<Link
											href="mailto:yourmail@mail.com"
											className="text-white hover:text-colorOrangyRed"
										>
											yourmail@mail.com
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
				</section>
				{/*...::: About Contact Section End :::... */}
			</main>
			<Footer_01 />
		</>
	);
}

export default About;
