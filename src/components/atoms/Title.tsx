import { css } from "@emotion/react";

interface TitleProps {
  title: string;
  width: string;
  height: string;
  size: string;
  color: string;
}

export const Title = (props: TitleProps) => {
  const { title, width, height, size, color } = props;

  const titleStyles = css`
    width: ${width};
    height: ${height};
    color: ${color};
    font-size: ${size};
    font-style: normal;
    font-weight: 700;

    font-family: "Noto Sans KR";
    line-height: 28px;

    display: flex;
    align-items: center;
  `;

  return <div css={titleStyles}>{title}</div>;
};
