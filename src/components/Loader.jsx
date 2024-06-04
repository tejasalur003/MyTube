import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => (
  <Box minHeight="95vh" sx={{ backgroundColor: '#121212', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh'>
      <CircularProgress
        size={80} 
        thickness={8}
        sx={{
          color: '#B71C1C', 
          animationDuration: '850ms',
        }}
      />
    </Stack>
  </Box>
);

export default Loader;
