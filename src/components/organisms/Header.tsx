import { css } from "@emotion/react";
import { NavLink } from "@/components/molecules/NavLink";
import { NavLogo } from "@/components/molecules/NavLogo";

const headerWrapperStyles = css`
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;
`;

const headerStyles = css`
  width: 100%;
`;

const headerBackGround = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  opacity: 0.5;
`;

const gnbDivStyle = css`
  position: absolute;
  top: 20px;
  left: 50%;
`;

const logoDivStyle = css`
  position: absolute;
  top: 0px;
  left: 10px;
`;

export function Header() {
  return (
    <div css={headerWrapperStyles}>
      <header css={headerStyles}>
        <div css={headerBackGround} />
        <div css={logoDivStyle}>
          <NavLogo />
        </div>
        <div css={gnbDivStyle}>
          <NavLink />
        </div>
      </header>
    </div>
  );
}
