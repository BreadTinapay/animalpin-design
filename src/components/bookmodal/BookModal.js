import React, { useState } from 'react'
import "./BookModal.css"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import { useStateValue } from '../../StateProvider';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: "0 20px 0 20px",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: "10px",
      width: '100%',
      maxHeight: '90%',
      overflowY: 'scroll',
    },
    field: {
        marginBottom: '15px',
    },
  }));

function BookModal({btn, title, desc, number, walk, rmvID }) {
    const [{},dispatch] = useStateValue();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [add, setAdd] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState('');
    const [id, setId] = useState(0);

    const handleClick = () => {
        if(name === "" || num === "" || add === "" || city === "" || zip === "" || date === "" || value === ""){
            alert("Please fill up the forms")
        } else {
            setId(id+1);
            dispatch({
                type: "ADD_BOOKING",
                client: {
                    id: id,
                    name: name,
                    num: num,
                    add: add,
                    city: city,
                    zip: zip,
                    date: date,
                    value: value,
                }
            })
            handleClose();
        }
    }

    const handleRemove = () => {
        dispatch({
            type: "REMOVE_BOOKING",
            id: rmvID,
        })
        handleClose();
    }

    return (
        <div className="bookmodal">
            <div>
                <button type="button" onClick={handleOpen} className="button">
                    {btn}
                </button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        {walk ? (
                            <>
                            <p id="transition-modal-description">{desc}</p>
                            <h2 id="transition-modal-title">{title}</h2>
                            <h5>{walk}</h5>
                            </>
                        ) : (
                            <>
                            <h2 id="transition-modal-title">{title}</h2>
                            <h5>{walk}</h5>
                            <p id="transition-modal-description">{desc}</p>
                            </>
                        )
                        }
                        
                        {
                        btn === "Book" ? (
                            <>
                                <strong className="form">Booking Form</strong>
                                <form className={classes.root} noValidate autoComplete="on">
                                    <TextField className={classes.field} label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)}/>
                                    <TextField className={classes.field} label="Mobile Number" variant="standard" value={num} onChange={(e) => setNum(e.target.value)}/>
                                    <TextField className={classes.field} label="Address" variant="standard" value={add} onChange={(e) => setAdd(e.target.value)}/>
                                    <TextField className={classes.field} label="City" variant="standard" value={city} onChange={(e) => setCity(e.target.value)}/>
                                    <TextField className={classes.field} label="Zip" variant="standard"  value={zip} onChange={(e) => setZip(e.target.value)}/>
                                    <form className={classes.root} noValidate>
                                        <TextField
                                            id="date"
                                            label="For What Date?"
                                            type="date"
                                            defaultValue=""
                                            className={classes.field}
                                            value={date} onChange={(e) => setDate(e.target.value)}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                        />
                                    </form>
                                    <FormControl component="fieldset" className={classes.field}>
                                        <FormLabel component="legend">How often do you need this service?</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                            <FormControlLabel value="Once" control={<Radio />} label="Once" />
                                            <FormControlLabel value="Weekly" control={<Radio />} label="Weekly" />
                                            <FormControlLabel value="Monthly" control={<Radio />} label="Monthly" />
                                        </RadioGroup>
                                     </FormControl>
                                </form>
                                <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>
                            </>
                        ) : (
                            <>
                            <p>{number}</p>
                            </>
                        )
                    }
                    {
                        btn === 'Remove' ? (
                            <div className="rmv-btn">
                            <button onClick={handleRemove} className='button margin'>Remove</button>
                            <button onClick={handleClose} className='button margin'>Cancel</button>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                    </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default BookModal
