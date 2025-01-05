const initialData = {
    name: '',
    message: ''
}
import { useState } from "react"
import { useImmer } from "use-immer"

export default function ContactForn() {
    // const [contact, setContact] = useState(initialData)
    const [contact, setContact] = useImmer(initialData)
    const handleChange = (e) => {
        const { name, value } = e.target
        setContact(draft => {
            // ...contact,
            // [name]: value
            draft[name] = value;
        })
    }
  return (
    <div>
        <h1>Contact Form</h1>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Masukan Nama' onChange={handleChange} id='name' name='name'/><br />
            <label htmlFor="message">Message</label>
            <input type="text" placeholder='Masukan Pesan' onChange={handleChange} id='message' name='message'/>
            <button type='submit'>Submit</button>
        </form>
        <h1>
          Contact Details
        </h1>
        <p>Name: {contact.name}</p>
        <p>Message: {contact.message}</p>
    </div>
  )
}