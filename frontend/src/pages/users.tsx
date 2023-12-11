import { FC, useContext, useEffect } from "react";
import { NextPage } from "next";
import { Box } from "@mui/material";
import Head from "next/head";
import { GroupContext } from "@/contexts/groupContext";

interface Props {

}

const UsersPage: NextPage = ({ }) => {

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      <Box>
        <p>users</p>
      </Box>
    </>
  )
};

export default UsersPage;