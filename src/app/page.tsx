"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import OsSelector, { OS, useDetectOS } from "@/components/OsSelector";
import StepsSection from "@/components/StepsSection";
import { windowsWslGuide, windowsNativeGuide, macosGuide } from "@/data/steps";

const guides = {
  "windows-wsl": windowsWslGuide,
  "windows-native": windowsNativeGuide,
  macos: macosGuide,
};

export default function Home() {
  const detectedOs = useDetectOS();
  const [selectedOs, setSelectedOs] = useState<OS>(detectedOs);

  // Update selected OS when detection completes
  useEffect(() => {
    setSelectedOs(detectedOs);
  }, [detectedOs]);

  const guide = guides[selectedOs];

  return (
    <main className="min-h-screen">
      <HeroSection />
      <OsSelector selectedOs={selectedOs} onSelect={setSelectedOs} />
      <StepsSection
        os={selectedOs}
        steps={guide.steps}
        preNote={guide.preNote}
      />
    </main>
  );
}
