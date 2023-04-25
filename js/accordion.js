const featureLink = document.querySelectorAll(".feature__link");
const featureSub = document.querySelectorAll(".feature-sub");

featureLink.forEach((elemBtn, index) => {
  elemBtn.addEventListener("click", () => {
    featureSub.forEach((itemList) => {
      itemList.classList.add("hidden");
    });

    if (!elemBtn.classList.contains("feature__link_active")) {
      featureLink.forEach((elemBtn) => {
        elemBtn.classList.remove("feature__link_active");
      });
      elemBtn.classList.add("feature__link_active");
      featureSub[index].classList.remove("hidden");
    } else {
      elemBtn.classList.remove("feature__link_active");
      featureSub[index].classList.add("hidden");
    }
  });
});
