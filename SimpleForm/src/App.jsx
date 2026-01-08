import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submittedData, setSubmittedData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData([...submittedData, { name, email }])
    setName('')
    setEmail('')
  }

  return (
    <div>
      <h1>Simple Form SPA</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Data</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>Name: {data.name}, Email: {data.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
