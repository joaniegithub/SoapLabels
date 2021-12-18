import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import LabelModal from "SoapHelper/SoapLabels/LabelModal";
import QuantitySelector from "SoapHelper/SoapLabels/components/QuantitySelector";
import {
	addSoapLabel,
	editSoapLabel,
	useSoapLabels,
	useCurrentSoapLabel,
	selectCurrentSoapLabel,
	deleteSoapLabel,
	editSettings,
} from "SoapHelper/SoapLabels/store/actions";
import {
	noPrint,
	rightAbsoluteContainer,
	secondTitle,
	wrapperForAbsolute,
} from "SoapHelper/styles/styles";
import * as React from "react";
import { useDispatch } from "react-redux";

const styles = () => ({
	gridSettings: {
		marginBottom: "30px !important",
		...noPrint,
	},
	secondTitle,
	wrapperForAbsolute,
	rightAbsoluteContainer,
	soapLabelRow: {
		padding: "0px 5px",
		backgroundColor: "#fafafa",
		margin: "5px 0 !important",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		...wrapperForAbsolute,
	},
	soapLabelRowName: {
		fontFamily: "Shadows Into Light",
		fontSize: "20px",
		lineHeight: "40px",
		margin: "0 0 0 10px",
	},
	soapLabelRowDate: {
		fontFamily: "Lato",
		fontSize: "10px",
		lineHeight: "40px",
		margin: "0 20px 0 0",
	},
	soapLabelButtons: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		alignContent: "centeer",
		marginLeft: "10px",
		height: "100%",
		...rightAbsoluteContainer,
	},
	soapLabelRowQty: {
		height: "24px !important",
		width: "80px",
		marginRight: "10px !important",
	},
	soapLabelRowButtons: {
		padding: "10px 0 5px",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
	},
});

const LabelsList = (props) => {
	const { classes } = props;
	const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
	const [labelModalOpen, setLabelModalOpen] = React.useState(false);
	const [soapLabelToDelete, setSoapLabelToDelete] = React.useState(undefined);

	const dispatch = useDispatch();
	const soapLabels = useSoapLabels();
	// const settings = useSettings();
	const currentSoapLabel = useCurrentSoapLabel();

	// Label Modal
	const handleLabelModalOpen = () => {
		setLabelModalOpen(true);
		dispatch(selectCurrentSoapLabel(undefined));
	};
	const handleLabelModalClose = () => {
		setLabelModalOpen(false);
		dispatch(selectCurrentSoapLabel(undefined));
	};

	// (New / Edit)
	const saveLabel = (
		name,
		date,
		ingredients,
		soapCode,
		soapIngredients,
		soapFragrances,
		soapColorants,
		phrase,
		useSoapCalcRecipe,
		translateFrench
	) => {
		const soapLabelData = {
			uid: new Date().getTime(),
			name,
			date,
			ingredients,
			soapCode,
			soapIngredients,
			soapFragrances,
			soapColorants,
			phrase,
			useSoapCalcRecipe,
			translateFrench,
		};
		if (currentSoapLabel) {
			dispatch(editSoapLabel(currentSoapLabel, soapLabelData));
		} else {
			soapLabelData.quantity = 1;
			dispatch(addSoapLabel(soapLabelData));
		}
		dispatch(editSettings({ translateFrench }));
		dispatch(selectCurrentSoapLabel(undefined));
	};

	// Change Qty
	const handleSoapLabelQtyChange = (soapLabel, qty) => {
		const soapLabelData = {
			quantity: parseInt(qty),
		};
		dispatch(editSoapLabel(soapLabel, soapLabelData));
	};
	// Edit
	const handleEdit = (soapLabel) => {
		dispatch(selectCurrentSoapLabel(soapLabel));
		setLabelModalOpen(true);
	};
	// Delete
	const handleDelete = (soapLabel) => {
		setSoapLabelToDelete(soapLabel);
		setConfirmDeleteOpen(true);
	};
	// Confirm Delete Dialog
	const handleConfirmDeleteClose = () => {
		setConfirmDeleteOpen(false);
		dispatch(deleteSoapLabel(soapLabelToDelete));
		setSoapLabelToDelete(undefined);
	};
	const handleConfirmDeleteDisagree = () => {
		setConfirmDeleteOpen(false);
		setSoapLabelToDelete(undefined);
	};

	let index = 0;
	const dateOptions = { year: "numeric", month: "long", day: "numeric" };

	return (
		<React.Fragment>
			<Grid className={classes.gridSettings}>
				<div className={classes.wrapperForAbsolute}>
					<h2 className={classes.secondTitle}>Soap Label List</h2>
					<div className={classes.rightAbsoluteContainer}>
						<Button
							onClick={handleLabelModalOpen}
							endIcon={<AddCircleIcon />}
						>
							New Soap Label
						</Button>
					</div>
				</div>
				<Grid container spacing={0} className={classes.soapLabelRows}>
					{soapLabels && soapLabels.length ? (
						soapLabels.map((soapLabel) => {
							index++;
							const soapDate = soapLabel.date
								? new Date(soapLabel.date).toLocaleDateString(
										"fr-FR",
										dateOptions
								  )
								: "";
							return (
								<Grid
									item
									xs={12}
									className={classes.soapLabelRow}
									key={`soapLabelRow-${index}`}
								>
									<span className={classes.soapLabelRowName}>
										{soapLabel.name}{" "}
									</span>
									<div className={classes.soapLabelButtons}>
										<span
											className={classes.soapLabelRowDate}
										>
											{soapDate}{" "}
										</span>
										<QuantitySelector
											quantity={soapLabel.quantity}
											handleUpdateQty={(qty) =>
												handleSoapLabelQtyChange(
													soapLabel,
													qty
												)
											}
										/>
										<IconButton
											size="small"
											onClick={(e) =>
												handleEdit(soapLabel)
											}
										>
											<EditIcon />
										</IconButton>
										<IconButton
											size="small"
											onClick={(e) =>
												handleDelete(soapLabel)
											}
										>
											<CloseIcon />
										</IconButton>
									</div>
								</Grid>
							);
						})
					) : (
						<div>List is empty. Create a Soap Label</div>
					)}
				</Grid>
				{soapLabelToDelete && (
					<Dialog
						open={confirmDeleteOpen}
						onClose={handleConfirmDeleteClose}
						aria-labelledby="alert-dialog-title"
					>
						<DialogTitle id="alert-dialog-title">
							{`Delete soap label "${soapLabelToDelete.name}" ?`}
						</DialogTitle>
						<DialogActions>
							<Button
								variant="outlined"
								onClick={handleConfirmDeleteDisagree}
							>
								No
							</Button>
							<Button
								variant="contained"
								onClick={handleConfirmDeleteClose}
								autoFocus
							>
								Yes
							</Button>
						</DialogActions>
					</Dialog>
				)}
			</Grid>
			<LabelModal
				labelModalOpen={labelModalOpen}
				onCloseLabelModal={handleLabelModalClose}
				saveLabel={saveLabel}
			/>
		</React.Fragment>
	);
};

export default withStyles(styles, { name: "LabelsList" })(LabelsList);
