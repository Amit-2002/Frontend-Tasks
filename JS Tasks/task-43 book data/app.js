                // a. Define the Book Class:
class Book{
    constructor(title, author, publisher, year, genre){
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
    }

                // b. Add Methods to the Book Class:
        describe(){
            console.log(`"${this.title}" by ${this.author}, published in (${this.year})`)
        }

        displayGenre() {
            console.log(`Genre : ${this.genre}`)    
        }

}



                // c. Create and Log book Objects:
const classicBook = new Book('Pride and Prejudice', 'Jane Austen', 'T. Egerton', 1813, 'Classic')
console.log(classicBook)
const sciFiBook = new Book('Dune', 'Frank Harbert', 'Chilton Book', 1965, 'Science Fiction')
console.log(sciFiBook)


                // d. Call Methods on book Objects:
classicBook.describe()
classicBook.displayGenre()

sciFiBook.describe()
sciFiBook.displayGenre()