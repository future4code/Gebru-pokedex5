import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage } from "../PasteHomePage/HomePage"
import { DetailPage } from "../PasteDetailPage/DetailPage"
import { PokedexPage } from "../PastePokedexPage/PokedexPage"

const Router = () => {
    const [ pokedex, setPokedex] = useState([]);

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage pokedex={pokedex} setPokedex={setPokedex}/>}/>
                <Route path="/pokedex" element={<PokedexPage pokedex={pokedex} setPokedex={setPokedex}/>}/>
                <Route path="/detail" element={<DetailPage/>}/>
                <Route path="*" element={<h1> ERRO! Página não encontrada </h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router