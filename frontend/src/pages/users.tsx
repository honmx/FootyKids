import { FC, useContext, useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { Box, Container, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import Head from "next/head";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Sidebar from "@/components/Layout/Sidebar";
import usersService from "@/services/usersService";
import { UserType } from "@/types/UserType";
import { useCheckAuth } from "@/hooks/useCheckAuth";
import UserItem from "@/components/Items/UserItem";
import { UsersContext } from "@/contexts/usersContext";

interface Props {

}

const UsersPage: INextPageWithLayout<Props> = ({ }) => {

  const { user, isLoading } = useCheckAuth({ routeToPushIfNoAuth: "/auth" });

  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    (async () => {
      const users = await usersService.getAllUsers();

      if (!users) return;

      setUsers(users);
    })()
  }, []);

  if (isLoading || !user) return null;

  return (
    <>
      <Head>
        <title>FootyKids</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      <UsersContext.Provider value={{ users, setUsers }}>
        <Container sx={{ height: "100%" }}>
          <Paper sx={{ padding: 2, overflow: "visible" }}>
            <Stack spacing={3}>
              <Stack spacing={3} direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end" }}>
                <Typography fontSize={28}>Пользователи</Typography>
                <TextField variant="standard" placeholder="Имя/фамилия" />
                <Select />
              </Stack>
              <Box>
                {
                  users.map((user, i) => (
                    <UserItem
                      key={user.id}
                      user={user}
                      sx={{ borderBottom: i !== users.length - 1 ? "1px solid #DDD" : 0 }}
                    />
                  ))
                }
              </Box>
            </Stack>
          </Paper>
        </Container>
      </UsersContext.Provider>
    </>
  )
};

UsersPage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderSidebar={() => <Sidebar />}
    >
      <Box sx={{ paddingTop: 3, paddingBottom: 3, height: "100%" }}>
        {page}
      </Box>
    </Layout>
  )
}

export default UsersPage;