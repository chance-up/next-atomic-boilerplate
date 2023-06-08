import { css } from "@emotion/react";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  changeTab: () => void;
}

export const TabButton = ({
  label,
  isActive = false,
  changeTab,
}: TabButtonProps) => {
  const tabButtonStyles = css`
    font-size: 20px;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px 40px 10px 40px;

    color: rgba(0, 0, 0, 0.4);
    transition: all ease-in-out 0.2s;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    ${isActive === true &&
    `
        border-bottom:3px solid #000;
        color:black;
    `}
  `;

  return (
    <button type="button" css={tabButtonStyles} onClick={() => changeTab()}>
      {label}
    </button>
  );
};
