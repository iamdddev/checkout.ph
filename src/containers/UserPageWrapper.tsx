import React from "react";
import {
  HomeIcon,
  ViewGridIcon,
  PhotographIcon,
  CogIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";

import AppStructure from "../components/AppStructure";
import useNavigation from "../hooks/useNavigation";
import AppTopbar from "../components/AppTopbar";
import UserMenu from "../components/UserMenu";
import Search from "../components/Search";

const sidebarNavigation = [
  { name: "Dashboard", path: "/", icon: HomeIcon, current: true },
  { name: "Orders", path: "/orders", icon: ViewGridIcon, current: false },
  { name: "Products", path: "/products", icon: PhotographIcon, current: false },
  { name: "Settings", path: "/settings", icon: CogIcon, current: false },
];

export const UserPageWrapper: React.FC = ({ children }): React.ReactElement => {
  const { navigations, navigate } = useNavigation(sidebarNavigation);

  const AddProductButton = (
    <button
      type="button"
      className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <PlusSmIcon className="h-6 w-6" aria-hidden="true" />
      <span className="sr-only">Add Product</span>
    </button>
  );

  return (
    <AppStructure
      sidebarNavigation={navigations}
      onNavigate={navigate}
      topbar={
        <AppTopbar
          actions={[
            <UserMenu items={[{ name: "My Account", onAction: () => null }]} />,
            AddProductButton,
          ]}
        >
          <Search />
        </AppTopbar>
      }
    >
      {children}
    </AppStructure>
  );
};

export default UserPageWrapper;
