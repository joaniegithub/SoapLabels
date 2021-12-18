import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import * as React from "react";

const styles = () => ({
	// 	iconButton: {
	// 		padding: '2px',
	// 		'svg': {
	// 			width: '20px',
	// 			height: '20px',
	// 		},
	// 	}
	wrapperQuantity: {
		display: "flex",
		alignContent: "center",
		alignItems: "center",
		marginRight: "10px",
	},
	labelQuantity: {
		fontWeight: "bold",
		fontFamily: "Shadows Into Light",
		fontSize: "20px",
		margin: "0 4px",
	},
});

const QuantitySelector = (props) => {
	const { classes, quantity: quantityProps, handleUpdateQty } = props;
	const [quantity, setQuantity] = React.useState(quantityProps);

	const handleRemove = () => {
		updateQuantity(quantity - 1);
	};
	const handleAdd = () => {
		updateQuantity(quantity + 1);
	};
	const updateQuantity = (newQty) => {
		setQuantity(newQty);
		handleUpdateQty(newQty);
	};

	return (
		<div className={classes.wrapperQuantity}>
			<IconButton
				size="small"
				className="iconButton"
				onClick={handleRemove}
			>
				<RemoveIcon />
			</IconButton>
			<span className={classes.labelQuantity}>{quantity}</span>
			<IconButton size="small" className="iconButton" onClick={handleAdd}>
				<AddIcon />
			</IconButton>
		</div>
	);
};

export default withStyles(styles, { name: "QuantitySelector" })(
	QuantitySelector
);
