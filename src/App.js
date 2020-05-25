// ---- Frameworks / Libraries ----
import React, { Component } from 'react'

// ---- File Imports ----
import {Cards,Charts,CountrySelector} from './components'
import styles from './stylesheets/App.module.css'
import {fetchData} from './api'

class App extends Component{ 
  constructor(){
    super()
    this.state ={
      data : {},
      country: '',
    }
  }


  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })

  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)

    this.setState({data: fetchedData, country: country})
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country}/>
        
      </div>
    )
  }
}

export default App;