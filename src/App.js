import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav';
import MyHeader from './components/MyHeader';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TvShow from './components/TvShow';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <MyHeader />
        <Routes>
          <Route path='/' element ={<MyMain/>} />
          <Route path='/TvShow' element = {<TvShow/>}/>
          </Routes>      
      </BrowserRouter>
        <MyFooter />
    </>
  );
}

export default App;
