import * as fs from "fs/promises";
import path from "path";
import createDirname from "./lib/dirname.js";

const { __dirname } = createDirname(import.meta.url);

const contactsPath = path.join(__dirname, "./db/contacts.json");

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data.toString());
    console.table(parsedData);
  } catch (err) {
    console.log(err.message);
  }
}
export async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data.toString());
    const contact = parsedData.find((contact) => contact.id === contactId);
    console.log(contact);
  } catch (err) {
    console.log(err.message);
  }
}

export async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data.toString());
    const updatedData = parsedData.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(updatedData));
    console.log("Contact deleted");
  } catch (err) {
    console.log(err.message);
  }
}

export async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath);
    const parsedData = JSON.parse(data.toString());
    parsedData.push({
      id: createId(parsedData),
      name,
      email,
      phone,
    });
    await fs.writeFile(contactsPath, JSON.stringify(parsedData));
    console.log("Contact added");
  } catch (err) {
    console.log(err.message);
  }
}

function createId(data) {
  const currentIds = data.map((item) => item.id);
  const largestId = Math.max(...currentIds);
  return largestId + 1;
}
