export const scrollTo = (id) => {
  document.querySelector("#section" + id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  const scrollPosition = window.scrollY;

  return (
    (rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)) ||
    (scrollPosition > el.offsetTop &&
      scrollPosition < el.offsetTop + rect.height)
  );
};
