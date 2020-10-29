import React, { Component } from 'react'
import BodyComponent from './Components/BodyComponents/BodyComponent'
import HeaderComponents from './Components/HeaderComponents/HeaderComponent'

class App extends Component{
  render (){
    return(
      <>  
       <HeaderComponents />      
      <BodyComponent />
     
      </>
    )
  }
}


export default App;
