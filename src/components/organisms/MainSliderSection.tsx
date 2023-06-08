import { MainCarousel } from "@/components/molecules/MainCarousel";
import { css } from "@emotion/react";

export const MainSliderSection = () => {
  const itemBackgroundCover = css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background: radial-gradient(
      circle at 50% 52%,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.45)
    );
  `;

  const itemInfoBackgroundCover = css`
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 170px 128px 128px 128px;
    color: white;
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <div css={itemBackgroundCover} />
      <div css={itemInfoBackgroundCover}>
        <h1
          css={css`
            font-size: 48px;
            line-height: 1.33;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 32px;
          `}
        >
          어떠한 형태의 클라우드 서비스를 <br />
          사용하셔도 좋습니다.
        </h1>
        <p>
          마이크로 서비스는 애플리케이션 구축을 쉽게 하지만, 모든 마이크로
          서비스를 시각화하고 <br />
          연관관계를 이해하는것은 쉽지 않습니다. 그리고 이는 성능문제 발생시 그
          해결을 어렵게 할 수 있습니다. <br />
          마이크로 서비스 맵은 서비스 상호연관관계를 시각화해서 문제 발생시 쉽게
          찾고 해결할 수 있도록 합니다.
        </p>
        <button
          css={css`
            color: #fff;
            border: 1px solid #fff;
            width: 190px;
            height: 64px;
            margin-top: 64px;
            font-size: 16px;
            text-align: center;
            line-height: 62px;
            font-weight: 700;
            border-radius: 10px;
            background-color: transparent;
            cursor: pointer;
            &:hover {
              color: black;
              background-color: white;
            }
          `}
          type="button"
        >
          자세히 보기
        </button>
      </div>

      <MainCarousel />
    </>
  );
};
