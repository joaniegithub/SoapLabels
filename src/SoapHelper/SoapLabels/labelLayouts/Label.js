import { withStyles } from "@material-ui/core/styles";
import { styled } from "@mui/system";
import LabelColumns from "SoapHelper/SoapLabels/labelLayouts/LabelColumns";
import LabelWide from "SoapHelper/SoapLabels/labelLayouts/LabelWide";
import { useSettings } from "SoapHelper/SoapLabels/store/actions";
import * as React from "react";

const styles = () => ({});

export const StyledP = styled("p")``;

const Label = (props) => {
	const settings = useSettings();

	const { classes, layout: layoutProps, demo: demoProps, soapLabel } = props;

	const layout = layoutProps || settings.layout || "columns";
	const brand = settings.brand;
	const demo = !!demoProps;
	const styleBackgroundColor = {
		backgroundColor: demo ? "#f8f8f8" : "transparent",
	};

	const dateOptions = { year: "numeric", month: "long", day: "numeric" };
	const soapDate = soapLabel.date
		? new Date(soapLabel.date).toLocaleDateString("fr-FR", dateOptions)
		: "";

	const allProps = {
		...props,
		styleBackgroundColor,
		brand,
		demo,
		dateOptions,
		soapDate,
	};
	return (
		<React.Fragment>
			{layout === "columns" ? (
				<LabelColumns {...allProps} />
			) : (
				<LabelWide {...allProps} />
			)}
		</React.Fragment>
	);
};

export default withStyles(styles, { name: "Label" })(Label);
