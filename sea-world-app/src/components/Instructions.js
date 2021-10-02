import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Instructions = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Instruccions
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Instruccions</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can click on the world and add or remove land and create tiny islands!</Modal.Body>
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