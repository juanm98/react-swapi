import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../services/sw-api";

const StarShipPage = () => {
  const [starshipDetails, setStarShipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      console.log(starshipData);
      setStarShipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

return (
  <>
    <h1>Starship Page</h1>
  </>
)
}

export default StarShipPage;