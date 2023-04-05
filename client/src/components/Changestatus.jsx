import React from 'react'

function Changestatus(){
  

    useEffect(() => {
      axios.get('http://localhost:5000')
        .then((res) => 
          console.log(res)
        );
    }, []);
    
  }

export default Changestatus
