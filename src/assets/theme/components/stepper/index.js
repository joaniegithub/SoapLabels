/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// Material Dashboard 2 PRO React base styles
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

export default {
	styleOverrides: {
		root: {
			margin: `0 -${pxToRem(6)} ${pxToRem(10)}`,
		},
	},
};
