import React from "react";
import Card from "../components/Card";
import PageStructure from "../components/PageStructure";
import Panel from "../components/Panel";
import useSelect from "../hooks/useSelect";

const tabItems = [
  { name: "Applied", value: "applied" },
  { name: "Phone Screening", value: "phone" },
  { name: "Interview", value: "test" },
  { name: "Offer", value: "sds" },
  { name: "Hired", value: "sgsdf" },
];

export function UserDashboard(): React.ReactElement {
  const { items: tabs, onSelect } = useSelect(tabItems, "phone");
  return (
    <PageStructure aside={<div>Hello</div>}>
      <Card paddingless>
        <Panel
          tabs={{
            items: tabs,
            onTab: onSelect,
          }}
        ></Panel>
      </Card>
    </PageStructure>
  );
}

export default UserDashboard;
