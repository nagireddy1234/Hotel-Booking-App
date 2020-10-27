import React, { Component } from 'react';
import items from './data';

const RoomContext =React.createContext();

 class RoomProvider extends Component {

  state={
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  }
  
  componentDidMount() {
    //  this.getData();

     let rooms = this.formatData(items);
     let featuredRooms = rooms.filter(room => room.featured===true)
     this.setState({
       rooms,
       featuredRooms,
       loading:false,
       sortedRooms:rooms 
     })
    //  console.log(rooms)
  }

  // getData = () => {
  //   return "Hello"
  // }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let rooms = { ...item.fields, images, id };
      return rooms;
    });
    // console.log(tempItems)
     return tempItems;
  }

  getRoom = (slug) =>{
    let tempRooms = [...this.state.rooms]
    let room = tempRooms.find(room => room.slug===slug)
    return room
  }
  render() {
    // console.log( this.getRoom)
    return (
      <RoomContext.Provider value={{
        ...this.state,
         getRoom:this.getRoom
      }}>
          {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer =RoomContext.Consumer;

export {RoomProvider, RoomContext, RoomConsumer};