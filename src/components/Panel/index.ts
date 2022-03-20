import React from "react";

export { Panel as default } from "./Panel";
export { Panel } from "./Panel";

type ITab = {
  name: string;
  value: string;
  current?: boolean;
};

type IAction = {
  name: string;
  icon?: any;
  onAction: () => void;
};

export type PanelProps = {
  tabs?: {
      items: ITab[],
      onTab: (value: string) => void
  };
  primaryAction?: IAction;
  secondaryAction?: IAction;
  
};
