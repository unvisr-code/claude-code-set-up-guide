import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1f35] to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto px-4 pt-8 md:pt-12">
        {/* Banner Image */}
        <div className="mb-10 md:mb-14">
          <Image
            src="/370_50.jpg"
            alt="경기 기후 바이브코딩 해커톤 배너"
            width={1920}
            height={260}
            className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-black/30"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="text-center pb-12 md:pb-16">
          {/* Event tag */}
          <div className="inline-flex items-center gap-3 mb-8">
            <Image
              src="/gg-bi-logo.png"
              alt="경기도 로고"
              width={48}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-sm md:text-base text-teal-400 font-medium px-4 py-1.5 bg-teal-500/10 rounded-full border border-teal-500/20">
              경기 기후 바이브코딩 해커톤
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Claude Code 설치 가이드
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            이 페이지에서는 Windows와 macOS에서
            <br className="hidden sm:block" />
            Claude Code CLI를 설치하는 방법을 안내합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
