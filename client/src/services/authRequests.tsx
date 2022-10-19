import axios from 'axios'
// interface User {
//   name: string
//   email: string
//   password: string
// }
export const registerUser = async <T,>(user: T): Promise<T> => {
  try {
    const response = await axios.post(`http://localhost:4000/v1/register`, user)
    if (!response.data) {
      throw new Error('The account was not created. Try again.')
    } else {
      return response.data
    }
  } catch (err) {
    throw err
  }
}
export const loginUser = async <T,>(data: T): Promise<T> => {
  try {
    const response = await axios.post(`http://localhost:4000/v1/login`, data)
    if (!response.data) {
      throw new Error('The account was not created. Try again.')
    } else {
      console.log(response.data)
      return response.data
    }
  } catch (err) {
    throw err
  }
}
