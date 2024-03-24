import React from 'react'
import './service.css'
import { FcOk } from "react-icons/fc";
// import Zoom from "react-reveal/Zoom";
export const Service = () => {
    const servicedata = [
        {
            id: 1,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
        {
            id: 2,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
        {
            id: 3,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
        {
            id: 4,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
        {
            id: 5,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
        {
            id: 6,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
        {
            id: 7,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
        {
            id: 8,
            sevice1: "Restaurante",
            service2: "Mejor precio",
            service3: "Calidad",
            service4: "Domicilio",
        },
    ];
    const colors = [
        "#CD5C5C",
        "#6495ED",
        "#088f8f",
        "#36ff25",
        "#e48c6f",
        "#ab11ce",
        "#df5be7",
        "#FFE51E",
    ];

    return (
        <div className='container service-section'>
            <div className='section_title'>
                <h5>Services</h5>
                <span className='line'></span>
            </div>

            <div className="row">
                {servicedata.map((item, index) => (

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className="services">
                            <span
                                className="service-number"
                                style={{ backgroundColor: colors[index] }}
                            >
                                <p>{item.id}</p>
                            </span>

                            <div className="list-of-service">
                                <p>
                                    <FcOk size={20} style={{ margin: "5px" }} /> {item.sevice1}
                                </p>
                                <span className="serivce_line"></span>
                                <p>
                                    <FcOk size={20} style={{ margin: "5px" }} /> {item.service2}
                                </p>
                                <span className="serivce_line"></span>

                                <p>
                                    <FcOk size={20} style={{ margin: "5px" }} /> {item.service3}
                                </p>
                                <span className="serivce_line"></span>

                                <p>
                                    <FcOk size={20} style={{ margin: "5px" }} /> {item.service4}
                                </p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
