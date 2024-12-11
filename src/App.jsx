import ComoFunciona from "./components/ComoFunciona/ComoFunciona"
import ControleCal from "./components/ControleCal/ControleCal"
import DownloadApp from "./components/DownloadApp/DownloadApp"
import Header from "./components/Header/Header"
import InfoPessoas from "./components/InfoPessoas/InfoPessoas"
import Precisao from "./components/Precisao/Precisao"


function App() {


  return (
        <>
      <Header />
      <ControleCal />
      <InfoPessoas />
      <div id="como-funciona">
        <ComoFunciona />
      </div>
      <div id="precisao">
        <Precisao />
      </div>
      <DownloadApp />
    </>
  )
}

export default App
