import React, {Fragment} from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';


const FaqTwo = (props) => {
    return (
        <Fragment>
            <Accordion
                className="accordion-style-one"
                preExpanded={["d"]}
                allowZeroExpanded>
                {props?.data?.map((item, i) => (
                    <AccordionItem className="accordion-item" key={i} >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <button className="accordion-button" type="button">
                                    {item.faq_title}
                                </button>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-body fadeInUp">
                        <div dangerouslySetInnerHTML={{__html: (item?.faq_content)}} />
                           
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Fragment>
    )
}

export default FaqTwo