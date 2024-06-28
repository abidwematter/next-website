import 'server-only';
import React, { Fragment } from 'react'

const Skill = (props) => {
    return (
        <Fragment>
            {console.log("Skill")}
            <div className="skills-progress skills">
                <div className="habilidades_contenedor">
                    <div className="codeconSkills">
                        <div className="codeconSkillbar mb-80 md-mb-60">
                            <div className="skill-text">
                                <span className="codeconSkillArea">{props?.data?.sec6_4} <span className="" style={{ "position": "relative", "top": "0px", "marginLeft": "10px" }}>130%</span></span>
                            </div>
                            <div
                                className="skillBar"
                                data-percent="130%"
                                style={{
                                    background: '#F25DFF'
                                }}>

                            </div>
                        </div>
                        <div className="codeconSkillbar skill-2">
                            <div className="skill-text">
                                <span className="codeconSkillArea ">{props?.data?.sec6_5}  <span className="" style={{ "position": "relative", "top": "0px", "marginLeft": "10px" }}>92%</span></span>
                            </div>
                            <div
                                className="skillBar"
                                data-percent="47%"
                                style={{
                                    background: '#00E8FA'
                                }}>

                            </div>
                        </div>
                    </div>
                    {/* /.codeconSkills */}
                </div>
                {/* /.habilidades_contenedor */}
            </div>
        </Fragment>
    )
}

export default Skill