import { withStyles } from "@material-ui/core/styles";
import InfoIcon from "@mui/icons-material/Info";
import PrintIcon from "@mui/icons-material/Print";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import { Grid } from "@mui/material";
import { Tooltip } from "@mui/material";
import SettingsModal from "SoapHelper/SoapLabels/SettingsModal";
import Label from "SoapHelper/SoapLabels/labelLayouts/Label";
import { useSoapLabels, useSettings } from "SoapHelper/SoapLabels/store/actions";
import {
	rightAbsoluteContainer,
	secondTitle,
	wrapperForAbsolute,
	noPrint,
} from "SoapHelper/styles/styles";
import * as React from "react";

const styles = () => ({
	rightAbsoluteContainer,
	secondTitle,
	wrapperForAbsolute: {
		...wrapperForAbsolute,
		...noPrint,
	},
	gridPrintLabels: {
		boxShadow: "rgb(100 100 111 / 50%) 2px 2px 7px 0px",
		display: "block",
		"@media print": {
			// boxShadow: "none",
			borderWidth: "0 !important",
			borderWidth: "0 !important",
			verticalAlign: "top",
			width: "100%",
		},
	},
	gridPrintRow: {
		display: "flex",
		alignItems: "flex-start",
		"@media print": {
			pageBreakInside: "avoid",
			breakInside: "avoid",
		},
	},
});

const LabelsPrintView = (props) => {
	const { classes } = props;
	const [settingsModalOpen, setSettingsModalOpen] = React.useState(false);

	const soapLabels = useSoapLabels();
	const settings = useSettings();

	const [layoutNbPerRow /*, setLayoutNbPerRow*/] = React.useState(settings.layoutNbPerRow);
	const [layout /*, setLayoutNbPerRow*/] = React.useState(settings.layout);

	// Settings Modal
	const handleClickOpenSettings = () => {
		setSettingsModalOpen(true);
	};
	const handleSettingsModalClose = () => {
		setSettingsModalOpen(false);
	};

	const renderLabels = (_soapLabels, _layoutNbPerRow, _layout) => {
		if (_layout === "wide") {
			_layoutNbPerRow = 1;
		}

		let labels = [];
		_soapLabels.forEach((soapLabel) => {
			for (let i = 0; i < soapLabel.quantity; i++) {
				labels.push(soapLabel);
			}
		});

		const rows = labels.reduceRight(
			(r, i, _, s) => (r.push(s.splice(0, _layoutNbPerRow)), r),
			[]
		);

		return rows.map((row, r) => {
			return (
				<div className={classes.gridPrintRow} key={`labelPreviewRow-${r}`}>
					{row.map((label, l) => {
						const index = r * _layoutNbPerRow + l;
						return <Label key={`labelPreview-${index}`} soapLabel={label} />;
					})}
				</div>
			);
		});
	};

	// Print
	const handleClickPrint = () => {
		window.print();
	};

	React.useEffect(() => {}, [layoutNbPerRow, layout]);

	const isColumnLayout = layout === "columns";
	const pagePadding = {
		pt: Math.max(0, settings.pagePadding.pt - settings.padding.pt) + "px",
		pb: Math.max(0, settings.pagePadding.pt - settings.padding.pb) + "px",
		pl:
			Math.max(
				0,
				settings.pagePadding.pl -
					(settings.dateLeft
						? 0
						: isColumnLayout
						? settings.padding.pl
						: settings.padding.pl1)
			) + "px",
		pr:
			Math.max(
				0,
				settings.pagePadding.pl -
					(isColumnLayout ? settings.padding.pr : settings.padding.pr2)
			) + "px",
	};

	return (
		<React.Fragment>
			<SettingsModal
				settingsModalOpen={settingsModalOpen}
				onCloseSettingsModal={handleSettingsModalClose}
			/>
			<div className={classes.wrapperForAbsolute}>
				<h2 className={classes.secondTitle}>
					Soap Labels Print Preview
					<Tooltip
						title="Lines are for visual aids only. And margins could render differently in your print settings."
						placement="right"
					>
						<IconButton size="small">
							<InfoIcon />
						</IconButton>
					</Tooltip>
				</h2>
				<div className={classes.rightAbsoluteContainer}>
					<IconButton onClick={handleClickPrint}>
						<PrintIcon />
					</IconButton>
					<IconButton onClick={handleClickOpenSettings}>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>
			<Grid item className={classes.gridPrintLabels} {...pagePadding}>
				{soapLabels && soapLabels.length
					? renderLabels(soapLabels, settings.layoutNbPerRow, settings.layout)
					: null}
			</Grid>
		</React.Fragment>
	);
};

export default withStyles(styles, { name: "LabelsPrintView" })(LabelsPrintView);
