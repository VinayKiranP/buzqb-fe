import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BusinessListComponent from './components/business/BusinessListComponent';
import BusinessAddComponent from './components/business/BusinessAddComponent';
import WebComponent from './components/web/WebComponent';
import SidebarComponent from './components/sidebar/SidebarComponent';
import LoginComponent from './components/auth/LoginComponent';

function App() {
  return (
    <div className="App">
      <br/>
      <Router>
        <div>
          <Routes>
            <Route path='' element={<WebComponent/>}></Route>
            <Route path='/sidebar' element={<SidebarComponent/>}></Route>
            <Route path='/login' element={<LoginComponent/>}></Route>
            <Route path='/business' element={<BusinessListComponent/>}></Route>
            <Route path='/add-business' element={<BusinessAddComponent/>}></Route>
            <Route path='/edit-business/:id' element={<BusinessAddComponent/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
