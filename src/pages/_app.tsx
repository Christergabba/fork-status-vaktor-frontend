import "../styles/globals.css";
import "../styles/tidslinje.scss";
import "../styles/globals.css";
import "@navikt/ds-css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
