import animateTo from '@runroom/purejs/lib/animateTo';
import forEach from '@runroom/purejs/lib/forEach';
import events from '@runroom/purejs/lib/events';
import isExplorer from '@runroom/purejs/lib/isExplorer';
import touchable from '@runroom/purejs/lib/touchable';

import './helpers/polyfills';

if (isExplorer()) document.documentElement.classList.add('browser-ie');
document.documentElement.classList.remove('no-js');

const isTouchable = touchable();
document.documentElement.classList.add(isTouchable ? 'touch' : 'non-touch');

events.onDocumentReady(() => {
  const anchors = document.querySelectorAll('.js-anchor');

  if (anchors) {
    forEach(anchors, anchor => {
      anchor.addEventListener('click', event => {
        const element = event.target.dataset.anchor || event.target.getAttribute('href');
        animateTo({ element, speed: 300 });
      });
    });
  }
});
