const ul = document.querySelector('ul')

function getApiGitHub(){
    fetch("https://api.github.com/users/douglasbarreiros701/repos")
    .then(async res =>{

        if(!res.ok){
            throw new Error(res.status)
        }

        var data = await res.json()

        data.map(item =>{
            let li = document.createElement('li')
        })

    }).catch(e => console,log(e))
}

getApiGitHub()