import { withStyles } from "@material-ui/core/styles";
// import Step1 from "./steps/Step1";
// import Step2 from "./steps/Step2";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import Step1 from "SoapHelper/SoapOilsCalculator/steps/Step1";
import Step2 from "SoapHelper/SoapOilsCalculator/steps/Step2";
import storeCalculator from "SoapHelper/SoapOilsCalculator/store/";
import Layout from "SoapHelper/layout/Layout";
import * as React from "react";
import { Provider } from "react-redux";

const styles = () => ({
	box: {
		padding: "30px",
	},
});

const steps = ["Formulation settings", "Oils Selection", "Create an ad"];

const Main = (props) => {
	const { classes } = props;

	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	// const handleNext = () => {
	// 	let newSkipped = skipped;
	// 	if (isStepSkipped(activeStep)) {
	// 		newSkipped = new Set(newSkipped.values());
	// 		newSkipped.delete(activeStep);
	// 	}

	// 	setActiveStep((prevActiveStep) => prevActiveStep + 1);
	// 	setSkipped(newSkipped);
	// };

	// const handleBack = () => {
	// 	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	// };

	// const handleSkip = () => {
	// 	if (!isStepOptional(activeStep)) {
	// 		// You probably want to guard against something like this,
	// 		// it should never occur unless someone's actively trying to break something.
	// 		throw new Error("You can't skip a step that isn't optional.");
	// 	}

	// 	setActiveStep((prevActiveStep) => prevActiveStep + 1);
	// 	setSkipped((prevSkipped) => {
	// 		const newSkipped = new Set(prevSkipped.values());
	// 		newSkipped.add(activeStep);
	// 		return newSkipped;
	// 	});
	// };

	// const handleReset = () => {
	// 	setActiveStep(0);
	// };

	return (
		<Layout>
			<Box className={classes.box}>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						// if (isStepOptional(index)) {
						// 	labelProps.optional = (
						// 		<Typography variant="caption">
						// 			Optional
						// 		</Typography>
						// 	);
						// }
						// if (isStepSkipped(index)) {
						// 	stepProps.completed = false;
						// }
						return (
							<Step key={label} {...stepProps}>
								<StepLabel
									{...labelProps}
									onClick={handleStep(index)}
								>
									{label}
								</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{/*activeStep === steps.length ? (
						<React.Fragment>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									pt: 2,
								}}
							>
								<Box sx={{ flex: "1 1 auto" }} />
								<Button onClick={handleReset}>Reset</Button>
							</Box>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									pt: 2,
								}}
							>
								<Box sx={{ flex: "1 1 auto" }} />
								{isStepOptional(activeStep) && (
									<Button
										color="inherit"
										onClick={handleSkip}
										sx={{ mr: 1 }}
									>
										Skip
									</Button>
								)}
							</Box>
						</React.Fragment>
								)*/}
				{activeStep === 0 && <Step1 />}
				{activeStep === 1 && <Step2 />}
			</Box>
		</Layout>
	);
};

const SoapOilsCalculator = (props) => {
	return (
		<Provider store={storeCalculator}>
			<Main {...props} />
		</Provider>
	);
};

export default withStyles(styles, { name: "SoapOilsCalculator" })(
	SoapOilsCalculator
);
