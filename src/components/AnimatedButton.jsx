// src/components/AnimatedButton.jsx
const AnimatedButton = ({ variant = 'primary', ...props }) => {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all';
    
    const variants = {
      primary: `
        bg-primary-light dark:bg-primary-dark
        text-white
        hover:bg-opacity-90 dark:hover:bg-opacity-90
        shadow-lg hover:shadow-xl
      `,
      secondary: `
        border-2 
        border-primary-light dark:border-primary-dark
        text-primary-light dark:text-primary-dark
        hover:bg-opacity-10
      `,
    };
    
    return (
      <motion.button
        className={`${baseClasses} ${variants[variant]}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      />
    );
  };