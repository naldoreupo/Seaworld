import { UPDATE_DIMENSION_MATRIX, UPDATE_CELL_MATRIX } from '../actions/gridActions';

const initialState = {
      matrix: []
};

const matrixReducer = (state = initialState, { type, payload }) => {
      switch (type) {
            case UPDATE_DIMENSION_MATRIX:
                  return {
                        ...state,
                        matrix: [...payload]
                  }
            case UPDATE_CELL_MATRIX:

                  return {
                        ...state,
                        matrix: [...payload]
                  }

            default:
                  return state
      };
};

export default matrixReducer;