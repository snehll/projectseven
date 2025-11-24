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
      primary: "#4fc",
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

export default function PrivacyPolicy() {
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

        <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
          {/* Privacy Policy Content */}
          <Container sx={{ py: 8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <Typography variant="h3" align="center" gutterBottom>
                Privacy Policy
              </Typography>

              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                Last Updated: October 23, 2025
              </Typography>

              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                This Privacy Policy describes how Aegis Overseas FZ-LLC, a
                company duly organized and existing under the laws of the United
                Arab Emirates, having its registered office in Ras Al Khaimah
                Free Zone (“Aegis Overseas,” “we,” “our,” or “us”), collects,
                uses, stores, and protects your personal information when you
                visit our website http://aegisoverseas.ae/ (“Website”).
              </Typography>

              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                By using our Website and submitting your personal information
                through it, you agree to this Privacy Policy.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                1. Information We Collect
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We may collect and process the following information:
              </Typography>
              <Typography
                component="div"
                sx={{ pl: 2, mb: 2, px: isMobile ? 0 : 25 }}>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li>
                    <strong>Personal information you provide directly:</strong>{" "}
                    when you fill out a contact or callback form, including your
                    name and phone number.
                  </li>
                  <li>
                    <strong>Automatically collected information:</strong> such
                    as your IP address, browser type, operating system, and the
                    date and time of your visit. This information is collected
                    through standard web analytics tools to improve our
                    Website’s performance and security.
                  </li>
                </ul>
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                2. Purpose of Collecting Personal Information
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We collect your personal information for the following purposes:
              </Typography>
              <Typography
                component="div"
                sx={{ pl: 2, mb: 4, px: isMobile ? 0 : 25 }}>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li>
                    To contact you in response to your inquiry or request
                    submitted through the Website;
                  </li>
                  <li>To provide you with information about our services;</li>
                  <li>To improve our Website and communication methods;</li>
                  <li>
                    To comply with legal and regulatory requirements under
                    applicable UAE laws.
                  </li>
                </ul>
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                3. Legal Basis for Processing
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                We process your personal data on the basis of your consent,
                which you provide when you voluntarily submit your information
                through our Website forms.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                4. How We Store and Protect Your Information
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We take reasonable administrative and technical measures to
                protect your personal data against loss, unauthorized access,
                alteration, or disclosure.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Your personal information is stored securely and is accessible
                only to authorized personnel of Aegis Overseas FZ-LLC for the
                purposes stated in this Policy.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                5. Sharing of Information
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We do not sell, rent, or trade your personal data. We may share
                your information only:
              </Typography>
              <Typography
                component="div"
                sx={{ pl: 2, mb: 4, px: isMobile ? 0 : 25 }}>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li>
                    With our authorized employees or service providers who
                    assist us in operating the Website or communicating with
                    you;
                  </li>
                  <li>
                    If required to do so by law, a court order, or a competent
                    authority in the UAE.
                  </li>
                </ul>
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                6. Data Retention
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                We will retain your personal data only for as long as necessary
                to fulfill the purposes for which it was collected or as
                required by applicable law.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                7. Your Rights
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                You have the right to:
              </Typography>
              <Typography
                component="div"
                sx={{ pl: 2, mb: 2, px: isMobile ? 0 : 25 }}>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  <li>
                    Request access to the personal data we hold about you;
                  </li>
                  <li>Request correction or deletion of your data;</li>
                  <li>
                    Withdraw your consent at any time (by contacting us at the
                    email below).
                  </li>
                </ul>
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Please note that withdrawing consent may limit our ability to
                contact you or provide our services.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                8. Cookies
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Our Website may use cookies to improve user experience and
                analyze web traffic. You can adjust your browser settings to
                disable cookies, but this may affect certain Website functions.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                9. Links to Third-Party Sites
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Our Website may contain links to social media or messenger
                platforms (such as WhatsApp, Telegram, LinkedIn, etc.). Please
                note that we are not responsible for the privacy practices or
                content of these external websites or applications.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                10. Updates to This Privacy Policy
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated date of revision. We
                encourage you to review this page periodically.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                11. Contact Us
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                If you have any questions or concerns about this Privacy Policy
                or the handling of your personal information, please contact us
                at:
              </Typography>
              <Typography
                component="div"
                sx={{ pl: 2, mb: 6, px: isMobile ? 0 : 25, fontSize: 14 }}>
                <strong>Aegis Overseas FZ-LLC</strong>
                <br />
                Ras Al Khaimah Free Zone, United Arab Emirates
                <br />
                Email: iwan@aegisoverseas.ae
                <br />
                Website: http://aegisoverseas.ae/
              </Typography>
            </motion.div>
          </Container>
        </Box>

        <Box sx={{ bgcolor: "background.default", p: 2, textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Aegis Overseas FZ-LLC. All rights
            reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
