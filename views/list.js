
import {createBookTemplate} from "./book.js"

export const createListTemplate = (books) => /*html*/`
    <ul>
        ${books.map(book => createBookTemplate(book)).join('')}
    </ul>
`

