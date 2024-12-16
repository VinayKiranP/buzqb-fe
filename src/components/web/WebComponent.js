import React from 'react'
import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent';
import TestimonialComponent from './TestimonialComponent';
import ContactComponent  from './ContactComponent';
import WorkComponent  from './WorkComponent';
import FooterComponent  from './FooterComponent';

const WebComponent = () => {
  return (
    <main>
    <div>
    <br/>
        <HomeComponent/>
        <AboutComponent/>
        <TestimonialComponent/>
        <ContactComponent/>
        <WorkComponent/>
        <FooterComponent/>
    </div>
  </main>
  )
}

export default WebComponent
