import React, { useEffect, useState } from 'react';
import Approve from '../Approve/Approve';
import ManageAllOrdersCard from '../ManageAllOrdersCard/ManageAllOrdersCard';

const ManageAllOrders = () => {
        const [booking, setBooking] = useState([]);

        // Load All Orders From Backend:
        useEffect(() => {
                fetch('https://rocky-bayou-98468.herokuapp.com/orders')
                        .then(res => res.json())
                        .then(data => {
                                setBooking(data);
                        })
        }, [booking])

        // Handle Booking Cancel:
        const handleCancelBooking = id => {
                const url = `https://rocky-bayou-98468.herokuapp.com/orders/${id}`;
                fetch(url, {
                        method: 'DELETE'
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data.deletedCount) {
                                        alert("Are you sure about cancel the tour?");
                                }
                        })
        }

        return (
                <div className="container pt-3">
                        <h4 className="text-center p-5 fw-bold brand-color">Manage All Bookings Summary</h4>
                        <div className="row text-success">
                                {/* <h4 className="col-1">S.L</h4> */}
                                <h4 className="col-3 fw-bold">Name</h4>
                                <h4 className="col-2 fw-bold">Tour Place</h4>
                                <h4 className="col-2 fw-bold">Order Cancel</h4>
                                <h4 className="col-2 fw-bold">Order Approved</h4>
                                <h4 className="col-2 fw-bold">Status</h4>
                        </div>
                        <hr />


                        {
                                booking.length ? booking.map(booked =>
                                        <div key={booked._id} className="row">
                                                <h6 className="col-3">{booked.name}</h6>
                                                <h6 className="col-2">{booked.booking}</h6>
                                                <h6 className="col-2 text-center">
                                                        <button onClick={() => handleCancelBooking(booked._id)} className="btn">❌</button>
                                                </h6>
                                                <h6 className="col-2 text-center"><Approve booked={booked}></Approve></h6>
                                                <h6 className="col-2">{booked.status}</h6>
                                        </div>
                                )
                                        :
                                        <h3 className="text-center text-danger">There is no booking you confirm. Please make sure booking tour!</h3>
                        }
                </div >
        );
};

export default ManageAllOrders;