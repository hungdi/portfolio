'use client'

import React from 'react'
import Link from 'next/link'
import { Container, Typography, Button, Box, Card, CardContent, Divider, Chip, Alert, Snackbar } from '@mui/material'
import { GitHub, LinkedIn, Email, Article } from '@mui/icons-material'

export default function Home() {
  const [openEmailAlert, setOpenEmailAlert] = React.useState(false);

  const handleEmailClick = () => {
    setOpenEmailAlert(true);
  };

  const handleCloseEmailAlert = () => {
    setOpenEmailAlert(false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" component="h1" gutterBottom>
                안녕하세요,
                <br />
                홍지혜입니다
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                데이터 중심의 문제 해결을 추구하는 개발자입니다
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/projects"
                >
                  프로젝트 보기
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={handleEmailClick}
                >
                  연락하기
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<Email />}
                onClick={handleEmailClick}
              >
                연락처
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<GitHub />}
                component="a"
                href="https://github.com/hongd"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<LinkedIn />}
                component="a"
                href="https://www.linkedin.com/in/hongd"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 기술 블로그 섹션 */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h4" gutterBottom>
            기술 블로그
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<Article />}
              component="a"
              href="https://velog.io/@hongd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Velog
            </Button>
            <Button
              variant="outlined"
              startIcon={<Article />}
              component="a"
              href="https://dgnoh.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tistory
            </Button>
          </Box>
        </Box>
      </Container>

      {/* 이메일 알림 */}
      <Snackbar
        open={openEmailAlert}
        autoHideDuration={6000}
        onClose={handleCloseEmailAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseEmailAlert} severity="info" sx={{ width: '100%' }}>
          이메일 주소: unciahong@gmail.com
        </Alert>
      </Snackbar>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              개발 철학
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  • 개선은 나의 힘! 💪
                </Typography>
                <Typography variant="body2" sx={{ pl: 2, color: 'text.secondary' }}>
                  간단한 불편사항도 창의적으로, 효율적으로 개발하는 것이 목표입니다.
                </Typography>
              </Box>
              <Typography variant="body1">
                • 세상을 이롭게 하는 개발자가 되는 것이 목표입니다.
              </Typography>
              <Typography variant="body1">
                • 공동 개발, 협업을 위해 부지런히 노력하는 개발자입니다.
              </Typography>
              <Typography variant="body1">
                • 새로운 기술 스택 팔로업을 소홀히 하지 않는 개발자입니다. 🚀
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              학력
            </Typography>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">경희대학교</Typography>
                <Typography color="text.secondary">컴퓨터공학과 석사 (2012-2014)</Typography>
                <Typography color="text.secondary">컴퓨터공학과 학사 (2008-2012)</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            경력
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">NH농협은행</Typography>
                  <Typography color="text.secondary">과장보</Typography>
                  <Typography color="text.secondary">2017년 12월 - 현재 · 7년 5개월</Typography>
                  <Typography color="text.secondary">경기도 의왕시</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    • 계정계 대외연동 및 기관대행업무 개발 전반
                    <br />
                    • 대행 업무 전반 개발 및 유지보수 (전자수입인지/골드바/기념주화 등 판매대행 및 대학등록금 수납대행 업무 전반)
                    <br />
                    • 행정안전부 전자증명서 연계서버 구축 및 계정계 연동 자체개발
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">LG Electronics</Typography>
                  <Typography color="text.secondary">연구원</Typography>
                  <Typography color="text.secondary">2015년 1월 - 2017년 12월 · 3년</Typography>
                  <Typography color="text.secondary">가산R&D캠퍼스</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    • MC연구소, 통합 Message application 개발 프로젝트
                    <br />
                    • L&A연구소, RGBDepth sensor를 이용한 로봇청소기 SLAM 기술 개발 연구
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            기술 스택
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', gap: 2 }}>
            {[
              { category: '프로그래밍 언어', skills: ['C/C++', 'Java', 'Python'] },
              { category: '백엔드', skills: ['Spring', 'Oracle'] },
              { category: 'AI/ML', skills: ['Machine Learning', 'Deep Learning'] },
              { category: '데이터 분석', skills: ['Graph Data Mining', 'Data Visualization'] },
            ].map((group) => (
              <Box key={group.category} sx={{ flex: { xs: '100%', sm: '1 1 calc(50% - 8px)', md: '1 1 calc(25% - 8px)' } }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {group.category}
                    </Typography>
                    {group.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{ m: 0.5 }}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            논문
          </Typography>

          {/* 국제저널 */}
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            국제저널
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Disk-based shortest path discovery using distance index over large dynamic graphs
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  Information Sciences (Elsevier)
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • Volume: 382–383, Pages 1-440
                  <br />
                  • Publication Date: March 2017
                  <br />
                  • Impact Factor: 8.1 (2022)
                  <br />
                  • Journal Ranking: Q1 in Computer Science
                  <br />
                  • Category: SCI (Science Citation Index)
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 대규모 동적 그래프에서 거리 인덱스를 활용한 디스크 기반 최단 경로 탐색 연구
                  <br />
                  • 실시간 데이터 처리 및 효율적인 경로 탐색 알고리즘 개발
                  <br />
                  • 대용량 그래프 데이터 처리 최적화 기법 제안
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Distance-Constraint k-Nearest Neighbor Searching in Mobile Sensor Networks
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  Sensors (MDPI)
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • Publication Date: January 2015
                  <br />
                  • Impact Factor: 3.9 (2022)
                  <br />
                  • Journal Ranking: Q2 in Computer Science
                  <br />
                  • Category: SCI (Science Citation Index)
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 모바일 센서 네트워크에서 거리 제약 조건을 고려한 k-최근접 이웃 검색 알고리즘 연구
                  <br />
                  • 동적 환경에서의 효율적인 데이터 처리 및 검색 기법 제안
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* 국제학회 */}
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            국제학회
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Distributed K-Distance Indexing Approach for Efficient Shortest Path Discovery on Large Graphs
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  DASFAA 2014 (Springer)
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • Publication Date: July 2014
                  <br />
                  • Conference: DASFAA (Database Systems for Advanced Applications)
                  <br />
                  • Category: International Conference
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 대규모 그래프에서 분산 K-거리 인덱싱 기법을 활용한 효율적인 최단 경로 탐색 연구
                  <br />
                  • 분산 환경에서의 그래프 데이터 처리 및 최적화 기법 제안
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Semi-supervised Feature Selection Using Co-occurrent Frequent Subgraphs
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  International Conference on Ubiquitous Information Management and Communication (ACM ICUIMC 2013)
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • Publication Date: 2013
                  <br />
                  • Conference: ICUIMC (International Conference on Ubiquitous Information Management and Communication)
                  <br />
                  • Category: International Conference
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 반지도 학습 기반의 빈발 부분 그래프를 활용한 특징 선택 기법 연구
                  <br />
                  • 그래프 데이터에서의 효율적인 특징 추출 및 선택 알고리즘 제안
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* 국내학회 */}
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            국내학회
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  궤적 그래프 집합 유사도 측정 기법
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  정보과학회논문지: 데이터베이스
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • Volume: 40, Issue: 3
                  <br />
                  • Pages: 153-158
                  <br />
                  • Publication Date: June 2013
                  <br />
                  • Category: Domestic Journal
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 궤적 그래프 집합 간의 유사도를 효율적으로 측정하는 기법 연구
                  <br />
                  • 대규모 궤적 데이터 처리 및 분석 기법 제안
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  개인화 서비스를 위한 그래프 기반의 궤적 데이터 모델링 기법
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  정보과학회논문지 : 컴퓨팅의 실제 및 레터
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • Volume: 19, Issue: 1
                  <br />
                  • Pages: 51-55
                  <br />
                  • Publication Date: January 2013
                  <br />
                  • Category: Domestic Journal
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 개인화 서비스에 최적화된 그래프 기반 궤적 데이터 모델링 기법 연구
                  <br />
                  • 효율적인 궤적 데이터 처리 및 분석 기법 제안
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  개인화된 소셜 서비스를 위한 시공간 그래프 모델링 기법
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  한국정보과학회 2012한국컴퓨터종합학술대회 논문집
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • Volume: 39, Issue: 1(C)
                  <br />
                  • Pages: 22-24
                  <br />
                  • Publication Date: June 2012
                  <br />
                  • Category: Domestic Conference
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 개인화된 소셜 서비스에 최적화된 시공간 그래프 모델링 기법 연구
                  <br />
                  • 시공간 데이터의 효율적인 처리 및 분석 기법 제안
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* 특허 섹션 */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            특허
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  그래프 분류를 위한 빈발 부분그래프의 생성 방법
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • 특허번호: KR 10-1584883-0000
                  <br />
                  • 발행일: 2016년 1월 4일
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 그래프 데이터의 효율적인 분류를 위한 빈발 부분그래프 생성 기법
                  <br />
                  • 대규모 그래프 데이터에서의 패턴 마이닝 및 분류 최적화
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  RDF 데이터의 데이터테이블 생성 방법
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • 특허번호: KR 10-1502688-0000
                  <br />
                  • 발행일: 2015년 3월 16일
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • RDF 데이터의 효율적인 저장 및 처리를 위한 데이터테이블 생성 기법
                  <br />
                  • 시맨틱 웹 데이터의 최적화된 관리 및 검색 방법
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  대용량 그래프 데이터베이스에서 최단 경로를 탐색하는 방법
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • 특허번호: KR 10-1480670-0000
                  <br />
                  • 발행일: 2014년 12월 29일
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 대용량 그래프 데이터베이스에서 효율적인 최단 경로 탐색 기법
                  <br />
                  • 분산 환경에서의 최적화된 경로 탐색 알고리즘
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  건강정보의 군집화 방법
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • 특허번호: KR 10-1462748-0000
                  <br />
                  • 발행일: 2014년 11월 7일
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  • 건강정보 데이터의 효율적인 군집화 및 분석 기법
                  <br />
                  • 의료 데이터의 패턴 인식 및 분류 최적화
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 