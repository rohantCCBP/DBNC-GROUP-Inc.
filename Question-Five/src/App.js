import {Component} from 'react'

class App extends Component {
  state = {
    listOfWOEID:[],
    cityAndWeatherList: [],
    userInput: '',
    weatherList : [],
    isMounted:false
  }

componentDidMount() {
  this.setState({isMounted:true})
}

  getWOEID = async () => {
    try {
    const {userInput} = this.state
    const locationSearchAPI_URL = `https://www.metaweather.com/api/location/search/?query=${userInput}`    
    const response = await fetch(locationSearchAPI_URL)
    const data = await response.json()

    const listOfWOEID = data.map(cityItem => ({
      title: cityItem.title,
      woeid: cityItem.woeid
    })
    )  

    this.setState({listOfWOEID:listOfWOEID})}
    catch (err) {
      console.log(err)
    }
  }


  getWeather = async (cityWOEID) => {
    try {
    const todayDate = new Date();
    const curYear = todayDate.getFullYear();
    const curMonth = todayDate.getMonth()+1
    const curDay = todayDate.getDate()
    const dateFormatted = curYear+'/'+curMonth+'/'+curDay;

    const locationWOEIDSearchAPI_URL = `https://www.metaweather.com/api/location/${cityWOEID}/${dateFormatted}`
    const response = await fetch(locationWOEIDSearchAPI_URL)
    const data = await response.json()

    const uniqueWeatherStates = data.map(item => item.weather_state_name)
    .filter((value, index, self) => self.indexOf(value) === index)
    
return uniqueWeatherStates
}
catch (err) {
  console.log(err)
}
}

  getWeatherStates = () => {
    const {listOfWOEID}= this.state
    const cityAndWeatherList = listOfWOEID.map( cityItem => ({
    cityName: cityItem.title,
    weatherByDate: this.getWeather(cityItem.woeid)
  })
  )
  this.setState({cityAndWeatherList:cityAndWeatherList})
  }

searchCity = (event) => {
  this.setState({userInput:event.target.value})
  this.getWOEID()
}


renderWeatherList = (cityWOEID) => {

this.getWeather(cityWOEID).then(data => 
 console.log(data)
  )

}



render() {
const {listOfWOEID,isMounted} = this.state


  return <div>
    <input onChange = {this.searchCity} placeholder = "Enter city name" />

    {isMounted && listOfWOEID?.length>0 &&     
<div>
    <h1>{listOfWOEID[0].title} ~ Please open the console to view the list of weather states:</h1>

    <ol>
{this.renderWeatherList(listOfWOEID[0].woeid)}
    </ol>
    </div> 
    }
     </div>
     }
    }

export default App;