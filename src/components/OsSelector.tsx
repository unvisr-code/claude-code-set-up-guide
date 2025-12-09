"use client";

import { useEffect, useState } from "react";
import { Monitor, Apple, Terminal, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export type OS = "windows-wsl" | "windows-native" | "macos";
export type BaseOS = "windows" | "macos";

interface OsSelectorProps {
  selectedOs: OS;
  onSelect: (os: OS) => void;
}

export default function OsSelector({ selectedOs, onSelect }: OsSelectorProps) {
  const baseOs: BaseOS = selectedOs === "macos" ? "macos" : "windows";

  return (
    <section className="py-10 md:py-12 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
          운영체제를 선택하세요
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto leading-relaxed">
          사용 중인 컴퓨터에 맞는 탭을 선택하면,
          <br className="hidden sm:block" />
          해당 OS 전용 설치 방법이 아래에 표시됩니다.
        </p>

        {/* OS Selection */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-white/5 rounded-xl p-1.5 border border-white/10">
            <button
              onClick={() => onSelect("macos")}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200",
                baseOs === "macos"
                  ? "bg-white text-gray-900 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Apple className="w-5 h-5" />
              <span>macOS</span>
            </button>
            <button
              onClick={() => onSelect("windows-native")}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200",
                baseOs === "windows"
                  ? "bg-white text-gray-900 shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Monitor className="w-5 h-5" />
              <span>Windows</span>
            </button>
          </div>
        </div>

        {/* Windows Sub-options */}
        {baseOs === "windows" && (
          <div className="flex justify-center">
            <div className="inline-flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onSelect("windows-native")}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-200",
                  selectedOs === "windows-native"
                    ? "bg-teal-500/20 border-teal-500/50 text-teal-400"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                )}
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">네이티브 방식</div>
                  <div className="text-xs opacity-70">간단하고 빠른 설치 (권장)</div>
                </div>
              </button>
              <button
                onClick={() => onSelect("windows-wsl")}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-200",
                  selectedOs === "windows-wsl"
                    ? "bg-teal-500/20 border-teal-500/50 text-teal-400"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                )}
              >
                <Terminal className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">WSL 방식</div>
                  <div className="text-xs opacity-70">Linux 환경 사용</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function useDetectOS(): OS {
  const [os, setOs] = useState<OS>("windows-native");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setOs("macos");
    } else {
      setOs("windows-native");
    }
  }, []);

  return os;
}
