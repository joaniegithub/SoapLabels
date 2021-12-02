import './Label.css';
import './LabelWideRow.css';
import * as React from 'react';
import { Grid } from '@mui/material';

export default function Label(props) {
	
	if (!props || !props.settings || !props.settings.padding) {
		return null;
	}
	const {pt, pb, pl, pr, pl1, pr1, pl2, pr2} = props.settings.padding;
	const layout = props.layout || "columns";
	const leftColumnWidth = props.settings.leftColumnWidth;
	const layoutNbPerRow = props.settings.layoutNbPerRow;

	const style = {fontFamily: props?.settings?.font};

	return (
		<React.Fragment>
			{layout === "columns" ? (
				<Grid item 
					className="labelGridItem" 
					xs={12/layoutNbPerRow} 
					paddingTop={pt+'px'}
					paddingBottom={pb+'px'}
					paddingLeft={pl+'px'}
					paddingRight={pr+'px'}
				>
					<p style={style} className="labelSoapName">{props.soapName}</p>
					<p className="labelSoapIngredients">{props.ingredients}</p>
					<p className="labelSoapBrand">{props.brand}</p>
					{props.phrase && (<p className="labelSoapPhrase">{props.phrase}</p>)}
				</Grid>
			) : (
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
			)}
		</React.Fragment>
	);
}
