import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";

export const metadata = {
  title: "Amogh Lokhande | Cloud & DevOps Engineer",
  description:
    "Cloud & DevOps Engineer specializing in Azure, Kubernetes, CI/CD, and scalable cloud architectures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-montserrat antialiased">
        <Navbar />
        <ScrollIndicator />

        <main className="mx-auto max-w-7xl px-6 md:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
