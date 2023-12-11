import { FC } from "react";
import { GetStaticProps, NextPage } from "next";
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
import { useCheckAuth } from "@/hooks/useCheckAuth";

interface Props {
  groups: Pick<IGroup, "id" | "name">[];
}

const GroupsPage: INextPageWithLayout<Props> = ({ groups }) => {

  const { user, isLoading } = useCheckAuth({ routeToPushIfNoAuth: "/auth" });

  if (isLoading || !user) return null;

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      <Box>
        <Container>
          <Grid container spacing={2}>
            {
              groups && groups.map(group => (
                <Grid item xs={2} key={group.id}>
                  <Link href={`/groups/${group.id}`}>
                    <Paper
                      sx={{
                        aspectRatio: 1,
                        padding: 2,
                        transition: "all 0.15s ease",
                        "&:hover": { backgroundColor: "#F5F5F5" }
                      }}
                    >
                      <Typography>{group.name}</Typography>
                    </Paper>
                  </Link>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </>
  )
};

GroupsPage.getLayout = (page) => {
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

export const getStaticProps: GetStaticProps = async () => {

  const groups = await groupsService.getGroups();

  return {
    props: {
      groups
    }
  }
}

export default GroupsPage;