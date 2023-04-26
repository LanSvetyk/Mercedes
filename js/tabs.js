const dataTabsHandler = document.querySelectorAll("[data-tabs-handler]");
const dataTabsField = document.querySelectorAll("[data-tabs-field]");
const designTitle = document.querySelectorAll(".design__title");

for (let btn of dataTabsHandler) {
    btn.addEventListener("click", () => {
    dataTabsHandler.forEach((item) => {
      item.classList.remove("design-list__item_active");
    });
    btn.classList.add("design-list__item_active");

    designTitle.forEach((title) => {
      title.classList.toggle("hidden");
    });

    dataTabsField.forEach((el) => {
      if (el.dataset.tabsField === btn.dataset.tabsHandler) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
  });
}
