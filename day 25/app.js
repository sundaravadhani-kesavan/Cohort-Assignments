async function showquotes(){
     let data=await fetch("https://dummyjson.com/quotes?limit=100")
     let response=await data.json()
     let quotesList=response.quotes
     let random=Math.floor(Math.random()*quotesList.length)
     let showList=quotesList[random]
     console.log(showList);
     document.getElementById("quote").innerText=showList.quote
     document.getElementById("author").innerText=showList.author 
}
showquotes()

async function showProfile() {
     let data=await fetch("https://randomuser.me/api")
     let response=await data.json()
     let profileList=response.results[0]
     console.log(profileList);
     let showimg=`<img src="${profileList.picture.large}"><br>`
     let profileDetails= `
          Name: ${profileList.name.first} & ${profileList.name.last}<br>
          Gender: ${profileList.gender}<br>
          Age: ${profileList.dob.age}<br> 
          Email: ${profileList.email}<br>
          Mobile Number : ${profileList.phone}<br>
          City : ${profileList.location.city}<br>
          Country : ${profileList.location.country}<br>
          Username : ${profileList.login.username}<br>
          Password : ${profileList.login.password}<br>`
    document.getElementById("showimg").innerHTML = showimg;
    document.getElementById("show").innerHTML = profileDetails;     
}
showProfile()