import Form from 'react-bootstrap/Form';

export const PokemonGridLength = ({ onNewLength }) => {


    const updateRowLength = (event) => {
        event.preventDefault()
        onNewLength(event.target.value)
    }

    return (
        <Form.Select size="lg" onChange={updateRowLength} style={{ width: "6rem" }}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={7}>7</option>
        </Form.Select>

    )
}
