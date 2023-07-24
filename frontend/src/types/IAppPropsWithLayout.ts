import { AppProps } from "next/app";
import { NextPageWithLayout } from "./INextPageWithLayout";

export interface IAppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}