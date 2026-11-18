//book class: represent a book data
class Book{
    constructor(name, author, isbn){
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class: user interface data
class UI{
    static displayBook(){
        const StoreBook =[
            {
                name: "Book One",
                author: "Jhone One",
                isbn: "100200",
            },
            {
                name: "Book Two",
                author: "Jhone Two",
                isbn: "100300",
            },
        ];
        const books = StoreBook;

        books.forEach((book) => UI.createBookList(book));
    }
    static createBookList(book){
        const list =document.querySelector("#book-list");
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" type="button" class="btn-delete btn-sm" aria-label="Delete book">X</a></td>
        `;

        list.appendChild(row);
    }
}

//store class: handle data store

//event: display book
document.addEventListener('DOMContentLoaded', UI.displayBook);

//add book by input field
document.querySelector("book-form").addEventListener('submit', (e)=>{
    const name =document.querySelector("#bookName");
    const author =document.querySelector("#author");
    const isbn =document.querySelector("#isbn");
})