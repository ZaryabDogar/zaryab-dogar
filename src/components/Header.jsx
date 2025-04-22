// src/components/Header.jsx
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from 'react';


const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

	return (
		<header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-800/20">
			<div className="container mx-auto px-6 py-3 flex justify-between items-center">
				<motion.a
					href="#home"
					className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Zaryab Dogar
				</motion.a>

				

				<nav className="hidden md:flex space-x-8">
					{navItems.map((item) => (
						<motion.a
							key={item}
							href={`#${item}`}
							className="capitalize text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition relative"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							{item}
							<motion.span
								className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400"
								initial={{ scaleX: 0 }}
								whileHover={{ scaleX: 1 }}
								transition={{ duration: 0.3 }}
							/>
						</motion.a>
					))}
				</nav>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="md:hidden bg-white dark:bg-gray-800 py-4 px-6 shadow-md"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<motion.a
									key={item}
									href={`#${item}`}
									className="capitalize text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition py-2"
									onClick={() => setIsOpen(false)}
									whileHover={{ x: 5 }}
									whileTap={{ scale: 0.95 }}
								>
									{item}
								</motion.a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
