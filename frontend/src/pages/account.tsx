import { FC, useEffect } from "react";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import { GetServerSideProps, GetStaticProps } from "next";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Box } from "@mui/material";
import authService from "../services/authService";
import { IUser } from "@/types/IUser";
import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
  // user: IUser
}

const AccountPage: INextPageWithLayout<Props> = ({ }) => {

  // const router = useRouter();

  // useEffect(() => {
  //   if (!user) router.push("/auth");
  // }, [])

  return (
    <>
      <Head>
        <title>Личный кабинет</title>
        <meta name="description" content="Личный кабинет" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      <div>
        account
      </div>
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

export const getServerSideProps: GetServerSideProps = async (context) => {

  const refreshToken = context.req?.headers.cookie?.split("=")[1] || "";
  const user = await authService.validateRefreshToken(refreshToken);
  
  if (!user) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default AccountPage;