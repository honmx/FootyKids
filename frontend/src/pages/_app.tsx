import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { IAppPropsWithLayout } from "@/types/IAppPropsWithLayout";
import "@/styles/reset.scss";

export default function App({ Component, pageProps }: IAppPropsWithLayout) {

  const pageLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      {
        pageLayout(<Component {...pageProps} />)
      }
    </ThemeProvider>
  );
}
