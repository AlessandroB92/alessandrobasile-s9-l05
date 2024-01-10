import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav';
import MyHeader from './components/MyHeader';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
      <header>
        <MyNav />
        <MyHeader />
      </header>
      <MyMain />
      <MyFooter />
    </>
  );
}

export default App;
