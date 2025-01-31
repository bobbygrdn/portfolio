import React from "react";
import { Mail, X } from "lucide-react";
interface FloatingCTAProps {
  isVisible: boolean;
  onClose: () => void;
}
export function FloatingCTA({
  isVisible,
  onClose
}: FloatingCTAProps) {
  if (!isVisible) return null;
  return <div className="fixed bottom-6 right-6 z-40 animate-in slide-in-from-bottom-6 duration-500">
      <div className="relative bg-zinc-900 border border-blue-500/20 rounded-2xl p-4 shadow-lg shadow-blue-500/5">
        <button onClick={onClose} className="absolute -top-2 -right-2 bg-zinc-800 rounded-full p-1 hover:bg-zinc-700 transition-colors">
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-4 pr-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-75 group-hover:opacity-100 animate-pulse" />
            <a href="#contact" className="relative bg-zinc-900 text-zinc-100 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Let's talk</span>
            </a>
          </div>
        </div>
      </div>
    </div>;
}