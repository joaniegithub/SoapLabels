import { withStyles } from "@material-ui/core/styles";
import { Container } from "@mui/material";
import Header from "SoapHelper/layout//Header";
import Footer from "SoapHelper/layout/Footer";
import * as React from "react";

const images = [
	"arab_tile",
	"bush",
	"circuit",
	"full-bloom",
	"gplaypattern",
	"greek-vase",
	"herringbone",
	"hotel-wallpaper",
	"more-leaves",
	"moroccan-flower",
	"moroccan-flower-dark",
	"morocco-blue",
	"new_year_background",
	"regal",
	"ripples",
	"tree_bark",
	"trees",
];

const styles = () => ({
	container: {
		backgroundColor: "#fff",
		borderRadius: "30px",
		boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 20px 0px",
	},
});

const Layout = (props) => {
	const { classes } = props;
	const [mainClassName, setMainClassName] = React.useState("");

	const handlerBgTileChange = (bgTileIndex) => {
		setMainClassName(`main main_${images[bgTileIndex]}`);
	};

	// React.useEffect(() => {
	// 	setMainClassName(`main main_${images[bgTileIndex]}`);
	// }, [bgTileIndex]);

	return (
		<div className={mainClassName}>
			<Container>
				<Header onBgTileChange={handlerBgTileChange} images={images} />
				<div className={classes.container}>
					{/*<SoapLabels/>*/}
					{/*<SoapOilsCalculator />*/}
					{props.children}
				</div>
				<Footer />
			</Container>
		</div>
	);
};
export default withStyles(styles, { name: "Layout" })(Layout);
