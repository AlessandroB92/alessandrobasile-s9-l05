import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav';
import MyHeader from './components/MyHeader';
import Films from './components/Films';
import MyFooter from './components/MyFooter';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <body style={{ backgroundColor: '#221f1f' }}>
      <header>
       <MyNav />
       <MyHeader />
      </header>
      <Container>
<Films />
      </Container>
      <MyFooter />
    </body>
  );
}

export default App;
