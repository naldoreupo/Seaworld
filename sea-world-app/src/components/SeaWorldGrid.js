import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SeaWorldGrid.css'

const SeaWorldGrid = (props) => {

    const [matrix, setMatrix] = useState([]);

    useEffect(() => {
        generateMatrix();
    }, []);

    let keyCount = 0;

    const generateMatrix = () => {

        let columns = 15;
        let rows = 12;
        let matrix = [];        

        [...Array(rows)].map((row, indexRow) => {
            let tempArray = [];
            [...Array(columns)].map((column, indexColumn) => {
                tempArray.push({ "key": indexRow + "-" + indexColumn, "status": false });
            });

            matrix.push(tempArray);
        });
        setMatrix(matrix);
    }

    const toogleCard = (e) => {

        var position = e.target.id.split('-');

        let [row, column] = position;

        matrix[row][column].status = !matrix[row][column].status;

        console.log(matrix);
        setMatrix([...matrix])
    }

    const getKey = () => {
        return keyCount++;
    }

    return (
        <React.Fragment>
            <Container >
                {
                    matrix.map(row =>
                        <Row key={getKey()}>
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