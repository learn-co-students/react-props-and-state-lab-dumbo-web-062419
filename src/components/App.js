import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (selectedType) => {
    this.setState({
      filters:{
        type: selectedType
      }
    })
  }
  


  onFindPetsClick = () => {
   if(this.state.filters.type === 'all'){
     fetch('/api/pets').then(res => res.json()).then(data => this.setState({
       pets: data,
     }))
    } else if(this.state.filters.type === 'cat'){
    fetch('/api/pets?type=cat').then(res => res.json()).then(data => this.setState({
      pets: data,
    }))
    } else if(this.state.filters.type === 'dog'){
    fetch('/api/pets?type=dog').then(res => res.json()).then(data => this.setState({
      pets: data,
    }))
    } else if(this.state.filters.type === 'micropig'){
    fetch('/api/pets?type=micropig').then(res => res.json()).then(data => this.setState({
      pets: data,
    }))
    }
    
  }

  onAdoptPet = (petID) => {
    const adoptedPet = this.state.pets.find(petObj => petObj.id === petID)
    adoptedPet.isAdopted = true
    this.setState({
      pets: [...this.state.pets]
    })
  }

  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
