import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Header } from "./header";
import { Footer } from "./footer";

const globalCss = css`
  * {
    box-sizing: border-box;
    font-family: Gill Sans, sans-serif;
  }
  body {
    margin: 0;
  }
`;

const AboveFooter = styled.div`
  min-height: calc(100vh - 77px);
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalCss} />
      <AboveFooter>
        <Header />
        {children}
      </AboveFooter>
      <Footer />
    </>
  );
};
