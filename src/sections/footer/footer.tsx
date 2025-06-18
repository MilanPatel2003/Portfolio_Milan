import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-4 md:p-6 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="text-center">
          <p className="text-sm text-green-300-300 animate-pulse">
            &copy; {new Date().getFullYear()} Milan Patel. Crafted with passion
            🤖. 
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
