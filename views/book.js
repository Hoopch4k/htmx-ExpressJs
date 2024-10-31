
export const createBookTemplate = (book) => /*html*/`
    <li data-id="${book.id}" >
        <div class="details" >
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
            <button hx-get="/books/edit/${book.id}" hx-target="closest li" hx-swap="outerHTML" >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24">
                    <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
                </svg>
            </button>
        </div>
        <button class="delete-book" hx-delete="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML" >удалить</button>
    </li>
`