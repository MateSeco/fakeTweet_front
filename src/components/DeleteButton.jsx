import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import tweetActions from "../redux/Actions/tweetActions";
import axios from "axios";
import {Link} from "react-router-dom"

export default function DeleteButton({tweet}) {
    const dispatch = useDispatch()
    const token = useSelector(state => state.userReducer.token)

    function handleDelete() {
        dispatch(tweetActions.deleteTweet(tweet._id))

        axios({
            method: "delete",
            url: `${process.env.REACT_APP_URL}/tweets/${tweet._id}`,
            headers: { Authorization: `Bearer ${token}` },
        }).then((res) => console.log(res.data))

}

    return(
        <button type="button" onClick={handleDelete} className="delete">
            <i className="far fa-trash-alt ml-2"></i>
        </button>
    )
}