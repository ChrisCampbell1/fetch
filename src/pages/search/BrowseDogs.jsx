// npm modules
import { useEffect, useState } from "react"

// components


// services
import * as dogService from "../../services/dogService"

// styles
import styles from './BrowseDogs.module.css'

// component


export default function BrowseDogs() {
  const [dogs, setDogs] = useState([])

  const [dogData, setDogData] = useState([])
  
  useEffect(() => {
    const fetchAll = async () => {
      const dogIds = await dogService.fetchAllDogs()
      console.log(dogIds)
      setDogs(dogIds.resultIds)
      const dogObjs = await dogService.fetchDogData(dogs)
      setDogData(dogObjs)
      console.log(dogObjs)
    }
    fetchAll()
  }, [])
  
  return (
    <main className={styles.container}>
      <h1>Browse Dogs</h1>
    </main>
  )
}
