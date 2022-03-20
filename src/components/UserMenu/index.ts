export { UserMenu as default } from "./UserMenu";
export { UserMenu } from "./UserMenu";


export interface IMenu {
    name: string;
    onAction: () => void;
}

export type UserMenuProps = {
    items: IMenu[]
}