import * as constants from "./constants";
import { useSelector } from "react-redux";

export const useSettings = () => {
	return useSelector((state) => {
		return state.settings;
	});
};
export const useReducedOilsData = () => {
	return useSelector((state) => {
		return state.reducedOilsData;
	});
};
export const useOilsData = () => {
	return useSelector((state) => {
		return state.oilsData;
	});
};

export const setReducedOilsData = (_reducedOilsData, _reducedOilsDataIds) => {
	// console.log(_reducedOilsData, 'reducedOilsData');
	return {
		type: constants.SET_REDUCED_OILS_DATA,
		reducedOilsData: _reducedOilsData,
		reducedOilsDataIds: _reducedOilsDataIds,
	};
};

export const editSettings = (_settingsData) => {
	// console.log(_settingsData, 'settings');
	return {
		type: constants.EDIT_SETTINGS,
		settings: _settingsData,
	};
};

export const setStep = (_step) => {
	// console.log(_settingsData, 'settings');
	return {
		type: constants.SET_STEP,
		step: _step,
	};
};
// export const saveSettingsProperty = (_settingProperty) => {
// 	// console.log(_settingsData, 'settings');
// 	return {
// 		type: constants.SAVE_SETTING_PROPERTY_SETTINGS,
// 		settings: {...state.settings, _settingProperty},
// 	};
// };
