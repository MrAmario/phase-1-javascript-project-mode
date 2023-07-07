document.addEventListener('DOMContentLoaded', initialize)

function initialize(){
    fetch("http://localhost:3000/cloth")
    .then(res => res.json())
    .then(data => data.forEach(element =>{getData(element)
    }))
}

function getData(cloth){
    let fathe=document.getElementById("navhead")
    let name=document.createElement("div");
    //give the name an id to stand out
    name.id= "cloth-name"   
    name.innerText=cloth.name;
    //add an eventListener to the function of displayClothes
    name.addEventListener('click', function(){
        displayClothes(cloth)
    })
    fathe.appendChild(name);

}
function grabClothDetails(cloth){
    //here we are fetching from the data but only interested with the cloth's name hence the interpollation.
    fetch(`http://localhost:3000/cloth/${cloth.id}`)
    .then(res => res.json())
    .then(data => displayClothes(data))
}

function displayClothes(cloth){
    let detailsOfClothes =document.getElementById('cloth-content')
    
    console.log(cloth.name)
    console.log(cloth.type)
    console.log(cloth.image)
    console.log(cloth.colours)

    let html=
    `
    <h1>${cloth.name}</h1>
    <p>${cloth.type}</p>
    <div id="image">
    <img id="pic" src=${cloth.image}</p>
    </div>
    <p id="colors"  >Colours available: ${cloth.colours}</p>
    <button id="btn" onClick="openForm()">Order</buton>
    
    `

    detailsOfClothes.innerHTML = html;


}
function openForm(){
    console.log("You Form has been loaded")
    document.querySelector('#OrderForm').style.display = "block"
   
}

function buildForm(){
      let form=`
    <form id="form">
            <label for="customerName">Your Name</label>
            <input type="text" id="customerName" placeholder="Enter your Names" required>
            <label for="size">Enter your size</label>
            <input type="number" id="size" placeholder="Enter your size" required>
            <label for="location">Location of Delivery</label>
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter Your Email" required>
            <input type="text" id="location" placeholder="Where would like it delivered to?" required>
            <input type="submit" value="Submit">
        </form>`

        form.appendChild(OrderForm)
        console.log(form)

}



document.querySelector('#OrderForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    alert("Your Order hass been made")
    console.log("Make your order")
})

document.getElementById('#header').addEventListener('click').reload()


