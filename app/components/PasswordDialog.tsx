'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material'

interface PasswordDialogProps {
  open: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function PasswordDialog({ open, onClose, onSuccess }: PasswordDialogProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || '비밀번호가 일치하지 않습니다')
      }

      onSuccess()
      setPassword('')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('알 수 없는 오류가 발생했습니다')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>비밀번호 입력</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="비밀번호"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error}
          helperText={error}
          disabled={isLoading}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isLoading}>
          취소
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained"
          disabled={isLoading}
        >
          {isLoading ? '확인 중...' : '확인'}
        </Button>
      </DialogActions>
    </Dialog>
  )
} 