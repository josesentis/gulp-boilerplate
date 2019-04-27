const SRC_ASSETS = 'src/assets';
const DEST_ASSETS = 'dist/assets';

const routes = {
  src: {
    fonts: `${SRC_ASSETS}/fonts`,
    styles: `${SRC_ASSETS}/scss`
  },
  dest: {
    fonts: `${DEST_ASSETS}/fonts`,
    styles: `${DEST_ASSETS}/css`
  }
};

export { routes };