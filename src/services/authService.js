const BASE_URL = "https://frontend-take-home-service.fetch.com"

const login = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      credentials: 'include',
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return res
  } catch (error) {
    throw error
  }

}

export { login }
