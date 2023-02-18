import { useEffect } from "react";
import { useParams } from "react-router-dom";

function LanguagesPage() {
    let params = useParams();
    console.log(params); // "hotspur"
    useEffect(() => {

    }, []);

    return (
        <div className="App">
            <h1>Learn A New Programming Language</h1>
            <button>
                Python
            </button>
            <button>
                JavaScript
            </button>
            <button>
                C++
            </button>
            <button>
                TypeScript
            </button>
        </div>
    )
}

export default LanguagesPage;
  