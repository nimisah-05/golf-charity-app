import "./globals.css";

export const metadata = {
  title: "Golf Charity",
  description: "Golf Charity Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}