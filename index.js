// fetch(`https://type.fit/api/quotes`)
// .then(res=>res.json())
// .then(data=>{
//     getAuthor(data)
//     getQuote(data)
// })

// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// const alphabets = document.querySelector('#alphabet')
// alphabet.forEach(title=>{
//     const list = document.createElement('option')
//     list.className = "alpha"        
//     list.textContent = title
//     alphabets.appendChild(list)
// })
// // alphabets.addEventListener('click', )

// function getAuthor(author){
//     const authorList = document.querySelector('#author-list')
//     author.forEach(title=>{
//         const list1 = document.createElement('li')
//         list1.className = 'authors'
//         list1.textContent = title.author
//         authorList.append(list1)

        
        
       
//     })

// }
// const randomNum = Math.floor(Math.random() * 1643 );

// function getQuote(quotes){
//     console.log(quotes)
//     const randomQuote = document.querySelector('#random-quotes')
//     const list2 = document.createElement('li')
//     list2.className = "quotes"
//     // list2.textContent = title.text

//     // console.log(list2);

//     // console.log(list2)
//     // // quotes.forEach(title=>{

//     // console.log(list2)
//     // randomQuote.appendChild(list2)
//     // randomQuote.appendChild(list2[randomNum])
// // 
// // })
// }

// ------------------------


fetch("https://type.fit/api/quotes")
.then(res => res.json())
.then(allData => workWithData(allData))
 
const randomNum = Math.floor(Math.random() * (1643 - 0) );
 
function workWithData(Data){

    
    // console.log(quotes)
    const randomData = Data[randomNum]
    
    const randomAuthor = document.querySelector('#random-quotes-author')
    randomAuthor.innerText = randomData.author
    
    const randQuote = document.querySelector('#random-quotes')
    randQuote.innerText = randomData.text

    const alphabet = ["Select","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphabets = document.querySelector('#alphabet')
    alphabet.forEach(title=>{
        const list1 = document.createElement('option')
        list1.className = "alpha"        
        list1.textContent = title
        alphabets.appendChild(list1)
    })

    alphabets.addEventListener('change', (e)=>{
        const ulAuthors = document.querySelector('#author-list')
        ulAuthors.innerHTML=" "
        Data.forEach(list2=>{
            if (list2.author === null) {
                console.log("unknown")
            }
            else if (list2.author[0] === (e.target.value).toUpperCase()) {
                const list3 = document.createElement('p')
                list3.innerText = list2.author
                ulAuthors.appendChild(list3)
                colorAndQuote(list3,list2)
            }
        })
    })      
}
function colorAndQuote(colors,datas){
    colors.addEventListener('click', ()=>{
        colors.style.color ='red';
        colors.style.fontSize='20px';
        const mainQuotes = document.querySelector("#quote-collection")
        mainQuotes.innerText = datas.text
    })
}




    const inputQuote = document.querySelector("#new-quote")
    const inputName = document.querySelector("#new-name")

    const form = document.querySelector("#create-form")
    

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let inputQ=inputQuote.value;
        let inputN=inputName.value;
        
        let newDiv = document.createElement("div")
        let h3 = document.createElement('h3')
        let newQuote = document.createElement("p")
        let newName = document.createElement("p")
        if(inputN===""){
            alert("Empty field")
        }
        else{
            h3.textContent= "Your Quote"
            newDiv.className = "newObj"
            newName.textContent = `Name: ${inputN}`
            newQuote.textContent = `Quote: ${inputQ}`
            console.log(newName)
            
            document.querySelector("#newObj").appendChild(newDiv)
            newDiv.append(h3,newQuote,newName)


        }
    form.reset()
        
    })
