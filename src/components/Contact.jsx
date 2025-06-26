// src/components/Contact.jsx
import {
	EnvelopeIcon,
	MapPinIcon,
	PaperAirplaneIcon,
	PhoneIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState({
		submitting: false,
		submitted: false,
		error: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ submitting: true, submitted: false, error: false });

		try {
			const response = await fetch('https://formspree.io/f/xnndqakn', {
				// Replace with your Formspree ID
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setStatus({ submitting: false, submitted: true, error: false });
				setFormData({ name: '', email: '', message: '' });

				// Reset submitted status after 5 seconds
				setTimeout(() => {
					setStatus((prev) => ({ ...prev, submitted: false }));
				}, 5000);
			} else {
				throw new Error('Form submission failed');
			}
		} catch (error) {
			setStatus({ submitting: false, submitted: false, error: true });

			// Reset error status after 5 seconds
			setTimeout(() => {
				setStatus((prev) => ({ ...prev, error: false }));
			}, 5000);
		}
	};

	return (
		<section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
			<div className="container mx-auto px-6">
				<motion.h2
					className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Get In{' '}
					<span className="text-indigo-600 dark:text-indigo-400">Touch</span>
				</motion.h2>

				<div className="flex flex-col lg:flex-row gap-12">
					<motion.div
						className="lg:w-1/2"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<motion.p
							className="text-lg text-gray-600 dark:text-gray-300 mb-8"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							viewport={{ once: true }}
						>
							I'm always open to discussing new projects, creative ideas or
							opportunities to be part of your vision. Feel free to reach out!
						</motion.p>

						<div className="space-y-6">
							<motion.div
								className="flex items-start gap-4"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								viewport={{ once: true }}
							>
								<div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400 mt-1">
									<EnvelopeIcon className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-medium text-gray-700 dark:text-gray-200">
										Email
									</h4>
									<a
										href="mailto:zaryabdogar@gmail.com"
										className="text-indigo-600 dark:text-indigo-400 hover:underline"
									>
										zaryabdogar23@gmail.com
									</a>
								</div>
							</motion.div>

							<motion.div
								className="flex items-start gap-4"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.8 }}
								viewport={{ once: true }}
							>
								<div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-full text-green-600 dark:text-green-400 mt-1">
									<PhoneIcon className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-medium text-gray-700 dark:text-gray-200">
										Phone
									</h4>
									<a
										href="tel:+1234567890"
										className="text-indigo-600 dark:text-indigo-400 hover:underline"
									>
										+92 306 873 7496
									</a>
								</div>
							</motion.div>

							<motion.div
								className="flex items-start gap-4"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 1.0 }}
								viewport={{ once: true }}
							>
								<div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-600 dark:text-purple-400 mt-1">
									<MapPinIcon className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-medium text-gray-700 dark:text-gray-200">
										Location
									</h4>
									<p className="text-gray-600 dark:text-gray-400">
										Lahore, Pakistan
									</p>
								</div>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						className="lg:w-1/2"
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<form
							onSubmit={handleSubmit}
							className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
						>
							{status.submitted && (
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
								>
									Thank you! Your message has been sent successfully.
								</motion.div>
							)}

							{status.error && (
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg"
								>
									Oops! Something went wrong. Please try again later.
								</motion.div>
							)}

							<div className="mb-6">
								<label
									htmlFor="name"
									className="block text-gray-700 dark:text-gray-300 mb-2"
								>
									Your Name
								</label>
								<motion.div whileHover={{ scale: 1.01 }}>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
										placeholder="Enter your name"
									/>
								</motion.div>
							</div>

							<div className="mb-6">
								<label
									htmlFor="email"
									className="block text-gray-700 dark:text-gray-300 mb-2"
								>
									Your Email
								</label>
								<motion.div whileHover={{ scale: 1.01 }}>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
										placeholder="your.email@example.com"
									/>
								</motion.div>
							</div>

							<div className="mb-6">
								<label
									htmlFor="message"
									className="block text-gray-700 dark:text-gray-300 mb-2"
								>
									Your Message
								</label>
								<motion.div whileHover={{ scale: 1.01 }}>
									<textarea
										id="message"
										name="message"
										rows="5"
										value={formData.message}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
										placeholder="Hello Zaryab, I would like to talk about..."
									></textarea>
								</motion.div>
							</div>

							<motion.button
								type="submit"
								disabled={status.submitting}
								className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 ${
									status.submitting
										? 'bg-gray-400 dark:bg-gray-600'
										: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
								} transition-all shadow-lg hover:shadow-xl relative overflow-hidden group`}
								whileHover={!status.submitting ? { scale: 1.02 } : {}}
								whileTap={!status.submitting ? { scale: 0.98 } : {}}
							>
								{status.submitting ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</>
								) : (
									<>
										<span className="relative z-10 flex items-center">
											<PaperAirplaneIcon className="h-5 w-5 mr-2" />
											Send Message
										</span>
										<span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
									</>
								)}
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
