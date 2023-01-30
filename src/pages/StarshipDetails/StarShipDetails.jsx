import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api";
import { Link, useLocation } from "react-router-dom";

const StarShipDetails = () => {
  const [starshipDetails, setstarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      console.log(starshipData);
      setstarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

return (
  <>
    <h1>Starship Details</h1>
    <h2>Name: {starshipDetails.name}</h2>
    <h2>Model: {starshipDetails.model}</h2>
    <Link 
      to='/'>Return To Starships
    </Link>
  </>
)
}

export default StarShipDetails