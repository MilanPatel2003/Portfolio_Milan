import { Dock, DockIcon } from './dock';
import { HiOutlineHome, HiOutlineEnvelope } from "react-icons/hi2";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

interface FloatingDockProps {
  position?: 'top' | 'bottom';
}

const FloatingDock = ({ position = 'bottom' }: FloatingDockProps) => {
  const verticalClass = position === 'top' ? 'top-0' : 'bottom-6';
  return (
    <div className={`fixed ${verticalClass} left-1/2 -translate-x-1/2 z-50`}>
      <Dock direction="middle">
        <DockIcon>
          <a href="#" aria-label="Home">
            <HiOutlineHome className="size-6 text-white" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://github.com/MilanPatel2003" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FiGithub className="size-6 text-white" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://www.linkedin.com/in/milan-patel-37650330b/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="size-6 text-white" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://x.com/MILANPA30313563?t=fqfYLTQP0A8Gv8VLFwtu_w&s=08" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FiTwitter className="size-6 text-white" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="mailto:milanpatel6454@email.com" aria-label="Email">
            <HiOutlineEnvelope className="size-6 text-white" />
          </a>
        </DockIcon>
    
      </Dock>
    </div>
  );
};

export default FloatingDock; 