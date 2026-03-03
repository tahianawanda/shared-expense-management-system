import styled from "styled-components";
import NavBar from "../components/NavBar";
import type { ReactNode } from "react";

interface LayoutMainProp {
  children: ReactNode
}

const LayoutMain = ({ children }: LayoutMainProp) => {
return <Div>
  <NavBar />
  <div className="container-layout-main">
    {children}
  </div>
</Div>
}

export default LayoutMain;

const Div = styled.div`
  background: #292A2B;
  color: #E6E6E6;

  .container-layout-main {
    box-sizing: border-box;
    padding: 0 10rem 4rem 10rem;
    width: 100%;
    min-height: 100dvh;
  }
`