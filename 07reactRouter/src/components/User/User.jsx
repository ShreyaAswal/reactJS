import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} =useParams()
    
    return(
        <h1 className="bg-gray-600 border-e-red-400 text-white text-center text-3xl">User : {userid}</h1>
    );
}