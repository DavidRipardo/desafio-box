import React, { useRef, useState } from "react";
import JqxKanban, {
  jqx,
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban";

export const Teste = () => {
  const theme = jqx.theme;
  const myKanban = useRef(null);
  const itemIndex = useRef(0);

  const fields = [
    { name: "id", type: "string" },
    { name: "status", map: "state", type: "string" },
    { name: "text", map: "label", type: "string" },
    { name: "tags", type: "string" },
    { name: "color", map: "hex", type: "string" },
    { name: "resourceId", type: "number" },
  ];

  const source = {
    dataFields: fields,
    dataType: "array",
    localData: [
      {
        id: "1161",
        state: "new",
        label: "Combine Orders",
        tags: "orders, combine",
        hex: "#5dc3f0",
        resourceId: 3,
      },
      {
        id: "1645",
        state: "work",
        label: "Change Billing Address",
        tags: "billing",
        hex: "#f19b60",
        resourceId: 1,
      },
      {
        id: "9213",
        state: "new",
        label: "One item added to the cart",
        tags: "cart",
        hex: "#5dc3f0",
        resourceId: 3,
      },
      {
        id: "6546",
        state: "done",
        label: "Edit Item Price",
        tags: "price, edit",
        hex: "#5dc3f0",
        resourceId: 4,
      },
      {
        id: "9034",
        state: "new",
        label: "Login 404 issue",
        tags: "issue, login",
        hex: "#6bbd49",
      },
    ],
  };

  const resourcesAdapterFunc = () => {
    const resourcesSource = {
      dataFields: [
        { name: "id", type: "number" },
        { name: "name", type: "string" },
        { name: "image", type: "string" },
        { name: "common", type: "boolean" },
      ],
      dataType: "array",
      localData: [
        {
          id: 0,
          name: "No name",
          image: "./../images/andrew.png",
          common: true,
        },
        { id: 1, name: "Andrew Fuller", image: "./../images/andrew.png" },
        { id: 2, name: "Janet Leverling", image: "./../images/janet.png" },
        { id: 3, name: "Steven Buchanan", image: "./../images/steven.png" },
        { id: 4, name: "Nancy Davolio", image: "./../images/nancy.png" },
        { id: 5, name: "Michael Buchanan", image: "./../images/Michael.png" },
        { id: 6, name: "Margaret Buchanan", image: "./../images/margaret.png" },
        { id: 7, name: "Robert Buchanan", image: "./../images/robert.png" },
        { id: 8, name: "Laura Buchanan", image: "./../images/Laura.png" },
        { id: 9, name: "Laura Buchanan", image: "./../images/Anne.png" },
      ],
    };
    return new jqx.dataAdapter(resourcesSource);
  };

  const getIconClassName = () => {
    switch (theme) {
      case "darkblue":
      case "black":
      case "shinyblack":
      case "ui-le-frog":
      case "metrodark":
      case "orange":
      case "highcontrast":
      case "ui-sunny":
      case "ui-darkness":
        return "jqx-icon-plus-alt-white";
      default:
        return "jqx-icon-plus-alt";
    }
  };

  const template = `
        <div class="jqx-kanban-item" id="">
            <div class="jqx-kanban-item-color-status"></div>
            <div style="display: none;" class="jqx-kanban-item-avatar"></div>
            <div class="jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon"></div>
            <div class="jqx-kanban-item-text"></div>
            <div style="display: none;" class="jqx-kanban-item-footer"></div>
        </div>
    `;

  const itemRenderer = (element, item, resource) => {
    element[0].getElementsByClassName(
      "jqx-kanban-item-color-status"
    )[0].innerHTML = `<span style="line-height: 23px; margin-left: 5px;">${resource.name}</span>`;
  };

  const [state] = useState({
    columns: [
      { text: "Backlog", iconClassName: getIconClassName(), dataField: "new" },
      {
        text: "In Progress",
        iconClassName: getIconClassName(),
        dataField: "work",
      },
      { text: "Done", iconClassName: getIconClassName(), dataField: "done" },
    ],
    itemRenderer,
    resources: resourcesAdapterFunc(),
    source: new jqx.dataAdapter(source),
    template,
  });

  const onItemAttrClicked = (event) => {
    const args = event.args;
    if (args.attribute === "template") {
      myKanban.current.removeItem(args.item.id);
    }
  };

  const onColumnAttrClicked = (event) => {
    const args = event.args;
    if (args.attribute === "button") {
      args.cancelToggle = true;
      if (!args.column.collapsed) {
        const colors = ["#f19b60", "#5dc3f0", "#6bbd49", "#dddddd"];
        myKanban.current.addItem({
          color: colors[Math.floor(Math.random() * 4)],
          resourceId: Math.floor(Math.random() * 4),
          status: args.column.dataField,
          tags: "new task",
          text: `
                        <input placeholder="(No Title)" style="width: 96%; margin-top:2px; border-radius: 3px;
                        border-color: #ddd; line-height:20px; height: 20px;" class="jqx-input" id="newItem${itemIndex.current}" value= "" />
                    `,
        });

        const id = `newItem${itemIndex.current}`;
        const myInput = document.getElementById(id);
        if (myInput) {
          myInput.addEventListener("mousedown", (eventEl) => {
            eventEl.stopPropagation();
          });
          myInput.addEventListener("mouseup", (eventEl) => {
            eventEl.stopPropagation();
          });
          myInput.addEventListener("keydown", (eventEl) => {
            if (eventEl.keyCode === 13) {
              const valueElement = `<span>${eventEl.target.value}</span>`;
              eventEl.target.insertAdjacentHTML("beforebegin", valueElement);
              eventEl.target.remove();
            }
          });
          myInput.focus();
        }
        itemIndex.current++;
      }
    }
  };

  return (
    <JqxKanban
      ref={myKanban}
      onItemAttrClicked={onItemAttrClicked}
      onColumnAttrClicked={onColumnAttrClicked}
      // @ts-ignore
      width={"100%"}
      template={state.template}
      source={state.source}
      columns={state.columns}
      resources={state.resources}
      itemRenderer={state.itemRenderer}
      height={600}
    />
  );
};
