import { FC, useContext, useEffect } from "react";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Box } from "@mui/material";
import Head from "next/head";
import { AuthContext } from "@/contexts/authContext";
import { useCheckAuth } from "@/hooks/useCheckAuth";

interface Props {

}

const AccountPage: INextPageWithLayout<Props> = ({ }) => {

  const { user } = useContext(AuthContext);
  const { isLoading } = useCheckAuth({ routeToPushIfNoAuth: "/auth" });

  return (
    <>
      <Head>
        <title>Личный кабинет</title>
        <meta name="description" content="Личный кабинет" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      {
        !isLoading && user &&
        <div>
          account
        </div>
      }
    </>
  )
};

AccountPage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
    >
      <Box sx={{ marginTop: "69.8px" }}>
        {page}
      </Box>
    </Layout>
  )
}

export default AccountPage;