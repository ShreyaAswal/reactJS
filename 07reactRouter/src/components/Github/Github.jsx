import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    //const [data,setData]=useState({})

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ShreyaAswal')
    //     .then(response =>response.json())
    //     .then((response) =>{
    //         setData(response)
    //     })
    // },[])

    const data= useLoaderData()
    return(
        <>
        <h2 className="bg-gray-600 border-e-red-400 text-white text-center text-3xl">Github Followers: {data['followers']}</h2>
        <img className="w-45" src={data.avatar_url} alt="github pfp" />
        </>
    );
}

export const githubInfo = async ()=>{
    const res=await fetch('https://api.github.com/users/ShreyaAswal')
    return res.json()
}