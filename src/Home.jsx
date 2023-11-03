import React, { useEffect, useState } from "react";


function Home(){
    const [name,setname] = useState("")
useEffect(()=>{
    setname(localStorage.getItem("username"))
},[])  
    
    return (
        <div>
           welcome {name} Home
        </div>
    )
}

export default Home;