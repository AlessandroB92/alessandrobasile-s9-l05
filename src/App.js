import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav';
import MyHeader from './components/MyHeader';
import Avengers from './components/Avengers';
import HarryPotter from './components/HarryPotter';
import StarWars from './components/StarWars';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <body style={{ backgroundColor: '#221f1f' }}>
      <header>
        <MyNav />
        <MyHeader />
      </header>
      <Avengers />
      <HarryPotter />
      <StarWars />
      <MyFooter />
    </body>
  );
}

export default App;
