import React from 'react'
import Banner from '../components/sections/Banner'
import ReservationForm from '../components/sections/RequestForm'
import requestBg from "../assets/imgs/Achibest - Request background.png"

const Reservation = () => {
  return (
    <div>
        <Banner title={"Request"} bgImg={`url("${requestBg}")`} />
        <ReservationForm/>
    </div>
  )
}

export default Reservation