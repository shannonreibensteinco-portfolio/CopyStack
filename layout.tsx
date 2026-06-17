import "./globals.css";

export const metadata = {
  title: "Website Copy System",
  description: "Copy Posse framework copywriting tool with per-client storage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
