export default function Container({children,text}) {
    return (
        <div className="container">
            <h1>Ini batas atas materi {text}</h1>
            {children}
            <h2>Ini batas bawahnya boejang</h2>
        </div>
    )
}