import clsx from "clsx";
import React from "react";
import { PanelProps } from ".";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Panel: React.FC<PanelProps> = ({
  tabs,
  primaryAction,
  secondaryAction,
}): React.ReactElement => {
  const hasTabs = tabs && tabs.items.length > 0;
  const hasActions = primaryAction || primaryAction;
  return (
    <div>
      <div
        className={clsx(
          "sm:pb-0 py-4",
          hasTabs && "relative pb-5 border-b border-gray-200"
        )}
      >
        <div
          className={clsx(
            "md:flex md:items-center space-y-4",
            !hasTabs && "md:justify-between px-4",
            hasTabs && "px-4"
          )}
        >
          <div className="sm:w-0 sm:flex-1">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Candidates
            </h3>
            {!hasTabs && (
              <p className="mt-1 text-sm text-gray-500 hidden md:block sm:truncate">
                Checkout and Payments Team
              </p>
            )}
          </div>

          {hasActions && (
            <div
              className={clsx(
                "mt- flex md:mt-0",
                hasTabs && "md:absolute md:top-3 md:right-0 mr-4"
              )}
            >
              {secondaryAction && (
                <button
                  type="button"
                  onClick={secondaryAction.onAction}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {secondaryAction.name}
                </button>
              )}
              {primaryAction && (
                <button
                  onClick={primaryAction.onAction}
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {primaryAction.name}
                </button>
              )}
            </div>
          )}
        </div>
        {hasTabs && (
          <div className="mt-4 mx-4">
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="current-tab"
                name="current-tab"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue={tabs.items.find((tab) => tab.current)?.value}
              >
                {tabs.items.map((tab) => (
                  <option key={tab.value}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="-mb-px flex space-x-8 sm:space-x-5 md:space-x-8">
                {tabs.items.map((tab) => (
                  <a
                    key={tab.name}
                    href="javascript:void(0)"
                    onClick={() => tabs.onTab(tab.value)}
                    className={classNames(
                      tab.current
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
      dfdf
    </div>
  );
};

export default Panel;
