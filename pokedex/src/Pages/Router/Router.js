import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../PasteHomePage/HomePage"
import { DetailPage } from "../PasteDetailPage/DetailPage"
import { PokedexPage } from "../PastePokedexPage/PokedexPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
                <Route path="/detail" element={<DetailPage/>}/>
                <Route path="*" element={<h1> ERRO! Página não encontrada </h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router