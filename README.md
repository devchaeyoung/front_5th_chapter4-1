# Chapter 4-1. 인프라 관점의 성능 최적화

## 배포링크
- S3 버킷 웹사이트 엔드포인트
  - [http://hanghae-front-5th-chaeyoung.s3-website.ap-northeast-2.amazonaws.com](http://hanghae-front-5th-chaeyoung.s3-website.ap-northeast-2.amazonaws.com)
- CloudFront 배포 도메인
  - [https://dlxgp5it7mnux.cloudfront.net/](https://dlxgp5it7mnux.cloudfront.net/)
- Route53을 활용한 대체 도메인
  - [https://devforworld.com/](https://devforworld.com/)

## 기본 과제

GitHub과 AWS를 사용해 CDN이 적용된 프론트엔드 프로젝트 CI/CD 파이프라인을 구성합니다.

## 심화 과제

인프라 레벨 최적화, 특히 CDN을 사용한 최적화를 이해하고 성능 개선을 위한 사전 작업인 ‘모니터링’을 준비합니다.

## 주요 개념

- GitHub Actions과 CI/CD 도구
  - GitHub 저장소와 연동되어 코드 변경 시 자동으로 빌드·테스트·배포 파이프라인을 실행해 주는 워크플로우 플랫폼
  - 주요 역할 - PR 생성·머지 시 자동 테스트 실행, 브랜치별 릴리즈 빌드, S3/CloudFront 배포 스크립트 트리거 등
  - 핵심 이점 - 수동 배포 오류 감소, 배포 속도·일관성 확보, 코드 퀄리티 유지

- S3와 스토리지
  - AWS의 객체(Object) 스토리지 서비스로, 정적 파일(HTML/CSS/JS, 이미지 등)을 저장·관리
  - 특징: 무제한 용량, 높은 내구성(99.999999999%), 버전 관리 및 수명 주기 정책 지원
  - 활용 사례: Next.js output: export 결과물 호스팅, 사용자 업로드 파일 보관, 로그 백업
- CloudFront와 CDN
  - AWS의 콘텐츠 전송 네트워크 서비스(CDN)로, 전 세계 엣지 로케이션에 캐시된 콘텐츠를 사용자에게 빠르게 전달
  - 동작 흐름: 사용자 요청 → 가장 가까운 엣지서버 조회(Cache Hit/Miss) → 원본(S3/Origin) 요청 → 캐싱 후 응답
  - 장점: 지연 시간(latency) 단축, 트래픽 급증 시에도 부하 분산, SSL·WAF 통합 가능
- 캐시 무효화(Cache Invalidation)
  - 이미 캐시된 콘텐츠를 강제로 갱신(삭제)하여 최신 버전이 엣지 로케이션에 배포되도록 하는 과정
  - 사용 시점: 코드·애셋 변경 후 CloudFront가 이전 파일을 계속 서비스할 때
  - 방법: CloudFront Invalidation API 호출 또는 콘솔에서 경로 지정(/*) 후 무효화 요청
- Repository secret과 환경변수
  - CI/CD 파이프라인에서 사용되는 민감 정보(API 키, AWS 자격증명 등)를 안전하게 저장·주입하는 기능
  - 구성 방식: GitHub Settings → Secrets에 키·값 등록 → 워크플로우 파일에서 ${{ secrets.AWS_ACCESS_KEY_ID }} 등으로 참조
  - 보안 관리: 평문 커밋 방지, 최소 권한 원칙 적용, 필요 시 주기적 값 회전

## CDN과 성능최적화

- (CDN 도입 전과 도입 후의 성능 개선 보고서 작성)
- https://pagespeed.web.dev/

## 아키텍처

![아키텍처](./public/imgs/cicd-achitec.png)
