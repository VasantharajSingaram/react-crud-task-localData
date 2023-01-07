import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Table from 'react-bootstrap/Table';
import Avatar from '@mui/material/Avatar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavBared } from "./NavBared";

export function CustomizedTables({ rows, setRows }) {

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const AddingRowHandleClick = () => navigate('/AddingRow');

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

  const deleteRow = UserID => {
    setRows(rows.filter(row => row.UserID !== UserID));
    console.log("deleting row", UserID);
  };


  return (
    <div className='dashboard'>
      <NavBared rows={rows} setRows={setRows} />

      <div className='data glass-container'>

        <Table striped bordered hover variant="light">

          <thead>
            <tr>
              <th>Face-ID</th>
              <th>User-ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, UserID) => (

              <tr key={row.UserID}>
                <td><Avatar className='avatar' src={row.ProfilePic} sx={{ width: 56, height: 56 }} /></td>
                <td>{row.UserID}</td>
                <td className='user-names'>{row.Name}</td>
                <td>{row.Age}</td>
                <td>

                  <IconButton size="small"
                    onClick={() => deleteRow(row.UserID)}
                  ><DeleteForeverIcon color="error" /></IconButton>

                </td>
              </tr>
            ))}
          </tbody>

        </Table>


        <Offcanvas placement='end' show={show} onHide={handleClose} className="side-bar-2">



          <Offcanvas.Body>
            <CloseIcon className='close-icon rotate-center' onClick={handleClose} />

            <div className='add-user-form'>
              <TextField label="Picture-Link" variant="standard" type="text" onChange={(event) => setProfilePic(event.target.value)} />
              <TextField label="User-ID" variant="standard" type="text" onChange={(event) => setUserID(event.target.value)} />
              <TextField label="Name" variant="standard" type="text" onChange={(event) => setName(event.target.value)} />
              <TextField label="Age" variant="standard" type="number" onChange={(event) => setAge(event.target.value)} />

              <Button variant="contained" sx={{ backgroundColor: "black" }} onClick={() => { handleClick(); handleClose(); }}>Update</Button>
            </div>
          </Offcanvas.Body>
          <Offcanvas.Header>
            <Offcanvas.Title className='new-user tracking-in-expand'>UPDATE USER DETAILS</Offcanvas.Title>


          </Offcanvas.Header>
        </Offcanvas>








      </div>

    </div>
  );
}
