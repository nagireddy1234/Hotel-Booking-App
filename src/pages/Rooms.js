import React from 'react';
import Hero from '../Components/Hero';
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Title from '../Components/Title';
// import RoomContainer from '../Components/RoomsContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <Title title="Search Rooms" />
      {/* <RoomContainer /> */}
    </>
  )
}

export default Rooms
