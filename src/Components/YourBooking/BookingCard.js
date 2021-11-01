import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        // boxShadow: "3px 0 5px 0   gray",
        borderRadius: 10,
    },
    media: {
        height: 225,
    },
    cardContent: {
        height: "85px"
    }
});

const BookingCard = () => {
    const classes = useStyles();
    const [booking, setBooking] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`https://infinite-tor-55893.herokuapp.com/tour-booking?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    console.log('booking :>> ', booking);


    const handleDelete = (e, id) => {
        const proceed = window.confirm("Are Your Sure to Delete this Item ? ")

        if (proceed) {
            fetch(`https://infinite-tor-55893.herokuapp.com/tour-booking/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingData = booking.filter(booking => booking._id !== id)
                        setBooking(remainingData)
                    }
                })
        }

        console.log('id :>> ', id);
        e.preventDefault()
    }

    return (
        <div>
            <div className="row">
                {
                    booking.map((data, index) => <div className='col-md-4 mt-5'
                    >

                        <Card className={`${classes.root}`}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image='https://i.postimg.cc/SK4zryRz/package-5.jpg'
                                    title={data.title}
                                />
                                <CardContent className={`${classes.cardContent} d-flex justify-content-center align-items-center`} style={{ textTransform: "capitalize" }} >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.title}
                                    </Typography>
                                </CardContent>
                                <div className="mb-3">
                                    <button onClick={(e) => handleDelete(e, data._id)} className="btn btn-danger">
                                        Cancel
                                    </button>
                                </div>
                            </CardActionArea>
                        </Card>


                    </div>)
                }
            </div>
        </div>
    );
};

export default BookingCard;