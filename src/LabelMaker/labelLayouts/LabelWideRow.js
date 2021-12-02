import './LabelWideRow.css';
import * as React from 'react';
import { Grid } from '@mui/material';



export default function Label(props) {

	if (!props || !props.settings || !props.settings.padding) {
		return null;
	}
	const {pt, pb, pl1, pr1, pl2, pr2} = props.settings.padding;
	const leftColumnWidth = props.settings.leftColumnWidth;

	const style = {fontFamily: props?.settings?.font};

	return (
		<Grid xs={12} item
			className="labelWideRowGridItem"
			paddingTop={pt+'px'}
			paddingBottom={pb+'px'}>
			<Grid item 
				xs={12*leftColumnWidth} 
				paddingLeft={pl1+'px'}
				paddingRight={pr1+'px'}
				className="labelWideRowGridItemLeft"
			>
				<p className="labelWideRowSoapIngredients">{props.ingredients}</p>
			</Grid>
			<Grid item 
				xs={12*(1-leftColumnWidth)} 
				paddingLeft={pl2+'px'}
				paddingRight={pr2+'px'}
				className="labelWideRowGridItemRight" 
			>
				<p className="labelWideRowSoapBrand">{props.brand}</p>
				<p style={style} className="labelWideRowSoapName">{props.soapName}</p>
				{props.phrase && (<p className="labelWideRowSoapPhrase">{props.phrase}</p>)}
			</Grid>
		</Grid>
	);
}
