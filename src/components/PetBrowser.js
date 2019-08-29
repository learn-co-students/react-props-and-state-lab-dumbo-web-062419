import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petComps = this.props.pets.map(singlePet => <Pet onAdoptPet={this.props.onAdoptPet} key={singlePet.id} pet={singlePet}/>)
    return <div className="ui cards">{petComps}</div>
  }
}

export default PetBrowser
