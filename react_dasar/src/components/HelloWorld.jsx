export default function HelloWorld() {
    const perkenalan = {
        nama: 'Eko',
        umur: 20,
        pekerjaan: 'Programmer'
    }
    return (
        <>
            <h1>Hello World</h1>
            <SayGutenTag />
            <SayBonjour sapa='Aloha' />
            <Perkenalan {...perkenalan} />
            <p>Ini adalah paragraf pertama</p>
            <p>Ini adalah paragraf kedua</p>
        </>
    )
}


function SayGutenTag() {
    const text = 'Guten Tag'
    return <h1 style = {
        {color: 'aqua'}
    }>{text.toLocaleUpperCase()}</h1>
}



function SayBonjour({sapa = 'Bonjour'}) {
    const style = {
        color: 'blue'
    }
    return <h1 style={style}>{sapa.toLocaleUpperCase()}</h1>
}
function Perkenalan({nama, umur, pekerjaan}) {
    return (
        <>
        <h1>{nama }</h1>
        <h1>{umur}</h1>
        <h1>{pekerjaan}</h1>
        </>
    )
}