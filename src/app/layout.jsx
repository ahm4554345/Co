import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTheTop from "@/components/ScrollToTheTop";

export const metadata = {
  title: "El Salam Trade",
  description:
    "We distribute our partners products throughout Egypt and open new markets for them By Delivering their products to all locations and opening a new range.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ScrollToTheTop />
        <Footer />
      </body>
    </html>
  );
}
