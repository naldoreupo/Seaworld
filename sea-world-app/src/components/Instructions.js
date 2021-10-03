import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Instructions = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Instruccions
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Instruccions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        <li>
                            Enter number of rows and columns, and create your world.
                        </li>
                        <li>
                            Click on the world and add or remove land to create tiny islands!
                        </li>
                    </ol>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Instructions;