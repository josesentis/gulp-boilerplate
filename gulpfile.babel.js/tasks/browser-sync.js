import browserSync from 'browser-sync';

import { routes } from '../config';

const reload = done => {
  browserSync.reload();
  done();
};

const serve = done => {
  browserSync.init({
    server: { baseDir: `${routes.dest.views}/` },
    port: 5000,
    ui: { port: 5001 },
    options: { reloadDelay: 250 },
    notify: true,
    open: true
  });
  done();
};

export { reload, serve };
