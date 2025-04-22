// src/components/Hero.jsx
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import mdbLogo from '../assets/mdb.png';
import nextLogo from '../assets/next.png';
import nodeLogo from '../assets/node.png';
import reactLogo from '../assets/react.png';
import yourImage from '../assets/your-image.jpg';
const Hero = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
		>
			<div className="container mx-auto px-6 py-20 md:py-32">
				<div className="flex flex-col md:flex-row items-center gap-12">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="md:w-1/2 order-2 md:order-1"
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 1 }}
							className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
						>
							<span className="inline-block mr-2">
								<SparklesIcon className="h-5 w-5 text-yellow-500 inline" />
							</span>
							Hello, I'm
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
						>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
								Zaryab Dogar
							</span>
						</motion.h1>

						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
						>
							MERN Stack Developer
						</motion.h2>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 1 }}
							className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
						>
							I build exceptional digital experiences with modern technologies.
							Passionate about creating beautiful, functional web applications.
						</motion.p>

						<div className="flex flex-wrap gap-4">
							<motion.a
								href="#projects"
								className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9, duration: 0.5 }}
							>
								<span className="relative z-10">View My Work</span>
								<span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							</motion.a>

							<motion.a
								href="#contact"
								className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800/50 transition-all relative overflow-hidden group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.1, duration: 0.5 }}
							>
								<span className="relative z-10">Contact Me</span>
								<span className="absolute inset-0 bg-indigo-600 dark:bg-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
							</motion.a>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.3, duration: 1 }}
							className="mt-12 flex items-center justify-center md:justify-start"
						>
							<motion.a
								href="#about"
								className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
								whileHover={{ y: [0, -5, 0] }}
								transition={{ repeat: Infinity, duration: 1.5 }}
							>
								<span className="mb-2">Scroll Down</span>
								<ArrowDownIcon className="h-6 w-6" />
							</motion.a>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="md:w-1/2 order-1 md:order-2 flex justify-center"
					>
						<div className="relative">
							<div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl relative grayscale">
								<img
									src={yourImage}
									alt="Zaryab Dogar"
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Floating tech badges */}
							{/* React Badge */}
							<motion.div
								className="absolute -top-4 left-1/6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
								initial={{ y: 0 }}
								animate={{ y: [-5, 5, -5] }}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								<div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center overflow-hidden">
									<img
										src={reactLogo}
										alt="React Logo"
										className="w-8 h-8 object-contain"
									/>
								</div>
							</motion.div>

							{/* Node.js Badge */}
							<motion.div
								className="absolute -bottom-4 right-1/6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
								initial={{ y: 0 }}
								animate={{ y: [5, -5, 5] }}
								transition={{
									duration: 3.5,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 0.5,
								}}
							>
								<div className="h-12 w-12 bg-[#FFFFFF] dark:bg-[#FFFFFF] rounded-full flex items-center justify-center overflow-hidden">
									<img
										src={nodeLogo}
										alt="Node.js Logo"
										className="w-8 h-8 object-contain"
									/>
								</div>
							</motion.div>

							{/* MongoDB Badge */}
							<motion.div
								className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
								initial={{ x: 0 }}
								animate={{ x: [-5, 5, -5] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 1,
								}}
							>
								<div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center overflow-hidden">
									<img
										src={mdbLogo}
										alt="MongoDB Logo"
										className="w-8 h-8 object-contain"
									/>
								</div>
							</motion.div>
							{/* Next.js Badge - Top Right */}
							<motion.div
								className="absolute top-1/3 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
								initial={{ y: 0 }}
								animate={{ y: [-5, 5, -5] }}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: 1.5,
								}}
							>
								<div className="h-12 w-12 bg-white dark:bg-white rounded-full flex items-center justify-center overflow-hidden grayscale">
									<img
										src={nextLogo}
										alt="Next.js Logo"
										className="w-8 h-8 object-contain"
									/>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
