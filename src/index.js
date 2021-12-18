import reportWebVitals from "./reportWebVitals";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Home from "SoapHelper/Home/Home";
import SoapLabels from "SoapHelper/SoapLabels/SoapLabels";
import SoapOilsCalculator from "SoapHelper/SoapOilsCalculator/SoapOilsCalculator";
// import { oilsData } from "SoapHelper/SoapOilsCalculator/data/oilsData";
import theme from "assets/theme";
import "index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, HashRouter } from "react-router-dom";

// const oilsD = oilsData;
// let completeStr = "";
// oilsD.forEach((oilData, id) => {
// 	completeStr = `${completeStr}
// 	{
// 		id: "${id}",
// 		name: "${oilData.name}",
// 		description: "${oilData.description}",
// 		sap_naoh: ${oilData.sap_naoh},
// 		sap_koh: ${oilData.sap_koh},
// 		iodine: ${oilData.iodine},
// 		ins: ${oilData.ins},
// 		hardness: ${oilData.hardness},
// 		cleansing: ${oilData.cleansing},
// 		condition: ${oilData.condition},
// 		bubbly: ${oilData.bubbly},
// 		creamy: ${oilData.creamy},
// 		longevity: ${oilData.longevity},
// 		lauric: ${Math.round(oilData.acid_type_lauric * 100)},
// 		myristic: ${Math.round(oilData.acid_type_myristic * 100)},
// 		palmitic: ${Math.round(oilData.acid_type_palmitic * 100)},
// 		stearic: ${Math.round(oilData.acid_type_stearic * 100)},
// 		ricinoleic: ${Math.round(oilData.acid_type_ricinoleic * 100)},
// 		oleic: ${Math.round(oilData.acid_type_oleic * 100)},
// 		linoleic: ${Math.round(oilData.acid_type_linoleic * 100)},
// 		linolenic: ${Math.round(oilData.acid_type_linolenic * 100)},
// 		saturated: ${oilData.saturated},
// 		mono_unsat: ${oilData.mono_unsat},
// 		poly_unsat: ${oilData.poly_unsat},
// 	},`;
// });
// console.log(completeStr);

ReactDOM.render(
	<LocalizationProvider dateAdapter={DateAdapter}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/labels" element={<SoapLabels />} />
					<Route
						path="/calculator"
						element={<SoapOilsCalculator />}
					/>
				</Routes>
			</HashRouter>
		</ThemeProvider>
	</LocalizationProvider>,
	document.getElementById("root")
);

reportWebVitals();
