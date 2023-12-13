import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const Home = () => {
  const navigate = useNavigate();
  const userId = '123-456'
  const mockAuthentication = () => navigate(`/${userId}/channels`);
  return (
      <Box>
          <h1>Hey there! Come on in!</h1>
          <Button
              style={{ textTransform: 'none', backgroundColor: '#9c27b0', color: '#fff' }}
              onClick={mockAuthentication}>
              Take me away!
          </Button>
      </Box>
  );
}