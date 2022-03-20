import React from "react";
import { PageStructureProps } from ".";

export const PageStructure: React.FC<PageStructureProps> = ({
  children,
  aside,
  content,
}): React.ReactElement => {
  return (
    <div className="flex-1 flex items-stretch overflow-hidden">
      <main className="flex-1 overflow-y-auto p-4">
        {/* Primary column */}
        <section
          aria-labelledby="primary-heading"
          className="min-w-0 flex-1 h-full flex flex-col lg:order-last"
        >
          <h1 id="primary-heading" className="sr-only">
            Photos
          </h1>
          {children && !content && children}
          {content && !children && content}
        </section>
      </main>

      {aside && (
        <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block p-4">
          {aside}
        </aside>
      )}
    </div>
  );
};

export default PageStructure;
