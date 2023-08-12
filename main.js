/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxVQUFVLGNBQWM7QUFDeEIsVUFBVSxjQUFjO0FBQ3hCLFVBQVU7QUFDVixjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLG1CQUFtQjtBQUNqQyxVQUFVO0FBQ1YsVUFBVTtBQUNWLGNBQWMsa0JBQWtCO0FBQ2hDLGNBQWMsbUJBQW1CO0FBQ2pDLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3Bkb3duLW1lbnUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiICBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAgICAgIHsgbGFiZWw6IFwiT25lXCIgfSxcclxuICAgICAgICB7IGxhYmVsOiBcIlR3b1wiIH0sXHJcbiAgICAgICAgeyB0eXBlOiBcImdyb3VwXCIsIGxhYmVsOiBcIlRocmVlXCIsIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJUaHJlZS1vbmVcIn0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiVGhyZWUtdHdvXCJ9LFxyXG4gICAgICAgIF19LFxyXG4gICAgICAgIHsgdHlwZTogXCJncm91cFwiLCBsYWJlbDogXCJGb3VyXCIsIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJGb3VyLW9uZVwifSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJGb3VyLXR3b1wiIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiRm91ci10aHJlZVwifSxcclxuICAgICAgICBdfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XHJcbiAgXHJcbiAgICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBjb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sdW1uRGl2KTtcclxuICAgICAgY29uc3QgbGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBsYWJlbERpdi50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XHJcbiAgICAgIGNvbHVtbkRpdi5hcHBlbmRDaGlsZChsYWJlbERpdik7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoaXRlbS50eXBlID09PSBcImdyb3VwXCIpIHtcclxuICAgICAgICBpdGVtLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBvcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgb3B0aW9uRGl2LnRleHRDb250ZW50ID0gb3B0aW9uLmxhYmVsO1xyXG4gICAgICAgICAgY29sdW1uRGl2LmFwcGVuZENoaWxkKG9wdGlvbkRpdik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH1cclxuICBcclxuICBjcmVhdGVNZW51KCk7XHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9