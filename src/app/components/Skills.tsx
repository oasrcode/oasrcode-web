'use client'
import { motion } from 'framer-motion';
const icons = ["🍎", "🍊", "🍌", "🍉", "🍇", "🍓", "🍒", "🍍", "🥭", "🍑"];
export default function Skills() {
  return (
    <div className="relative overflow-hidden whitespace-nowrap max-w-4xl mx-auto py-4">
      <motion.div
        className="inline-block whitespace-nowrap"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {icons.concat(icons).map((icon, index) => (
          <span key={index} className="text-4xl mx-16 inline-block">
            {icon}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="inline-block whitespace-nowrap"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {icons.concat(icons).map((icon, index) => (
          <span key={index} className="text-4xl mx-16 inline-block">
            {icon}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
