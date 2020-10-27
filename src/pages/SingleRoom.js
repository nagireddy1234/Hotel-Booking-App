import React, { Component } from 'react'
import defaultBcg from '../images/details-1.jpeg';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';

export default class SingleRoom extends Component {

  state ={
    slug:this.props.match.params.slug,
    defaultBcg
  }

  static contextType=RoomContext;
  render() {
    const {getRoom} = this.context
    // console.log(this.props)
    const room = getRoom(this.state.slug)
    if(!room){
     return( <div className="error">
      <h3>no such room can be found...</h3>
      <Link to="/rooms" className="btn-primary">
        back to rooms
      </Link>
    </div>)
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    // console.log(room)
    return (
      <>
       <Hero hero="roomsHero">
         <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
         </Banner>
        </Hero> 
      </>
    )
  }
}
