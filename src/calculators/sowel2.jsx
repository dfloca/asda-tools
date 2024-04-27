import React, { Component } from 'react';
import {
    Form, FormGroup, FormControl
} from 'react-bootstrap';
import Sowels from '../shared/sowels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Gear({name, props, onMaxChange, onSowelChange, onValueChange}) {
    return <Container type="disc" className='item border' key={name}>
            <Row>
                <label>
                    <b>{name}</b>
                </label>
            </Row>
            <Row md={4}>
                <Col>
                    <Form.Switch id={`${name}-is-max`} label={'Is +20?'} onChange={onMaxChange}/>
                </Col>                            
            </Row>
            <Row md={4} className='border'>
                <label>Sowel 1</label>
                <Col>
                    <Sowels id={`${name}_p_sowel_type`} name={`p_sowel_type`} value={props.p_sowel_type} handleChange={onSowelChange}></Sowels>
                </Col>
                <Col>
                    <Form.Control id={`p_value`} type="number" placeholder='Sowel Value' onChange={onValueChange} />
                </Col>
            </Row>
            <Row md={4} className='border'>
                <label>Sowel 2</label>
                <Col>
                    <Sowels id={`${name}_s_sowel_type`} name={`s_sowel_type`} value={props.s_sowel_type} handleChange={onSowelChange}></Sowels>
                </Col>
                <Col>
                    <Form.Control id={`s_value`} type="number" placeholder='Sowel Value' onChange={onValueChange} />
                </Col>
            </Row>
        </Container>
}

export default function Sowel2() {
    const [gear, setGear] = useState(Array(6).fill({
        is_max: false,
        p_sowel_type: null,
        p_sowel_val: null,
        p_calc: null,
        s_sowel_type: null,
        s_sowel_val: null,
        s_calc: null
    }));

    const [values, setValues] = useState(Array(6).fill(null));

    function handleChange(i, value) {
        gear[i].is_max = value;
        setGear(gear);
        console.log(gear);

        checkCalcReady(i);
    }

    function handleSowelChange(i, event) {
        console.log(event.target.name);
        console.log(event.target.value);
        if(event.target.name == 'p_sowel_type')
            gear[i].p_sowel_type = event.target.value;
        else
            gear[i].s_sowel_type = event.target.value;
        setGear(gear);
        console.log(gear);

        checkCalcReady(i);
    }

    function handleValueChange(i, event) {
        if(event.target.id == 'p_value')
            gear[i].p_sowel_val = event.target.value
        else
            gear[i].s_sowel_val = event.target.value
        
        setGear(gear);
        
        checkCalcReady(i);
    }

    function checkCalcReady(i) {
        console.log(gear[i].p_sowel_val)
        if(gear[i].p_sowel_type && gear[i].p_sowel_val) {
            calculate(i);
        }
    }

    function calculate(i) {
        var num_sowel_type = gear.filter(g => g.p_sowel_type == gear[i].p_sowel_type).length + gear.filter(g => g.s_sowel_type == gear[i].p_sowel_type).length
        // console.log(gear.filter(g => g.p_sowel_type == gear[i].p_sowel_type));
    }

    return (
        <>
            <div className='row'>
                <Gear name="Weapon" 
                    props={gear[0]} 
                    onMaxChange={(e) => handleChange(0, e.target.checked)} 
                    onSowelChange={(e) => handleSowelChange(0, e)}
                    onValueChange={(e) => handleValueChange(0, e)}
                />
            </div>
            <div className='row'>
                <Gear name="Shirt" 
                    props={gear[1]} 
                    onMaxChange={(e) => handleChange(1, e.target.checked)} 
                    onSowelChange={(e) => handleSowelChange(1, e)}
                    onValueChange={(e) => handleValueChange(1, e)}
                />
            </div>
            <div className='row'>
                <Gear name="Pants" 
                    props={gear[2]} 
                    onMaxChange={(e) => handleChange(2, e.target.checked)}
                    onSowelChange={(e) => handleSowelChange(2, e)}
                    onValueChange={(e) => handleValueChange(2, e)}
                />
            </div>
            <div className='row'>
                <Gear name="Helmet" 
                    props={gear[3]} 
                    onMaxChange={(e) => handleChange(3, e.target.checked)}
                    onSowelChange={(e) => handleSowelChange(3, e)}
                    onValueChange={(e) => handleValueChange(3, e)}
                />
            </div>
            <div className='row'>
                <Gear name="Shoes" 
                    props={gear[4]} 
                    onMaxChange={(e) => handleChange(4, e.target.checked)}
                    onSowelChange={(e) => handleSowelChange(4, e)}
                    onValueChange={(e) => handleValueChange(4, e)}
                />
            </div>
            <div className='row'>
                <Gear name="Gloves" 
                    props={gear[5]} 
                    onMaxChange={(e) => handleChange(5, e.target.checked)}
                    onSowelChange={(e) => handleSowelChange(5, e)}
                    onValueChange={(e) => handleValueChange(5, e)}
                />
            </div>
        </>
    )
}