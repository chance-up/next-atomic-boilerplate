import { css } from "@emotion/react";

interface BadgeProps {
  text: string;
  textColor: string;
  backgroundColor: string;
  width: string;
  height: string;
}

export const Badge = (props: BadgeProps) => {
  const { text, textColor, backgroundColor, width, height } = props;

  const badgeStyles = css`
    background-color: ${backgroundColor};
    color: ${textColor};
    width: ${width};
    height: ${height};

    border: none;
    text-align: center;

    // padding: 6px 12px;
    border-radius: 30px;
  `;
  return <div css={badgeStyles}>{text}</div>;
};
