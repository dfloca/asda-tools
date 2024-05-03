import React, { Component, useEffect } from 'react';
import {
    Form, FormGroup, FormControl
} from 'react-bootstrap';
import Sowels from '../shared/sowels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Gear({ name, gear, index, onMaxChange, onSowelChange, onValueChange }) {
    return <Container type="disc" className='item border' key={name}>
            <Row>
                <label>
                    <b>{name}</b>
                </label>
            </Row>
            <Row md={4}>
                <Col>
                    <Form.Switch id={`${name}-is-max`} label={'Is +20?'} checked={gear.is_max} onChange={onMaxChange}/>
                </Col>                            
            </Row>
            <Row md={4} className='border'>
                <label>Sowel 1</label>
                <Col>
                    <Sowels id={`${name}_p_sowel_type`} name={`p_sowel_type`} value={gear.p_sowel_type} handleChange={(e) => onSowelChange(e, index, 'p_sowel_type')}></Sowels>
                </Col>
                <Col>
                    <Form.Control id={`p_value`} type="number" placeholder='Sowel Value' value={gear.p_sowel_val} onChange={(e) => onValueChange(e, index, 'p_sowel_val')} />
                </Col>
            </Row>
            <Row md={4} className='border'>
                <label>Sowel 2</label>
                <Col>
                    <Sowels id={`${name}_s_sowel_type`} name={`s_sowel_type`} value={gear.s_sowel_type} handleChange={(e) => onSowelChange(e, index, 's_sowel_type')}></Sowels>
                </Col>
                <Col>
                    <Form.Control id={`s_value`} type="number" placeholder='Sowel Value' value={gear.s_sowel_val} onChange={(e) => onValueChange(e, index, 's_sowel_val')} />
                </Col>
            </Row>
        </Container>
}

export default function Sowel2() {
    const [gear, setGear] = useState([
        { is_max: false, p_sowel_type: null, p_sowel_val: '', s_sowel_type: null, s_sowel_val: '' },
        { is_max: false, p_sowel_type: null, p_sowel_val: '', s_sowel_type: null, s_sowel_val: '' },
        { is_max: false, p_sowel_type: null, p_sowel_val: '', s_sowel_type: null, s_sowel_val: '' },
        { is_max: false, p_sowel_type: null, p_sowel_val: '', s_sowel_type: null, s_sowel_val: '' },
        { is_max: false, p_sowel_type: null, p_sowel_val: '', s_sowel_type: null, s_sowel_val: '' },
        { is_max: false, p_sowel_type: null, p_sowel_val: '', s_sowel_type: null, s_sowel_val: '' }
    ]);

    useEffect(() => {
        gear.forEach((item, index) => {
            if (item.p_sowel_type && item.p_sowel_val) {
                calculate(index, 'p_sowel_type', item.p_sowel_type, 'p_sowel_val', item.p_sowel_val);
            }
            if (item.s_sowel_type && item.s_sowel_val) {
                calculate(index, 's_sowel_type', item.s_sowel_type, 's_sowel_val', item.s_sowel_val);
            }
        })
    }, [gear]);

    const [values, setValues] = useState(Array(6).fill(null));

    function handleChange(index, value) {
        setGear(prevGear => {
            const updatedGear = [...prevGear];
            updatedGear[index].is_max = value;
            return updatedGear;
        });

        // checkCalcReady(index);
    }

    function handleSowelChange(event, index, sowelType) {
        const { value } = event.target;
        setGear(prevGear => {
            const updatedGear = [...prevGear];
            updatedGear[index][sowelType] = value;
            return updatedGear;
        });
        // checkCalcReady(index);
    }

    function handleValueChange(event, index, valueType) {
        const { value } = event.target;
        setGear(prevGear => {
            const updatedGear = [...prevGear];
            updatedGear[index][valueType] = value;
            return updatedGear;
        });
        // checkCalcReady(index);
    }

    function calculate(i, typeKey, sowel_type, valKey, sowel_val) {
        console.log(`Function executed for ${typeKey}: ${sowel_type}, ${valKey}: ${sowel_val} in Gear ${i}`);

        var num_sowel_type = gear.filter(g => g.p_sowel_type == gear[i].p_sowel_type).length + gear.filter(g => g.s_sowel_type == gear[i].p_sowel_type).length
        console.log(num_sowel_type);
    }

    return (
        <>
            {gear.map((item, index) => (
                <div className='row' key={index}>
                    <Gear
                        name={["Weapon", "Shirt", "Pants", "Helmet", "Shoes", "Gloves"][index]}
                        gear={item}
                        index={index}
                        onMaxChange={(e) => handleChange(index, e.target.checked)}
                        onSowelChange={(e, i, sowelType) => handleSowelChange(e, index, sowelType)}
                        onValueChange={(e, i, valueType) => handleValueChange(e, index, valueType)}
                    />
                </div>
            ))}
        </>
    )
}