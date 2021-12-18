import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { DataGrid } from "@mui/x-data-grid";
import {
	useOilsData,
	setReducedOilsData,
	useReducedOilsData,
} from "SoapHelper/SoapOilsCalculator/store/actions";
import {
	rightAbsoluteContainer,
	wrapperForAbsolute,
	noPrint,
	modalHeader,
	largeModalBox,
	secondTitle,
} from "SoapHelper/styles/styles";
import * as React from "react";
import { useDispatch } from "react-redux";

const columnsProperties = [
	// { field: "id", headerName: "ID", width: 70 },
	{ field: "name", headerName: "Name", width: 150 },
	{ field: "sap_naoh", headerName: "SAP NaOH", type: "number", width: 94 },
	{ field: "sap_koh", headerName: "SAP_KOH", type: "number", width: 98 },
	{ field: "hardness", headerName: "Hardness", type: "number", width: 98 },
	{ field: "cleansing", headerName: "Cleansing", type: "number", width: 98 },
	{ field: "condition", headerName: "Condition", type: "number", width: 98 },
	{ field: "bubbly", headerName: "Bubbly", type: "number", width: 98 },
	{ field: "creamy", headerName: "Creamy", type: "number", width: 98 },
	{ field: "longevity", headerName: "Longevity", type: "number", width: 98 },
	{ field: "iodine", headerName: "Iodine", type: "number", width: 98 },
	{ field: "ins", headerName: "INS", type: "number", width: 98 },
];

const columnsFatty = [
	// { field: "id", headerName: "ID", width: 70 },
	{ field: "name", headerName: "Name", width: 150 },
	{
		field: "lauric",
		headerName: "lauric",
		type: "number",
		width: 88,
	},
	{
		field: "myristic",
		headerName: "myristic",
		type: "number",
		width: 88,
	},
	{
		field: "palmitic",
		headerName: "palmitic",
		type: "number",
		width: 88,
	},
	{
		field: "stearic",
		headerName: "stearic",
		type: "number",
		width: 88,
	},
	{
		field: "ricinoleic",
		headerName: "ricinoleic",
		type: "number",
		width: 88,
	},
	{
		field: "oleic",
		headerName: "oleic",
		type: "number",
		width: 88,
	},
	{
		field: "linoleic",
		headerName: "linoleic",
		type: "number",
		width: 88,
	},
	{
		field: "linolenic",
		headerName: "linolenic",
		type: "number",
		width: 88,
	},
	{ field: "saturated", headerName: "Saturated", type: "number", width: 98 },
	{
		field: "mono_unsat",
		headerName: "mono_unsat",
		type: "number",
		width: 88,
	},
	{
		field: "poly_unsat",
		headerName: "poly_unsat",
		type: "number",
		width: 88,
	},
];

const styles = () => ({
	largeModalBox,
	secondTitle,
	modalHeader: {
		...modalHeader,
		...wrapperForAbsolute,
	},
	rightAbsoluteContainer,
});

const OilsModal = (props) => {
	const { classes, onCloseOilsModal, oilsModalOpen } = props;
	const [columns, setColumns] = React.useState(columnsProperties);
	const [view, setView] = React.useState("properties");
	const [selectedOilsIds, setSelectedOilsIds] = React.useState([]);

	const dispatch = useDispatch();
	const oilsData = useOilsData();
	const reducedOilsData = useReducedOilsData();

	React.useEffect(() => {
		if (reducedOilsData) {
			const selectedOilsIds = reducedOilsData.map((oil) => oil.id);
			setSelectedOilsIds(selectedOilsIds);
		}
	}, [reducedOilsData]);

	const handleClose = () => {
		onCloseOilsModal();
	};

	const handleChangeView = (event) => {
		setView(event.target.value);
		setColumns(
			event.target.value === "fatty" ? columnsFatty : columnsProperties
		);
	};
	const handleSelectionModelChange = (
		selectionModel /*: GridSelectionModel*/,
		details /*: GridCallbackDetails*/
	) => {
		const selectedOilsIds = [];
		const selectedOils = selectionModel.map((index) => {
			selectedOilsIds.push(oilsData[index].id);
			return oilsData[index];
		});
		dispatch(setReducedOilsData(selectedOils, selectedOilsIds));
	};

	return (
		<Dialog open={oilsModalOpen} scroll="body" maxWidth={"1000px"}>
			<DialogContent dividers={false}>
				<Box className={classes.largeModalBox}>
					<div className={classes.modalHeader}>
						<h2 className={classes.secondTitle}>Oils List</h2>
						<FormControl component="fieldset">
							<RadioGroup
								aria-label="view"
								defaultValue="fatty"
								name="radio-view-group"
								value={view}
								onChange={handleChangeView}
								row
								style={{ marginLeft: "20px" }}
							>
								<FormControlLabel
									value="properties"
									control={<Radio />}
									label="Properties"
								/>
								<FormControlLabel
									value="fatty"
									control={<Radio />}
									label="Fatty Profile (in %)"
								/>
							</RadioGroup>
						</FormControl>
						<div className={classes.rightAbsoluteContainer}>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</div>
					</div>
					<div style={{ height: 780, width: "100%" }}>
						<DataGrid
							rows={oilsData}
							columns={columns}
							pageSize={50}
							rowsPerPageOptions={[50]}
							density="compact"
							checkboxSelection
							disableColumnMenu
							disableSelectionOnClick
							disableVirtualization
							onSelectionModelChange={handleSelectionModelChange}
							selectionModel={selectedOilsIds}
						></DataGrid>
					</div>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default withStyles(styles, { name: "OilsModal" })(OilsModal);
