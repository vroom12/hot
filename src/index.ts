interface Window {
  [yl: string]: any;
}
window.hot = (() => {
  const obj = {
    a: 1,
    b: 2,
  };
})();
