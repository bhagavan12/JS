// let url = "https://price-api.datayuge.com/api/v1/compare/list/categories?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&page=1"
// // let cardContainer=document.querySelector('#cardContainer');
// let response = fetch(url)
// response.then((v) => {
//         return v.json()
// }).then((contests) => {
//         console.log(contests.data[0])
//         let cardContainer = document.getElementById("cardContainer"); // Select the cardContainer element
//         let ihtml = ""
//         for (let item in contests) {
//                 console.log(contests.data[item])
//                 ihtml += `
//                 <div class="card mx-2 my-2" style="width: 22rem;">
//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                         <h5 class="card-title">${contests.data[item].id}</h5>
//                                         <p class="card-text"> Status is ${contests.data[item].category_name} and site is ${contests[item].site}</p>
//                                         <p class="card-text"> In 24 Hours? ${contests.data[item].updated_at} </p>
                                        
//                                 </div>
//                         </div>
//                 `
//         }
//         cardContainer.innerHTML = ihtml
// })
let url = "https://price-api.datayuge.com/api/v1/compare/list/categories?api_key=DyzyY7aX3TQmSdGw9S891NtxnDytQxyPbsO&page=1";

let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);

    let cardContainer = document.getElementById("cardContainer"); // Select the cardContainer element
    let ihtml = "";
    for (let item in contests.data) { // Use let instead of var for item to ensure proper scoping
        console.log(contests.data[item]);
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contests.data[item].id}</h5>
                <p class="card-text"> Status is ${contests.data[item].category_name} and site is ${contests.data[item].site}</p>
                <p class="card-text"> In 24 Hours? ${contests.data[item].updated_at} </p>
            </div>
        </div>
        `;
    }
    cardContainer.innerHTML = ihtml; // Set the HTML content inside the cardContainer
});

// Create the floating button HTML dynamically
var buttonContainer = document.getElementById('custom-floating-button');
var button = document.createElement('button');
button.textContent = 'DB'; // Customize button text
button.onclick = function() {
  // Add functionality here
  console.log('Button clicked!');
};
buttonContainer.appendChild(button);


/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
