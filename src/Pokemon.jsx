import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const Pokemon = ({ inverseData }) => {

    const [poke, setPoke] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {

        axios({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/"
            // url: "https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=200"
        })
            .then(res => {
                setPoke(res.data.results)
                // console.log(res.data.results) 
            })
            .catch(err => console.log("error", err))

    }, [])


    const handleChange = (e) => {
        console.warn("handleChange")
        setSearch(e.target.value)
    }




    return (
        <>
            {console.warn("SEARCH VALUE", search)}
            {console.log("poke", poke)}
            <div>Pokemon</div>

            <input 
            onChange={(e) => handleChange(e)} 
            placeholder='Search'
            value={search}
>
            </input>


            {
                search.length >= 1

                    ?

                    (

                        poke.filter((item) => item.name.startsWith(search)).map((item, i) => {
                            // console.log("item", item)
                            return (
                                <Card
                                    key={item.name}
                                    // key={i}
                                    inverseData={inverseData}
                                    item={item}
                                    handleChange={handleChange} />
                            )
                        })
                    )
                    :
                    (
                        poke.map((item, i) => {

                            return (
                                <Card
                                    item={item}
                                    key={item.name}
                                    // key={i} 
                                    handleChange={handleChange}
                                    inverseData={inverseData}
                                />
                            )
                        }
                        )
                    )
            }

            {/* {condition ?  ( )   :     ( )  } */}



        </>
    )
}

export default Pokemon