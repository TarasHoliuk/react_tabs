import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab || tabs[0],
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <Tabs
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
          tabs={tabs}
        />
      </div>
    );
  }
}

export default App;