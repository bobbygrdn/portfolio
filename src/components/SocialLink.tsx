import React from "react";
import { motion } from "framer-motion";
interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  username?: string;
}
export function SocialLink({
  href,
  label,
  icon,
  username
}: SocialLinkProps) {
  return <motion.a href={href} className="group relative flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800/50 px-4 py-3 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition-colors duration-300" target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }}>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300" />
        <div className="relative bg-zinc-900 p-2 rounded-full group-hover:bg-zinc-800 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100">
          {label}
        </span>
        {username && <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
            {username}
          </span>}
      </div>
      <div className="ml-auto opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <span className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition duration-300" />
    </motion.a>;
}