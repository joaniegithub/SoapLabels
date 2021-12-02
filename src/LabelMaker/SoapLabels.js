import './LabelsList.css';
import * as React from 'react';
import { Box } from '@mui/material';
import Cookies from 'universal-cookie';

import LabelsList from './LabelsList';
import LabelsPrintView from './LabelsPrintView';

const defaultSettings = {
	"font": "Shadows Into Light",
	"brand": "Soap Brand",
	"layout": "columns",
	"layoutNbPerRow": 3,
	"leftColumnWidth": 0.65,
	"padding": {'pt': 20, 'pb': 20, 'pl': 20, 'pr': 20, 'pl1': 50, 'pr1': 50, 'pl2': 10, 'pr2': 20},
};

export default function SoapLabels() {

	const [soapLabels, setSoapLabels] = React.useState([]);
	const [settings, setSettings] = React.useState(undefined);

	// Save
	const saveSoapLabels = (_soapLabels) => {
		setSoapLabels([...soapLabels]);
		const cookies = new Cookies();
		cookies.set('SoapLabels', JSON.stringify(soapLabels), { path: '/' });
		console.log(cookies.get('SoapLabels'));
	};
	// Settings
	const saveSettings = (_settings) => {
		setSettings(_settings);
		const cookies = new Cookies();
		cookies.set('Settings', JSON.stringify(settings), { path: '/' });
		console.log(cookies.get('Settings'));
	};
	
	React.useEffect(() => {
		const cookies = new Cookies();
		setSoapLabels(cookies.get('SoapLabels') || []);
		setSettings(cookies.get('Settings') || defaultSettings);
	}, []);

	React.useEffect(() => {
		console.log(settings);
	}, [soapLabels, settings]);

	return (
		<Box className="box">
			{settings && (<LabelsList 
				settings={settings}
				saveSoapLabels={saveSoapLabels}
				soapLabels={soapLabels}
			/>)}
			{settings && (<LabelsPrintView 
				soapLabels={soapLabels}
				settings={settings}
				saveSettings={saveSettings}
			/>)}
		</Box>
	);
}
