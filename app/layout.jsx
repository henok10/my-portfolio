import { Outfit } from "next/font/google";
import "./globals.css";
// component 
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";

// theme provider 
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
