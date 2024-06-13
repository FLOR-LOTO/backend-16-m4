// Una vez completadas las funciones, convertilas en métodos estaticos de la clase Book.
import uuid from "uuid";
import { readFile, writeFile } from "./db";

interface BookData {
  name: string;
  released: string;
  author: string;
}

class Book {
  name;
  released;
  author;
  id;

  constructor(book: BookData) {
    const { name, released, author } = book;
    this.name = name;
    this.released = released;
    this.author = author;
    this.id = Book.createUUID();
  }

  private static createUUID(): string {
    return uuid.v4();
  }

  getAge() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const releasedDate = Number(this.released);

    return currentYear - releasedDate;
  }

  static findBookByTitle(title: string) {
    const books = readFile();
    const findBook = books.find((book) => book.name === title);
    return !findBook ? " libro No Encotrado " : findBook;
  }

  static uploadNewBook(newBook: Book): boolean {
    const books = readFile();
    const isBookOnDB = Book.findBookByTitle(newBook.name);
    typeof isBookOnDB != "string" ? false : books.push(newBook);

    writeFile(books);

    return true;
  }
}

console.log("hola");
export const { findBookByTitle, uploadNewBook } = Book;
