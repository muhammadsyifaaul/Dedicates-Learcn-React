export default function AllertButton({text,message = 'click biasa'}) {
    function handleClick() {
        alert(`Hello World dengan function ${message}`)
    }
    return <>
    <button onClick={() => alert('Hello World')}>onClick biasa</button>
    <button onClick={handleClick}>onClick dengan function</button>
    </>
}