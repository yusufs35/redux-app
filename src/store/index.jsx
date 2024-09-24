import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import themeReducer from "./slices/theme-slice";
import { Provider } from "react-redux";
import localeReducer from "./slices/locale-slice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
		locale: localeReducer,
	},
});

export const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
