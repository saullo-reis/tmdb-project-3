import { Link } from "react-router-dom"
import { Div} from "../../../styles"

export const Buttons = (actualPage) => {

    function colors(page){
        if(page === actualPage.actualPage){
            return "#00BFFF"
        }
        return "white"
    }
    console.log(actualPage)
    return(
        <Div>
            <Link to={"/Upcoming"} style={{ backgroundColor: colors('upComing') }}>Lançamento</Link>
            <Link to={"/emAlta"} style={{ backgroundColor: colors('emAlta') }}>
                Filmes em Alta
            </Link>
            <Link to={"/bemRanqueados"} style={{ backgroundColor: colors('topRated') }}>Filmes bem ranqueados</Link>
        </Div>
    )
}