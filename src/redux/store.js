import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const camperPersistConfig = {
	key: "camper",
	storage,
	whitelist: ["favoriteCampers"],
};

export const store = configureStore({
	reducer: {
		campers: persistReducer(camperPersistConfig, campersReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
