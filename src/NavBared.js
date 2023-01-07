import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown';



export function NavBared({ rows, setRows }) {

  const [ProfilePic, setProfilePic] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState();
  const [UserID, setUserID] = useState();

  const newRow = () => {
    const newRow = {
      ProfilePic: ProfilePic,
      UserID: UserID,
      Name: Name,
      Age: Age
    };
    setRows([...rows, newRow]);
  };

  const navigate = useNavigate();
  const AddingRowHandleClick = () => navigate('/AddingRow');
  const NotFound = () => navigate('*');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='nav-bg-color' color="transparent" elevation="0">
        <Toolbar>
          <Typography variant="h6" className='nav-brand ' component="div" sx={{ flexGrow: 1 }}>
            <img src='/c.png' className='nav-brands rotate-scale-down' />
          </Typography>
          <button variant="outlined" endIcon={<AddIcon />} className="box-btn" onClick={handleShow}>
            ADD <AddIcon sx={{ fontSize: "20px" }} />
          </button>
          <button variant="outlined" endIcon={<AddIcon />} className="not-btn" onClick={NotFound}>
            NO <CloseIcon sx={{ fontSize: "20px" }} />
          </button>

          <Offcanvas show={show} onHide={handleClose} className="side-bar">

            <Offcanvas.Body>
              <UseAnimations className='arrow-left' animation={arrowDown} size={30} onClick={handleClose} />
              <div className='add-user-form'>
                <TextField label="Picture-Link" variant="standard" type="text" onChange={(event) => setProfilePic(event.target.value)} />
                <TextField label="User-ID" variant="standard" type="text" onChange={(event) => setUserID(event.target.value)} />
                <TextField label="Name" variant="standard" type="text" onChange={(event) => setName(event.target.value)} />
                <TextField label="Age" variant="standard" type="number" onChange={(event) => setAge(event.target.value)} />
                <Button variant="contained" sx={{ backgroundColor: "black" }} onClick={() => { newRow(); handleClose(); }}>Add</Button>
              </div>
            </Offcanvas.Body>
            <Offcanvas.Header>
              <Offcanvas.Title className='new-user tracking-in-expand'>NEW USER DETAILS</Offcanvas.Title>


            </Offcanvas.Header>
          </Offcanvas>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
