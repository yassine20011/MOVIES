import React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";


export default function Welcome() {
    const movies = localStorage.getItem('user');
	const moviesJson = JSON.parse(movies);
	const [user] = useState(moviesJson);


    
    return ( 
    <React.Fragment>
    <Typography
        variant="h1"
        component="div"
        style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            position: "absolute",
            top: "100px",
            fontSize: "3rem",
            textAlign: "center",
            margin: "0 auto",
            padding: "1rem",
            borderRadius: "0.5rem"
        }}
    >
        {(() => {
         try {
            return "Welcome " + user.username
        } catch (e) {
            return "Welcome to the app"
        }
        })()}

    </Typography> 
    </React.Fragment>
    );
}

