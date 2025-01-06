import './Nav.css'
export default function Nav() {
  return (
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div className="search">
            <form action="">
            <input type="text" placeholder="Search" />
            <button>Search</button>
            </form>
        </div>
    </nav>
  )
}