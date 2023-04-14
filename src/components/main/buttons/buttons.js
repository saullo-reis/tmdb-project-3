import { Link } from "react-router-dom"
import { Div} from "../../../styles"

export const Buttons = (actualPage) => {

    function changeColors(page){
        if(page === actualPage.actualPage){
            return "#00BFFF"
        }
        return "white"
    }

    return(
        <Div>
            <Link to={"/MoviesInRelease"} style={{ backgroundColor: changeColors('upComing') }}>Lançamento</Link>
            <Link to={"/TrendingMovies"} style={{ backgroundColor: changeColors('emAlta') }}>
                Filmes em Alta
            </Link>
            <Link to={"/RankedMovies"} style={{ backgroundColor: changeColors('topRated') }}>Filmes bem ranqueados</Link>
        </Div>
    )
}