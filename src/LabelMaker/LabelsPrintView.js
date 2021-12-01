import './LabelsPrintView.css';
import * as React from 'react';
import { Grid } from '@mui/material';
import Label from './Label';

export default function LabelMaker(props) {

	let index = 0;

	const renderedLabels = (soapLabels) => {
		let labels = [];
		soapLabels.forEach(soapLabel => {
			for (let i=0; i<soapLabel.quantity; i++){
				labels.push(soapLabel);
				index++
			}
		})
		const rows = labels.reduceRight((r,i,_,s) => (
			r.push(s.splice(0,3)),r
		),[])

		return rows.map((row, r) => {
			return (
			<div className="gridPrintRow">
				{row.map((label, l) => {
					return (
						<Label
							key={`labelPreview-${r*3+l}`}
							size={4} 
							soapName={label.name} 
							ingredients={label.ingredients} 
							brand={label.brand}
					/>
					);
				})}
			</div>
			);
		});
	};

	return (
		<div className="gridPrintLabels">
			{props.soapLabels && props.soapLabels.length ? renderedLabels(props.soapLabels) : null}
		</div>
	);
}
