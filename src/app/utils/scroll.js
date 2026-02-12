export const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navbar = document.querySelector(".navbar-light");
  let offset = 20;

  if (navbar) {
    const style = window.getComputedStyle(navbar);
    const navTop = parseFloat(style.top) || 0;
    const navPadding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const brand = navbar.querySelector(".navbar-brand");
    const brandHeight = brand ? brand.offsetHeight : 32;
    offset = navTop + navPadding + brandHeight;
  }

  const y = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
