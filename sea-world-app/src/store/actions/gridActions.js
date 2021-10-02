export const UPDATE_DIMENSION_MATRIX = "UPDATE_DIMENSION_MATRIX";
export const UPDATE_CELL_MATRIX = "UPDATE_CELL_MATRIX";

export const updateDimensionMatrix = (payload) => ({
      type: UPDATE_DIMENSION_MATRIX,
      payload: generateMatrix(payload.columns, payload.rows)
});

export const updateCellMatrix = (payload) => ({
      type: UPDATE_CELL_MATRIX,
      payload: payload
});

const generateMatrix = (columns, rows) => {

      let matrix = [];

      [...Array(rows)].map((row, indexRow) => {
            let tempArray = [];
            [...Array(columns)].map((column, indexColumn) => {
                  tempArray.push(
                        {
                              "key": indexRow + "-" + indexColumn,
                              "status": false
                        });
            });

            matrix.push(tempArray);
      });

      return matrix;
}
