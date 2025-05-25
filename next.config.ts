import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // 1) next export를 사용하기 위한 설정 (Next.js 13.4 이상)
    output: 'export',

    // 2) 각 페이지를 /about.html 과 같이 .html 확장자로 생성하려면
    trailingSlash: true,
  
    // 3) next/image 사용 시 외부 레포지토리나 최적화 기능을 끄고
    //    원본 이미지를 그대로 복사하려면 unoptimized 모드로 설정
    images: {
      unoptimized: true,
    },
};

export default nextConfig;
