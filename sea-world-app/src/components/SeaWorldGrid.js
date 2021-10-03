import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './SeaWorldGrid.scss'
import * as actions from '../store/actions/gridActions';

const SeaWorldGrid = () => {

    const matrix = useSelector(store => store.matrix);
    const dispatch = useDispatch();

    let keyCount = 0;

    const toogleCard = (e) => {

        var position = e.target.id.split('-');
        let [row, column] = position;
        matrix[row][column].status = !matrix[row][column].status;

        dispatch(actions.updateCellMatrix(matrix));
    }

    const getKey = () => {
        return keyCount++;
    }

    return (
        <React.Fragment>
            <Container fluid>
                {
                    matrix.map(row =>
                        <Row key={getKey()} className="justify-content-md-center">
                            {row.map(column =>
                                <Col
                                    id={column.key}
                                    key={column.key}
                                    onClick={(e) => toogleCard(e)}
                                    className={column.status ? "land-cell" : "sea-cell"}>
                                </Col>
                            )}
                        </Row>
                    )
                }
            </Container>
        </React.Fragment>
    )
}

export default SeaWorldGrid;