import { Account, Client, ID } from 'appwrite';
// Init SDKconst client = new Client();
const client = new Client();

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6507bc8e56f5b030553e');

const account = new Account(client);

// const isLogIN = async () => {
//     const user = await account.getPrefs();
//     console.log(user);
//     // user.then((r)=>{return true}, (er)=>{return false})
// }
// const logOut = async () => {
//     try {
//         await account.deleteSession();

//     } catch (error) {
//         console.log(error.message);
//     }
// }
// const getUser = async () => {
//     try {
//         const user = (await account.get());
        
//         return user;
//     } catch (error) {
//         return null;
//     }
// }
const createUser = async (email: string, password: string ) => {
    try {
        await account.create(ID.unique(), email, password);
    } catch (error:any) {
        console.log(error);
        if ("Invalid password: Password must be at least 8 characters" === error.message) {
            alert("Invalid password: Password must be at least 8 characters")
        }
    }
}
export { createUser};
export default account