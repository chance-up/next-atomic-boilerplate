import NextImage from "next/image";
import { css } from "@emotion/react";

interface ImageProps {
  src: string;
  width: string;
  height: string;
  display?: "inline" | "block" | "inline-block" | "full";
}

export const Image = (props: ImageProps) => {
  const { src, width, height, display = "block", ...rest } = props;

  const imageStyles = css`
    width: ${width};
    height: ${height};
    display: ${{ display }};
    object-fit: cover;
  `;
  return (
    <NextImage
      src={src}
      alt="No Image"
      width={0}
      height={0}
      sizes="100vw"
      placeholder="blur"
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      css={imageStyles}
      {...rest}
    />
  );
};
