const BASE_URL = "https://frontend-take-home-service.fetch.com"


const fetchAllDogs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/dogs/search`, {
      credentials: 'include',
      mode: 'cors',
      method: 'GET',
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

const fetchMoreDogs = async (more) => {
  try {
    const res = await fetch(`${BASE_URL}${more}`, {
      credentials: 'include',
      mode: 'cors',
      method: 'GET',
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

const fetchDogData = async (arr) => {
  try {
    const res = await fetch(`${BASE_URL}/dogs`, {
      credentials: 'include',
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(arr),
    })
    return res.json()
  } catch (error) {
    throw error
  }
}

export { fetchAllDogs, fetchMoreDogs, fetchDogData }
