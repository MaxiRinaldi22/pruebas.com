import "./globals.css";


export const metadata = {
  title: "Liceo Padre Domingo",
  description: "Proximamente...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
