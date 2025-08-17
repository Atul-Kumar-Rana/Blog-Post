const config={
appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
projectid:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
databseid:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
bucketid:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
collectionid:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}
export default config
