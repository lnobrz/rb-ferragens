import { TableContainer } from "../styles";
import { productsMeasurements } from "@/storage/data";

const MalhaTable = () => {
    return(<TableContainer>
        <thead>
            <tr>
                <th>designação</th>
                <th>malha cm</th>
                <th>bitola mm</th>
                <th>peso peça</th>
            </tr>
        </thead>
        <tbody>
            {productsMeasurements.malha.map((measure) => (
                <>
                    <tr>
                        <td key={measure.id}>{measure.designation}</td>
                        <td key={measure.id}>{measure.malhaCentimeters}</td>
                        <td key={measure.id}>{measure.bitolaMilimeters}</td>
                        <td key={measure.id}>{measure.pieceWeight}</td>
                    </tr>
                </>
            ))}
        </tbody>
    </TableContainer>)
}

export default MalhaTable;