import reducer, { defaultSettings } from "./reducer";
import { createStore } from "redux";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem("SoapLabelsState", serialisedState);
	} catch (e) {
		console.warn(e);
	}
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
	try {
		const serialisedState = localStorage.getItem("SoapLabelsState");
		if (serialisedState === null) return undefined;
		const parsedState = JSON.parse(serialisedState);
		const mergedSettings = { ...defaultSettings, ...parsedState.settings };
		const newState = { ...parsedState, settings: mergedSettings };
		// console.log(newState);
		return newState;
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(reducer, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
