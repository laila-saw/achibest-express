import React from 'react'
import Banner from '../components/sections/Banner'
import ReservationForm from '../components/sections/RequestForm'

const Reservation = () => {
  return (
    <div>
        <Banner title={"Request"} bgImg={'url("../assets/imgs/Achibest - Request background.png")'} />
        <ReservationForm/>
    </div>
  )
}

export default Reservation