'use client'

import React from 'react'
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        프로젝트
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
        {projects.map((project) => (
          <Card key={project.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {project.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                GitHub에서 보기
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  )
} 