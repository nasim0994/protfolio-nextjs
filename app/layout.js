import "@/style/globals.css";

export const metadata = {
  title: "Nasim Uddin",
  description: "MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
