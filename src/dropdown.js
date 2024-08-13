function dropdown() {
  const dropButton = document.querySelectorAll(".dropdown-toggle");
  const dropDownContent = document.querySelectorAll(".dropdown-menu");

  dropButton.forEach((button) =>
    button.addEventListener("click", dropdownFunction)
  );

  function dropdownFunction(e) {
    if (!e.target.nextElementSibling.classList.contains("visible")) {
      hideDropdowns();
    }
    e.target.nextElementSibling.classList.toggle("visible");
  }

  window.onclick = function (e) {
    if (!e.target.matches(".dropdown-toggle")) {
      hideDropdowns();
    }
  };

  function hideDropdowns() {
    dropDownContent.forEach((dropdown) => {
      if (dropdown.classList.contains("visible")) {
        dropdown.classList.remove("visible");
      }
    });
  }
}
