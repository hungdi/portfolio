'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Container, Typography, Box, Card, CardContent, Chip, Button, IconButton } from '@mui/material'
import { projects } from '../../data/projects'
import PasswordDialog from '../../components/PasswordDialog'
import LockIcon from '@mui/icons-material/Lock'
import { CalendarToday, Group } from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout'

export default function ProjectDetail() {
  const { id } = useParams()
  const router = useRouter()
  const project = projects.find(p => p.id === id)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
      setIsAuthenticated(false)
      router.refresh()
    } catch (error) {
      console.error('로그아웃 실패:', error)
    }
  }

  if (!project) {
    return (
      <Container>
        <Typography variant="h4">프로젝트를 찾을 수 없습니다.</Typography>
      </Container>
    )
  }

  const isConfidential = project.isConfidential

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true)
    setShowPasswordDialog(false)
  }

  const renderContent = () => (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          개요
        </Typography>
        <Typography>
          {project.details.overview}
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          목표
        </Typography>
        <ul>
          {project.details.goals.map((goal, index) => (
            <li key={index}>
              <Typography>{goal}</Typography>
            </li>
          ))}
        </ul>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          사용 기술
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.details.technologies.map((tech, index) => (
            <Button key={index} variant="outlined" size="small">
              {tech}
            </Button>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          성과
        </Typography>
        <ul>
          {project.details.achievements.map((achievement, index) => (
            <li key={index}>
              <Typography>{achievement}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          {project.title}
        </Typography>
        {isAuthenticated && (
          <IconButton onClick={handleLogout} color="primary">
            <LogoutIcon />
          </IconButton>
        )}
      </Box>

      {isConfidential && !isAuthenticated ? (
        <Box sx={{ 
          position: 'relative',
          filter: 'blur(8px)',
          pointerEvents: 'none',
          userSelect: 'none'
        }}>
          {renderContent()}
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1
          }}>
            <LockIcon sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              비밀 프로젝트입니다
            </Typography>
            <Button
              variant="contained"
              onClick={() => setShowPasswordDialog(true)}
              startIcon={<LockIcon />}
            >
              비밀번호 입력
            </Button>
          </Box>
        </Box>
      ) : (
        renderContent()
      )}

      <PasswordDialog
        open={showPasswordDialog}
        onClose={() => setShowPasswordDialog(false)}
        onSuccess={handlePasswordSuccess}
      />
    </Container>
  )
} 