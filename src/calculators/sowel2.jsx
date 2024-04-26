import React, { Component } from 'react';
import {
    Form, FormGroup, FormControl
} from 'react-bootstrap';
import Sowels from '../shared/sowels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function Sowel2() {

    function Gear({name}) {
        const [is_max, set_is_max] = useState(true);
        const [p_sowel_type, set_p_sowel_type] = useState("Stamina");
        const [p_sowel_val, set_p_sowel_val] = useState("");
        const [s_sowel_type, set_s_sowel_type] = useState("Stamina");
        const [s_sowel_val, set_s_sowel_val] = useState("");

        function handleChange(event) {
            set_is_max(event.target.checked);
            console.log(is_max)
        }

        return <Container type="disc" className='item border' key={name}>
                <Row>
                    <label>
                        <b>{name}</b>
                    </label>
                </Row>
                <Row md={4}>
                    <Col>
                        Is +20?
                    </Col>
                    <Col>
                        <Form.Check type="switch" id={`${name}-is-max`} checked={is_max} value={is_max} onChange={handleChange}/>
                    </Col>                            
                </Row>
                <Row md={4} className='border'>
                <label>Sowel</label>
                    <Col>
                        <Sowels id={`${name}-p-sowel`} value={p_sowel_type}></Sowels>
                    </Col>
                    <Col>
                        <Form.Control id={`${name}-p-value`} placeholder='Sowel Value' defaultValue={p_sowel_val} />
                    </Col>
                </Row>
                <Row md={4} className='border'>
                    <label>Sowel</label>
                    <Col>
                        <Sowels id={`${name}-s-sowel`} value={s_sowel_type}></Sowels>
                    </Col>
                    <Col>
                        <Form.Control id={`${name}-s-value`} placeholder='Sowel Value' defaultValue={s_sowel_val} />
                    </Col>
                </Row>
            </Container>
    }

    return (
        <>
            <div className='row'>
                <Gear name="Helmet"/>
            </div>
            <div className='row'>
                <Gear name="Chest"/>
            </div>
            <div className='row'>
                <Gear name="Gloves"/>
            </div>
            <div className='row'>
                <Gear name="Pants"/>
            </div>
            <div className='row'>
                <Gear name="Boots"/>
            </div>
        </>
    )
}