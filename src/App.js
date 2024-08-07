import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BusinessListComponent from './components/business/BusinessListComponent';
import BusinessAddComponent from './components/business/BusinessAddComponent';
import WebComponent from './components/web/WebComponent';

function App() {
  return (
    <div className="App">
      <br/>
      <Router>
        <div className="container">
          <Routes>
            <Route path='' element={<WebComponent/>}></Route>
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
