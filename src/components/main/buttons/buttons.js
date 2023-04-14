import { Link } from "react-router-dom"
import { Div} from "../../../styles"

export const Buttons = (actualPage) => {

    function colors(page){
        if(page === actualPage.actualPage){
            return "#00BFFF"
        }
        return "white"
    }

    return(
        <Div>
            <Link to={"/MoviesInRelease"} style={{ backgroundColor: colors('upComing') }}>Lançamento</Link>
            <Link to={"/TrendingMovies"} style={{ backgroundColor: colors('emAlta') }}>
                Filmes em Alta
            </Link>
            <Link to={"/RankedMovies"} style={{ backgroundColor: colors('topRated') }}>Filmes bem ranqueados</Link>
        </Div>
    )
}