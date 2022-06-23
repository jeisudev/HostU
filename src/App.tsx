import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePageSite} from "./pages/MenuSite/index"
import {SobrePage} from "./pages/sobre/index"
import {ProdutosPage} from "./pages/Produtos/index"
import {ContatoPage} from "./pages/Contato/index"
import {HomePage} from "./pages/Home/index"

export function App() {

  return (
    <div>
      <BrowserRouter>
      <HomePageSite />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/sobre" element={<SobrePage/>}/>
          <Route path="/produtos" element={<ProdutosPage/>}/>
          <Route path="/contato" element={<ContatoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
