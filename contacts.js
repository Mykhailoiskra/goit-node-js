import * as fs from "fs/promises";
import path from "path";
import createDirname from "./lib/dirname.js";

const { __dirname } = createDirname(import.meta.url);

const contactsPath = path.join(__dirname, "./db/contacts.json");

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = data.toString();
    console.table(parsedData);
  } catch (err) {
    console.log(err.message);
  }
}
function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
