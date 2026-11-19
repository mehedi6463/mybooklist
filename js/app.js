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
    static deleteBook(el){
        if (el.calssList.contains('btn-delete')) {
            el.parentElement.parentElement.remove();
            
        }
        
    }

    static clearFields(){
        document.querySelector("#bookName").value='';
        document.querySelector("#author").value='';
        document.querySelector("#isbn").value='';
    }
}

//store class: handle data store

//event: display book
document.addEventListener('DOMContentLoaded', UI.displayBook);

//event: add book
document.querySelector("#book-form").addEventListener('submit', (e)=>{
    //prevent actual submit
    e.preventDefault();

    //get input field value
    const name =document.querySelector("#bookName").value;
    const author =document.querySelector("#author").value;
    const isbn =document.querySelector("#isbn").value;

    //get values from instance
    const book = new Book(name, author, isbn);
    
    //add book in UI
    UI.createBookList(book);

    //clear fields
    UI.clearFields();
});

//event: remove data
document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target);
});