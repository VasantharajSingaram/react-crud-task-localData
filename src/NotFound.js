import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function NotFound() {
  const navigate = useNavigate();
  const homeHandleClick = () => navigate('/dashboard');
  return (
    <div className='not-found'>

      <h1>Told You Not To Press</h1>

      <div>
        <img src="https://cdn.dribbble.com/users/2657768/screenshots/6413526/404_43.gif" />

      </div>
      <div>
        <Button variant="contained" color="error" startIcon={<ArrowBackIcon />} onClick={homeHandleClick}>
          BACK
        </Button>
      </div>
    </div>
  );
}
