import { TabButton } from "@/components/atoms/TabButton";
import { css } from "@emotion/react";
import { ReactElement, useState } from "react";

interface TabProps {
  label: string;
  contents: ReactElement;
}

interface TapsProps {
  children: ReactElement<TabProps>[];
}

export const Tabs = ({ children }: TapsProps) => {
  const buttonsStyles = css`
    text-align: center;
    margin-top: 2vh;
  `;

  const tabContentsStyles = css`
    text-align: center;
    margin-top: 2vh;
  `;

  const [selectedLabel, setSelectedLabel] = useState(children[0]?.props.label);
  return (
    <>
      <div css={buttonsStyles}>
        {children.map(tab => {
          return (
            <TabButton
              label={tab.props.label}
              isActive={tab.props.label === selectedLabel}
              changeTab={() => {
                setSelectedLabel(tab.props.label);
              }}
              key={tab.props.label}
            />
          );
        })}
      </div>
      <div css={tabContentsStyles}>
        {children.filter(tab => tab.props.label === selectedLabel)}
      </div>
    </>
  );
};
export const Tab = ({ contents }: TabProps) => {
  return contents;
};
