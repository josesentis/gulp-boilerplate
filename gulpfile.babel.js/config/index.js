const SRC_ASSETS = 'src/assets';

const DEST = 'dist';
const DEST_ASSETS = `${DEST}/assets`;

const routes = {
  src: {
    fonts: `${SRC_ASSETS}/fonts`,
    images: `${SRC_ASSETS}/img`,
    styles: `${SRC_ASSETS}/scss`,
    scripts: `${SRC_ASSETS}/js`,
    views: `${SRC_ASSETS}/views`,
  },
  dest: {
    fonts: `${DEST_ASSETS}/fonts`,
    images: `${DEST_ASSETS}/img`,
    styles: `${DEST_ASSETS}/css`,
    scripts: `${DEST_ASSETS}/js`,
    views: DEST,
  },
};

export { routes };
