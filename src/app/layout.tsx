//Components
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
//Providers
import { Provider } from "@/providers/provider";
//Styles
import "@/styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <Provider>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
