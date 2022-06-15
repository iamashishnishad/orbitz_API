

const res =()=>{

    fetch("http://localhost:3000/data").then(res=>res.json()).then(res=>console.log(res)).catch
    (e=>console.log(e))

}