import React from 'react'
export { AppStructure as default } from "./AppStructure";
export { AppStructure } from "./AppStructure";

export interface INavigation {
    name: string;
    path: string;
    icon: any;
    current: boolean;
}

export type AppStructureProps = {
    content?: React.ReactElement,
    aside?: React.ReactElement,
    sidebarNavigation: INavigation[]
    onNavigate: (path: string) => void
    topbar?: React.ReactElement
}