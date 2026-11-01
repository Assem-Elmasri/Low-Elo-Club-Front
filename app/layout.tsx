import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/NavBar";
import '@fontsource/poppins'

const minecraftFont = localFont({
  src: [
    { path: '../public/fonts/MinecraftDefault-Regular.ttf', weight: '400' },
    { path: '../public/fonts/MinecraftDefault-Bold.ttf', weight: '700' },
  ],
  variable: '--minecraft-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Low Elo Club",
  description: "A community for low elo players to come together and share their experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${minecraftFont.className} ${minecraftFont.variable} h-full antialiased text-center`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
