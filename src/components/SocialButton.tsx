import { motion } from 'framer-motion';
import { SiGithub, SiDiscord, SiWikipedia } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

type Props = {
  name: string;
  url: string;
  type: 'github' | 'discord' | 'email' | 'wikipedia';
  delay?: number;
};

export default function SocialButton({ name, url, type, delay = 0 }: Props) {
  const IconComponent = type === 'github' ? SiGithub : type === 'discord' ? SiDiscord : type === 'wikipedia' ? SiWikipedia : MdEmail;

  return (
    <motion.a
      href={url}
      className="social-button"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay }}
      whileHover={{ y: -2 }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <span className="social-icon" aria-hidden>
        <IconComponent size={18} />
      </span>
      <span className="social-text">{name}</span>
    </motion.a>
  );
}
