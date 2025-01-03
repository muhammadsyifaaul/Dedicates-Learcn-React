const initialData = {
    name: '',
    message: ''
}

export default function ContactForn() {
    const [contact, setContact] = useState(initialData)
  return (
    <div>
        <h1>Contact Form</h1>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Masukan Nama' id='name' name='name'/><br />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}