"use client";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  CssBaseline,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#4fc", // Aegis Overseas text color
    },
  },
});

// Navbar links
const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

export default function UserAgreement() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          minWidth: 380,
        }}>
        {/* Navbar */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "background.default",
            top: 0,
            zIndex: 1100, // Ensure AppBar is above starry background and content
          }}>
          <Toolbar>
            {isMobile ? (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                  overflow: "hidden",
                }}
                width={20}
                height={20}>
                <Image
                  src={"/images/logo.png"}
                  alt={`Home image`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 50,
                    width: 40,
                    height: 40,
                    overflow: "hidden",
                    marginRight: 2,
                  }}
                  width={30}
                  height={30}>
                  <Image
                    src={"/images/logo.png"}
                    alt={`Home image`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Aegis Overseas FZ-LLC
                </Typography>
              </>
            )}
            {navLinks.map((link) => (
              <Button
                key={link.id}
                color="inherit"
                onClick={() => router.push("/")}
                sx={{ mx: isMobile ? 0 : 1, fontSize: isMobile ? 12 : 16 }}>
                {link.name}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        {/* User Agreement Content */}
        <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
          <Container sx={{ py: 8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4, fontWeight: "bold" }}>
                TERMS OF USE
              </Typography>

              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ mb: 2, color: "text.primary" }}>
                Aegis Overseas FZ-LLC
              </Typography>

              <Typography
                paragraph
                align="center"
                fontSize={14}
                sx={{ mb: 6, opacity: 0.8 }}>
                Last updated: 23.03.2026
              </Typography>

              <Box sx={{ px: isMobile ? 0 : 15 }}>
                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  1. Introduction
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  These Terms of Use (“Terms”) govern your access to and use of the website located at http://aegisoverseas.ae/ (“Website”), operated by Aegis Overseas FZ-LLC, a company incorporated in the Ras Al Khaimah Free Zone, United Arab Emirates (“Company”, “we”, “us”, or “our”).
                  <br /><br />
                  By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, you must not use the Website.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  2. Nature of the Website
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  The Website is provided for informational and business communication purposes only.
                  <br /><br />
                  It presents:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>The Company’s international trading and brokerage services</li>
                  <li>General descriptions of logistics and supply capabilities</li>
                  <li>Contact and inquiry functionality</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  Nothing on this Website constitutes a binding offer, quotation, or contractual commitment.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  3. Scope of Services
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  The Company operates as:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Supplier (under direct contracts); and/or</li>
                  <li>Broker/intermediary, facilitating transactions between third-party buyers and sellers</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  When acting as a broker:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>The Company does not take ownership of goods</li>
                  <li>The Company does not act as manufacturer or end supplier</li>
                  <li>The Company earns commission-based compensation</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  All specific rights and obligations are governed exclusively by separate written agreements.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  4. No Reliance on Website Content
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  All information on the Website is provided on a general, non-binding basis.
                  <br /><br />
                  While we aim for accuracy, we do not guarantee that:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Information is complete, current, or error-free</li>
                  <li>Services described will be available in all cases</li>
                  <li>Any logistics timelines, pricing, or outcomes will be achieved</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  Users must rely only on formal commercial agreements, not Website content.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  5. Intellectual Property
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  The Website and its original content (including text, layout, and design elements) are owned by or licensed to the Company and are protected by applicable laws.
                  <br /><br />
                  However, references to third-party manufacturers, brands, or products are for informational purposes only.
                  <br />
                  All trademarks, trade names, and logos belong to their respective owners.
                  <br />
                  Such references do not imply affiliation, authorization, or endorsement.
                  <br /><br />
                  You may not copy, reproduce, or use Website content without prior written consent, except for personal or internal business use.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  6. Acceptable Use
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  You agree not to:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Use the Website for unlawful or fraudulent purposes</li>
                  <li>Interfere with Website functionality or security</li>
                  <li>Attempt unauthorized access to systems or data</li>
                  <li>Submit false or misleading information</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  We reserve the right to restrict access in case of misuse.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  7. Contact Forms and Communications
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  By submitting an inquiry via the Website, you:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Confirm that the information provided is accurate</li>
                  <li>Agree that we may contact you regarding your request</li>
                  <li>Acknowledge that submission does not create a contractual relationship</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  Any contractual engagement requires a separate written agreement.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  8. Third-Party Relationships
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  The Website may reference or involve third parties (e.g., manufacturers, logistics providers, buyers, sellers).
                  <br /><br />
                  The Company:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Is not responsible for third-party performance</li>
                  <li>Does not guarantee third-party products or services</li>
                  <li>Acts only within the role defined in the конкрет transaction (supplier or broker)</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  All third-party engagements are subject to separate contractual terms.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  9. Logistics Disclaimer
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  Descriptions of logistics services (including transport, delivery timelines, insurance, and tracking) are indicative only.
                  <br /><br />
                  Actual performance may vary due to:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Customs procedures</li>
                  <li>Regulatory requirements</li>
                  <li>Force majeure events</li>
                  <li>Third-party carrier actions</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  Binding obligations arise only under specific agreements.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  10. Limitation of Liability
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  To the maximum extent permitted by UAE law:
                  <br /><br />
                  The Company shall not be liable for:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of profit, revenue, or business opportunities</li>
                  <li>Reliance on Website content</li>
                  <li>Actions or omissions of third parties</li>
                </ul>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  Where liability cannot be excluded, it shall be limited to the extent permitted by applicable law.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  11. Disclaimer of Warranties
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 2, lineHeight: 1.6 }}>
                  The Website is provided “as is” and “as available”.
                  <br /><br />
                  We do not warrant that:
                </Typography>
                <ul style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.8, paddingLeft: 20 }}>
                  <li>The Website will be uninterrupted or error-free</li>
                  <li>The Website is free from viruses or harmful components</li>
                  <li>The information is fully accurate or up to date</li>
                </ul>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 6 }}>
                  12. Confidentiality of Submissions
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  Any non-personal information submitted through the Website (e.g., general inquiries) shall be treated as non-confidential unless agreed otherwise.
                  <br /><br />
                  For sensitive or commercial information, a separate confidentiality agreement is recommended.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  13. Governing Law and Jurisdiction
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  These Terms are governed by the laws of the United Arab Emirates, as applicable in the Emirate of Ras Al Khaimah.
                  <br /><br />
                  Any disputes shall be subject to the jurisdiction of the courts of Ras Al Khaimah, unless otherwise agreed in writing.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  14. Changes to These Terms
                </Typography>
                <Typography paragraph align="justify" fontSize={15} sx={{ mb: 4, lineHeight: 1.6 }}>
                  We may update these Terms at any time.
                  <br /><br />
                  The latest version will always be published on the Website. Continued use of the Website constitutes acceptance of the updated Terms.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: "text.primary", mt: 4 }}>
                  15. Contact Information
                </Typography>
                <Typography paragraph fontSize={15} sx={{ mb: 8, lineHeight: 1.8 }}>
                  Aegis Overseas FZ-LLC
                  <br />
                  Ras Al Khaimah Free Zone
                  <br />
                  United Arab Emirates
                  <br /><br />
                  Email: iwan@aegisoverseas.ae
                  <br />
                  Website: http://aegisoverseas.ae/
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: "background.default", p: 4, textAlign: "center", borderTop: "1px solid rgba(79, 255, 204, 0.1)" }}>
          <Typography variant="body2" sx={{ color: "text.primary", opacity: 0.8 }}>
            © {new Date().getFullYear()} Aegis Overseas FZ-LLC. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
