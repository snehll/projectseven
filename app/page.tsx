"use client";
import React, { useState } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Checkbox, FormControlLabel, Link, useMediaQuery } from "@mui/material";
import SuccessModal from "@/components/modal";

// Typing animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Faster on mobile
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Typing text component
const Typed = ({
  text,
  variant,
}: {
  text: string;
  variant: "h2" | "h5" | "h6" | "h3" | "h4";
}) => (
  <Typography
    variant={variant}
    component={motion.div}
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    sx={{ mb: variant === "h2" ? 2 : 1, flexWrap: "wrap" }}>
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={childVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </Typography>
);

// Define the theme with black background and light blue text
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#4fc", // Light blue text
    },
  },
});

// Animation variants for sections with explicit type
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }, // Explicitly type ease
  },
};

// Navbar links
const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Logistics", id: "logistics" },
  { name: "Contact", id: "contact" },
];

// Open source image URLs from Pixabay (four per section)
const images = {
  home: ["/sparepart.jpg", "/aboutus.jpg", "/generators.jpg", "/logistics.jpg"],
  about: [
    "/logistics.jpg",
    "/aboutus.jpg",
    "/compressor.jpg",

    "/generators.jpg",
  ],
  services: [
    "/turbines.jpg",
    "/equipments.png",
    "/compressor.jpg",
    "/sparepart.jpg",
  ],
  logistics: ["/logistics.jpg", "/engines.jpg", "/sparepart.jpg", "/dryer.jpg"],
  logo: "https://img.icons8.com/ios/50/ffffff/gear.png",
};

