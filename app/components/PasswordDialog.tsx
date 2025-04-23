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

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        onSuccess()
      }
    } catch (error) {
      // 에러 처리
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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={handleSubmit}>확인</Button>
      </DialogActions>
    </Dialog>
  )
} 