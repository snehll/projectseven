import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import CustomThemeProvider from "./theme-provider";
import { Box, useTheme } from "@mui/material";
import ThemeWrapper from "@/components/wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aegis ",
  description:
    "Aegis Overseas FZ-LLC is a global trading and brokerage firm specializing in cross-border wholesale supply chains. We connect manufacturers and buyers, negotiate favorable terms, and manage seamless logistics — all with full transparency and documented clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Aegis</title>
        <meta
          name="description"
          content="Aegis Overseas FZ-LLC is a global trading and brokerage firm specializing in cross-border wholesale supply chains. We connect manufacturers and buyers, negotiate favorable terms, and manage seamless logistics — all with full transparency and documented clarity."
        />
        <meta
          name="keywords"
          content="spare parts, industrial equipment, generators, turbines, procurement"
        />
        <meta name="author" content="Aegis Overseas FZ-LLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={
            "https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg"
          }
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CustomThemeProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper>
              {/* <ResponsiveAppBar /> */}
              <Box
                sx={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                }}>
                {children}
              </Box>
              {/* <Footer /> */}
            </ThemeWrapper>
          </AppRouterCacheProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
