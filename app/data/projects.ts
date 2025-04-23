export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  isConfidential?: boolean;
  details: {
    overview: string;
    goals: string[];
    technologies: string[];
    achievements: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'nh-1',
    title: "전자증명서 발급/유통 시스템",
    category: '농협은행',
    period: "2019 - 2020 (개발) / 2020 - 2025 (유지보수)",
    description: "행정안전부의 전자증명서 발급/유통 시스템 구축 프로젝트의 일환으로, 은행 연계 전산 구축",
    details: {
      overview: "종이증명서 제출에 따른 국민 불편 해소 및 사회적 비용 최소화를 위해 도입된, 행정안전부의 전자증명서 발급/유통 시스템 구축 프로젝트의 일환으로, 은행 연계 전산 구축을 진행했습니다.",
      goals: [
        "행정안전부 전자증명서 발급/유통 시스템 API 연계 서버 구축",
        "이미지 관리 시스템에 수취 전자증명서 이미지 Socket 전송",
        "PPR 시스템 연계",
        "계정계 코어뱅킹 Frontend & Backend 서비스 설계 및 개발"
      ],
      technologies: ["Java 8", "JEUS 7.0", "Webtob 4.1", "Oracle DB", "JavaScript", "ezbuilder framework"],
      achievements: [
        "연간 발급건수 지속적 증가 ('21년 919건 → '24년 15,454건)",
        "안정적인 시스템 운영 (장애 없는 유지보수)"
      ]
    }
  },
  {
    id: 'nh-2',
    title: "대학등록금 시스템",
    category: '농협은행',
    period: "2018 - 2025",
    description: "NH농협카드 차세대시스템 구축에 따른 대학등록금 업무 연계 개발",
    details: {
      overview: "NH농협카드 차세대시스템 구축에 따른 대학등록금 업무 연계 개발을 진행했습니다.",
      goals: [
        "단독 서버로 구축되어있던 카드시스템 은행 뱅킹 서버로 이전구축",
        "은행-카드, 상호-카드 별도의 접근 방식에서, 상호-은행(gse)-카드 방식으로 전환 개발",
        "기존 파일 대사 방식에서, 실시간 전문 대사 방식으로 카드-계정계 대사 전면 개편",
        "카드 수납 관련 거래 개발 및 테스트 진행"
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
      achievements: [
        "신규 개편 기능 설계 및 유지보수 완료",
        "실시간 전문 대사 방식 도입으로 처리 시간 단축"
      ]
    }
  },
  {
    id: 'nh-3',
    title: "전자금융 차세대 시스템",
    category: '농협은행',
    period: "2024 - 2025",
    description: "디지털금융 플랫폼전환 프로젝트에 따른 대응 개발",
    isConfidential: true,
    details: {
      overview: "디지털 금융 채널 아키텍처 슬림화의 일환으로 전자금융 AP → 계정계 이관 프로젝트를 진행했습니다.",
      goals: [
        "WEB → WAS → 전자금융 AP → 계정계 의 디지털금융 3 Tier 업무처리구조의 단순화",
        "은행/상호(농축협) 공동사용하던 전자금융AP를 각각의 은행/상호 계정계로 법인 분리",
        "전자금융 인터페이스 외부 TP 연동 → 내부 TP 연동으로 변경"
      ],
      technologies: ["JavaScript", "Proframe", "TP-Monitor"],
      achievements: [
        "디지털 금융 시스템을 신기술 기반의 클라우드 시스템으로 전환",
        "업무처리구조 단순화로 성능 개선"
      ]
    }
  },
  {
    id: 'nh-4',
    title: "판매대행 시스템",
    category: '농협은행',
    period: "2019 - 2024",
    description: "전자수입인지, 골드바/실버바, 기념주화 등 판매대행 업무 시스템 구축 및 개선",
    details: {
      overview: "전자수입인지 판매대행 업무 신 서비스 구축, 골드바/실버바 판매 시스템 개발, 기념주화 관련 시스템 개선 등 다양한 판매대행 업무 시스템을 구축하고 개선했습니다.",
      goals: [
        "전자수입인지 대량발급 센터배치서비스 구축",
        "골드바 계좌 연동출금 기능 개발",
        "실버바 신규상품 판매 시스템 구축",
        "기념주화 선조회 공통 모듈 개발"
      ],
      technologies: ["Java", "Oracle", "TP-Monitor", "JavaScript"],
      achievements: [
        "전자수입인지 대량발급 효율화로 연간 인건비 321백만원 절감",
        "종이서식 230만장 감소로 탄소배출량 6.624톤 감축",
        "영업점 업무 생산성 향상 및 편의성 제고"
      ]
    }
  },
  {
    id: 'nh-5',
    title: "대행 업무 공통 전자결재 시스템",
    category: '농협은행',
    period: "2020 - 2025",
    description: "대행 업무 공통 전자결재 서비스 구축 및 각 업무 연계 개발",
    details: {
      overview: "중요용지 및 재고 관리를 위한 전자 결재 및 이력관리 공통 모듈을 개발하여, 각종 대행 업무(지역개발채권, 골드바, 기념주화 등)에서 활용 가능한 전자결재 시스템을 구축했습니다.",
      goals: [
        "전자 결재 및 이력관리를 위한 공통 모듈 개발",
        "결재, 결재정정, 메모 기능 등 설계 및 구축",
        "유연한 결재라인 적용 가능한 설계"
      ],
      technologies: ["Java", "Oracle", "TP-Monitor", "JavaScript"],
      achievements: [
        "골드바, 기념주화, 지역개발채권 업무에 공통 전자결재 모듈 적용",
        "재고/중요용지 관리 및 검수 편의성 증진"
      ]
    }
  },
  {
    id: 'lg-rgbd-robot',
    title: 'RGBD 센서 기반 로봇청소기 장애물 회피 알고리즘 개발',
    category: 'LG전자',
    period: '2018',
    description: 'Depth 센서 벡터값 매칭과 그래프 탐색 알고리즘을 활용한 로봇청소기 성능 향상 연구',
    details: {
      overview: 'RGBD 센서를 활용하여 로봇청소기의 장애물 감지 및 회피 능력을 향상시키는 알고리즘을 개발했습니다. Depth 센서의 벡터값을 효율적으로 매칭하고 그래프 탐색 알고리즘을 적용하여 최적의 경로를 도출하는 시스템을 구현했습니다.',
      goals: [
        '실시간 장애물 감지 및 3D 매핑 구현',
        'Depth 센서 데이터의 효율적인 처리 및 분석',
        '최적 경로 탐색을 위한 그래프 알고리즘 개발',
      ],
      technologies: [
        'RGBD 센서',
        '벡터 매칭 알고리즘',
        '그래프 탐색 알고리즘',
        '실시간 데이터 처리',
      ],
      achievements: [
        '특허 등록 (10-2018-0039407)',
        '청소 경로 최적화를 통한 청소 시간 20% 단축',
        '장애물 인식 정확도 95% 달성',
      ]
    },
  },
  {
    id: 'masters-graph-mining',
    title: '대규모 그래프 데이터 분석 프레임워크 개발',
    category: '석사과정',
    period: '2016-2018',
    description: 'RDB 기반 대용량 그래프 데이터의 효율적인 최단경로 탐색 프레임워크 연구',
    details: {
      overview: '대용량 그래프 데이터를 효율적으로 처리하기 위한 RDB 기반 인덱싱 시스템과 최단경로 탐색 프레임워크를 개발했습니다. 또한 개인의 행위를 그래프로 모델링하는 기법을 연구했습니다.',
      goals: [
        'RDB 기반 그래프 데이터 인덱싱 시스템 구축',
        '효율적인 최단경로 탐색 알고리즘 개발',
        '행위 패턴의 그래프 모델링 기법 연구',
      ],
      technologies: [
        '그래프 패턴 마이닝',
        'RDB 시스템',
        '최단경로 알고리즘',
        '행위 모델링',
      ],
      achievements: [
        '졸업논문 발표',
        '대용량 그래프 처리 성능 40% 향상',
        '행위 패턴 분석 프레임워크 구축',
      ]
    },
  },
  {
    id: 'personal-movie-note',
    title: '영화노트 백엔드 서버 개발',
    category: '개인프로젝트',
    period: '2023',
    description: '사용자의 영화 감상 기록을 관리하는 백엔드 서버 시스템 구축',
    details: {
      overview: '영화 감상 기록을 효율적으로 관리할 수 있는 백엔드 서버를 개발했습니다.',
      goals: [
        'RESTful API 설계 및 구현',
        '사용자 인증 시스템 구축',
        '영화 정보 관리 시스템 개발',
      ],
      technologies: [
        'Node.js',
        'Express',
        'MongoDB',
        'JWT 인증',
      ],
      achievements: [
        'API 서버 구축 완료',
        '데이터베이스 설계 및 구현',
      ]
    },
  },
  {
    id: 'personal-dutch-pay',
    title: '지출 기반 더치페이 자동화 앱 MVP',
    category: '개인프로젝트',
    period: '2022',
    description: '개인 지출내역을 기반으로 더치페이를 자동으로 정산하는 뱅킹 앱',
    details: {
      overview: '사용자의 카드 지출내역을 분석하여 자동으로 더치페이를 계산하고 정산하는 시스템을 개발했습니다.',
      goals: [
        '지출내역 자동 분류 시스템 개발',
        '더치페이 자동 계산 알고리즘 구현',
        '간편한 정산 프로세스 구축',
      ],
      technologies: [
        'React Native',
        'Firebase',
        '금융 API 연동',
      ],
      achievements: [
        'MVP 개발 완료',
        '자동 분류 정확도 85% 달성',
      ]
    },
  },
  {
    id: 'personal-location-marketing',
    title: '위치 기반 예측 마케팅 시스템',
    category: '개인프로젝트',
    period: '2021',
    description: '개인 위치 정보와 카드 지출내역을 활용한 예측 마케팅 MVP 개발',
    details: {
      overview: '사용자의 위치 정보와 카드 사용 패턴을 분석하여 맞춤형 마케팅 추천을 제공하는 시스템을 개발했습니다.',
      goals: [
        '위치 기반 데이터 수집 시스템 구축',
        '사용자 행동 패턴 분석 알고리즘 개발',
        '맞춤형 마케팅 추천 엔진 구현',
      ],
      technologies: [
        'Python',
        'Django',
        'PostgreSQL',
        '머신러닝',
      ],
      achievements: [
        '프로토타입 시스템 구축',
        '추천 정확도 75% 달성',
      ]
    },
  }
]; 