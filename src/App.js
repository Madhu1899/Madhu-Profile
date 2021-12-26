import Section from './components/Section'
import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <>
    < Navbar />
    < Section heading ='ABOUT' bgImage ='about' />
    < Section heading ='STILLS' bgImage ='stills' />
    < Section heading ='BTS' bgImage ='bts' />
    < Section heading ='SHORT FILMS' bgImage ='short films' />
    < Section heading ='COLLABS' bgImage ='collabs' />
    </>
  );
}

export default App;
