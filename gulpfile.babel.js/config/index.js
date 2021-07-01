const SRC = 'src';
const SRC_ASSETS = `${SRC}/assets`;
const SRC_VIEWS = `${SRC}/views`;

const DEST = 'dist';

const routes = {
  src: {
    fonts: `${SRC_ASSETS}/fonts`,
    images: `${SRC_ASSETS}/img`,
    styles: `${SRC_ASSETS}/scss`,
    scripts: `${SRC_ASSETS}/js`,
    views: SRC_VIEWS,
  },
  dest: {
    fonts: `${DEST}/fonts`,
    images: `${DEST}/img`,
    styles: `${DEST}/css`,
    scripts: `${DEST}/js`,
    views: DEST,
  },
};

module.exports = { routes };
