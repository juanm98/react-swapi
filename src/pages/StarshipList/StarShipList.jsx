import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarShipList = () => {
  const [startshipList, setStarShipList] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setStarShipList(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return (
    <>
    <div><h1>Star Wars Starships</h1></div>
    {startshipList.length ?
      <>
        {startshipList.map(starship =>
          <div key={starship.name}>
          <Link 
            to='/starship' 
            state={{starship}}>{starship.name}
          </Link>
          </div>
        )}
      </>
      :
      <>
        <h3>Loading Starships</h3>
      </>
    }
  </>
)
}

export default StarShipList;