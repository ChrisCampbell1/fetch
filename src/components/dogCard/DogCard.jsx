// npm modules


// components


// services


// styles
import styles from './DogCard.module.css'

// component


export default function DogCard({ dog }) {
  return (
    <div className={styles.container}>
      <h3>{dog.name}</h3>
      <img src={dog.img} alt="dog" />
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>Location: {dog.zip_code}</p>

    </div>
  )
}
