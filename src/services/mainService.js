import axios from 'axios'
import config from '../configurations/config.json'

export function fetchImage (searchString) {
  return new Promise((resolve, reject) => {
    const params = {
      name: searchString
    }

    axios
      .get(config.API.UNI_SEARCH, { params: params })
      .then((response) => {
        console.log(response)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
