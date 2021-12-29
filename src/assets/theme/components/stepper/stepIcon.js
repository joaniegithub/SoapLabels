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
import colors from "assets/theme/base/colors";
import boxShadow from "assets/theme/functions/boxShadow";
// Material Dashboard 2 PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { white, primary, grey } = colors;

export default {
	styleOverrides: {
		root: {
			// background: "#9fc9ff",
			// fill: "#9fc9ff",
			// stroke: "#9fc9ff",
			// strokeWidth: pxToRem(10),
			// width: pxToRem(13),
			// height: pxToRem(13),
			// borderRadius: "50%",
			// zIndex: 99,
			// transition: "all 200ms linear",

			text: {
				fill: white.main,
				strokeWidth: 0,
				fontSize: "14px",
				fontWeight: 600,
			},

			"&.Mui-active": {
				background: white.main,
				fill: primary.main,
				stroke: white.main,
				borderColor: white.main,

				boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
			},

			"&.Mui-completed": {
				background: white.main,
				fill: primary.focus,
				stroke: white.main,
				borderColor: white.main,
				boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
			},
		},
	},
};
