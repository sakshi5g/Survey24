import "../App.css"
import React, { useRef, useState } from "react";
import { survey } from '../Resources/survey';
import { useNavigate } from "react-router-dom";

export default function Survey() {
    // const [SurveyType] = useState(['Technology', 'Economics', 'Health', 'Education', 'Job satisfaction', 'Education','Health', 'Education']);
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    // useState ---> whenever the state changes it will re-render the component
    const search_ref = useRef();
    console.log("re-render");
    return (
        <div className="container searchContainer">
            <div className="d-flex">
                <div className="d-flex search ms-auto mt-1">
                    <input
                        className="mr-sm-2 rounded"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        ref={search_ref}
                        onKeyDown={(e) => {
                            if (e.key == 'Enter') {
                                setSearch(search_ref.current.value)
                            }
                        }}
                    />
                    <button className="btn btn btn-dark my-2 my-sm-0" onClick={() => { setSearch(search_ref.current.value) }}>
                        Search
                    </button>
                </div>
            </div>


            <div className='container d-flex justify-content-center SurveyTypeBox'>
                <div className="container TypeBox justify-content-center align-items-center position-absolute top-50 ml-3 p-4 rounded-3">
                    <div className="row row-cols-4 justify-content-center align-items-center">
                        {

                            survey.map((v) => {
                                if (v.name.toLowerCase().includes(search)) {
                                    return (
                                        <div
                                            key={v.id}
                                            onClick={() => {
                                                navigate(`/survey/${v.id}`);
                                            }}
                                            className="survey rounded shadow SurveyType h-10 col d-flex btn btn-light m-3 p-3 justify-content-center btn-lg shadow"
                                        >
                                            {v.name}
                                        </div>
                                    );
                                }
                            })
                        }


                    </div>
                </div>
            </div>
        </div>
    )

}
