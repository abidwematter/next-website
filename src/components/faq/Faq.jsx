'use client';   

import React, {Fragment} from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';


const Faq = (props) => {
    return (
        <Fragment>
            <Accordion
                className="accordion-style-one"
                preExpanded={["d"]}
                allowZeroExpanded>
                {props?.data?.map((item, i) => (
                    <AccordionItem className="accordion-item" key={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <button className="accordion-button" type="button">
                                    {item.faq_title}
                                </button>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-body fadeInUp">
                            <p>
                            <div dangerouslySetInnerHTML={{__html: (item.faq_content)}} />
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Fragment>
    )
}

export default Faq