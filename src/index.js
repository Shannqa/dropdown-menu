  import css from './styles.css';
  
  function createMenu() {
    const menuItems = [
        { ID: "1", label: "One" },
        { ID: "2", label: "Two" },
        { ID: "3", type: "group", label: "Three", options: [
            { label: "Three-one"},
            { label: "Three-two"},
        ]},
        { ID: "4", type: "group", label: "Four", options: [
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
      const label = document.createElement("div");
      label.classList.add("menu-label");
      label.textContent = item.label;
      columnDiv.appendChild(label);
            
      if (item.type === "group") {
        label.addEventListener("mouseover", () => {
          let IDoptions = document.querySelector(`.menu-id-${item.ID}`);
          IDoptions.classList.add("menu-visible");
        });
        columnDiv.addEventListener("mouseleave", () => {
        let IDoptions = document.querySelector(`.menu-id-${item.ID}`);
        IDoptions.classList.remove("menu-visible");
      });
        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("menu-options", `menu-id-${item.ID}`);
        item.options.forEach((option) => {
          const optionLabel = document.createElement("div");
          optionLabel.classList.add("menu-option");
          optionLabel.textContent = option.label;
          optionLabel.addEventListener("click", () => {

          })
          optionsDiv.appendChild(optionLabel);
        });
        columnDiv.appendChild(optionsDiv)
      }
    });
    body.appendChild(container);
  }
  
  createMenu();
  