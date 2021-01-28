import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Suggestion from "./Suggestion"

export default function Suggestions() {
    const user = useSelector((state) => state.user);
    const token = user.token;
    const [suggestions, setSuggestions] = useState("");

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}/users`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => setSuggestions(res.data))
            .catch((err) => console.log("err", err));
    }, [token]);

    return (
        <>
            {suggestions[0] && <div className="row mb-3">
                {suggestions.map((suggestion) => {
                    return (
                        <div className="col-12 col-sm-6" key={suggestion._id}>
                            <Suggestion suggestion={suggestion}
                            />
                        </div>
                    );
                })}
            </div>}
        </>
    )
}