// src/components/Icons.jsx
import { motion } from 'framer-motion';

export const StarIcon = ({ className }) => (
	<motion.svg
		className={className}
		fill="currentColor"
		viewBox="0 0 24 24"
		whileHover={{ scale: 1.2, rotate: 15 }}
	>
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
	</motion.svg>
);

export const ForkIcon = ({ className }) => (
	<motion.svg
		className={className}
		fill="currentColor"
		viewBox="0 0 24 24"
		whileHover={{ scale: 1.2 }}
	>
		<path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2z" />
	</motion.svg>
);

export const EyeIcon = ({ className }) => (
	<motion.svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		whileHover={{ scale: 1.2 }}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
		/>
	</motion.svg>
);

export const CodeIcon = ({ className }) => (
	<motion.svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		whileHover={{ scale: 1.1, rotate: 5 }}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
		/>
	</motion.svg>
);

export const LinkIcon = ({ className }) => (
	<motion.svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		whileHover={{ scale: 1.2, rotate: 45 }}
		whileTap={{ scale: 0.9 }}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
		/>
	</motion.svg>
);

export const GitHubIcon = ({ className }) => (
	<motion.svg
		className={className}
		fill="currentColor"
		viewBox="0 0 24 24"
		whileHover={{ scale: 1.1 }}
	>
		<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
	</motion.svg>
);
