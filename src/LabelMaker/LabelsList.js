import './SoapLabels.css';
import * as React from 'react';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import LabelModal from './LabelModal';
import QuantitySelector from './components/QuantitySelector';

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function LabelsList(props) {
	const [settings] = React.useState(props.settings);
	const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
	const [labelModalOpen, setLabelModalOpen] = React.useState(false);
	const [editLabel, setEditLabel] = React.useState(undefined);

	// Label Modal
	const handleLabelModalOpen = () => {
		setLabelModalOpen(true);
		setEditLabel(undefined);
	}
	const handleLabelModalClose = () => {
		setLabelModalOpen(false);
		setEditLabel(undefined);
	}
	
	// (New / Edit)
	const saveLabel = (name, ingredients, soapCode, soapIngredients, soapFragrances, soapColorants, phrase, useSoapCalcRecipe, translateFrench) => {
		if (editLabel) {
			editLabel.name = name;
			editLabel.ingredients = ingredients;
			editLabel.soapCode = soapCode;
			editLabel.soapIngredients = soapIngredients;
			editLabel.soapFragrances = soapFragrances;
			editLabel.soapColorants = soapColorants;
			editLabel.phrase = phrase;
			editLabel.useSoapCalcRecipe = useSoapCalcRecipe;
			editLabel.translateFrench = translateFrench;
			console.log(editLabel);
		} else {
			props.soapLabels.push(
				{
					name, 
					ingredients, 
					soapCode, 
					soapIngredients, 
					soapFragrances, 
					soapColorants, 
					phrase, 
					useSoapCalcRecipe, 
					translateFrench, 
					quantity: 1,
				}
			);
		}
		props.saveSoapLabels(props.soapLabels);
		setEditLabel(undefined);
	}
	
	// Change Qty
	const handleSoapLabelQtyChange = (soapLabel, qty) => {
		soapLabel.quantity = parseInt(qty);
		props.saveSoapLabels(props.soapLabels);
	};
	// Edit
	const handleEdit = (soapLabel) => {
		setEditLabel(soapLabel);
		setLabelModalOpen(true);
	};
	// Delete
	const handleDelete = (soapLabel) => {
		setEditLabel(soapLabel);
		setConfirmDeleteOpen(true);
	};
	// Confirm Delete Dialog
	const handleConfirmDeleteClose = () => {
		setConfirmDeleteOpen(false);
		const index = props.soapLabels.indexOf(editLabel);
		if (index > -1) {
			props.soapLabels.splice(index, 1);
			props.saveSoapLabels(props.soapLabels);
		}
		setEditLabel(undefined);
	};
	const handleConfirmDeleteDisagree = () => {
		setConfirmDeleteOpen(false);
		setEditLabel(undefined);
	};
	
	let index = 0;

	return (
		<React.Fragment>
			<Grid className="gridSettings noPrint">
				<div className="wrapperForAbsolute">
					<h2 className="secondTitle">Soap Label List</h2>
					<div className="rightAbsoluteContainer">
						<Button onClick={handleLabelModalOpen} endIcon={<AddCircleIcon />}>New Soap Label</Button>
					</div>
				</div>
				<Grid container spacing={0} className="soapLabelRows">
					{props.soapLabels && props.soapLabels.length ? props.soapLabels.map(soapLabel => {
						index++;
						return(
							<Grid
								item xs={12}
								className="soapLabelRow wrapperForAbsolute"
								key={`soapLabelRow-${index}`}
							>
								<span className="soapLabelRowName">{soapLabel.name} </span>
								<div className="soapLabelButtons rightAbsoluteContainer" >
									<QuantitySelector
										quantity={soapLabel.quantity}
										handleUpdateQty={(qty) => handleSoapLabelQtyChange(soapLabel, qty)}
									/>
									<IconButton size="small" onClick={(e) => handleEdit(soapLabel)}><EditIcon/></IconButton>
									<IconButton size="small" onClick={(e) => handleDelete(soapLabel)}><CloseIcon/></IconButton>
								</div>
							</Grid>
						);
					}) : (
						<div>List is empty. Create a Soap Label</div>
					)}
				</Grid>
				{editLabel && (
					<Dialog
						open={confirmDeleteOpen}
						onClose={handleConfirmDeleteClose}
						aria-labelledby="alert-dialog-title"
					>
						<DialogTitle id="alert-dialog-title">
							{`Delete soap label "${editLabel.name}" ?`}
						</DialogTitle>
						<DialogActions>
							<Button variant="outlined" onClick={handleConfirmDeleteDisagree}>No</Button>
							<Button variant="contained" onClick={handleConfirmDeleteClose} autoFocus>
							Yes
							</Button>
						</DialogActions>
					</Dialog>
				)}
			</Grid>
			<LabelModal
				open={labelModalOpen}
				onClose={handleLabelModalClose}
				saveLabel={saveLabel}
				editLabel={editLabel}
				settings={settings}
			/>
		</React.Fragment>
	);
}
