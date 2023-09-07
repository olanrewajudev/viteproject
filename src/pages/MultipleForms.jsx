import { useState } from "react"

const MultipleForms = () => {
    const [forms, setForms] = useState({
        username: '',
        email: '',
        phone: ''
        
    })

    const [infos, setInfos] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        setInfos(forms)
        setForms({
            username: '',
            phone: '',
            email: ''
        })
    }

    const handleForms = (event) => {
        setForms({
            ...forms,
            [event.target.name]: event.target.value
        })
    }
  return (
    <form onSubmit={handleSubmit} className="container">
        <h1>Username: {infos.username}</h1>
        <h1>Email: {infos.email}</h1>
        <h1>Phone: {infos.phone}</h1>
      <div className="inputdiv">
        <input name="username" onChange={handleForms} value={forms.username} type="text" className="input" />
        <input name="email" onChange={handleForms} value={forms.email} type="email" className="input" />
        <input name="phone" onChange={handleForms} value={forms.phone} type="number" className="input" />
      </div>
      <button>Save Contacts</button>
    </form>
  )
}

export default MultipleForms
