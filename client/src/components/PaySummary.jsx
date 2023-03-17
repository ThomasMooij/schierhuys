import { useState } from "react"
import { useLocation } from "react-router-dom"



const PaySummary = () => {
  const location = useLocation()
  const [date, setDate] = useState(location.state.date)
  const [guest, setGuest] = useState(location.state.guest)
  const [options, setOptions] = useState(location.state.options)
console.log(date)
console.log(guest)
console.log(options)

  return (
    <div>
      PaySummary
    </div>
  )
}

export default PaySummary
