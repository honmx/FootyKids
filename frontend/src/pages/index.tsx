import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import MainBanner from "@/components/Sections/MainBanner";
import AboutUs from "@/components/Sections/AboutUs";
import Coaches from "@/components/Sections/Coaches";
import Faq from "@/components/Sections/Faq";
import { Stack } from "@mui/material";
import contentService from "@/services/contentService";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import { ICoach } from "@/types/ICoach";


interface Props {
  coaches: ICoach[] | undefined;
}

const HomePage: INextPageWithLayout<Props> = ({ coaches }) => {

  // todo: return error page
  if (!coaches) return "error with coaches";

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="description" content="FootyKids - футбольная школа для детей от 4 лет" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="column" spacing={7.5}>
        <MainBanner />
        <AboutUs coachesCount={coaches.length} />
        <Coaches coaches={coaches} />
        <Faq />
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

export const getStaticProps: GetStaticProps = async () => {

  const coaches = await contentService.getCoaches();

  return {
    props: {
      coaches
    }
  }
}

export default HomePage;