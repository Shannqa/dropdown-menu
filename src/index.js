  function createMenu() {
    const menuItems = [
        { label: "One" },
        { label: "Two" },
        { type: "group", label: "Three", options: [
            { label: "Three-one"},
            { label: "Three-two"},
        ]},
        { type: "group", label: "Four", options: [
            { label: "Four-one"},
            { label: "Four-two" },
            { label: "Four-three"},
        ]}
        ];

    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("menu-container");
  
    menuItems.forEach((item) => {
      const columnDiv = document.createElement("div");
      container.appendChild(columnDiv);
      const labelDiv = document.createElement("div");
      labelDiv.textContent = item.label;
      columnDiv.appendChild(labelDiv);
      
      if (item.type === "group") {
        item.options.forEach((option) => {
          const optionDiv = document.createElement("div");
          optionDiv.textContent = option.label;
          columnDiv.appendChild(optionDiv);
        });
      }
    });
    body.appendChild(container);
  }
  
  createMenu();
  