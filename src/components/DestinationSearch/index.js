// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialDestinationsList} = this.props
    const searchResults = initialDestinationsList.filter(eachDestination =>
      eachDestination.name.toLowercase().includes(searchInput.toLowercase()),
    )
    return (
      <div className="main-container">
        <div className="destinations-search-container">
          <h1 className="main-heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              placeholder="Search"
              value={searchInput}
              className="search-input"
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="destinations-list">
            {initialDestinationsList.map(eachItem => (
              <DestinationItem itemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
