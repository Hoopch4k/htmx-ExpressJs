import express from 'express';
import createHomePageTemplate from "./views/index.js"
import {createListTemplate} from "./views/list.js"
import { books } from './data/books.js';
import {createBookTemplate} from "./views/book.js"
import { createEditBookTemplate } from './views/edit.js';



const app = express();
app.use(express.urlencoded({ extended: false }));


//static assets
app.use(express.static('public'))



//routes
app.get("/", (req, res) => {
    res.send(createHomePageTemplate())
})


app.get("/books", (req, res) => {
    res.send(createListTemplate(books))
})


app.post("/books", (req, res) => {
    const { title, author } = req.body;
    const id = Math.random().toString();

    books.push({ id, title, author });

    res.send(createBookTemplate({ id, title, author }));
})


app.delete("/books/:id", (req, res) => {
    const {id} = req.params;  
    const idx = books.findIndex(d => d.id === id);

    books.splice(idx, 1)
    
    res.send()
})


app.get("/books/edit/:id", (req, res) => {
    const {id} = req.params;
    
    const book = books.find(d => d.id === id);

    res.send(createEditBookTemplate(book))
})


app.put("/books/:id", (req, res) => {
    const {id} = req.params;
    const { title, author } = req.body;

    const idx = books.findIndex(d => d.id.toString() === id);
    books[idx] = {id, title, author }

    res.send(createBookTemplate(books[idx]))
})


app.post("/books/search", (req, res) => {
    const { search } = req.body;
    
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    
    if (filteredBooks.length) {
        return res.send(createListTemplate(filteredBooks))
    } else {
        return res.send("<article>Книга не найдена</article>")
    }
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})

