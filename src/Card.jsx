import React, { useState, useEffect } from 'react'
import Counter from './Counter'
import axios from 'axios'

// useEffect to check local storage.

const Card = ({ item, handleChange, inverseData }) => {

    const [pokemon, setPokemon] = useState({})

    const [seeAbility, setSeeAbility] = useState(false)
    const [seeType, setSeeType] = useState(false)

    useEffect(() => {

        axios({
            method: "GET",
            url: item.url
        })
            .then(res => {
                console.log("res", res.data)    
                setPokemon(res.data)

            })
            // .finally(res => inverseData( res.data))
            .catch(err => console.log("err", err))

    }, [])





    // let abilities = pokemon?.abilities?.map((item) => {
    //     return (
    //         <p>{item.ability.name}</p>
    //     )
    // })

    return (
        <>
            {/* {console.warn("pokemon", pokemon)} */}
            {/* {console.warn("seeAbility = ", item.name, " === ",  seeAbility)} */}
            <div className="cards" style={{ border: 'solid red 1px', marginTop: '20px' }} >

                <p>
                    {item.name}
                </p>
              {/* <p>
                    {item.url}
                </p>  */}


                <img src={pokemon?.sprites?.front_default} alt={pokemon.name} />
                {/* <img src={pokemon?.sprites?.front_shiny} alt={pokemon.name} /> */}

                <div id="container">
{/* 

                    {seeAbility ? <Counter /> : <p>falsey</p>}
                    {seeAbility && <Counter /> } */}




                    <button onClick={() => setSeeAbility(!seeAbility)}>abilities</button>

                    {seeAbility && //if true, show abilities

                        pokemon?.abilities?.map((item) => {
                            return (
                                <div>{item?.ability.name}</div>
                            )
                        })}

                    <button onClick={() => setSeeType(!seeType)}>Type</button>

                    {seeType &&

                        pokemon?.types?.map((item) => {
                            return (

                                <div>{item?.type.name}</div>

                            )
                        })}
                </div>

                <Counter item={item} inverseData={inverseData} />

            </div>
        </>
    )
}

export default Card