import './LabelsPrintView.css';
import * as React from 'react';
import { Grid } from '@mui/material';
import Label from './Label';

export default function LabelMaker(props) {

	let index = 0;

	return (
		<Grid container className="gridPrintLabels">
			{props.soapLabels.map(soapLabel => {
				let labels = [];
				for (let i=0; i<soapLabel.quantity; i++){
					labels.push(
						<Label
							key={`labelPreview-${index}`}
							size={4} 
							soapName={soapLabel.name} 
							ingredients={soapLabel.ingredients} 
							brand={soapLabel.brand}
						/>
					);
					index++
				}
				return labels;
			})}
		</Grid>
	);
}
