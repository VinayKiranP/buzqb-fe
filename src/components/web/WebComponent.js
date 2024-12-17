import React from 'react'
import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent';
import TestimonialComponent from './TestimonialComponent';
import ContactComponent  from './ContactComponent';
import WorkComponent  from './WorkComponent';
import FooterComponent  from './FooterComponent';
import '../../Assets/styles/web.css'

const WebComponent = () => {
  return (
    <main className="App">
        <HomeComponent/>
        <AboutComponent/>
        <TestimonialComponent/>
        <ContactComponent/>
        <WorkComponent/>
        <FooterComponent/>
  </main>
  )
}

export default WebComponent
