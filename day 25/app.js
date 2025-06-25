//promise syntax

// const newPromise=new Promise((res,rej)=>{
//      rej("Task is not completed")
// }).then((x)=>console.log(x)).catch((y)=>console.log(y))


// fetch("https://api.quotable.io/quotes?limit=100").then((res)=>{
//      return res.json()
// }).then((data)=>{
//      console.log(data);
     
// }) 

async function showquotes(){
     let data=await fetch("https://dummyjson.com/quotes?limit=100")
     // console.log(data);
     let response=await data.json()
     // console.log(response);
     let quotesList=response.quotes
     // console.log(quotesList);
     let random=Math.floor(Math.random()*quotesList.length)
     let showList=quotesList[random]
     console.log(showList);
     document.getElementById("quote").innerText=showList.quote
     document.getElementById("author").innerText=showList.author 
}
showquotes()

async function showProfile() {
     let data=await fetch("https://randomuser.me/api")
     // console.log(data);
     let response=await data.json()
     // console.log(response);
     let profileList=response.results[0]
     console.log(profileList);

     let showimg=
          `
          <img src="${profileList.picture.large}"><br>
          `

     let profileDetails= `
          Name: ${profileList.name.first} & ${profileList.name.last}<br>
          Gender: ${profileList.gender}<br>
          Age: ${profileList.dob.age}<br> 
          Email: ${profileList.email}<br>
          Mobile Number : ${profileList.phone}<br>
          City : ${profileList.location.city}<br>
          Country : ${profileList.location.country}<br>
          Username : ${profileList.login.username}<br>
          Password : ${profileList.login.password}
          <br>`
    document.getElementById("showimg").innerHTML = showimg;
    document.getElementById("show").innerHTML = profileDetails;


     
}
showProfile()