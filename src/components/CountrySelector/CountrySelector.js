// ---- Frameworks / Libraries ----
import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core' 

// ---- File Imports ----
import styles from '../../stylesheets/CountrySelector.module.css'
import { fetchCountries } from '../../api'

const CountrySelector =({ handleCountryChange })=>{

  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(()=>{
    const fetchAPI = async () =>{
      setFetchedCountries(await fetchCountries())

    }

    fetchAPI()
  }, [setFetchedCountries])

  return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value='global'>Global</option>
        {fetchedCountries.map((country)=>
          <option value={country}>{country}</option>
        )}
      </NativeSelect>
    </FormControl>
  )
}

export default CountrySelector