import { ArrowLeft, ExternalLink, Database, Lightbulb, MapPin, BarChart3, Sun, Thermometer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Climate data categories with descriptions
const climateData = [
  {
    emoji: "🌊",
    title: "기후위기",
    description: "극한기상 현상과 재해 위험을 분석합니다",
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
    hoverBg: "hover:bg-blue-500/20",
  },
  {
    emoji: "🌳",
    title: "도시생태현황",
    description: "생태계 보전 및 녹지 현황을 파악합니다",
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
    hoverBg: "hover:bg-green-500/20",
  },
  {
    emoji: "🔋",
    title: "탄소공간",
    description: "탄소 배출과 흡수 현황을 분석합니다",
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
    hoverBg: "hover:bg-yellow-500/20",
  },
  {
    emoji: "☀️",
    title: "태양광",
    description: "재생에너지 잠재량을 평가합니다",
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
    hoverBg: "hover:bg-orange-500/20",
  },
];

// Project ideas
const projectIdeas = [
  {
    icon: MapPin,
    title: "침수 위험 알림 서비스",
    description: "실시간 강수량과 침수흔적지도를 연동하여 위험 지역 주민에게 대피 알림을 전송하는 서비스",
    tags: ["침수흔적지도", "극한호우 위험도"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: BarChart3,
    title: "탄소중립 대시보드",
    description: "건축물 탄소배출량과 수목 탄소저장량을 비교 분석하여 지역별 탄소중립 달성도를 시각화",
    tags: ["건축물 탄소배출량", "수목 탄소저장지도"],
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Sun,
    title: "태양광 최적지 추천",
    description: "기술적 잠재량 데이터와 규제지역 정보를 필터링하여 태양광 설치 최적지를 추천",
    tags: ["기술적 잠재량", "규제지역"],
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Thermometer,
    title: "폭염 대피소 안내",
    description: "폭염 체감온도와 대피시설 위치를 연동하여 취약계층에게 가까운 대피소를 안내",
    tags: ["폭염 체감온도", "대피시설 위치"],
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
];

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0f1f35] to-black text-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>메인으로 돌아가기</span>
        </Link>

        {/* Hero Section */}
        <section className="text-center mb-20">
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-teal-200 to-emerald-200 bg-clip-text text-transparent">
              기후 데이터 활용 예시
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            경기도 기후변화대응 공간정보시스템에서 제공하는
            <br className="hidden sm:block" />
            다양한 기후 데이터를 해커톤에서 활용할 수 있습니다.
          </p>
        </section>

        {/* Data Introduction Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-teal-500/20 rounded-xl">
                <Database className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  활용 가능한 데이터
                </h2>
                <p className="text-gray-400">
                  경기도 기후변화대응 공간정보시스템
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
              경기도에서 제공하는 기후, 생태, 탄소, 에너지 관련 공간정보 데이터를 활용하여
              기후변화 대응 서비스를 개발할 수 있습니다. 아래 카테고리별 데이터를 확인하고
              해커톤 프로젝트에 적용해보세요.
            </p>

            <a
              href="https://climate.gg.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 rounded-full text-teal-400 font-medium transition-colors"
            >
              <span>데이터 포털 바로가기</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Data Categories Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            데이터 카테고리
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            각 카테고리를 클릭하면 해당 데이터 지도로 이동합니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {climateData.map((category) => (
              <a
                key={category.title}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 md:p-8 rounded-2xl ${category.bgColor} border ${category.borderColor} ${category.hoverBg} transition-all duration-300 hover:scale-[1.02] hover:border-white/30`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{category.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors shrink-0" />
                </div>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 text-sm flex items-center gap-2"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} shrink-0`}
                      />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        {/* Demo Project Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            데이터 활용 프로젝트 예시
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            실제 데이터를 활용해 제작된 프로젝트 데모입니다
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            {/* Project Header */}
            <div className="p-6 md:p-8 border-b border-white/10">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌲</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      녹지지역 & 산사태취약지역 분석
                    </h3>
                    <p className="text-gray-400 mt-1">
                      기후 데이터를 활용한 위험지역 분석 프로젝트
                    </p>
                  </div>
                </div>
              </div>

              {/* Used Data Tags */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-3">사용 데이터</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
                    현존식생지도
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
                    산사태 위험등급
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm">
                    비오톱 유형도
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-3">주요 기능</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    녹지지역과 산사태 취약지역 중첩 분석
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    위험도 등급별 시각화
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    지역별 상세 조회 기능
                  </li>
                </ul>
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
        </section>

        {/* Project Ideas Section */}
        <section className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-7 h-7 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              이런 프로젝트를 만들어보세요!
            </h2>
          </div>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            해커톤에서 도전해볼 수 있는 프로젝트 아이디어입니다
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectIdeas.map((idea) => (
              <div
                key={idea.title}
                className={`p-6 rounded-2xl ${idea.bgColor} border border-white/10 hover:border-white/20 transition-colors`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2.5 rounded-xl bg-white/10`}>
                    <idea.icon className={`w-5 h-5 ${idea.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {idea.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {idea.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {idea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 rounded-full text-gray-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center pb-16">
          <p className="text-gray-400 mb-6 text-lg">
            해커톤에서 이런 프로젝트를 직접 만들어보세요!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-500/20"
          >
            <span>설치 가이드로 돌아가기</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </section>
      </div>
    </main>
  );
}
