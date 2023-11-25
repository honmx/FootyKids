import { FC } from "react";
import { NextPage } from "next";
import { Box } from "@mui/material";
import Head from "next/head";

interface Props {

}

const GroupPage: NextPage = ({ }) => {
  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      <Box>
        <p>groups</p>
      </Box>
    </>
  )
};

export default GroupPage;