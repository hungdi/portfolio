'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'

interface PasswordDialogProps {
  open: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function PasswordDialog({ open, onClose, onSuccess }: PasswordDialogProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 비밀번호 해시 생성
    const passwordHash = require('crypto')
      .createHash('sha256')
      .update(password)
      .digest('hex')

    // 환경 변수에서 저장된 해시와 비교
    if (passwordHash === process.env.NEXT_PUBLIC_PROJECT_PASSWORD_HASH) {
      onSuccess()
      onClose()
    } else {
      setError(true)
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1}>
            <LockIcon />
            <Typography variant="h6">비밀번호 입력</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="비밀번호"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            error={error}
            helperText={error ? "비밀번호가 일치하지 않습니다." : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>취소</Button>
          <Button type="submit" variant="contained" color="primary">
            확인
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
} 