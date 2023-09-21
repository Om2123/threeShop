/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["e0.pxfuel.com", "otakukulture.in", "*", "e1.pxfuel.com"], // Add both hostnames causing the error here
  },
  env: {
    COLLECTION_ID: "6508174fd50e00f14748",
    DATABASE_ID: "650816cd8feee59dcadf",
    COLLECTION_ID_ORDERS:"650c05093b5c796875d9",
    DATABASE_ID_ORDERS:"650c04f188fdbd02047f",
    END_POINT:"https://cloud.appwrite.io/v1",
    PROJECT_ID: "6507bc8e56f5b030553e",
  },
};

module.exports = nextConfig;
