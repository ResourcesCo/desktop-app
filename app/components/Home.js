import React from 'react';
import SplitPane from 'react-split-pane';
import Sidebar from './Sidebar';

export default () => (
  <SplitPane
    split="vertical"
    defaultSize={250}
    minSize={200}
    resizerStyle={{ width: 3, cursor: 'col-resize' }}
  >
    <div>
      <Sidebar />
    </div>
    <div />
  </SplitPane>
);
