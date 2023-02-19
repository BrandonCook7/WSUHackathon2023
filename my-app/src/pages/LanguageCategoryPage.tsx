import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuestionCS from "../QuestionCS";
import QuestionFill from "../QuestionFill";
import QuestionQuiz from "../QuestionQuiz";
import { supabase } from "../supabaseClient";

function LanguageCategoryPage() {
    let params = useParams();
    console.log(params); // "hotspur"
    let language_id = params.language;
    let category_id = params.category

    const [ questions, setQuestions ] = useState<any>([]);
    const [ user, setUser ] = useState<any>({});

    useEffect(() => {   
        async function getQuestions(language_id: number, category_id: number) {
            const { data, error } = await supabase
                .from('questions')
                .select('*')
                .eq('parent_library_id', language_id)
                .eq('parent_category_order', category_id)

            if (error) {
                console.log("error")
                console.log(error);
            } else {
                console.log("e")
                console.log(data);
                setQuestions(data);
            }
        }
        getQuestions(Number(language_id), Number(category_id));   
        }, []);

    const recordSuccess = () => {
        const updateDB = async (user: any) => {
            console.log(`${category_id}, ${user.id}, ${language_id}`)
            const { error } = await supabase
                .from('has_completed')
                .update({ sections_completed: category_id })
                .eq('user_id', user.id)
                .eq('language_id', language_id)
        }

        supabase.auth.getUser().then(async (u) => {
            setUser(u.data);
            console.log("user data")
            console.log(u.data.user)
            await updateDB(u.data.user);
        })       
    };

    const [ questionIndex, setQuestionIndex ] = useState(0);

    function processAnswer(e: any, index: number) {
        e.preventDefault();
        console.log(index)
        
        if(index === JSON.parse(questions[0]?.question_data).correct_answer) {
            if (questions.length === 1) {
                setQuestions([{question_data:'{"type":"WIN"}'}])
            }
            else{
                setQuestions(questions.slice(1));
            }
        }
        else {
            const q = questions[0]
            setQuestions(questions.concat(q).slice(1))
        }
    }

    function questionComponent() {
        console.log(questions)
        console.log(`trying to parse, looking at ${0}`)
        // let question = JSON.parse(questions[questionIndex]?.question_data);
        // let question = JSON.parse(`"${questions[questionIndex]?.question_data.replace('\"','\"').replace('\\', '').replace('“', '\"').replace('”', '\"')}"`);
        let question = questions[0]
        if (question !== undefined) {
            question = JSON.parse(questions[0]?.question_data);
        }
        console.log(question);
        if (question?.type === "FIB") {
            return (
                <QuestionFill 
                    fillData={
                        {
                            question_prompt:question.question_prompt,
                            answer: question.correct_answer,
                            answers: question.answers
                        }
                    } 
                    handleInputFunction={processAnswer} 
                />
            )
        } else if (question?.type === "CS") {
            return (
                <QuestionCS 
                    CSData={
                        {
                            question_prompt:question.question_prompt,
                            answer: question.correct_answer,
                            answers: question.answers,
                            code_snippet: question?.code_snippet,
                            language: question?.language
                        }
                    } 
                    handleInputFunction={processAnswer} 
                />
                )
        } else if (question?.type === "MC") {
            return (
                <QuestionQuiz 
                    quizData={
                        {
                            question_prompt:question.question_prompt,
                            answer: question.correct_answer,
                            answers: question.answers
                        }
                    } 
                    handleInputFunction={processAnswer} 
                />
            )
        }
        else if (question?.type === "WIN") {
            recordSuccess()
            return (
                <div>
                    <h1 className="congrats">Excellent job!</h1>
                        <Link to={"/languages/" + language_id}>                    
                            <button className="congrats-button">
                                return to categories
                            </button>
                        </Link>
                </div>
            )
        }
        else {
            return (
                <button onClick={() => setQuestionIndex(0)}> 
                    Start Quiz
                </button>
            )
        }
    }

    return (
        <div className="App">
            {questionComponent()}
        </div>
    )
}

export default LanguageCategoryPage;
  