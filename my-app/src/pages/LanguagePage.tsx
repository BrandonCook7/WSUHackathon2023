
import { Link, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function LanguagePage() {
    const [ categories, setCategories ] = useState<any[]>([]);
    let params = useParams();
    const language = params.language || "";
    console.log(params); // "hotspur"

    const categoriesToNumber : any = {
        "typescript": 4
    }

    useEffect( () => {
        async function getCategories() {
            /*const {data, error} = await supabase
                .from("categories")
                .select("*")
                .filter("parent_library_id", "eq", categoriesToNumber[language])*/
            
            const userData = await supabase.auth.getSession();
            console.log(userData.data.session?.user.id);

            console.log(language);
            
            const { data, error } = await supabase
                .from('categories')
                .select('language_name, programming_language(*)')
                .eq('programming_language.language_name', language)

            if (error) {
                console.log(error);
            } else {
                console.log(data);
                setCategories(data);
            }
        }

        if(typeof language !== undefined) {
            getCategories();
        }
    }, [language]);

    return (
        <div className="App">
            <h1>The website for {params.language}</h1>
            {categories.map((category, index) => {
                return (
                    <Link to={"/languages/" + language + "/" + (index + 1)}>
                        <h3 key={index} >{category?.category_name}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default LanguagePage;
  