interface Window {
  [yl: string]: any;
}
window.hot = () => {
  const obj = {
    a: 1,
    b: 2,
    fn() {
      console.log('webpack');
    },
  };
  return obj;
};
