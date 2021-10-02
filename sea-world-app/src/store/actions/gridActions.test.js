import configureStore from 'redux-mock-store';

const middlewares = []
const mockStore = configureStore(middlewares)

describe("User Actions", () => {
    let store;

    beforeEach(() => {
        const initialState = { matrix: [] };
        store = mockStore(initialState);
    });

    describe("matrix's action", () => {

        const updateDimensionMatrix = () => ({ type: 'UPDATE_DIMENSION_MATRIX' });

        it("dispatches UPDATE_DIMENSION_MATRIX action", () => {

            store.dispatch(updateDimensionMatrix());

            const actions = store.getActions();

            expect(actions[0].type).toEqual("UPDATE_DIMENSION_MATRIX");
        });
    })
})