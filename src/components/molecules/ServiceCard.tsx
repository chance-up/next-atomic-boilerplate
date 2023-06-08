import { Image } from "@/components/atoms/Image";
import { Title } from "@/components/atoms/Title";
import { Badge } from "@/components/atoms/Badge";
import { css } from "@emotion/react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  badges: string[];
  contents: string;
}

export const ServiceCard = (props: ServiceCardProps) => {
  const { imageSrc, title, badges, contents } = props;
  const serviceCardStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 320px;
    height: 456px;

    background-color: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  `;

  const serviceContentsStyles = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px 30px;
    gap: 30px;

    width: 320px;
    height: 216px;
  `;
  return (
    <div css={serviceCardStyles}>
      <Image src={imageSrc} width="320px" height="240px" />
      <div css={serviceContentsStyles}>
        <Title
          title={title}
          width="100%"
          height="28px"
          size="20px"
          color="#000000"
        />
        {badges.map(item => {
          return (
            <Badge
              key={item}
              text={item}
              textColor="#ffffff"
              backgroundColor="#ffb526"
              width="98px"
              height="26px"
            />
          );
        })}
        <p>{contents}</p>
      </div>
    </div>
  );
};
