'use client'

import React, { useState } from 'react'
import { Container, Typography, Box, Card, CardContent, CardMedia, Chip, IconButton, Dialog, DialogContent, DialogTitle, Divider } from '@mui/material'
import { CalendarToday, Group, Close, Lock } from '@mui/icons-material'
import { projects, Project } from '../data/projects'
import PasswordDialog from '../components/PasswordDialog'

const categories = ['농협은행', 'LG전자', '석사과정', '개인프로젝트'] as const

const getProjectImage = (projectId: string) => {
  switch (projectId) {
    case 'nh-1':
      return '/images/projects/cards/nh-1-certificate.jpg'
    case 'nh-2':
      return '/images/projects/cards/nh-2-tuition.jpg'
    case 'nh-3':
      return '/images/projects/cards/nh-3-digital.jpg'
    case 'nh-4':
      return '/images/projects/cards/nh-4-gold.jpg'
    case 'nh-5':
      return '/images/projects/cards/nh-5-approval.jpg'
    case 'lg-rgbd-robot':
      return '/images/projects/cards/lg-robot.jpg'
    case 'masters-graph-mining':
      return '/images/projects/cards/graph-research.jpg'
    case 'personal-movie-note':
      return '/images/projects/cards/movie-note.jpg'
    case 'personal-dutch-pay':
      return '/images/projects/cards/dutch-pay.jpg'
    case 'personal-location-marketing':
      return '/images/projects/cards/location-marketing.jpg'
    default:
      return '/images/projects/cards/default.jpg'
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId)
  }

  const handleClose = () => {
    setSelectedProject(null)
    setIsAuthenticated(false)
  }

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true)
    setShowPasswordDialog(false)
  }

  const getSelectedProject = () => {
    return projects.find(p => p.id === selectedProject)
  }

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#000',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src="/images/projects/code-dark.jpg"
          alt="Projects Banner"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
            width: '100%',
            px: 3,
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2.5rem', md: '3.75rem' }
            }}
          >
            프로젝트
          </Typography>
          <Typography 
            variant="h5"
            sx={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            다양한 프로젝트 경험을 통해 성장해왔습니다
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {categories.map((category) => (
          <Box key={category} sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
              {category}
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
              {projects
                .filter(project => project.category === category)
                .map((project) => (
                  <Card 
                    key={project.id}
                    onClick={() => handleProjectClick(project.id)}
                    sx={{ 
                      cursor: 'pointer',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 3
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={getProjectImage(project.id)}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {project.isConfidential ? '비밀번호가 필요한 프로젝트입니다.' : project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CalendarToday sx={{ fontSize: 'small', mr: 1 }} />
                        <Typography variant="body2">
                          {project.period}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                        {project.details.technologies.map((tech, index) => (
                          <Chip key={index} label={tech} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
              ))}
            </Box>
            {category !== categories[categories.length - 1] && (
              <Divider sx={{ mt: 6 }} />
            )}
          </Box>
        ))}

        <Dialog
          open={selectedProject !== null}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ pr: 8 }}>
                {getSelectedProject()?.title}
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    개요
                  </Typography>
                  <Typography>
                    {getSelectedProject()?.details.overview}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3, position: 'relative' }}>
                  <Typography variant="h6" gutterBottom>
                    목표
                  </Typography>
                  <ul>
                    {getSelectedProject()?.details.goals.map((goal, index) => (
                      <li key={index}>
                        <Typography sx={{ 
                          filter: getSelectedProject()?.isConfidential && !isAuthenticated ? 'blur(8px)' : 'none',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          msUserSelect: 'none',
                          MozUserSelect: 'none',
                          pointerEvents: getSelectedProject()?.isConfidential && !isAuthenticated ? 'none' : 'auto',
                        }}>
                          {getSelectedProject()?.isConfidential && !isAuthenticated ? '비밀번호가 필요한 프로젝트입니다.' : goal}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  {getSelectedProject()?.isConfidential && !isAuthenticated && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <IconButton
                        onClick={() => setShowPasswordDialog(true)}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                          },
                          width: 48,
                          height: 48,
                        }}
                      >
                        <Lock sx={{ fontSize: 32 }} />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        비밀번호 입력
                      </Typography>
                    </Box>
                  )}
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    사용 기술
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {getSelectedProject()?.details.technologies.map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    성과
                  </Typography>
                  <ul>
                    {getSelectedProject()?.details.achievements.map((achievement, index) => (
                      <li key={index}>
                        <Typography>
                          {achievement}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>

        <PasswordDialog
          open={showPasswordDialog}
          onClose={() => setShowPasswordDialog(false)}
          onSuccess={handlePasswordSuccess}
        />
      </Container>
    </>
  )
} 