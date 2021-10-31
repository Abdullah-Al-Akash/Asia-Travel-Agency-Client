import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
        const [services, setServices] = useState([]);

        // Load Data From JSON File:
        useEffect(() => {
                fetch('https://rocky-bayou-98468.herokuapp.com/services')
                        .then(res => res.json())
                        .then(data => setServices(data));
        }, []);

        return (
                <div id="services" className="container mt-5 pt-5 pb-5">
                        <div className="text-center">
                                <h4 className="brand-color fw-bold text-decoration-underline">What We Offer</h4>
                                <h2 className="fw-bold">Spinner Dekhate Hobe Beta</h2>
                                {/* Show Services by Mapping */}
                                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                                        {
                                                services.map(service => <Service
                                                        key={service._id}
                                                        service={service}
                                                >

                                                </Service>)
                                        }
                                </div>
                        </div>

                </div>
        );
};

export default Services;