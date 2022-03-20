import React from "react";
import { AppTopbarProps } from ".";

export const AppTopbar: React.FC<AppTopbarProps> = ({
  children,
  actions,
}): React.ReactElement => {
  return (
    <div className="flex-1 flex justify-between items-center px-4 sm:px-6">
      {children ? children : <div />}
      <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
        {/* Profile dropdown */}
        {actions}
      </div>
    </div>
  );
};

export default AppTopbar;
