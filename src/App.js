import logo from './logo.svg';
import './App.css';
import { useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'animate.css';
import ReactDeleteRow from 'react-delete-row';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';


import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import { Dashboard } from '@mui/icons-material';





import userEvent from '@testing-library/user-event';

import trash2 from 'react-useanimations/lib/trash2';


import Form from 'react-bootstrap/Form';
import { CustomizedTables } from './CustomizedTables';
import { Home } from './Home';
import { NotFound } from './NotFound';


// <NavBared />
// <CustomizedTables />

function App() {
  const [rows, setRows] = useState([
 
    {
      ProfilePic: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQM90dxKi2Ng2PB6TZlqUZkCgwPFG87v70NkDySutfbkBSDN525VUdBZALNdyDdrqG2IgS3fZD-V5VzP1k",
      UserID : "00abc1",
      Name: "Peter",
      Age: "24",
    },
    {
      ProfilePic: "https://i.pinimg.com/736x/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg",
      UserID : "00abc2",
      Name: "Tony Stark",
      Age: "46",
    },
    {
      ProfilePic: "https://discussingfilm.net/wp-content/uploads/2019/05/0d26c680-9704-11e8-a9be-0a3dd955ac48.jpg",
      UserID : "00abc3",
      Name: "steve rogers",
      Age: "90",
    },
    {
      ProfilePic: "https://media.wired.co.uk/photos/627ada4128c012d1b74a1fa5/3:2/pass/Wanda-Dr-Strange-Multiverse-Madness-Culture.jpg",
      UserID : "00abc4",
      Name: "Wanda Maximoff",
      Age: "29",
    },
  
    
    ]);
   
    const [ProfilePic, setProfilePic] = useState("");
    const [Name, setName] = useState("");
    const [Age, setAge] = useState( );
    const [UserID, setUserID] = useState( );
  
    const newRow = ()=> {
      const newRow = {
        ProfilePic: ProfilePic,
        UserID: UserID,
        Name: Name,
        Age: Age
      }
      setRows([...rows, newRow])
    }
    
  return (
    <div className="App">
   
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/dashboard" element={<CustomizedTables rows={rows} setRows={setRows} />} />


 <Route path="*" element={<NotFound />} />
 
</Routes>

    </div>
  );
}

export default App;
