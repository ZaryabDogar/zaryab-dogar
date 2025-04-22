// src/components/Projects.jsx
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import nb from '../assets/nb.png';
import st from '../assets/st.png';
import tt from '../assets/tt.png';
import url from '../assets/url.png';
import zd from '../assets/zd.png';
import ct from '../assets/ct.png';

const projects = [
	{
		id: 1,
		title: 'Notes Keeping App',
		link: 'https://notebook-tan-three.vercel.app/',
		github: 'https://github.com/zaryabdogar/notebook',
		techStack: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
		description: 'A full-stack notes keeping app with authentication.',
		image: nb,
	},
	{
		id: 2,
		title: 'URL Shortener',
		link: 'https://url-shortner-e6kc30u0d-zaryabdogars-projects.vercel.app/',
		github: 'https://github.com/zaryabdogar/url-shortner',
		techStack: ['Next.js', 'MongoDB', 'Node.js', 'Express'],
		description: 'Create, manage, and share short URLs with click tracking.',
		image: url,
	},
	{
		id: 3,
		title: 'Food Delivery App',
		link: 'https://zdfood.vercel.app/',
		github: 'https://github.com/zaryabdogar/zdfood',
		techStack: ['Next.js', 'MongoDB', 'Express', 'Node.js', 'Nodemailer'],
		description: 'Food ordering platform with email notifications.',
		image: zd,
	},
	{
		id: 4,
		title: 'Social Media Admin Panel',
		link: 'https://teatime-gamma.vercel.app/dashboard/family',
		github: 'https://github.com/ZaryabDogar/teatime',
		techStack: ['Next js', 'Other Tech stack'],
		description:
			'A responsive and secure Admin Panel built with Next.js for managing users, products, and orders.',
		image: tt,
	},
	{
		id: 5,
		title: 'Stegsec',
		link: 'https://aa-project-puce.vercel.app/',
		github: 'https://github.com/ZaryabDogar/AA-Project',
		techStack: ['React', 'Other Tech stack'],
		description: 'Landing Page. ',
		image: st,
	},
	{
		id: 6,
		title: 'cullitons',
		link: 'https://cullitons.netlify.app/',
		github: 'https://github.com/ZaryabDogar/cullitons',
		techStack: ['React', 'Other Tech stack'],
		description: '  A streamlined vehicle booking system for scheduling, managing, and tracking rentals with ease',
		image: ct,
	},



];

const AutoPlay = () => {
	const swiper = useSwiper();

	useEffect(() => {
		const interval = setInterval(() => {
			if (swiper) {
				if (swiper.isEnd) {
					swiper.slideTo(0);
				} else {
					swiper.slideNext();
				}
			}
		}, 2000); // Change slide every 3 seconds

		return () => clearInterval(interval);
	}, [swiper]);

	return null;
};

const Projects = () => {
	return (
		<section id="projects" className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
					My{' '}
					<span className="text-indigo-600 dark:text-indigo-400">Projects</span>
				</h2>

				<div className="relative">
					<Swiper
						modules={[Autoplay, Pagination]}
						spaceBetween={30}
						slidesPerView={1}
						breakpoints={{
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						pagination={{
							clickable: true,
							dynamicBullets: true,
						}}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						loop={true}
						className="pb-12" // Add padding for pagination
					>
						<AutoPlay />
						{projects.map((project) => (
							<SwiperSlide key={project.id}>
								<ProjectCard project={project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

const ProjectCard = ({ project }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 dark:border-white/10 h-[500px] flex flex-col overflow-hidden"
		>
			<div className="h-48 overflow-hidden">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</div>
			<div className="p-6 flex flex-col justify-between flex-1">
				<div>
					<h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
						{project.title}
					</h3>
					<p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-2 mb-4">
						{project.techStack.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-sm rounded-full"
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				<div className="flex gap-3 mt-auto">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded transition flex-1"
					>
						<ArrowTopRightOnSquareIcon className="h-4 w-4" />
						Live Demo
					</a>
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 transition flex-1"
					>
						<CodeBracketIcon className="h-4 w-4" />
						Code
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
