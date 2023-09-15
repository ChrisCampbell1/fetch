// npm modules
import { useEffect, useState } from "react"

// components
import DogCard from "../../components/dogCard/DogCard"

// services
import * as dogService from "../../services/dogService"

// styles
import styles from './BrowseDogs.module.css'

// component


export default function BrowseDogs() {
  const [dogs, setDogs] = useState([])

  const [dogData, setDogData] = useState(null)

  const [more, setMore] = useState(null)
  
  useEffect(() => {
    const fetchAll = async () => {
      const dogIds = await dogService.fetchAllDogs()
      console.log(dogIds)
      setDogs(dogIds.resultIds)
      setMore(dogIds.next)
      const dogObjs = await dogService.fetchDogData(dogs)
      setDogData(dogObjs)
      console.log(dogObjs)
    }
    fetchAll()
  }, [])
  
const handleMore = async () => {
  const dogIds = await dogService.fetchMoreDogs(more)
  console.log(dogIds)
  setDogs(dogIds.resultIds)
  setMore(dogIds.next)
  const dogObjs = await dogService.fetchDogData(dogs)
  setDogData(dogObjs)
  console.log(dogObjs)
}

  return (
    <main className={styles.container}>
      <h1>Browse Dogs</h1>
        {
          dogData ?
            dogData.map((dog) => 
              <DogCard key={dog.id} dog={dog}/>
            )
          :
            <>
            <h2>Loading Dogs...</h2>
            </>
        }
        <button type="button" onClick={handleMore}>More Dogs</button>
    </main>
  )
}
