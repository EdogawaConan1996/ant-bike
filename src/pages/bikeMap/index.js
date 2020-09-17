import React from "react";
import {Map, Marker, Polyline} from "react-amap";
import {getBikeList} from "../../api/bike";

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
      routes: [],
      serviceArea: []
    }
  }

  renderMarkPoints = () => {
    return this.state.points.map(item => (
      <Marker key={item.longitude} position={{
        longitude: item.longitude,
        latitude: item.latitude
      }} />
    ))
  }

  componentWillMount() {
    getBikeList().then(response => {
      const bikeList = response.bike_list
      const resBikeList = []
      bikeList.forEach(item => {
        const arr = item.split(',')
        const newItem = {
          longitude: parseFloat(arr[0]),
          latitude: parseFloat(arr[1])
        }
        resBikeList.push(newItem)
      })

      const routeList = response.route_list
      const resRouteList = []
      routeList.forEach(item => {
        const arr = item.split(',')
        const newItem = {
          longitude: parseFloat(arr[0]),
          latitude: parseFloat(arr[1])
        }
        resRouteList.push(newItem)
      })

      const serviceCircleList = response.service_list
      const resServiceCircleList = []
      serviceCircleList.forEach(item => {
        const newItem = {
          longitude: parseFloat(item.lon),
          latitude: parseFloat(item.lat)
        }
        resServiceCircleList.push(newItem)
      })
      console.log(resServiceCircleList);
      this.setState({
        points: resBikeList,
        routes: resRouteList,
        serviceArea: resServiceCircleList
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div style={{width: '100%', height: '500px'}}>
        <Map amapkey={'46df8217922decd3a82296492fa176ba'}>
          {this.renderMarkPoints()}
          <Polyline path={this.state.routes} />
          <Polyline path={this.state.serviceArea} style={{strokeColor: '#ff0000'}}/>
        </Map>
      </div>
    )
  }
}

export default MapPage;
