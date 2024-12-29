export default function Container({children}) {
    return (
        <div className="container">
            <h1>Ini batas atas container</h1>
            {children}
            <h2>Ini batas bawahnya boejang</h2>
        </div>
    )
}