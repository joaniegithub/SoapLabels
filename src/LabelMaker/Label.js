import './Label.css';
import * as React from 'react';
import { Grid } from '@mui/material';



export default function Label(props) {

	return (
		<Grid item xs={props.size} className="labelGridItem">
			<p className="labelSoapName">{props.soapName}</p>
			<p className="labelSoapIngredients">{props.ingredients}</p>
			<p className="labelSoapBrand">{props.brand}</p>
		</Grid>
	);
}
