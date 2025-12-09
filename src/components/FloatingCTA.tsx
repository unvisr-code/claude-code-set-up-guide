"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Link
        href="/preview"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold rounded-full shadow-lg shadow-teal-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/40"
      >
        <span>기후 해커톤 결과물 미리보기</span>
        <ExternalLink className="w-4 h-4" />
      </Link>
    </div>
  );
}
