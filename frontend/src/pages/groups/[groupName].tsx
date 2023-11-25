import { FC } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Head from "next/head";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Sidebar from "@/components/Layout/Sidebar";
import groupsService from "@/services/groupsService";
import { IGroup } from "@/types/IGroup";
import Link from "next/link";

interface Props {
  group: IGroup;
}

const GroupPage: INextPageWithLayout<Props> = ({ group }) => {

  console.log(group);

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      <Box>
        <Container>
          group
        </Container>
      </Box>
    </>
  )
};

GroupPage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderSidebar={() => <Sidebar />}
    >
      <Box sx={{ paddingTop: 3, paddingBottom: 3, height: "100%" }}>
        {page}
      </Box>
    </Layout >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const groups = await groupsService.getGroups() || [];

  return {
    paths: groups.map(group => ({ params: { groupName: group.name } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const group = await groupsService.getGroupByName(context.params?.groupName as string);

  return {
    props: {
      group
    }
  }
}

export default GroupPage;