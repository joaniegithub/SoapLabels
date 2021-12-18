import { withStyles } from "@material-ui/core/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import {
	rightAbsoluteContainer,
	wrapperForAbsolute,
	noPrint,
} from "SoapHelper/styles/styles";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

const styles = () => ({
	header: {
		padding: "30px 0 15px 0 !important",
		position: "relative",
		display: "flex !important",
		flexDirection: "row",
		alignItems: "center",
		...wrapperForAbsolute,
		...noPrint,
	},
	mainTitle: {
		fontFamily: "Shadows Into Light",
		fontSize: "24px",
		lineHeight: "40px",
		margin: "0 30px 0 0",
		display: "block",
	},

	bgSwitcherContainer: {
		padding: "30px 0 15px 0",
		display: "flex",
		...rightAbsoluteContainer,
	},
	link: {
		textDecoration: "none",
		fontWeight: 600,
		color: "#666",
		"&:hover": {
			textDecoration: "underline",
		},
	},
	currentLlink: {
		textDecoration: "none",
		fontWeight: 600,
		color: "#000",
		cursor: "default",
	},
});

const Header = (props) => {
	const location = useLocation();
	const { classes, onBgTileChange, images } = props;
	const [bgTileIndex, setBgTileIndex] = React.useState(0);
	// Background
	const handlePreviousBg = () => {
		let nextBgTileIndex = bgTileIndex - 1;
		if (nextBgTileIndex < 0) {
			nextBgTileIndex = images.length - 1;
		}
		updateBgTileIndex(nextBgTileIndex);
	};
	const handleNextBg = () => {
		let nextBgTileIndex = bgTileIndex + 1;
		if (nextBgTileIndex >= images.length) {
			nextBgTileIndex = 0;
		}
		updateBgTileIndex(nextBgTileIndex);
	};
	const updateBgTileIndex = (nextBgTileIndex) => {
		const cookies = new Cookies();
		cookies.set("SoapBgTileIndex", nextBgTileIndex, { path: "/" });
		setBgTileIndex(nextBgTileIndex);
		onBgTileChange(nextBgTileIndex);
	};
	React.useEffect(() => {
		const cookies = new Cookies();
		const _bgTileIndex = parseInt(cookies.get("SoapBgTileIndex")) || 0;
		setBgTileIndex(_bgTileIndex);
		onBgTileChange(_bgTileIndex);
	}, []);

	return (
		<div className={classes.header}>
			<h1 className={classes.mainTitle}>Soap Helper</h1>
			<div>
				<Link
					className={
						location.pathname === "/calculator"
							? classes.currentLlink
							: classes.link
					}
					to="/calculator"
				>
					Calculator
				</Link>{" "}
				|{" "}
				<Link
					className={
						location.pathname === "/labels"
							? classes.currentLlink
							: classes.link
					}
					to="/labels"
				>
					Labels
				</Link>
			</div>
			<div className={classes.bgSwitcherContainer}>
				<IconButton onClick={handlePreviousBg}>
					<ArrowBackIosNewIcon />
				</IconButton>
				<IconButton onClick={handleNextBg}>
					<ArrowForwardIosIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default withStyles(styles, { name: "Header" })(Header);
