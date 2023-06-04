export const setRootFontSize = (size: number) => {
  let root = document.documentElement;
  root.style.setProperty("--font-size", size + "px");
  localStorage.setItem("fontSize", size + "px");
  root.style.setProperty("fontSize", localStorage.getItem("fontSize"));
};
