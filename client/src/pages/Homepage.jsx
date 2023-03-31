import React from "react"
function Homepage(){
    return(<div style={{ 
        width:'100vw',
        height:'100vh',
        backgroundSize:'cover',
        
        backgroundImage:`url(${require("../assets/Home.hdr")})` }}>
    
    
    <button className="login">Login</button>
        <button className="know">Know More</button>
    </div>)
}
export default Homepage;