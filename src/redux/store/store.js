import { builderReducer } from '../reducers/builderReducer'
import { receiptReducer } from '../reducers/receiptReducer'
const { configureStore } = require("@reduxjs/toolkit");

const reducer = {
    builder: builderReducer,
    receipt: receiptReducer
};
const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;