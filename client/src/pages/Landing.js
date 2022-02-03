import React from "react";
import styled from "styled-components";



export default function Landing() {
return(
    <body className="landing">
        <br></br>

    <LandingCard>
    <LandingBody>
    <h1>
        Welcome to Cultural-Eats!
    </h1>
    <p>
        Cultural-Eats allows you to easily search for recipes based on your desired culture and food category, allowing you to easily discover new meals from around the world!
    </p>
    </LandingBody>  
    </LandingCard>
    </body>
);
}

const LandingCard = styled.div`
width:70vh;
text-align:center;
margin: 0 auto;
opacity: 85%;
background-color: black;
color: white;
border-radius: 30px ;
`
const LandingBody =  styled.div`
padding:30px 30px;
box-shadow: 15px 15px grey;
border-radius: 30px ;

h1{
    padding: 20px 30px;
    border: solid white 1px;
    border-radius: 15px;

}
p{
    padding:20px;
    border: solid white 1px;
    border-radius: 15px;
    margin:0;
}

`