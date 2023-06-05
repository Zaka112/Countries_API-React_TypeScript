import React from 'react'

import {CountryListType } from '../../types/types'

type Prop = {
  setCountries: React.Dispatch<CountryListType[]>
  }
export default function CountryList({setCountries}:Prop) {
  
  return (
    <div>CountriesList</div>
  )
}

