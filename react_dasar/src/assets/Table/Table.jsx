import Row from "./Row";


export default function Table() {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                </tr>
            </thead>
            <tbody>
                <Row id={1} text="Eko" /> 
                <Row id={2} text="Jamal" /> 
                <Row id={3} text="Murhanudin" /> 
            </tbody>
        </table>
    )
}