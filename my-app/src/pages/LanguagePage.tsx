
import { Link, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function LanguagePage() {
    const [ categories, setCategories ] = useState<any[]>([]);
    let params = useParams();
    const language_id = params.language || 0;

    const [ session, setSession ] = useState<any>({});
    const [ progress, setProgress ] = useState<any>();
    const [ languageName, setLanguageName ] = useState<any>("");

    useEffect(() => {   
        async function getProgress(user: any) {
            const { data, error } = await supabase
                .from('has_completed')
                .select('*')
                .eq('user_id', user.id)
                .eq('language_id', language_id)

            if (error) {
                console.log(error);
            } else {
                console.log("progress")
                console.log(data[0].sections_completed);
                setProgress(data[0].sections_completed);
            }
        }
        async function getLanguageName() {
            const { data, error } = await supabase
                .from("programming_language")
                .select("*")
                .eq('language_id', language_id)

            if (error) {
                console.log(error);
            } else {
                console.log("progress")
                console.log(data[0].language_name);
                setLanguageName(data[0].language_name);
            }
        }
        
          supabase.auth.getUser().then(u => {
            setSession(u.data);
            console.log("user data")
            console.log(u.data)
            getProgress(u.data.user);
            getLanguageName();
          })
          
        }, []);

    useEffect( () => {
        async function getCategories() {
            /*const {data, error} = await supabase
                .from("categories")
                .select("*")
                .filter("parent_library_id", "eq", categoriesToNumber[language])*/
            
            const { data, error } = await supabase
                .from('categories')
                .select('*')
                .eq('parent_library_id', Number(language_id))

            if (error) {
                console.log("categories")
                console.log(error);
            } else {
                console.log(data);
                setCategories(data);
            }
        }  
        getCategories();
        
    }, [language_id]);



    return (
        <div className="App">
            <h1>Learn {languageName}</h1>
            {categories.map((category, index) => {
                if (progress + 1 >= category.category_order) {
                    return (
                        <div>
                            <Link to={"/languages/" + language_id + "/" + (index + 1)}>
                                <button className="category-button" key={index} >{category?.category_name}</button>
                            </Link>
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            <button className="category-button-shaded" key={index} >{category?.category_name}</button>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default LanguagePage;
  