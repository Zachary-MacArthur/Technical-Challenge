import "./globals.css";

//

export const metadata = {
  title: "Technical Challenge",
  description: "Tehcnical Challenge by Zachary MacArthur",
  link: ""

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
