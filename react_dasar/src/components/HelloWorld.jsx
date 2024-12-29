export default function HelloWorld() {
    return (
        <>
            <h1>Hello World</h1>
            <SayGutenTag />
            <SayBonjour />
            <p>Ini adalah paragraf pertama</p>
            <p>Ini adalah paragraf kedua</p>
        </>
    )
}


function SayGutenTag() {
    return <h1>Guten Tag</h1>
}

function SayBonjour() {
    return <h1>Bonjour</h1>
}