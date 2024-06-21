import React, { Fragment, useEffect, useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { SharedService } from '../../services/shared-service';


const CommonCounter = () => {
    const [countContent, setCountContent] = useState([]);
    
    useEffect(() => {
        SharedService().then((res) => {
            setCountContent(res);            
        });
    }, []);
    return (
        <Fragment>
            <div className="row justify-content-center">
                {
                    countContent && countContent.map((val, i) => (
                        <Fragment key={i}>
                            <div                           
                                className="col-md-4 col-sm-6 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">
                                        <CountUp start={0} end={val?.sec1_1} duration={1}>
                                            {({countUpRef, start}) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span className="counter" ref={countUpRef}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+
                                    </div>
                                    
                                    <p>{val?.sec1_2} <br /></p>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-sm-6 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">
                                        <CountUp start={0} end={val?.sec1_3} duration={1}>
                                            {({countUpRef, start}) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span className="counter" ref={countUpRef}/>
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>+
                                    </div>
                                    <p>{val?.sec1_4}  <br /></p>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-sm-6 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay>
                                <div className="counter-block-one text-center mb-20">
                                    <div className="main-count">
                                        <CountUp start={0} end={val?.sec1_5} duration={1}>
                                            {({countUpRef, start}) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span className="counter" ref={countUpRef}/>
                                                </VisibilitySensor> 
                                            )}
                                        </CountUp>Million
                                    </div>
                                    <p>{val?.sec1_6} <br /></p>
                                </div>
                            </div>
                        </Fragment>
                    ))
                }

            </div>
        </Fragment>

    )
}

export default CommonCounter