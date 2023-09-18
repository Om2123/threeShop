import { Account, Client, ID } from "appwrite";
// Init SDKconst client = new Client();
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6507bc8e56f5b030553e");

const account = new Account(client);
const createUser = async ({ email, password }: any) => {
  await account.createEmailSession(email, password);
};
export { createUser };
export default account;
