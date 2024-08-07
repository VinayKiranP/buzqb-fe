import React from 'react'
import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent';
import TestimonialComponent from './TestimonialComponent';
import ContactComponent  from './ContactComponent';
import WorkComponent  from './WorkComponent';
import FooterComponent  from './FooterComponent';

const WebComponent = () => {
  return (
    <div>
        <HomeComponent/>
        <AboutComponent/>
        <TestimonialComponent/>
        <ContactComponent/>
        <WorkComponent/>
        <FooterComponent/>
    </div>
  )
}

export default WebComponent
