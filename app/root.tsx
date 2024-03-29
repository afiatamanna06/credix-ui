import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { withEmotionCache } from '@emotion/react'
import styles from "./global.css"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ServerStyleContext, ClientStyleContext } from './context'
import { useContext, useEffect } from "react";
import NavigationBar from "components/navigation/NavigationBar";
import theme from "theme/theme";
import Footer from "components/footer/Footer";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "icon",
      href: "/logo.png",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poppins:wght@300;400;500;600;700&display=swap",
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Credix - Credit investing made global",
  viewport: "width=device-width,initial-scale=1",
});

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NavigationBar />
        <Outlet />
        <Footer />
      </ChakraProvider>
    </Document>
  );
}
