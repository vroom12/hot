interface Window {
  [yl: string]: any;
}
window.hot = () => {
  const getValue = (value: number) => {
    console.log(value);
  };
  const obj = {
    a: 1,
    b: 2,
    fn() {
      console.log('webpack');
    },
  };
  return { obj, getValue };
};
