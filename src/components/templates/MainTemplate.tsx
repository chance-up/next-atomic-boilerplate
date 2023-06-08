import { MainSliderSection } from "@/components/organisms/MainSliderSection";
// import { MainServiceSection } from "@/components/organisms/MainServiceSection";
import { useServiceHook } from "@/hooks/useServiceHook";
import { useEffect } from "react";
import { css } from "@emotion/react";

export const MainTemplate = () => {
  const { fetchServiceList } = useServiceHook();

  useEffect(() => {
    fetchServiceList();
  }, []);
  const sliderSectionStyles = css`
    position: relative;
    height: 90vh;
  `;

  const serviceSectionStyles = css`
    position: relative;
    height: 700px;
  `;

  return (
    <div>
      <section css={sliderSectionStyles}>
        <MainSliderSection />
      </section>
      <section css={serviceSectionStyles} />

      {/* <MainSliderSection />
      <MainServiceSection /> */}
    </div>
  );
};
