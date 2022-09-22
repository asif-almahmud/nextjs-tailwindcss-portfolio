export const scrollToPageTop = () => window.scrollTo(0, 0);

export const scrollToElementTop = (element: HTMLElement) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });

export const scrollToPageBottom = () =>
  window.scrollTo(0, document.body.scrollHeight);
