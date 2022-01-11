import {component} from 'react'

import HistoryItem from '../HistoryItem'

import './index,css'

class BrowserHistory extends component {
  state = {
    historyList: initialHistoryList,
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({
      historyList: updatedHistoryList,
    })
  }

  render() {
    const {historyList} = this.state

    return (
      <div className="app-container">
        <div className="history-container">
          <ul className="history-list">
            {historyList.map(eachTodo => (
              <HistoryItem
                key={eachTodo.id}
                historyDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
