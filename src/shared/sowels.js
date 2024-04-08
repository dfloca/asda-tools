import Form from 'react-bootstrap/Form';

function Sowels() {
    return (
        <Form.Select id="sowels" aria-label="Sowel">
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