import React, { useState } from 'react'
import './services.css';

const Services = () => {
    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className='services section' id='services'>
         <h1 className="section_title">Services</h1>
        <span className="section_subtitle">What I offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Product <br/> Designer</h3>
                </div>
                <span className="services_button" onClick={() => toggleTab(1)}>View More 
                <i className="uil uil-arrow-right"></i></span>
                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="service_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Product Designer</h3>
                        <p className="services_modal-description">
                            services with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web Page development.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interactions.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I design best database schemas.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and mockups
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">Ui/Ux <br/> Designer</h3>
                </div>
                <span className="services_button" onClick={() => toggleTab(1)}>View More 
                <i className="uil uil-arrow-right"></i></span>
                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="service_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Ui/Ux Designer</h3>
                        <p className="services_modal-description">
                            services with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web Page development.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interactions.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I design best database schemas.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and mockups
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Visual<br/> Designer</h3>
                </div>
                <span className="services_button" onClick={() => toggleTab(1)}>View More 
                <i className="uil uil-arrow-right"></i></span>
                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="service_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description">
                            services with more than 3 years of experience. Providing quality work to clients and companies.
                        </p>
                        <ul className="services_modal-services grid">
                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web Page development.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interactions.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I design best database schemas.
                                </p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and mockups
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services