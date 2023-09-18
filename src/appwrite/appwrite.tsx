import { Account, Client, Databases, ID } from "appwrite";
// Init SDKconst client = new Client();
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6507bc8e56f5b030553e");

const account = new Account(client);

// Create user
const createUser = async ({ email, password }: any) => {
  await account.createEmailSession(email, password);
};
const createDocument = async({productName , price,rating,anime }:any)=>{
  database.createDocument(
    "650816cd8feee59dcadf",
    "6508174fd50e00f14748",
    ID.unique(),
    { 
      priceName:productName,
      price:price,
      rating:rating,
      animeName:anime,
      imageUrl:"something for time being"
    }
  ).then((res)=>{
    alert("Product added successfully");
  }, (err)=>{alert(err.message)}
  )
}
const loadProduct = async () => {
  const products = await database.listDocuments("650816cd8feee59dcadf", "6508174fd50e00f14748");
  return products.documents;
}
const logIn = async ({ email, password }: any) => {
 
}
export { createUser,logIn, loadProduct ,createDocument };
export const database = new Databases(client);
export default account;
