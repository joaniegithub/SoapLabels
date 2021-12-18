import { StyledP } from "./Label";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useSettings } from "SoapHelper/SoapLabels/store/actions";
import * as React from "react";

const styles = () => ({
	labelGridItem: {
		padding: "14px",
		border: "1px dotted #eee",
		display: "inline-block",
		width: "100%",
	},
	labelSoapName: {
		fontFamily: "Shadows Into Light",
		fontSize: "24px",
		lineHeight: "18px",
		margin: "0 0 10px",
	},
	labelSoapIngredients: {
		fontFamily: "Lato",
		fontSize: "10px",
		lineHeight: "12px",
		margin: "10px 0 10px",
		fontWeight: "300",
	},
	labelSoapBrand: {
		fontFamily: "Shadows Into Light",
		fontSize: "20px",
		lineHeight: "18px",
		margin: "10px 0 0",
	},
	labelSoapPhrase: {
		fontFamily: "Shadows Into Light",
		fontSize: "12px",
		lineHeight: "14px",
		margin: "10px 0 0",
	},
	labelSoapDate: {
		fontFamily: "Lato",
		fontSize: "9px",
		lineHeight: "14px",
		margin: "6px 0 -4px",
		textAlign: "right",
	},
});

const LabelColumns = (props) => {
	const settings = useSettings();

	const {
		classes,
		demo: demoProps,
		soapLabel,
		styleBackgroundColor,
		brand,
		demo,
		dateOptions,
		soapDate,
	} = props;

	const { pt, pb, pl, pr } = settings.padding;
	const layoutNbPerRow = settings.layoutNbPerRow;
	const textAlignment = settings.textAlignment;

	const styleFontAlign = {
		fontFamily: settings.font,
		textAlign: textAlignment,
	};
	const styleAlign = { textAlign: textAlignment };

	return (
		<Grid
			item
			className={classes.labelGridItem}
			xs={12 / layoutNbPerRow}
			paddingTop={pt + "px"}
			paddingBottom={pb + "px"}
			paddingLeft={pl + "px"}
			paddingRight={pr + "px"}
			style={styleBackgroundColor}
		>
			<StyledP style={styleFontAlign} className={classes.labelSoapName}>
				{soapLabel.name}
			</StyledP>
			<StyledP
				style={styleAlign}
				className={classes.labelSoapIngredients}
			>
				{soapLabel.ingredients}
			</StyledP>
			{brand && (
				<StyledP style={styleAlign} className={classes.labelSoapBrand}>
					{brand}
				</StyledP>
			)}
			{soapLabel.phrase && (
				<StyledP style={styleAlign} className={classes.labelSoapPhrase}>
					{soapLabel.phrase}
				</StyledP>
			)}
			{soapLabel.date && (
				<StyledP className={classes.labelSoapDate}>{soapDate}</StyledP>
			)}
		</Grid>
	);
};

export default withStyles(styles, { name: "LabelColumns" })(LabelColumns);
