import axios from "axios"
import { useState, useEffect } from 'react'

function App() {
  const [body, setBody] = useState('')

  useEffect(() => {
    axios.get('http://localhost:7777/get_data')
    .then(response => {
      const data = response.data
      setBody(data["body"])
    })
    .catch((e) => {
      throw Error("Something went wrong...")
    })
  }, [])
  return (
    <div>
      {body}
    </div>
  );
}

export default App;
