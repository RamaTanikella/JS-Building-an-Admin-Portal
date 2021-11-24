
// Your Code Here
/**
 * 
 * @param { ${book.imageURL ? `
                    <img class="card-img-top" src="${book.imageURL}" />
                `
                : ``}} book 
 */

async function submitQuantityChange(id){
    let q = document.getElementById(`${id}-quantity`).ariaValueMax;
    let dataToSend = {
        "id": 1,
        "quantity": 9
    }
    console.log(JSON.stringify(dataToSend))
    await fetch("http://localhost:3001/updateBook", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'patch',                                                              
        body: JSON.stringify(dataToSend)      
    })
}
function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    
                    <label for="quantity">Quantity:</label>
                    <input value=${book.quantity} type="text" id="${book.id}-quantity" name="quantity"><br><br>
                    <button onclick="submitQuantityChange(${book.id})" type="button">Submit</button>
                
                </div>
            </div>
        </div>
    `
}
async function main() {
    
    let response = await fetch("http://localhost:3001/listBooks")
    let listOfBooks = await response.json();

    for(let b of listOfBooks){
        renderBook(b)
    }

}



main()