// import './sass/main.scss';
// import './sass/_button-show-more.scss';

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
  // ---добавляю слушательсобытий клавиатуры на кнопку эскейп при открытом модальном окне-----------
  document.addEventListener("keydown", onClick);
  //   instance.element().querySelector('.btn-close').onclick = instance.close;

  function onClick(e) {
    // ----------закрыла окно по кнопке Эскейп-------------
    if (e.code === "Escape") {
      console.log("закрываем");
      toggleShowMoreModal();
      //   toggleActiveBtn();
      document.removeEventListener("keydown", onClick);
    }
  }

  //   document.removeEventListener('keydown', onClick);
})();
