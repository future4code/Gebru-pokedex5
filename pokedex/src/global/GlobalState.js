import React, { useState } from "react"
import { GlobalStateContext } from "../global/GlobalStateContext"
import axios from "axios"
import { BASE_URL } from "../constants/url"

const GlobalState = (props) => {
    const [ pokelist, setPokelist ] = useState([])


    const listPokemons = () => {
        axios
            .get(`${BASE_URL}?limit=20`)
            .then((res) => {
                setPokelist(res.data.results)
            })
            .catch((err) => {
                alert("Deu erro!")
            })
    }

    const states = { pokelist }
    const setters = { setPokelist }
    const requests = { listPokemons }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState