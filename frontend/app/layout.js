import './globals.css';

export const metadata = {
  title: 'Developer Portfolio | Software Engineer',
  description:
    'Portfolio homepage for a software engineer building SaaS platforms, automation workflows, and AI-powered systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
