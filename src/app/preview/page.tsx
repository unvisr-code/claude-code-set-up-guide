import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Climate data categories
const climateData = [
  {
    emoji: "🌊",
    title: "기후위기",
    items: [
      "극한호우 위험도 평가",
      "침수흔적지도",
      "산사태 위험등급",
      "폭염 체감온도",
      "열환경지도",
      "대피시설 위치",
    ],
    link: "https://climate.gg.go.kr/gcs/cmm/selectMainMap.do?lang=kor#climate_heat",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    emoji: "🌳",
    title: "도시생태현황",
    items: [
      "비오톱 유형도",
      "현존식생지도",
      "광역/지역 생태축",
      "습지 위치 (둠벙/염습지)",
      "투수/불투수 유형",
      "그린인프라 현황",
    ],
    link: "https://climate.gg.go.kr/ces/mapService/main",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    emoji: "🔋",
    title: "탄소공간",
    items: [
      "건축물 탄소배출량",
      "수목 탄소저장지도",
      "토양 탄소저장지도",
      "탄소흡수지도",
      "산림 층위구조",
      "LAI/GPP 데이터",
    ],
    link: "https://climate.gg.go.kr/gcs/cmm/selectMainMap.do?lang=kor#carbon_abs",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    emoji: "☀️",
    title: "태양광",
    items: [
      "이론적 잠재량",
      "기술적 잠재량",
      "시장 잠재량",
      "규제지역 (19개 유형)",
      "태양광 발전 현황",
      "설치 예정지",
    ],
    link: "https://climate.gg.go.kr/gcs/cmm/selectMainMap.do?lang=kor#regen_poten",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
];

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0f1f35] to-black text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>메인으로 돌아가기</span>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            기후 데이터 활용 예시
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            경기도 기후변화대응 공간정보시스템에서 제공하는 다양한 기후 데이터를
            해커톤에서 활용할 수 있습니다.
          </p>
        </div>

        {/* Data Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {climateData.map((category) => (
            <a
              key={category.title}
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-6 rounded-2xl ${category.bgColor} border ${category.borderColor} hover:border-white/30 transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.emoji}</span>
                <h2 className="text-xl font-bold text-white">{category.title}</h2>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto transition-colors" />
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-400 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r opacity-70"
                          style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        {/* Demo Project Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              데이터 활용 프로젝트 예시
            </h2>
            <p className="text-gray-400">
              위 데이터를 활용해 제작된 프로젝트 데모입니다
            </p>
          </div>

          {/* Project Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌲</span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    녹지지역 & 산사태취약지역 분석
                  </h3>
                  <p className="text-sm text-gray-400">
                    기후 데이터를 활용한 위험지역 분석 프로젝트
                  </p>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-contain"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/gg-hackton-demo.mp4" type="video/mp4" />
                브라우저가 비디오를 지원하지 않습니다.
              </video>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center pb-12">
          <p className="text-gray-400 mb-4">
            해커톤에서 이런 프로젝트를 직접 만들어보세요!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <span>설치 가이드로 돌아가기</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </main>
  );
}
