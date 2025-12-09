"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      <div className="bg-gray-900/80 border border-white/10 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-white/5">
          <span className="text-xs text-gray-500 font-mono">{language}</span>
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200",
              copied
                ? "bg-green-500/20 text-green-400"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            )}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>복사됨</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>복사</span>
              </>
            )}
          </button>
        </div>

        {/* Code content */}
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm md:text-base font-mono text-gray-200 whitespace-pre">
            <code>{code}</code>
          </pre>
        </div>
      </div>

      {/* Toast notification */}
      <div
        className={cn(
          "absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg shadow-lg transition-all duration-300",
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        복사되었습니다!
      </div>
    </div>
  );
}
