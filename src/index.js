  import css from './styles.css';
  import menuHamb from './menu_hamb.svg'

  
  function createMenu() {
    const menuItems = [
        { ID: "1", label: "One", url: "http://example.com" },
        { ID: "2", type: "group", label: "Two", options: [
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
        ]},
        { ID: "4", label: "Five", url: "http://example.com" },
        { ID: "5", label: "Six", url: "http://example.com" },
        { ID: "6", label: "Seven", url: "http://example.com" },
        { ID: "7", label: "Eight", url: "http://example.com" },
        { ID: "8", label: "Nine", url: "http://example.com" },
        ];

    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("menu-container");
    const menuHamburger = document.createElement("div");
    const menuIcon = new Image();
    menuIcon.src = menuHamb;
    menuHamburger.appendChild(menuIcon);
    menuHamburger.classList.add("menu-hamburger");
    container.appendChild(menuHamburger);
  
    menuItems.forEach((item) => {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("menu-column");
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

      label.addEventListener("click", () => {
        let IDoptions = document.querySelector(`.menu-id-${item.ID}`);
        IDoptions.classList.toggle("mobile-visible");
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
    menuHamburger.addEventListener("click", () => {
      const columns = document.getElementsByClassName("menu-column");
      // columns.classList.add("visible");
      for (let i = 0; i < columns.length; i++) {
        const element = columns[i];
        element.classList.toggle("visible");
        
      }
      console.log(columns);
    });
  }
  
  createMenu();

  