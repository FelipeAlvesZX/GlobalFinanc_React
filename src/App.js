import { BrowserRouter as Navegador, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Produtos from './components/Pages/Produtos'
import Contato from './components/Pages/Contato'
import QuemSomos from './components/Pages/QuemSomos'
import NavBar from './components/Layout/NavBar'

function App() {
  return (
    <div>
        <Navegador>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Produtos" element={<Produtos />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Navegador>
    </div>
  );
}
export default App