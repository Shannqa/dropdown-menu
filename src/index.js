  import css from './styles.css';
  
  function createMenu() {
    const menuItems = [
        { ID: "1", label: "One", url: "http://example.com" },
        { ID: "2", type: "group", label: "Two", url: "http://example.com", options: [
          { label: "Two-one", url: "http://example.com" },
          { label: "Two-two", url: "http://example.com"},
      ]},
        { ID: "3", type: "group", label: "Three", options: [
            { label: "Three-one", url: "http://example.com" },
            { label: "Three-two", url: "http://example.com"},
        ]},
        { ID: "4", type: "group", label: "Four", options: [
            { label: "Four-one", url: "http://example.com"},
            { label: "Four-two", url: "http://example.com" },
            { label: "Four-three", url: "http://example.com"},
        ]}
        ];

    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("menu-container");
  
    menuItems.forEach((item) => {
      const columnDiv = document.createElement("div");
      container.appendChild(columnDiv);
      const label = document.createElement("a");
      label.classList.add("menu-label");
      label.textContent = item.label;
      if (item.url) {
        label.setAttribute("href", `${item.url}`);
      }
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
          const optionLabel = document.createElement("a");
          optionLabel.classList.add("menu-option");
          optionLabel.textContent = option.label;
          if (option.url) {
            optionLabel.setAttribute("href", `${option.url}`);
          }
          optionsDiv.appendChild(optionLabel);
        });
        columnDiv.appendChild(optionsDiv)
      }
    });
    body.appendChild(container);
  }
  
  createMenu();