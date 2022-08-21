function GetUser(){
    fetch("https://api.github.com/users")
    .then(snapshot =>{
        console.log(snapshot)
    }).catch(error=>{
        console.log(error)
    })

}

GetUser()

