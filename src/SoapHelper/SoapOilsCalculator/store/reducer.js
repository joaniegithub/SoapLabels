import * as constants from "./constants";
import { oilsData } from "SoapHelper/SoapOilsCalculator/data/oilsData";

export const defaultSettings = {
	// font: "Shadows Into Light",
};

const defaultState = {
	name: "Soap Calculator",
	oilsData: oilsData,
	reducedOilsData: [],
	reducedOilsDataIds: [],
	settings: defaultSettings,
};

const reducer = (state = defaultState, { type, ...payload }) => {
	//action déconstruite = {type, name}
	// console.log(state, type, payload);

	switch (type) {
		case constants.SET_REDUCED_OILS_DATA:
			return {
				...state,
				reducedOilsData: payload.reducedOilsData,
				reducedOilsDataIds: payload.reducedOilsDataIds,
			};

		case constants.EDIT_SETTINGS:
			return {
				...state,
				settings: { ...state.settings, ...payload.settings },
			};

		case constants.SET_STEP:
			return {
				...state,
				step: payload.step,
			};

		// case constants.SAVE_SETTING_PROPERTY_SETTINGS:
		// 	return {
		// 		...state,
		// 		settings: { ...state.settings, ...payload.settings },
		// 	};

		default:
			return state;
	}
}; // {reducer, startState, middleware}

export default reducer;
