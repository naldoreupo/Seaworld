import React from 'react';

import { Form, Button,Label } from 'react-bootstrap';

const GridDimension = () => {

    return (
        <React.Fragment>
            <Form>

   

                <Form.Label>Rows</Form.Label>
                <input id="rows" type="number" step="1" min="1" value="6" />

                <label htmlFor="columns">Columns :</label>
                <input id="columns" type="number" step="1" min="1" value="6" />

                <Button variant="primary" type="submit" >
                    submit
                </Button>

            </Form>
        </React.Fragment>
    )
}

export default GridDimension;