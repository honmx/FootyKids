"use client"
import { FC, useContext, useState } from "react";
import { INextPageWithLayout } from "@/types/INextPageWithLayout";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import RegistrationForm from "@/components/Forms/RegistrationForm";
import LoginForm from "@/components/Forms/LoginForm";
import SendCodeToEmailForm from "@/components/Forms/SendCodeToEmailForm";
import ValidateCodeForm from "@/components/Forms/ValidateCodeForm";
import { PasswordRecoveryContext } from "@/contexts/passwordRecoveryContext";
import NewPasswordForm from "@/components/Forms/NewPasswordForm";
import { AuthContext } from "@/contexts/authContext";
import { useCheckAuth } from "@/hooks/useCheckAuth";

interface Props {

}

const AuthPage: INextPageWithLayout<Props> = ({ }) => {

  const [formIndex, setFormIndex] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const { user, isLoading } = useCheckAuth({ routeToPushIfAuth: "/account" });

  return (
    <>
      <Head>
        <title>Авторизация</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/footykids-icon.png" />
      </Head>
      {
        !isLoading && !user &&
        <Box sx={{ height: "100%", }}>
          <Container maxWidth="largePhone" sx={{ height: "100%" }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              gap: "20px"
            }}>
              {
                ...[
                  [
                    <Typography key={0} fontSize={30}>Вход или регистрация</Typography>,
                    <LoginForm key={1} onRegistrationClick={() => setFormIndex(1)} onResetPasswordClick={() => setFormIndex(2)} />
                  ],
                  [
                    <Typography key={2} fontSize={30}>Регистрация</Typography>,
                    <RegistrationForm key={3} onLoginClick={() => setFormIndex(0)} />
                  ],
                  [
                    <PasswordRecoveryContext.Provider key={4} value={{ email, setEmail }}>
                      <Typography key={5} fontSize={30}>Восстановление пароля</Typography>
                      <SendCodeToEmailForm key={6} onContinueClick={() => setFormIndex(3)} />
                    </PasswordRecoveryContext.Provider>
                  ],
                  [
                    <PasswordRecoveryContext.Provider key={7} value={{ email, setEmail }}>
                      <Typography key={8} fontSize={30}>Восстановление пароля</Typography>
                      <Typography key={9} fontSize={14}>Мы выслали код Вам на почту, введите его в поле ниже, чтобы продолжить</Typography>
                      <ValidateCodeForm key={10} onContinueClick={() => setFormIndex(4)} />
                    </PasswordRecoveryContext.Provider>
                  ],
                  [
                    <Typography key={11} fontSize={30}>Восстановление пароля</Typography>,
                    <NewPasswordForm key={12} onContinueClick={() => setFormIndex(0)} />
                  ]
                ][formIndex]
              }
            </Box>
          </Container>
        </Box>
      }
    </>
  )
};

AuthPage.getLayout = (page) => {
  return (
    <Layout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
    >
      <Box sx={{ height: "calc(100% - 69.8px)", margin: "69.8px 0 0 0" }}>
        {page}
      </Box>
    </Layout>
  )
}


// export const getServerSideProps: GetServerSideProps = async (context) => {

//   const refreshToken = context.req?.headers.cookie?.split("=")[1] || "";
//   const user = await authService.validateRefreshToken(refreshToken);

//   if (user) {
//     return {
//       redirect: {
//         destination: "/account",
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }

export default AuthPage;