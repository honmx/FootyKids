import { AppProps } from "next/app";
import { INextPageWithLayout } from "./INextPageWithLayout";

export interface IAppPropsWithLayout extends AppProps {
  Component: INextPageWithLayout;
}