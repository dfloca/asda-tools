import Form from 'react-bootstrap/Form';

function Sowels({id, name, handleChange}) {
    return (
        <Form.Select id={id} name={name} aria-label="Sowel" onChange={handleChange}>
            <option>Stamina</option>
            <option>Luck</option>
            <option>Intelligence</option>
            <option>Dexterity</option>
            <option>Strength</option>
            <option>Spirit</option>
        </Form.Select>
    )
}

export default Sowels;