import NextApp, { AppContext } from "next/app";
import { ThemeProvider } from "@emotion/react";
import parser from "ua-parser-js";
import { IAppPropsWithLayout } from "@/types/IAppPropsWithLayout";
import { createCustomTheme } from "@/styles/theme";
import "@/styles/reset.scss";

type CustomAppProps = {
  deviceType: "mobile" | "desktop";
}

const App = ({ Component, pageProps, deviceType }: IAppPropsWithLayout & CustomAppProps) => {

  const pageLayout = Component.getLayout ?? ((page) => page);

  const theme = createCustomTheme({ deviceType });

  return (
    <ThemeProvider theme={theme}>
      {
        pageLayout(<Component {...pageProps} />)
      }
    </ThemeProvider>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const deviceType = parser(context.ctx.req?.headers["user-agent"]).device.type || "dekstop" as ("mobile" | "desktop");

  const nextAppProps = await NextApp.getInitialProps(context);

  return {
    ...nextAppProps,
    deviceType,
  };
};

export default App;