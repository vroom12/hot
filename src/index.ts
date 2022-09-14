interface Window {
  [yl: string]: any;
}
window.hot = {
  getValue(value: number) {
    console.log(value);
  },
  obj: {
    a: 1,
    b: 2,
    fn() {
      console.log('webpack');
    },
  },
};
