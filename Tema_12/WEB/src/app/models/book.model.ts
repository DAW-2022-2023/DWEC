export class Book {
  _id: number;

  isbn: string;

  name: string;

  pages: number;

  fecha: Date | null;

  constructor() {
    this._id = 0;
    this.isbn = "";
    this.name = "";
    this.pages = 0;
    this.fecha = null;
  }
}
