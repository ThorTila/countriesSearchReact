import React from 'react';
import { createDevTools } from 'redux-devtools';
import Dispatch from 'redux-devtools-dispatch';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
    <MultipleMonitors>
      <LogMonitor/>
      <Dispatch/>
    </MultipleMonitors>
  </DockMonitor>
);