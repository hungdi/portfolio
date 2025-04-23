'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { Container, Typography, Box, Card, CardContent, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
import { projects } from '@/app/data/projects'
import PasswordDialog from '@/app/components/PasswordDialog'
import LockIcon from '@mui/icons-material/Lock'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!project) {
    return (
      <Container>
        <Typography variant="h4">프로젝트를 찾을 수 없습니다.</Typography>
      </Container>
    )
  }

  const isConfidential = project.id === 'nh-3' // 전자금융 차세대 시스템

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {project.title}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {project.category} | {project.period}
          </Typography>
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>

          {isConfidential && !isAuthenticated ? (
            <Box
              sx={{
                position: 'relative',
                filter: 'blur(8px)',
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <LockIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                대외비 프로젝트
              </Typography>
              <Button
                variant="contained"
                onClick={() => setIsPasswordDialogOpen(true)}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'auto',
                }}
              >
                비밀번호 입력
              </Button>
            </Box>
          ) : (
            <>
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                프로젝트 개요
              </Typography>
              <Typography variant="body1" paragraph>
                {project.details.overview}
              </Typography>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                프로젝트 목표
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {project.details.goals.map((goal, index) => (
                  <Typography component="li" key={index} paragraph>
                    {goal}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                사용 기술
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.details.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} />
                ))}
              </Box>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                주요 성과
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {project.details.achievements.map((achievement, index) => (
                  <Typography component="li" key={index} paragraph>
                    {achievement}
                  </Typography>
                ))}
              </Box>
            </>
          )}
        </CardContent>
      </Card>

      <PasswordDialog
        open={isPasswordDialogOpen}
        onClose={() => setIsPasswordDialogOpen(false)}
        onSuccess={() => setIsAuthenticated(true)}
      />
    </Container>
  )
} 