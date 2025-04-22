// src/components/About.jsx
import { motion } from 'framer-motion';
import yourImage from '../assets/your-image.jpg';

const About = () => {
	return (
		<section id="about" className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-6">
				<motion.h2
					className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
				</motion.h2>

				<div className="flex flex-col md:flex-row items-center gap-12">
					<motion.div
						className="md:w-1/2"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="relative">
							<div className="w-full h-auto rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg grayscale">
								<img
									src={yourImage}
									alt="About Zaryab"
									className="w-full h-full object-cover"
								/>
							</div>
							<motion.div
								className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								viewport={{ once: true }}
							>
								<div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
									3+
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									Years Experience
								</div>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						className="md:w-1/2"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<motion.h3
							className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							viewport={{ once: true }}
						>
							Passionate MERN Stack Developer
						</motion.h3>

						<motion.p
							className="text-lg text-gray-600 dark:text-gray-400 mb-6"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							viewport={{ once: true }}
						>
							I'm Zaryab, a dedicated and self-motivated Information Technology
							student at Bahauddin Zakariya University. I specialize in building
							full-stack MERN applications and love turning ideas into
							interactive digital experiences.
						</motion.p>

						<motion.p
							className="text-lg text-gray-600 dark:text-gray-400 mb-8"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							viewport={{ once: true }}
						>
							I've explored a variety of technologies including .NET Core, PHP,
							and Flutter, but my main focus is MERN stack development. I'm also
							diving into UI/UX design and animations to make my projects stand
							out.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.5 }}
							viewport={{ once: true }}
						>
							<motion.a
								href="#contact"
								className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Contact Me
							</motion.a>

							<motion.a
								href="#projects"
								className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800/50 transition-all"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								See Projects
							</motion.a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
