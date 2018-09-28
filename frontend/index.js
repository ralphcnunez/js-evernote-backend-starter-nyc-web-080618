




const dataBaseURL='http://localhost:3000/api/v1/notes'
let userNotesDiv = document.createElement('div')
let y = document.body
let store = {}
let hideBtnStore = {}

 fetch(dataBaseURL)
.then(resp => resp.json())
.then(data=> data.forEach(function (el) {
  let noteList = document.createElement('div')
  noteList.setAttribute('class','card')
  store[el.id] = el
  noteList.innerHTML += `<h1>${el.user.name}
  <h3> ID: ${el.id}
  <h4 data-id=${el.id}>${el.title}
  <h2> Note Description: ${el.body} </h2>
  </h1>
  <button id=el${el.id} class='button' data-button=${el.id}>Show/ Hide Body</button>

</h3>
  </h4>`
  userNotesDiv.append(noteList)
  document.body.append(userNotesDiv)
  let x = document.getElementById(`el${el.id}`)

  x.addEventListener('click', function (event){
    let y = event.target.dataset.button
    var text = document.getElementById(`el${y}`)
    if (text.parentElement.childNodes[3].style.display === "none") {
      text.parentElement.childNodes[3].style.display = "block";
    } else {
        text.parentElement.childNodes[3].style.display = "none";
    }
  })
}));


// let z = document.getElementById(`hide{el.id}`)
// x.addEventListener('click', function (event){
//   console.log(x)
//   let y = event.target.dataset.button
//   var text = document.getElementById(`show{y}`);
//   console.log(text.parent)
//
//   if (text.parentElement.style.display === "none") {
//       text.style.display = "block";
//   } else {
//       text.parentElement.style.display = "none";
//   }
// })

// <button id='show{el.id}' class='button' data-button=${el.id}> Show Body</button>
