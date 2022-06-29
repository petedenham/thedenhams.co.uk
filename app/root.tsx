import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "~/components/header";
import baskervilleItalicFont from "./assets/fonts/Baskerville-Italic.woff2";
import baskervilleBoldFont from "./assets/fonts/Baskerville-Bold.woff2";
import styles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preload", href: baskervilleItalicFont, as: "font", type: "font/woff2", crossOrigin: "true" },
  { rel: "preload", href: baskervilleBoldFont, as: "font", type: "font/woff2", crossOrigin: "true" },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The Denham's Wedding",
  description: "Welcome to our (amazing) wedding website! We can't wait to share this special day with you all :)",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen flex flex-col items-center font-baskerville">
        <Header />
        <main className="flex flex-1 flex-col w-full max-w-screen-lg px-3">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
