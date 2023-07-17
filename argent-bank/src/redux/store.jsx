import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from "../features/user/firstName";
import lastNameReducer from "../features/user/lastName";
import tokenReducer from "../features/Token/token";

export const store = configureStore({
    reducer: {
        firstName: firstNameReducer,
        lastName: lastNameReducer,
        token: tokenReducer,
    },
});