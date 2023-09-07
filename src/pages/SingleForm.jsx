import { useState } from "react"

const SingleForm = () => {
    const handleSubmit = event => {
        event.preventDefault()
    }
    const [text, setText] = useState('')
    const [userdata, setUserdata] = useState('')
    const [email, setEmail] = useState('')

    const handleText = (event) => {
        setText(event.target.value)
    }
    const handleUserdata = (event) => {
        setUserdata(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
  return (
    <form onSubmit={handleSubmit} className="container">
        <h1>{text}</h1>
        <h1>{userdata}</h1>
        <h1>{email}</h1>
        <div className="inputdiv">
        <input value={text} onChange={handleText} type="text" className="input" />
      <input value={userdata} onChange={handleUserdata} type="text" className="input" />
      <input value={email} onChange={handleEmail} type="text" className="input" />
        </div>
      <button>SAVE CHANGES</button>
    </form>
  )
}

export default SingleForm
