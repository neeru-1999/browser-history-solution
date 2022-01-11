import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <p className="logoUrl">{logoUrl}</p>
      <p className="title">{title}</p>
      <p className="domainUrl">{domainUrl}</p>
      <button type="button" className="delete-btn" onClick={onDeleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-img"
          alt="delete"
        />
        {imgUrl}
      </button>
    </li>
  )
}

export default HistoryItem
