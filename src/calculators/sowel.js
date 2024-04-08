import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Sowels from '../shared/sowels';
import Form from 'react-bootstrap/Form';

function SowelCalculator() {
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Gear</th>
                        <th>Is +20?</th>
                        <th>Sowel</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Helmet</td>
                        <td>
                            <Form.Check type="switch" id="helmet-switch"/>
                        </td>
                        <td>
                            <Sowels id='helm-primary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='helm-primary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <Sowels id='helm-secondary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='helm-secondary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td>Chest</td>
                        <td>
                            <Form.Check type="switch" id="chest-switch"/>
                        </td>
                        <td>
                            <Sowels id='chest-primary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='chest-primary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <Sowels id='chest-secondary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='chest-secondary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td>Gloves</td>
                        <td>
                            <Form.Check type="switch" id="glove-switch"/>
                        </td>
                        <td>
                            <Sowels id='gloves-primary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='gloves-primary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <Sowels id='gloves-secondary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='gloves-secondary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td>Pants</td>
                        <td>
                            <Form.Check type="switch" id="pant-switch"/>
                        </td>
                        <td>
                            <Sowels id='pants-primary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='pants-primary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <Sowels id='pants-secondary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='pants-secondary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td>Boots</td>
                        <td>
                            <Form.Check type="switch" id="boot-switch"/>
                        </td>
                        <td>
                            <Sowels id='boots-primary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='boots-primary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <Sowels id='boots-secondary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='boots-secondary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td>Weapon</td>
                        <td>
                            <Form.Check type="switch" id="helmet-switch"/>
                        </td>
                        <td>
                            <Sowels id='wep-primary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='wep-primary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <Sowels id='wep-secondary-sowel'></Sowels>
                        </td>
                        <td>
                            <Form.Control id='wep-secondary-value' placeholder='Sowel Value' />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default SowelCalculator;