import MyContext from "@/myContext/MyContext";
import { Account, Client, Databases, ID } from "appwrite";
import { useContext } from "react";
const client = new Client();

client
  .setEndpoint(String(process.env.END_POINT))
  .setProject(String(process.env.PROJECT_ID));

const account = new Account(client);

// Cre
const createDocument = async ({ productName, price, rating, anime }: any) => {

  database.createDocument(
    String(process.env.DATABASE_ID),
    String(process.env.COLLECTION_ID),
    ID.unique(),
    {
      productName: productName,
      price: price,
      rating: rating,
      animeName: anime,
      imageUrl: " being"
    }
  ).then((res) => {
    alert("Product added successfully");
  }, (err) => { alert(err.message) }
  )
}

    const orderNowDataBase = ({
      email,
      productid,
      name,
      addres,
      city,
      state,
      phone,
      quantity,
      today_date,

      }:any) => {
        database.createDocument(
          String(process.env.DATABASE_ID_ORDERS),
          String(process.env.COLLECTION_ID_ORDERS),
          ID.unique(),
          {
            email: email,
            no_of_orders: quantity,
            product_id: productid,
            nameOf: name,
            data_of_order: today_date,
            address: addres,
            city: city,
            state: state,
            phone: phone,
          },
        ).then((res) => {
          alert("order added successfully");
        }).catch(er => {
          console.log(er.message);

        })
      }


const loadProduct = () => {

  database.listDocuments( 
    String(process.env.DATABASE_ID),
   String(process.env.COLLECTION_ID)).then((res) => {
    return res;

  }).catch((er) => console.log(er.message)
  )

}

const logIn = async ({ email, password }: any) => {
  try {

    await account.createEmailSession(email, password);
  } catch (error: any) {
    alert(error.message);
  }
};
const logOut = async () => {
  try {
    await account.deleteSession("current").then((res) => { alert("logged out") }).catch(er => console.log(er)
    )
  } catch (error: any) {
    console.log(error.message);

  }
}



export { logIn,  logOut, orderNowDataBase,loadProduct, createDocument, account };
export const database = new Databases(client);
