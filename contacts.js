import * as fs from "fs/promises";
import path from "path";
import createDirname from "./lib/dirname.js";

const { __dirname } = createDirname(import.meta.url);

const contactsPath = path.join(__dirname, "./db/contacts.json");
console.log(contactsPath);

function listContacts() {
  // ...твой код
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
