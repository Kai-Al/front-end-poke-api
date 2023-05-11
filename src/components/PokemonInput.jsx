import { useState } from "react"


export const PokemonInput = ({ onNewValue }) => {


    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onNewValue(inputValue)
    }

    return (
        <form onSubmit={onSubmit} >
            <input
                type="text"
                placeholder="Search Pokémon"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
