import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import SquareIcon from "@mui/icons-material/Square";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/system";
import { colors } from "SoapHelper/SoapOilsCalculator/SoapOilsCalculator";
import OilsModal from "SoapHelper/SoapOilsCalculator/components/OilsModal";
import {
	useOilsData,
	useReducedOilsData,
} from "SoapHelper/SoapOilsCalculator/store/actions";
import * as React from "react";

const cssCustomInputOutput = `
	width: 48px;
	height: 24px;
	padding: 0 10px;
	border-radius: 4px;
	border: 1px solid #e8e8e8;
	transition: border 200ms ease-out;

	font-size: 0.875em;
	font-family: "Lato";
	font-weight: 400;
	line-height: 22px;
	text-align: right;
    flex-shrink: 0;

	&:focus {
		outline: none;
		border: 1px solid #888;
	}
`;

const StyledSpanElement = styled("span")`
	${cssCustomInputOutput}
	font-weight: 600;
	background-color: #e8e8e8;
`;
const StyledInputElement = styled("input")`
	${cssCustomInputOutput}
`;
const StyledButtonElement = styled("button")`
	border: 0;
	background-color: transparent;
	text-align; left;
	cursor: pointer;
    flex-grow: 1;
	margin: 0 4px;

	&:focus-visible {
		outline: none;
		background-color: #e8e8e8;
	}
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
	return <StyledInputElement {...props} ref={ref} />;
});
const CustomOutput = React.forwardRef(function CustomOutput(props, ref) {
	return <StyledSpanElement {...props} ref={ref} />;
});
const CustomButton = React.forwardRef(function CustomButton(props, ref) {
	return <StyledButtonElement {...props} ref={ref} />;
});

const styles = () => ({
	main: {
		display: "flex",
		flexDirection: "row",
		padding: 0,
	},
	listAllOils: {
		display: "flex",
		flexDirection: "column",
		width: 231,
		marginRight: "6px",
		marginLeft: "-4px",
	},
	listHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0 0 0 6px",
		lineHeight: "48px",
	},
	iconBtn: {
		width: "40px",
		height: "40px",
	},
	list: {
		padding: "0 !important",
		width: "100%",
		overflow: "auto",
		overflowX: "hidden",
		maxHeight: 720,
		maxWidth: 220,
		width: 220,
	},
	listItem: {
		padding: "0 2px !important",
		width: "100%",
	},
	listItemSelected: {
		padding: "0 2px !important",
		backgroundColor: "#eee",
		width: "100%",
	},
	listItemIcon: {
		minWidth: "24px !important",
		padding: "0 !important",
	},
	listItemCheckbox: {
		padding: "0 !important",
		margin: "0 !important",
	},
	listItemButton: {
		padding: "0 2px !important",
		fontSize: "0.875em",
		fontFamily: "Lato",
		margin: "0 4px",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		lineHeight: "28px",
		textAlign: "left",
	},
	listSelectedOils: {
		display: "flex",
		flexDirection: "column",
		width: 228,
		marginRight: "5px",
	},
	listItemSelectedIcon: {
		minWidth: "28px !important",
		width: "28px",
		height: "28px",
	},
});

const getListItemClass = (classes, selectedOil, oil) => {
	return selectedOil &&
		selectedOil !== "total" &&
		oil.name === selectedOil.name
		? classes.listItemSelected
		: classes.listItem;
};

const OilsListChooser = (props) => {
	const { classes, checkedOilsNames, onOilSelect } = props;
	const [oilsModalOpen, setOilsModalOpen] = React.useState(false);
	const [checkedOils, setCheckedOils] = React.useState([]);
	const [selectedOil, setSelectedOil] = React.useState(undefined);
	const [showAllOils, setShowAllOils] = React.useState(true);
	const [total, setTotal] = React.useState(0);
	const [showFavoritesOnly, setShowFavoritesOnly] = React.useState(false);
	const [oilsDataList, setOilsDataList] = React.useState([]);

	const oilsData = useOilsData();
	const reducedOilsData = useReducedOilsData();

	// Oils Modal
	const handleClickOpenOils = () => {
		setOilsModalOpen(true);
	};
	const handleOilsModalClose = () => {
		setOilsModalOpen(false);
	};

	const handleToggle = (oil) => () => {
		const currentOil = checkedOils.find(
			(checkedOil) => checkedOil.name === oil.name
		);
		const newChecked = [...checkedOils];

		if (!currentOil || currentOil.length === 0) {
			newChecked.push({ percent: 0, ...oil });
			checkedOilsNames.push(oil.name);
		} else {
			newChecked.splice(checkedOils.indexOf(currentOil), 1);
			checkedOilsNames.splice(checkedOilsNames.indexOf(oil.name), 1);
		}
		newChecked.sort((oilA, oilB) => (oilA.name > oilB.name ? 1 : -1));
		setCheckedOils(newChecked);
	};
	const handleClick = (oil) => () => {
		if (oil) {
			setSelectedOil(oil);
			onOilSelect([
				{ ...oil, percent: 100, color: checkedOils.indexOf(oil) },
			]);
		} else if (total === 100) {
			setSelectedOil("total");
			onOilSelect(checkedOils);
		}
	};
	const handleOpenOilsList = () => {
		setShowAllOils(true);
	};
	const handleMinimizeOilsList = () => {
		setShowAllOils(false);
	};
	const proportionChanged = (e, oil) => {
		const val = e.target.value;
		if (/^\d*$/.test(val)) {
			oil.percent = parseInt(val);
			const newTotal = checkedOils.reduce((a, b) => {
				return a + (b.percent ? b.percent : 0);
			}, 0);
			setTotal(newTotal);
			if (newTotal === 100) {
				onOilSelect(checkedOils);
			}
		} else {
			return false;
		}
	};

	const handlerToggleShowFavorites = () => {
		const newShowFavoritesOnly = !showFavoritesOnly;
		setShowFavoritesOnly(newShowFavoritesOnly);
	};

	React.useEffect(() => {
		if (checkedOilsNames && oilsData) {
			// In case we need to init with percent values
			// const oils = checkedOilsNames.map((checkedOilName) => {
			// 	const foundCheckedOil = checkedOils.find(
			// 		(o) => o.name === checkedOilName
			// 	);
			// 	if (foundCheckedOil) {
			// 		return foundCheckedOil;
			// 	}
			// 	const oil = oilsData.find((o) => o.name === checkedOilName);
			// 	return { percent: 0, ...oil };
			// 	// checkedOilsNames.includes(checkedOil.name)
			// });

			let oils = oilsData.filter((oil) =>
				checkedOilsNames.includes(oil.name)
			);
			oils = oils.map((oil) => {
				return { percent: 0, ...oil };
			});
			setCheckedOils(oils);
		}
	}, [checkedOilsNames, oilsData]);

	React.useEffect(() => {
		setOilsDataList(showFavoritesOnly ? reducedOilsData : oilsData);
	}, [showFavoritesOnly]);

	if (!oilsData) {
		return null;
	}

	const cllListItemTotalBtn =
		selectedOil && selectedOil === "total"
			? classes.listItemSelected
			: classes.listItem;

	return (
		<div className={classes.main}>
			{showAllOils && (
				<div className={classes.listAllOils}>
					<div className={classes.listHeader}>
						<h3>
							Oils List
							<IconButton
								onClick={handleClickOpenOils}
								style={{ marginLeft: "10px" }}
								size="small"
							>
								<InfoIcon />
							</IconButton>
							<IconButton
								onClick={handlerToggleShowFavorites}
								size="small"
							>
								{showFavoritesOnly ? (
									<FavoriteIcon />
								) : (
									<FavoriteBorderIcon />
								)}
							</IconButton>
						</h3>
						<IconButton
							onClick={handleMinimizeOilsList}
							className={classes.iconBtn}
						>
							<KeyboardDoubleArrowLeftIcon />
						</IconButton>
					</div>
					<List className={classes.list}>
						{oilsDataList.map((oil, id) => {
							const labelId = oil.name;
							const cllListItem = getListItemClass(
								classes,
								selectedOil,
								oil
							);
							return (
								<ListItem
									key={id}
									disablePadding
									className={cllListItem}
								>
									<ListItemIcon
										className={classes.listItemIcon}
									>
										<Checkbox
											edge="start"
											checked={
												checkedOilsNames.indexOf(
													oil.name
												) !== -1
											}
											onClick={handleToggle(oil)}
											tabIndex={-1}
											disableRipple
											inputProps={{
												"aria-labelledby": labelId,
											}}
											className={classes.listItemCheckbox}
										/>
									</ListItemIcon>
									<CustomButton
										className={classes.listItemButton}
										role={undefined}
										onClick={handleClick(oil)}
									>
										{labelId}
									</CustomButton>
								</ListItem>
							);
						})}
					</List>
				</div>
			)}
			<div className={classes.listSelectedOils}>
				<div className={classes.listHeader}>
					<h3>Selected Oils</h3>
					{!showAllOils && (
						<IconButton
							onClick={handleOpenOilsList}
							className={classes.iconBtn}
						>
							<AddCircleIcon />
						</IconButton>
					)}
				</div>
				<List className={classes.list}>
					{checkedOils.map((oil, i) => {
						const cllListItem = getListItemClass(
							classes,
							selectedOil,
							oil
						);
						return (
							<ListItem
								className={cllListItem}
								key={`listItem${i}`}
							>
								<ListItemIcon
									className={classes.listItemSelectedIcon}
								>
									<SquareIcon
										style={{
											width: "28px",
											height: "28px",
											color: colors[i],
										}}
									/>
								</ListItemIcon>
								<CustomButton
									onClick={handleClick(oil)}
									className={classes.listItemButton}
								>
									{oil.name}
								</CustomButton>
								<CustomInput
									aria-label="Oil Percentage"
									value={
										isNaN(oil.percent) ? "" : oil.percent
									}
									onChange={(e) => proportionChanged(e, oil)}
								/>
							</ListItem>
						);
					})}
					{checkedOils.length > 0 ? (
						<ListItem className={cllListItemTotalBtn}>
							<ListItemIcon
								className={classes.listItemSelectedIcon}
							>
								<SquareIcon
									style={{
										width: "28px",
										height: "28px",
										color: "#000",
									}}
								/>
							</ListItemIcon>
							<CustomButton
								className={classes.listItemButton}
								onClick={handleClick(undefined)}
							>
								Total
							</CustomButton>
							<CustomOutput aria-label="Demo input">
								{total}
							</CustomOutput>
						</ListItem>
					) : null}
				</List>
			</div>
			<OilsModal
				oilsModalOpen={oilsModalOpen}
				onCloseOilsModal={handleOilsModalClose}
			/>
		</div>
	);
};
export default withStyles(styles, { name: "OilsListChooser" })(OilsListChooser);
