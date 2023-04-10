import { TableContainer } from "../styles";
import { productsMeasurements } from "@/storage/data";

const VergalhaoCA50Table = () => {
    return(<TableContainer>
        <thead>
            <tr>
                <th colSpan={2}>bitola</th>
                <th rowSpan={2}>peso barra</th>
                <th rowSpan={2}>peso kg/m</th>
            </tr>
            <tr>
                <th>pol.</th>
                <th>mm.</th>
            </tr>
        </thead>
        <tbody>
            {productsMeasurements.vergalhaoCA50.map((measure) => (
                <>
                    <tr>
                        <td key={measure.barWeight}>{measure.barWeight}</td>
                        <td key={measure.bitolaInches}>{measure.bitolaInches}</td>
                        <td key={measure.bitolaMilimeters}>{measure.bitolaMilimeters}</td>
                        <td key={measure.weightPerMeter}>{measure.weightPerMeter}</td>
                    </tr>
                </>
            ))}
        </tbody>
    </TableContainer>)
}

export default VergalhaoCA50Table;