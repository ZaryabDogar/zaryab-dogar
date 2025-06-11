// src/App.js
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitHubProjects from './components/GitHubProjects';

function App() {
	return (
		<div className="font-sans text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 transition-colors duration-300">
			<Header />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<GitHubProjects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
