import { Tabs, Tab } from "@/components/molecules/Tabs";
import { css } from "@emotion/react";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { useServiceStore } from "@/stores/serviceStore";

export const MainServiceSection = () => {
  const { serviceList } = useServiceStore();
  const mainServiceSectionStyles = css`
    background-color: azure;
  `;

  return (
    <div css={mainServiceSectionStyles}>
      <Tabs>
        {serviceList.map(service => {
          return (
            <Tab
              key={service.service_name}
              label={service.service_name}
              contents={
                <ServiceCard
                  imageSrc={service.thumbnail}
                  title={service.service_name}
                  badges={service.categories}
                  contents="test"
                />
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
};
