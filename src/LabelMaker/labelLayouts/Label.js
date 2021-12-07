import './Label.css';
import './LabelWideRow.css';
import * as React from 'react';
import { Grid } from '@mui/material';
import { useSettings } from '../../store/actions';

export default function Label(props) {
	const settings = useSettings();

	const {layout: layoutProps, demo: demoProps, soapName, ingredients, phrase} = props;

	const {pt, pb, pl, pr, pl1, pr1, pl2, pr2} = settings.padding;
	const layout = layoutProps || settings.layout || "columns";
	const leftColumnWidth = settings.leftColumnWidth;
	const layoutNbPerRow = settings.layoutNbPerRow;
	const textAlignment = settings.textAlignment;
	const seperatorWidth = settings.seperatorWidth;
	const brand = settings.brand;
	const demo = !!demoProps;

	const styleFont = {fontFamily: settings.font};
	const styleFontAlign = {fontFamily: settings.font, textAlign: textAlignment};
	const styleAlign = {textAlign: textAlignment};
	const styleBackgroundColor = {backgroundColor:  demo ? '#f8f8f8' : 'transparent'};

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
					style={styleBackgroundColor}
				>
					<p style={styleFontAlign} className="labelSoapName">{soapName}</p>
					<p style={styleAlign} className="labelSoapIngredients">{ingredients}</p>
					{brand && (<p style={styleAlign} className="labelSoapBrand">{brand}</p>)}
					{phrase && (<p style={styleAlign} className="labelSoapPhrase">{phrase}</p>)}
				</Grid>
			) : (
				<Grid xs={12} item
					className="labelWideRowGridItem"
					paddingTop={pt+'px'}
					paddingBottom={pb+'px'}
					style={styleBackgroundColor}
				>
					<Grid item 
						xs={12*leftColumnWidth} 
						paddingLeft={pl1+'px'}
						paddingRight={pr1+'px'}
						className="labelWideRowGridItemLeft"
					>
						<p className="labelWideRowSoapIngredients">{ingredients}</p>
					</Grid>
					<Grid item 
						xs={12*(1-leftColumnWidth)} 
						paddingLeft={pl2+'px'}
						paddingRight={pr2+'px'}
						className="labelWideRowGridItemRight" 
						style={{borderLeft: `${seperatorWidth}px solid #000`}}
					>
						{brand && (<p className="labelWideRowSoapBrand">{brand}</p>)}
						<p style={styleFont} className="labelWideRowSoapName">{soapName}</p>
						{phrase && (<p className="labelWideRowSoapPhrase">{phrase}</p>)}
					</Grid>
				</Grid>
			)}
		</React.Fragment>
	);
}
