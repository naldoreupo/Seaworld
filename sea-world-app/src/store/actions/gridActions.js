

export const UPDATE_DIMENSION_MATRIX = "UPDATE_DIMENSION_MATRIX";
export const UPDATE_DIMENSION_MATRIX_SUCCESS = "UPDATE_DIMENSION_MATRIX_SUCCESS";
export const UPDATE_CELL_MATRIX = "UPDATE_CELL_MATRIX";

/* export const updateDimensionMatrix = (payload) => ({
      type: UPDATE_DIMENSION_MATRIX,
      payload: payload
}); */

export const updateDimensionMatrixSuccess = (payload) => ({
      type: UPDATE_DIMENSION_MATRIX,
      payload: payload
});

export const updateCellMatrix = (payload) => ({
      type: UPDATE_CELL_MATRIX,
      payload: payload
});

export const updateDimensionMatrix = (payload) => {

      return function(dispatch) {

            let matrix = [];

            [...Array(payload.rows)].map((row, indexRow) => {
                  let tempArray = [];
                  [...Array(payload.columns)].map((column, indexColumn) => {
                        tempArray.push(
                              {
                                    "key": indexRow + "-" + indexColumn,
                                    "status": false
                              });
                  });

                  matrix.push(tempArray);
            });
            
            dispatch(updateDimensionMatrixSuccess(matrix));
      }
}
