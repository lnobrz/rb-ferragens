import { TableContainer } from "../styles";
import { products } from "@/storage/data";

const VergalhaoTable = () => {
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
            {products.filter((product) => product.name === "vergalhões").map((vergalhoes) => vergalhoes.measurements?.ca60.map((measure) => (
                <>
                    <tr>
                        <td key={measure.barWeight}>{measure.barWeight}</td>
                        <td key={measure.bitolaMilimeters}>{measure.bitolaMilimeters}</td>
                        <td key={measure.weightPerMeter}>{measure.weightPerMeter}</td>
                    </tr>
                </>
            )))}
        </tbody>
    </TableContainer>)
}

export default VergalhaoTable;