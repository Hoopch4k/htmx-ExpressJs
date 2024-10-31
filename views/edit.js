
export const createEditBookTemplate = book => /*html*/`
    <form hx-put="/books/${book.id}" hx-target="closest form" hx-swap="outerHTML" >
        <input
        id="enter-book"
        type="text"
        name="title"
        placeholder="Название книги"
        required
        minlength="1"
        autofocus
        value="${book.title}"
        />
        <input
        id="enter-author"
        type="text"
        name="author"
        placeholder="Автор"
        required
        minlength="3"
        value="${book.author}"
        />
        <button>Готово</button>
    </form>
`