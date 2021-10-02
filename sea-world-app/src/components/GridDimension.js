import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import * as actions from '../store/actions/gridActions';

const GridDimension = () => {

    useEffect(() => {
        generateGrid();
    }, []);

    const [dimension, setDimension] = useState({
        columns: 5,
        rows: 5
    });

    const dispatch = useDispatch();

    const handleInputChange = (event) => {

        setDimension({
            ...dimension,
            [event.target.name]: event.target.value
        });
    }

    const generateGrid = () => {
        dispatch(actions.updateDimensionMatrix(
            {
                columns: parseInt(dimension.columns),
                rows: parseInt(dimension.rows)
            }));
    }

    const submitGenerateGrid = (event) => {
        event.preventDefault();
        generateGrid();
    }

    return (
        <React.Fragment >
            <Form onSubmit={submitGenerateGrid}>

                <Form.Group as={Row} className="mb-3" controlId="Form.GridDimension">
                    <Form.Label column sm={4}>Rows</Form.Label>
                    <Col sm={6}>
                        <Form.Control id="rows"
                            type="number"
                            step="1"
                            min="1"
                            name="rows"
                            value={dimension.rows}
                            onChange={handleInputChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="Form.GridDimension2">
                    <Form.Label column sm={4}>Columns </Form.Label >
                    <Col sm={6}>
                        <Form.Control id="columns"
                            type="number"
                            step="1"
                            min="1"
                            name="columns"
                            value={dimension.columns}
                            onChange={handleInputChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button variant="primary" type="submit">
                            Create map
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </React.Fragment>
    )
}

export default GridDimension;
