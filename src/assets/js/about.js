import events from '@runroom/purejs/lib/events';

import example from './components/example';

events.onDocumentReady(() => {
  example();
});
