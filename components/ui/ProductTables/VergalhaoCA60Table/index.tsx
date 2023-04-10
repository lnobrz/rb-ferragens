import { TableContainer } from "../styles";
import { productsMeasurements } from "@/storage/data";

const VergalhaoTable = () => {
    return(<TableContainer>
        <thead>
            <tr>
                <th>bitola</th>
                <th>peso barra</th>
                <th>peso kg/m</th>
            </tr>
        </thead>
        <tbody>
            {productsMeasurements.vergalhaoCA60.map((measure) => (
                <>
                    <tr>
                        <td key={measure.barWeight}>{measure.barWeight}</td>
                        <td key={measure.bitolaMilimeters}>{measure.bitolaMilimeters}</td>
                        <td key={measure.weightPerMeter}>{measure.weightPerMeter}</td>
                    </tr>
                </>
            ))}
        </tbody>
    </TableContainer>)
}

export default VergalhaoTable;