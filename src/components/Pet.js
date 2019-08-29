import React from 'react'

class Pet extends React.Component {

  getGenderSym = () => {
    if(this.props.pet.gender === 'male'){
      return '♂'
    } else if (this.props.pet.gender === 'female'){
      return '♀'
    }
  }

  // renderAdopt = () => {
  //   if(this.props.pet.isAdopter === 'false'){
  //     return <button className="ui primary button">Adopt pet</button>
  //   } else if (this.props.pet.isAdopter === 'true'){
  //     return <button className="ui disabled button">Already adopted</button>
  //   }
  // }

  handleClick = (e) => {
    this.props.onAdoptPet(e.target.id)
  }

  render() {
    console.log(this.props)
    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.getGenderSym()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.name}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button id={this.props.pet.id} onClick={this.handleClick} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
