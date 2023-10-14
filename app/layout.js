import "@/style/globals.css";

export const metadata = {
  title: "Nuaim Hasan Nasim || MERN Stack Developer",
  description: "MERN Stack Developer",
  icons: {
    icon: "/images/logo/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
