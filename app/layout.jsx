import './globals.css';
export const metadata = {
  title: 'Cees de Controller',
  description: 'Grip op je financiën. Rust in je hoofd.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
