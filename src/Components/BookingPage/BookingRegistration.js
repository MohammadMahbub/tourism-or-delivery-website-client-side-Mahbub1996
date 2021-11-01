import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import logo from '../../images/logo.png'



const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    container: {
        maxWidth: "455px",
        backgroundColor: "white",
        margin: "0 auto",
        marginTop: "20px",
        padding: "20px 30px 10px 20px",
        border: "1px solid lightgray",
        borderRadius: "5px",
        marginBottom: "25px"
    },

    submit: {
        backgroundColor: "#F9A51A",
        border: "none",
        padding: "9px 5px",
        color: "#fff"
    },
    small: {
        textAlign: "center",
    },
    dashContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "460px",
        margin: "10px auto",
    },
    dash: {
        height: "1px",
        border: ".1px solid lightgray",
        width: "30%",
        margin: "2px 3px",
    },
    logo: {
        height: "60px",
        margin: "25px auto",
        textAlign: "center",
        display: "block"
    },
    thirdPartyLoginBtn: {
        width: "460px",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        border: "1px solid lightgray",
        height: '55px',
    },
}));


const BookingRegistration = () => {

    const classes = useStyles();

    const { packageName } = useParams();
    const history = useHistory()

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    console.log('loggedInUser :>> ', loggedInUser);

    const [selected, setSelected] = useState({
        date: new Date().toDateString(),
        title: packageName,
        description: '',
    })

    const handleDate = () => {
        const newInfo = { ...selected };
        const date = document.getElementById('date').value;
        newInfo.date = date;
        setSelected(newInfo);
        console.log(date)
    }
    const handelDescription = () => {
        const newInfo = { ...selected };
        const data = document.getElementById('des').value;
        newInfo.description = data;
        setSelected(newInfo);
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const newUserInfo = { ...loggedInUser, ...selected }
        fetch('https://haunted-nightmare-25196.herokuapp.com/tour-booking', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserInfo)
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                history.replace('/my-booking')
            })
    }
    console.log('selected :>> ', selected);

    return (
        <div>
            <div className="container">
                <img src={logo} alt="" className={`${classes.logo}`} />
                <div className={classes.container}>
                    <form
                        className={classes.root}
                        onSubmit={handleRegisterSubmit}
                    >
                        <h5>Booking Your Tour With Travel Agency </h5>

                        <br />
                        <TextField
                            label="Full Name"
                            required
                            name="fullName"
                            type="text"
                            value={loggedInUser.displayName}

                        />
                        <br />
                        <TextField
                            label="Username or Email"
                            required
                            name="email"
                            type="email"
                            value={loggedInUser.email}
                        />

                        <br />
                        <TextField
                            required
                            name="date"
                            type="date"
                            id="date"
                            defaultValue={new Date()}
                            onChange={handleDate}
                        />
                        <br />
                        <TextField
                            label="Description"
                            type="text"
                            autoComplete=""
                            required
                            name="description"
                            id='des'
                            onChange={handelDescription}
                        />
                        <br />
                        <TextField
                            label="Your Choosing Country"
                            type="text"
                            autoComplete=""
                            required
                            name=""
                            style={{ textTransform: "capitalize" }}
                            value={packageName}
                        />
                        <br />

                        <br />
                        {/* <Link to="/events"> */}
                        <input type="submit" className="form-control btn btn-primary px-5" value="Registration" />
                        {/* </Link> */}


                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingRegistration;