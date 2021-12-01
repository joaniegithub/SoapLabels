import './LabelMaker.css';
import * as React from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import Cookies from 'universal-cookie';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import NewLabelModal from './NewLabelModal';
import LabelsPrintView from './LabelsPrintView';

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import PrintIcon from '@mui/icons-material/Print';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';


export default function LabelMaker() {

	const [soapLabels, setSoapLabels] = React.useState([]);
	const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [editLabel, setEditLabel] = React.useState({});

	// Create New Label Dialog
	const handleOpen = () => {
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
		setEditLabel({});
	}
	
	const saveNewLabel = (name, ingredients, brand) => {
		soapLabels.push({name, ingredients, brand, quantity: 1});
		saveSoapLabels(soapLabels);
		setEditLabel({});
	}
	
	// Edit / Delete
	const handleSoapLabelQtyChange = (soapLabel, event) => {
		soapLabel.quantity = parseInt(event.target.value);
		saveSoapLabels(soapLabels);
	};
	const handleEdit = (soapLabel) => {
		setEditLabel(soapLabel);
		setOpen(true);
	};
	const handleDelete = (soapLabel) => {
		setEditLabel(soapLabel);
		setConfirmDeleteOpen(true);
	};
	// Confirm Delete Dialog
	const handleConfirmDeleteClose = () => {
		setConfirmDeleteOpen(false);
		const index = soapLabels.indexOf(editLabel);
		if (index > -1) {
			soapLabels.splice(index, 1);
			setSoapLabels(soapLabels);
			saveSoapLabels(soapLabels);
		}
		setEditLabel({});
	};
	const handleConfirmDeleteDisagree = () => {
		setConfirmDeleteOpen(false);
		setEditLabel({});
	};

	// Save
	const saveSoapLabels = (_soapLabels) => {
		const cookies = new Cookies();
		cookies.set('SoapLabels', JSON.stringify(soapLabels), { path: '/' });
		console.log(cookies.get('SoapLabels'));
	};

	// Print
	const handlePrint = () => {
		window.print();
	};

	// Settings
	const handleSettings = () => {
		
	};
	
	React.useEffect(() => {
		const cookies = new Cookies();
		setSoapLabels(cookies.get('SoapLabels'));
	}, []);
	
	let index = 0;

	return (
		<Box className="box">
			<Grid className="gridSettings noPrint">
				<div className="wrapperForAbsolute">
					<h2 className="secondTitle">Soap Label List</h2>
					<div className="rightAbsoluteContainer">
						<Button onClick={handleOpen} endIcon={<AddCircleIcon />}>New Soap Label</Button>
					</div>
				</div>
				<Grid container spacing={0} className="soapLabelRows">
					{soapLabels.map(soapLabel => {
						index++;
						return(
							<Grid
								item xs={12}
								className="soapLabelRow wrapperForAbsolute"
								key={`soapLabelRow-${index}`}
							>
								<span className="soapLabelRowName">{soapLabel.name} </span>
								<div className="soapLabelButtons rightAbsoluteContainer" >
									<TextField
										className="soapLabelRowQty"
										label="Quantity"
										type="number"
										size="small"
										min="1"
										value={soapLabel.quantity}
										onChange={(e) => handleSoapLabelQtyChange(soapLabel, e)}
										InputLabelProps={{
											shrink: true,
										}}
									/>
									{/*<TextField
										id="soap-fragrances"
										className="soapLabelRowQty"
										size="small"
										label="Qty"
										value={soapLabel.quantity}
										onChange={(e) => handleSoapLabelQtyChange(soapLabel, e)}
										style={{ width: '60px', height: '24px' }}
									/>*/}
									<IconButton onClick={(e) => handleEdit(soapLabel)}><EditIcon/></IconButton>
									<IconButton onClick={(e) => handleDelete(soapLabel)}><CloseIcon/></IconButton>
								</div>
							</Grid>
						);
					})}
				</Grid>
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
			</Grid>
			<NewLabelModal
				open={open}
				onClose={handleClose}
				saveNewLabel={saveNewLabel}
				editLabel={editLabel}
			/>
			<div className="wrapperForAbsolute noPrint">
				<h2 className="secondTitle">Soap Labels Print Preview</h2>
				<div className="rightAbsoluteContainer">
					<IconButton onClick={handlePrint}><PrintIcon/></IconButton>
					<IconButton onClick={handleSettings}><SettingsIcon/></IconButton>
				</div>
			</div>

			<LabelsPrintView soapLabels={soapLabels} />

		</Box>
	);
}
