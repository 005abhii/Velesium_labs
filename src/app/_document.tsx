// _document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Static loader shown before React hydration */}
        <div
          id="static-loader"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "black",
            color: "white",
            zIndex: 99999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontFamily: "sans-serif",
          }}
        >
          Loading...
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
