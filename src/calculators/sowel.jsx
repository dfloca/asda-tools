import React, { Component } from 'react';
import {
    Form, FormGroup, FormControl
} from 'react-bootstrap';
import Sowels from '../shared/sowels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Sowel extends Component {
    render() {
        const gear = [
            {
                name: "Helmet",
                isMax: false,
                p_sowel: {
                    type: null,
                    value: null
                },
                s_sowel: {
                    type: null,
                    value: null
                }
            },
            {
                name: "Chest",
                isMax: false,
                p_sowel: {
                    type: null,
                    value: null
                },
                s_sowel: {
                    type: null,
                    value: null
                }
            },
            {
                name: "Gloves",
                isMax: false,
                p_sowel: {
                    type: null,
                    value: null
                },
                s_sowel: {
                    type: null,
                    value: null
                }
            },
            {
                name: "Pants",
                isMax: false,
                p_sowel: {
                    type: null,
                    value: null
                },
                s_sowel: {
                    type: null,
                    value: null
                }
            },
            {
                name: "Boots",
                isMax: false,
                p_sowel: {
                    type: null,
                    value: null
                },
                s_sowel: {
                    type: null,
                    value: null
                }
            }
        ]

        const listGear = gear.map((element) => {
            return (
                <form key={element.name}>
                    <Container type="disc" className='item border' key={element.name}>
                        <Row>
                            <label>
                                <b>{element.name}</b>
                            </label>
                        </Row>
                        <Row md={4}>
                            <Col>
                                Is +20?
                            </Col>
                            <Col>
                                <Form.Check type="switch" id={`${element.name}-is-max`} defaultChecked={element.isMax} value={element.isMax} />
                            </Col>                            
                        </Row>
                        <Row md={4} className='border'>
                        <label>Sowel</label>
                            <Col>
                                <Sowels id={`${element.name}-p-sowel`} value={element.p_sowel.type}></Sowels>
                            </Col>
                            <Col>
                                <Form.Control id={`${element.name}-p-value`} placeholder='Sowel Value' defaultValue={element.p_sowel.value} />
                            </Col>
                        </Row>
                        <Row md={4} className='border'>
                            <label>Sowel</label>
                            <Col>
                                <Sowels id={`${element.name}-s-sowel`} value={element.s_sowel.type}></Sowels>
                            </Col>
                            <Col>
                                <Form.Control id={`${element.name}-s-value`} placeholder='Sowel Value' defaultValue={element.s_sowel.value} />
                            </Col>
                        </Row>
                    </Container>
                    <br/>
                </form>
            )
        });

        const listGearCalc = gear.map((element) => {
            return (
                <div>
                    <b>{element.name}</b>
                </div>
            )
        });

        return (
            <div className='container'>
                <h2>Sowel Calculator</h2>
                {listGear}
                <br/>
                <h3>Stat Breakdown:</h3>
                {listGearCalc}
            </div>
        );
    }
}

export default Sowel;