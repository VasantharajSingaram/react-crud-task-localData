import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';

export function Home() {
  const navigate = useNavigate();
  const enterHandleClick = () => navigate('/dashboard');

  return (
    <Box sx={{
      width: 400,
      height: 400,
    }} className='home'>

      <div className='home-content'>

        <h6 className='tracking-in-expand'>WELCOME TO CRUD APP</h6>
      </div>
      <div>
        <Button className='btn-enter' onClick={enterHandleClick}>
          ENTER &nbsp; <LoginIcon />
        </Button>
      </div>
    </Box>


  );
}
