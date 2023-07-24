import Head from "next/head";
import { NextPage } from "next";
import MainBanner from "@/components/MainBanner";
import AboutUs from "@/components/AboutUs";
import { Stack } from "@mui/material";
import { NextPageWithLayout } from "@/types/INextPageWithLayout";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";


interface Props {

}

const HomePage: NextPageWithLayout<Props> = ({ }) => {

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="description" content="Footy kids - футбольная школа для детей от 4 лет" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="column" spacing={7.5}>
        <MainBanner />
        <AboutUs />
      </Stack>
    </>
  )
}

HomePage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
    >
      {page}
    </Layout>
  )
}

export default HomePage;