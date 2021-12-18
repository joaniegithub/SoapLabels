import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import {
	rightAbsoluteContainer,
	gridItemClose,
	secondTitle,
	modalBox,
	gridForm,
} from "SoapHelper/styles/styles";
import * as React from "react";

const styles = () => ({
	modalBox,
	gridForm,
	secondTitle: {
		...secondTitle,
		margin: 0,
	},
	rightAbsoluteContainer,
	gridItemClose,
});

const PrivacyPolicyTermsConditions = (props) => {
	const { classes, onClosePrivacyTermsModal, privacyTermsModalOpen } = props;

	const handleClose = () => {
		onClosePrivacyTermsModal();
	};

	return (
		<Dialog open={privacyTermsModalOpen} scroll="paper" maxWidth={"1000px"}>
			<DialogContent dividers={false}>
				<Box className={classes.modalBox}>
					<Grid container spacing={2} className={classes.gridForm}>
						<Grid item xs={6}>
							<h2 className={classes.secondTitle}>
								Privacy Policy
							</h2>
						</Grid>
						<Grid item xs={6} className={classes.gridItemClose}>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</Grid>
						<Grid item xs={12}>
							<p>
								Joanie built the SoapLabels app as a Free app.
								This SERVICE is provided by Joanie at no cost
								and is intended for use as is.
							</p>
							<p>
								This page is used to inform visitors regarding
								my policies with the collection, use, and
								disclosure of Personal Information if anyone
								decided to use my Service.
							</p>
							<p>
								If you choose to use my Service, then you agree
								to the collection and use of information in
								relation to this policy. The Personal
								Information that I collect is used for providing
								and improving the Service. I will not use or
								share your information with anyone except as
								described in this Privacy Policy.
							</p>
							<p>
								The terms used in this Privacy Policy have the
								same meanings as in our Terms and Conditions,
								which are accessible at Soap Labels unless
								otherwise defined in this Privacy Policy.
							</p>

							<h3>Information Collection and Use</h3>
							<p>
								For a better experience, while using our
								Service, I may require you to provide us with
								certain personally identifiable information,
								including but not limited to nothing. The
								information that I request will be retained on
								your device and is not collected by me in any
								way.
							</p>

							{/*<h3>Log Data</h3>
							<p>I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (&ldquo;IP&rdquo;) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.</p>
							*/}

							<h3>Cookies</h3>
							<p>
								Cookies are files with a small amount of data
								that are commonly used as anonymous unique
								identifiers. These are sent to your browser from
								the websites that you visit and are stored on
								your device&#39;s internal memory.
							</p>
							<p>
								This Service does not use these
								&ldquo;cookies&rdquo; explicitly. However, the
								app may use third-party code and libraries that
								use &ldquo;cookies&rdquo; to collect information
								and improve their services. You have the option
								to either accept or refuse these cookies and
								know when a cookie is being sent to your device.
								If you choose to refuse our cookies, you may not
								be able to use some portions of this Service.
							</p>

							{/*<h3>Service Providers</h3>
							<p>I may employ third-party companies and individuals due to the following reasons:</p>
							<ul>
							<li>To facilitate our Service;</li>
							<li>To provide the Service on our behalf;</li>
							<li>To perform Service-related services; or</li>
							<li>To assist us in analyzing how our Service is used.</li>
							</ul>
							<p>I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
							*/}

							<h3>Security</h3>
							<p>
								I value your trust in providing us your Personal
								Information, thus we are striving to use
								commercially acceptable means of protecting it.
								But remember that no method of transmission over
								the internet, or method of electronic storage is
								100% secure and reliable, and I cannot guarantee
								its absolute security.
							</p>

							{/*<h3>Links to Other Sites</h3>
							<p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
							
							<h3>Children&rsquo;s Privacy</h3>
							<p>I do not knowingly collect personally identifiable information from children. I encourage all children to never submit any personally identifiable information through the Application and/or Services. I encourage parents and legal guardians to monitor their children&#39;s Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to us through the Application and/or Services, please contact us. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).</p>
							*/}

							<h3>Changes to This Privacy Policy</h3>
							<p>
								I may update our Privacy Policy from time to
								time. Thus, you are advised to review this page
								periodically for any changes. I will notify you
								of any changes by posting the new Privacy Policy
								on this page.
							</p>
							<p>This policy is effective as of 2021-12-07</p>

							<h3>Contact Us</h3>
							<p>
								If you have any questions or suggestions about
								my Privacy Policy, do not hesitate to contact me
								via Github:{" "}
								<a href="https://github.com/joaniegithub/SoapLabels">
									https://github.com/joaniegithub/SoapLabels.
								</a>
							</p>

							<h3>Terms</h3>
							<p>
								The content of this website is for general
								information purposes only. The content and the
								features are provided by SoapLabels. SoapLabels
								will, in no event, be liable for any loss
								whatsoever arising from the use of this website.
							</p>

							<h3>Copyright</h3>
							<p>
								This website and its content is copyright of
								SoapLabels - All Rights Reserved.
							</p>
							<p>
								Any redistribution or reproduction of part or
								all of the contents in any form is prohibited
								except for the generated view of the Soap Labels
								destined to be printed.
							</p>
							<p>
								You may not, except with our express written
								permission, distribute the content. Nor may you
								transmit it or store it in any other website or
								other form of electronic retrieval system.
							</p>
						</Grid>
					</Grid>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default withStyles(styles, { name: "PrivacyPolicyTermsConditions" })(
	PrivacyPolicyTermsConditions
);
