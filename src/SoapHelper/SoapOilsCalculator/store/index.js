import reducer, { defaultSettings } from "./reducer";
import { oilsData } from "SoapHelper/SoapOilsCalculator/data/oilsData";
import { createStore } from "redux";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
	try {
		const stateToSave = { ...state };
		delete stateToSave.oilsData;
		delete stateToSave.reducedOilsData;
		const serialisedState = JSON.stringify(stateToSave);
		localStorage.setItem("SoapCalculatorState", serialisedState);
	} catch (e) {
		console.warn(e);
	}
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
	try {
		const serialisedState = localStorage.getItem("SoapCalculatorState");
		if (serialisedState === null) return undefined;
		const parsedState = JSON.parse(serialisedState);
		const mergedSettings = {
			...defaultSettings,
			...parsedState.settings,
		};
		let reducedOilsData;
		if (
			parsedState.reducedOilsDataIds &&
			parsedState.reducedOilsDataIds.length
		) {
			reducedOilsData = oilsData.filter((oil) => {
				return parsedState.reducedOilsDataIds.includes(oil.id);
			});
		} else {
			reducedOilsData = [...oilsData];
		}
		const newState = {
			...parsedState,
			settings: mergedSettings,
			oilsData,
			reducedOilsData,
		};
		return newState;
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const storeCalculator = createStore(reducer, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
storeCalculator.subscribe(() => saveToLocalStorage(storeCalculator.getState()));

export default storeCalculator;
