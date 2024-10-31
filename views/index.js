import { books } from "../data/books.js"
import { createListTemplate } from "./list.js"


const createHomePageTemplate = () => /*html*/`
        <html>
            <head>

                <title>Books</title>
                <script src="https://unpkg.com/htmx.org@2.0.3" integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq" crossorigin="anonymous"></script>
                <link href="/assets/style.css" rel="stylesheet" type="text/css" >
                
            </head>
            <body>

                <div class="container">
                    <header>
                        <h1>Мои нелюбимые книги</h1>
                    </header>

                    <main>
                        

                        <div class="list">
                            <input
                                id="search"
                                name="search"
                                type="search"
                                placeholder="в поисках немо"
                                hx-post="/books/search"
                                hx-trigger="keyup changed delay:300ms"
                                hx-target=".book-list"
                                >
                            <div class="book-list">
                                ${createListTemplate(books)}
                            </div>
                        </div>

                        <div class="add-book-list">
                            <form
                            hx-on::after-request='
                            document.querySelector("#enter-book").value = "";
                            document.querySelector("#enter-author").value = "";
                            '
                            hx-post="/books"
                            hx-target=".book-list ul"
                            hx-swap="beforeend"
                            >
                                <input
                                id="enter-book"
                                type="text"
                                name="title"
                                placeholder="Название книги"
                                required
                                minlength="1"
                                autofocus
                                />
                                <input
                                id="enter-author"
                                type="text"
                                name="author"
                                placeholder="Автор"
                                required
                                minlength="3"
                                />
                                <button>Добавить книгу</button>
                            </form>
                        </div>

                    </main>
                </div>    

            </body>
        </html>
`


export default createHomePageTemplate


