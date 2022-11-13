import * as constants from "./constants";
import { useSelector } from "react-redux";

export const useSettings = () => {
	return useSelector((state) => {
		return state.settings;
	});
};
export const useSoapLabels = () => {
	return useSelector((state) => {
		return state.soapLabels;
	});
};
export const useCurrentSoapLabel = () => {
	return useSelector((state) => {
		return state.currentSoapLabel;
	});
};

export const selectCurrentSoapLabel = (_currentSoapLabel) => {
	// console.log(_currentSoapLabel, 'currentSoapLabel');
	return {
		type: constants.SET_CURRENT_SOAP_LABEL,
		currentSoapLabel: _currentSoapLabel,
	};
};
export const addSoapLabel = (_soapLabelData) => {
	// console.log(_soapLabels, 'soapLabels');
	return {
		type: constants.ADD_SOAP_LABEL,
		soapLabel: _soapLabelData,
	};
};
export const editSoapLabel = (_soapLabelToEdit, _soapLabelData) => {
	// console.log(_soapLabelData, _soapLabelToEdit, 'dispatchEditSoapLabel');
	return {
		type: constants.EDIT_CURRENT_SOAP_LABEL,
		soapLabelData: _soapLabelData,
		soapLabelToEdit: _soapLabelToEdit,
	};
};
export const deleteSoapLabel = (_soapLabelToDelete) => {
	// console.log(_soapLabels, 'soapLabels');
	return {
		type: constants.DELETE_CURRENT_SOAP_LABEL,
		soapLabelToDelete: _soapLabelToDelete,
	};
};

export const editSettings = (_settingsData) => {
	console.log(_settingsData, "settingsData");
	return {
		type: constants.EDIT_SETTINGS,
		settings: _settingsData,
	};
};
