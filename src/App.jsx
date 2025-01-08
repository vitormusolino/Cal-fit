import { Routes, Route } from 'react-router-dom';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import ControleCal from './components/ControleCal/ControleCal';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfoPessoas from './components/InfoPessoas/InfoPessoas';
import Precisao from './components/Precisao/Precisao';


import Termos from './pages/Termos'; 
import Privacidade from './pages/Privacidade'; 
import Contato from './pages/Contato'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ControleCal />
              <div id="como-funciona">
                <ComoFunciona />
              </div>
              <div id="precisao">
                <Precisao />
              </div>
              <DownloadApp />
            </>
          }
        />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
