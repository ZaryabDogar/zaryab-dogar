// src/components/GitHubProjects.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CodeIcon, EyeIcon, ForkIcon, LinkIcon, StarIcon } from './Icons'; // Custom icons

const GitHubProjects = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(
					'https://api.github.com/users/zaryabdogar/repos?sort=updated&per_page=6'
				);
				const data = await response.json();
				// setProjects(data.filter((repo) => !repo.fork && repo.description));
				setProjects(data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching GitHub projects:', error);
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};

	if (loading) {
		return (
			<div className="flex justify-center py-20">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
			</div>
		);
	}

	return (
		<section
			id="projects"
			className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
		>
			<div className="container mx-auto px-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4"
				>
					My{' '}
					<span className="text-indigo-600 dark:text-indigo-400">GitHub</span>{' '}
					Creations
				</motion.h2>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					viewport={{ once: true }}
					className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
				>
					These projects represent my coding journey, each with its own story
					and challenges overcome.
				</motion.p>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							variants={item}
							whileHover={{ y: -5 }}
							className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
						>
							<div className="relative h-48 overflow-hidden group">
								<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 z-10"></div>
								<div className="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
									<CodeIcon className="h-16 w-16 text-gray-400 dark:text-gray-500" />
								</div>
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
									<a
										href={project.html_url}
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-white rounded-full text-indigo-600 hover:bg-indigo-50 transition"
									>
										<LinkIcon className="h-6 w-6" />
									</a>
								</div>
							</div>

							<div className="p-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold text-gray-800 dark:text-white truncate">
										{project.name}
									</h3>
									<span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full">
										{project.language || 'Code'}
									</span>
								</div>

								<p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
									{project.description || 'No description provided'}
								</p>

								<div className="flex justify-between items-center text-sm">
									<div className="flex space-x-4">
										<span className="flex items-center text-gray-500 dark:text-gray-400">
											<StarIcon className="h-4 w-4 mr-1" />
											{project.stargazers_count}
										</span>
										<span className="flex items-center text-gray-500 dark:text-gray-400">
											<ForkIcon className="h-4 w-4 mr-1" />
											{project.forks_count}
										</span>
									</div>
									<span className="flex items-center text-gray-500 dark:text-gray-400">
										<EyeIcon className="h-4 w-4 mr-1" />
										{project.watchers_count}
									</span>
								</div>

								<a
									href={project.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
								>
									Explore Code
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<a
						href="https://github.com/zaryabdogar"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800/50 transition"
					>
						View All Projects on GitHub
						<svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default GitHubProjects;
