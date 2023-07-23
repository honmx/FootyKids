import Head from "next/head";
import { NextPage } from "next";
import MainBanner from "@/components/MainBanner";
import AboutUs from "@/components/AboutUs";
import { Stack } from "@mui/material";


interface Props {

}

const HomePage: NextPage<Props> = ({ }) => {

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="description" content="Footy kids - футбольная школа для детей от 4 лет" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="column" spacing={5}>
        <MainBanner />
        <AboutUs />
      </Stack>
    </>
  )
}

export default HomePage;