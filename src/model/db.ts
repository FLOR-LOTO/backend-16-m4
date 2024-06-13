import { writeFileSync, readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";

interface BookData {
  name: string;
  released: string;
  author: string;
}
class Db {
  private static PATH: string = "./src/database/books.json";

  private static testConnection() {

  }
  
  static readFile(): BookData[] {
    const fileData = readFileSync(Db.PATH, { encoding: "utf-8" });
    return JSON.parse(fileData);
  }

  static writeFile(data: BookData[]) {
    writeFileSync(Db.PATH, JSON.stringify(data));
  }
}

export const { readFile, writeFile } = Db;

