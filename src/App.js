import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BusinessListComponent from './components/business/BusinessListComponent';
import BusinessAddComponent from './components/business/BusinessAddComponent';
import HomeComponent from './components/web/HomeComponent';
import AboutComponent from './components/web/AboutComponent';
import TestimonialComponent from './components/web/TestimonialComponent';
import ContactComponent  from './components/web/ContactComponent';
import WorkComponent  from './components/web/WorkComponent';
import FooterComponent  from './components/web/FooterComponent';

function App() {
  return (
    <div className="App">
      <br/>
      <Router>
        <div className="container">
          <Routes>
            <Route path='/business' element={<BusinessListComponent/>}></Route>
            <Route path='/add-business' element={<BusinessAddComponent/>}></Route>
            <Route path='/edit-business/:id' element={<BusinessAddComponent/>}></Route>
          </Routes>
        </div>
      </Router>
      <HomeComponent/>
      <AboutComponent/>
      <TestimonialComponent/>
      <ContactComponent/>
      <WorkComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
