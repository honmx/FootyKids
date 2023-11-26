import { FC, useContext, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Box, ButtonGroup, Container, Grid, IconButton, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import Head from "next/head";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Sidebar from "@/components/Layout/Sidebar";
import groupsService from "@/services/groupsService";
import { IGroup } from "@/types/IGroup";
import Link from "next/link";
import { GroupContext } from "@/contexts/groupContext";
import Image from "next/image";
import penIcon from "@/assets/pen icon.svg";
import { createPortal } from "react-dom";
import ChangeGroupNameModal from "@/components/Modals/ChangeGroupNameModal";
import Schedule from "@/components/Widgets/Schedule";

interface Props {
  group: IGroup;
}

const GroupPage: INextPageWithLayout<Props> = ({ group }) => {

  const [groupFromContext, setGroupFromContext] = useState<IGroup>(group);
  const [isChangeGroupNameModalActive, setIsChangeGroupNameModalActive] = useState<boolean>(false);

  const handleOpenChangeGroupNameModal = () => {
    setIsChangeGroupNameModalActive(prev => !prev);
  }

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      <GroupContext.Provider value={{ groupFromContext, setGroupFromContext }}>
        <Container sx={{ height: "100%" }}>
          <Stack spacing={3}>
            <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
              <Typography fontSize={22}>{groupFromContext.name}</Typography>
              <IconButton color="black" onClick={handleOpenChangeGroupNameModal}>
                <Image src={penIcon} alt="pen icon" width={17} height={17} />
              </IconButton>
            </Stack>
            <Schedule />
          </Stack>
        </Container>
        {
          typeof document !== "undefined" &&
          createPortal(
            <ChangeGroupNameModal open={isChangeGroupNameModalActive} handleCloseClick={handleOpenChangeGroupNameModal} groupName={groupFromContext.name} />,
            document.body.querySelector("#modal-container") as Element
          )
        }
      </GroupContext.Provider>
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
    paths: groups.map(group => ({ params: { id: group.id.toString() } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const group = await groupsService.getGroupById(Number(context.params?.id));

  return {
    props: {
      group
    }
  }
}

export default GroupPage;