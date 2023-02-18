
import { useParams } from "react-router-dom";

function LanguagePage() {
    let params = useParams();
    console.log(params); // "hotspur"

    return (
        <div className="App">
            <h1>The website for {params.language}</h1>
        </div>
    )
}

export default LanguagePage;
  