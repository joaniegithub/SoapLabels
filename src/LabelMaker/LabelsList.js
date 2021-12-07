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

import { useDispatch } from 'react-redux';
import { addSoapLabel, editSoapLabel, useSoapLabels, useCurrentSoapLabel, selectCurrentSoapLabel, deleteSoapLabel, editSettings } from '../store/actions';

export default function LabelsList(props) {
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
	}
	const handleLabelModalClose = () => {
		setLabelModalOpen(false);
		dispatch(selectCurrentSoapLabel(undefined));
	}
	
	// (New / Edit)
	const saveLabel = (name, date, ingredients, soapCode, soapIngredients, soapFragrances, soapColorants, phrase, useSoapCalcRecipe, translateFrench) => {
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
		dispatch(editSettings({translateFrench}));
		dispatch(selectCurrentSoapLabel(undefined));
	}
	
	// Change Qty
	const handleSoapLabelQtyChange = (soapLabel, qty) => {
		const soapLabelData = {
			quantity:  parseInt(qty),
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
					{soapLabels && soapLabels.length ? soapLabels.map(soapLabel => {
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
							<Button variant="outlined" onClick={handleConfirmDeleteDisagree}>No</Button>
							<Button variant="contained" onClick={handleConfirmDeleteClose} autoFocus>
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
}
