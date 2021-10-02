import gridReducer from './gridReducer';
import { updateDimensionMatrix } from '../actions/gridActions';

const initialState = { matrix: [] };

const dimension = { columns: 2, rows: 2 };

const expectedPayload = { "matrix": [
    [{ "key": "0-0", "status": false },{ "key": "0-1", "status": false }],
    [{ "key": "1-0", "status": false },{ "key": "1-1", "status": false }]
] }

describe('Matrix Reducers', () => {
    it('properly captures a dispatch to change state', () => {
        expect(gridReducer(initialState, updateDimensionMatrix(dimension)))
            .toEqual(expectedPayload);
    });
})
