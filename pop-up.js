(() => {
  const refs = {
    showMoreBtn: document.querySelector("[data-btn-show-open]"),
    closeshowMoreBtn: document.querySelector("[data-btn-show-close]"),
    showMoreModal: document.querySelector("[data-showMoreModal]"),
  };

  refs.showMoreBtn.addEventListener("click", toggleShowMoreModal);
  refs.closeshowMoreBtn.addEventListener("click", toggleShowMoreModal);

  function toggleShowMoreModal() {
    refs.showMoreModal.classList.toggle("is-hidden");
  }

  function toggleActiveBtn() {
    refs.showMoreBtn.classList.toggle("active");
  }
  // ---добавляю слухача подій клавіатури на кнопку эскейп при відкритому модальному вікні-----------
  document.addEventListener("keydown", onClick);

  // ----------закрити вікно по кнопці Эскейп-------------
  function onClick(e) {
    if (refs.showMoreModal.classList.contains("is-hidden")) {
      return;
    }
    if (e.code === "Escape") {
      console.log("закрываем");
      toggleShowMoreModal();
      // document.removeEventListener("keydown", onClick);
    }
  }
  //   document.removeEventListener('keydown', onClick);
})();
