import { withStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import PrivacyPolicyTermsConditions from "SoapHelper/layout/PrivacyPolicyTermsConditions";
import { noPrint } from "SoapHelper/styles/styles";
import * as React from "react";

const styles = () => ({
	footer: {
		padding: "10px 0 20px 0 !important",
		display: "flex !important",
		flexDirection: "row",
		justifyContent: "space-between",
		...noPrint,
	},
	footerLinks: {
		display: "block",
	},
	footerCopyright: {
		display: "block",
	},
});

const Footer = (props) => {
	const { classes } = props;
	const [privacyTermsModalOpen, setPrivacyTermsModalOpen] =
		React.useState(false);
	// Privacy policy / terms Modal
	const handlePrivacyTermsModalOpen = () => {
		setPrivacyTermsModalOpen(true);
	};
	const handlePrivacyTermsModalClose = () => {
		setPrivacyTermsModalOpen(false);
	};

	return (
		<React.Fragment>
			<div className={classes.footer}>
				<div className={classes.footerLinks}>
					<Button onClick={handlePrivacyTermsModalOpen}>
						Privacy Policy and Terms
					</Button>
				</div>
				<p className={classes.footerCopyright}>
					Soap Labels @2021 Joanie Lessnick
				</p>
			</div>
			<PrivacyPolicyTermsConditions
				privacyTermsModalOpen={privacyTermsModalOpen}
				onClosePrivacyTermsModal={handlePrivacyTermsModalClose}
			/>
		</React.Fragment>
	);
};

export default withStyles(styles, { name: "Footer" })(Footer);
