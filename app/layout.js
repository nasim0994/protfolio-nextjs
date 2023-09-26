import "@/style/globals.css";

export const metadata = {
  title: "Nasim Uddin || Full Stack Developer",
  description: "Web Developer",
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
