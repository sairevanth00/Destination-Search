// Write your code here
import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {itemDetails} = this.props
    const {name, imgUrl} = itemDetails

    return (
      <li className="destination-item">
        <img className="destination-image" src={imgUrl} alt="destination-img" />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
