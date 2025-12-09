"use client";

import { Play, Monitor, Apple, Terminal, Download } from "lucide-react";
import StepCard, { Step } from "./StepCard";
import { OS } from "./OsSelector";

interface StepsSectionProps {
  os: OS;
  steps: Step[];
  preNote?: { title: string; notes: string[] };
}

// Video sources for each OS (null = placeholder, undefined = hide section)
const videoSources: Record<OS, string | null | undefined> = {
  macos: "/claude-code-set-up-mac.mov",
  "windows-wsl": undefined, // No video section for WSL
  "windows-native": null, // Placeholder - video coming soon
};

// Display names for each OS
const osDisplayNames: Record<OS, string> = {
  macos: "macOS",
  "windows-wsl": "Windows (WSL)",
  "windows-native": "Windows",
};

export default function StepsSection({ os, steps, preNote }: StepsSectionProps) {
  const videoSrc = videoSources[os];
  const displayName = osDisplayNames[os];
  const showVideoSection = videoSrc !== undefined; // undefined means hide section

  const getIcon = () => {
    if (os === "macos") return <Apple className="w-5 h-5 text-gray-400" />;
    if (os === "windows-wsl") return <Terminal className="w-5 h-5 text-gray-400" />;
    return <Download className="w-5 h-5 text-gray-400" />;
  };

  return (
    <section className="py-10 md:py-14 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Video Tutorial - only show if not undefined */}
        {showVideoSection && (
          <div className="mb-10">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
              {getIcon()}
              {displayName} 설치 영상
            </h3>

            {videoSrc ? (
              // Actual video player - preserves original aspect ratio
              <div className="bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <video
                  className="w-full h-auto block"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={videoSrc} type="video/quicktime" />
                  <source src={videoSrc} type="video/mp4" />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              </div>
            ) : (
              // Placeholder for videos coming soon - fixed 16:9 aspect ratio
              <div className="relative aspect-video bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Play className="w-8 h-8 text-gray-400 ml-1" />
                  </div>
                  <p className="text-sm md:text-base font-medium">
                    {displayName} 설치 튜토리얼 영상
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    영상이 곧 업로드될 예정입니다
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pre-installation note */}
        {preNote && (
          <div className="mb-10 p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">{preNote.title}</h3>
            <ul className="space-y-3">
              {preNote.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                  <span className="text-teal-400 mt-0.5">•</span>
                  <span dangerouslySetInnerHTML={{ __html: note }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