export default function Home() {
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down("lg"));

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    service: "",
    companyname: "aegis",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://email-xi-pearl.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      setStatus(result);
      alert(result.message); // Matches your original alert-based feedback
      setFormData({
        email: "",
        message: "",
        name: "",
        service: "",
        companyname: "aegis",
      });
      setAgreedToTerms(false); // Reset checkbox after submission
    } catch (error: any) {
      setStatus({
        success: false,
        message: error.message || "Failed to send request",
      });
      alert("Error: " + error.message);
    }
  };

  // Smooth scroll handler
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          minWidth: 380,
          position: "relative", // Needed for starry background
        }}>
        {/* Starry Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none", // Ensure stars don’t interfere with interactions
            overflow: "hidden", // Contain starry overflow
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background: `
                radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                radial-gradient(circle, rgba(79, 195, 247, 0.4) 1px, transparent 1px)
              `,
              backgroundSize:
                "100px 100px, 150px 150px, 200px 200px, 120px 120px",
              backgroundPosition: "0 0, 50px 50px, 100px 100px, 25px 25px",
              animation: "twinkle 6s infinite, drift 30s linear infinite",
            },
            "@keyframes twinkle": {
              "0%": { opacity: 0.4 },
              "50%": { opacity: 0.8 },
              "100%": { opacity: 0.4 },
            },
            "@keyframes drift": {
              "0%": {
                backgroundPosition: "0 0, 50px 50px, 100px 100px, 25px 25px",
              },
              "100%": {
                backgroundPosition:
                  "100px 100px, 150px 150px, 200px 200px, 125px 125px",
              },
            },
          }}
        />
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
                onClick={() => scrollToSection(link.id)}
                sx={{ mx: isMobile ? 0 : 1, fontSize: isMobile ? 12 : 16 }}>
                {link.name}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        {/* Home Section */}
        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              {/* Glassmorphism Text Box */}
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid",
                  borderRadius: 6,
                  p: { xs: 4, md: 6 },
                  textAlign: "center",
                  // maxWidth: "800px",
                  // mx: "auto",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  flexWrap: "wrap",
                  overflowWrap: "break-word",
                }}>
                <br />
                {/* Typing Animation for Title */}
                <Typed
                  text={"Welcome to Aegis Overseas FZ-LLC"}
                  variant={isMobile ? "h4" : "h2"}
                />
                <br />
                {/* Typing Animation for Body */}
                <Typed
                  text={
                    "We specialize in the supply of spare parts for industrial equipment such as generators, turbines, and more,"
                  }
                  variant="h6"
                />
                <Typed text={"for production and resale."} variant="h6" />
                <br />
                {/* Button */}
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outlined"
                  sx={{
                    borderWidth: 2,
                    color: "#4fc",
                    borderColor: "#4fc",
                    borderRadius: 4,
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "rgba(79, 252, 204, 0.1)",
                      borderColor: "#4fc",
                    },
                  }}>
                  Get A Quote
                </Button>
                <br />
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* About Section */}
        <Box
          id="about"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid
                  width={isMobile ? "100%" : "50%"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h4" gutterBottom>
                      About Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Aegis Overseas FZ-LLC is an international trading and
                      brokerage company that helps customers organize
                      cross-border wholesale supplies and logistics. <br />
                      In addition to working under direct supply contracts, the
                      company also acts as a broker - it connects manufacturers
                      with buyers, helps negotiate commercial terms and arranges
                      deliveries.
                      <br />
                      In such cases, Aegis does not take ownership of the goods
                      and earns income in the form of a commission or a
                      percentage fee from completed transactions. <br />
                      The company builds its work on clear rules and
                      transparency. Every deal is documented, commercially
                      reasonable and understandable for all parties - from the
                      moment a product is sourced to final delivery.
                    </Typography>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outlined"
                      sx={{
                        borderWidth: 2,
                        color: "#4fc",
                        borderColor: "#4fc",
                        borderRadius: 4,
                        px: 4,
                      }}>
                      Get A Quote
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  width={isMobile ? "100%" : "47%"}
                  sx={{ ml: 2, p: 1.5, borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    gap={2}>
                    {images.about.map((src, index) => (
                      <Grid width={isMobile ? "47.4%" : "48.4%"} key={index}>
                        <Box
                          sx={{
                            position: "relative",
                            height: isMobile ? 200 : 250,
                            width: "100%",
                            border: 2,
                            color: "#4fc",
                            borderColor: "#4fc",
                            borderRadius: 4000,
                            overflow: "hidden",
                          }}>
                          <Image
                            src={"/images" + src}
                            alt={`About image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Services Section */}
        <Box
          id="services"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid
                  width={isMobile ? "100%" : "48.5%"}
                  sx={{ ml: 2, p: 1.5, borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    gap={2}>
                    {images.services.map((src, index) => (
                      <Grid width={isMobile ? "47.4%" : "48.5%"} key={index}>
                        <Box
                          sx={{
                            position: "relative",
                            height: isMobile ? 200 : 250,
                            width: "100%",
                            border: 2,
                            color: "#4fc",
                            borderColor: "#4fc",
                            borderRadius:
                              index === 0 ? 40 : index === 3 ? 40 : 4,
                            overflow: "hidden",
                          }}>
                          <Image
                            src={"/images" + src}
                            alt={`Services image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid
                  width={isMobile ? "100%" : "50%"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h4" gutterBottom>
                      Our Services
                    </Typography>
                    <Typography variant="body1" paragraph>
                      We provide end-to-end international trading and brokerage
                      services, connecting manufacturers with buyers worldwide.
                      From sourcing products and negotiating commercial terms to
                      arranging secure logistics and delivery, we ensure every
                      transaction is transparent, documented, and commercially
                      sound. Whether under direct supply contracts or as a
                      trusted broker, we earn through commissions — never taking
                      ownership of goods.
                    </Typography>

                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outlined"
                      sx={{
                        borderWidth: 2,
                        color: "#4fc",
                        borderColor: "#4fc",
                        borderRadius: 4,
                        px: 4,
                      }}>
                      Get A Quote
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Logistics Section */}
        <Box
          id="logistics"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid
                  width={isMobile ? "100%" : "50%"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h4" gutterBottom>
                      Logistics
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Sea, road and air transport with optimal route planning,
                      cargo insurance and online tracking. Clients receive firm
                      delivery dates, clear pricing and dependable results.
                    </Typography>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outlined"
                      sx={{
                        borderWidth: 2,
                        color: "#4fc",
                        borderColor: "#4fc",
                        borderRadius: 4,
                        px: 4,
                      }}>
                      Get A Quote
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  width={isMobile ? "100%" : "47%"}
                  sx={{ ml: 2, p: 1.5, borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    gap={2}>
                    {images.logistics.map((src, index) => (
                      <Grid width={isMobile ? "47.4%" : "48.4%"} key={index}>
                        <Box
                          sx={{
                            position: "relative",
                            height: isMobile ? 200 : 250,
                            width: "100%",
                            border: 2,
                            color: "#4fc",
                            borderColor: "#4fc",
                            borderRadius:
                              index === 1 ? 40 : index === 2 ? 40 : 4,
                            overflow: "hidden",
                          }}>
                          <Image
                            src={"/images" + src}
                            alt={`About image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Contact Section with Form */}
        <Box
          id="contact"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="sm">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Typography variant="h4" gutterBottom textAlign="center">
                Contact Us
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 500,
                  mx: "auto",
                }}>
                <Typography paragraph>
                  <b>Address : </b>SFF00649 Compass Building Al Shohada Road Al
                  Hamra Industrial Zone-FZ Ras AlKhaimah United Arab Emirates
                </Typography>
                <Typography paragraph>
                  <b>Email : </b>iwan@aegisoverseas.ae
                </Typography>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#4fc" } }}
                  InputProps={{ style: { color: "#4fc" } }}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#4fc" } }}
                  InputProps={{ style: { color: "#4fc" } }}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#4fc" } }}
                  InputProps={{ style: { color: "#4fc" } }}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  value={formData.message}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      sx={{
                        color: "#4fc",
                        "&.Mui-checked": { color: "#4fc" },
                      }}
                      // required
                    />
                  }
                  label={
                    <Typography sx={{ color: "#4fc" }}>
                      I agree to the{" "}
                      <Link
                        href="/terms-and-conditions"
                        sx={{ color: "#4fc55", textDecoration: "underline" }}>
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/user-agreement"
                        sx={{ color: "#4fc55", textDecoration: "underline" }}>
                        Users agreement
                      </Link>
                    </Typography>
                  }
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#4fc",
                    color: "#000000",
                    "&:hover": { bgcolor: "#4fc" },
                  }}>
                  Talk to Us
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
        <SuccessModal status={status} onClose={() => setStatus(null)} />
        {/* Footer */}
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
