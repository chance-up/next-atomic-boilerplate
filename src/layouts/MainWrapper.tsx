import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

const outerStyles = css`
  min-width: 380px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & main {
    flex: 1;
  }
`;

interface Props {
  children: ReactNode;
}

export function MainWrapper(props: Props) {
  return (
    <div css={outerStyles}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
