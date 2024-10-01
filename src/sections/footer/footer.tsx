import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg text-white p-4 md:p-6 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Milan Patel. Crafted with passion 🤖. All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center mr-5">
            <li>
              <a 
                href="https://github.com/MilanPatel2003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl hover:text-gray-300 transition-colors"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a 
                href="https://linkedin.com/in/milan-patel-37650330b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl hover:text-gray-300 transition-colors"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a 
                href="mailto:milanpatel2003@gmail.com" 
                className="text-xl hover:text-gray-300 transition-colors"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
