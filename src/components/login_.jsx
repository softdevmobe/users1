import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; // برای عنوان فرم

export default function LoginForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0', // رنگ پس‌زمینه صفحه
      }}
    >
      <Box
        sx={{
          border: '1px solid #ddd', // خط دور کادر
          padding: '32px', // فاصله داخلی بیشتر
          borderRadius: '8px', // گرد کردن بیشتر گوشه‌ها
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // سایه برای جلوه بیشتر
          backgroundColor: 'white', // رنگ پس‌زمینه کادر
          maxWidth: '400px', // حداکثر عرض کادر برای ریسپانسیو بودن
          width: '90%', // عرض کادر در موبایل
        }}
      >
          <Typography variant="h5" align="center" gutterBottom>ورود</Typography> {/* عنوان فرم */}
        <TextField
          id="username"
          label="نام کاربری"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="password"
          label="رمز عبور"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button variant="contained" fullWidth sx={{ marginTop: '24px' }}>
          ورود
        </Button>
      </Box>
    </Box>
  );
}