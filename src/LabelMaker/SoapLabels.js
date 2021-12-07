import './LabelsList.css';
import * as React from 'react';
import { Box } from '@mui/material';

import LabelsList from './LabelsList';
import LabelsPrintView from './LabelsPrintView';

// import { useDispatch } from 'react-redux';
import { useSoapLabels, useSettings } from '../store/actions';

export default function SoapLabels() {

	const soapLabels = useSoapLabels();
	const settings = useSettings();

	return (
		<Box className="box">
			{settings && soapLabels && (
				<React.Fragment>
					<LabelsList />
					<LabelsPrintView />
				</React.Fragment>
			)}
		</Box>
	);
}
