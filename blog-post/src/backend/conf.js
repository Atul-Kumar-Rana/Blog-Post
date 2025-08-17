// this file id for db ...connection
// leter can be modified according to requirement

import config from "../../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(config.appwriteurl).setProject(config.projectid);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // now will create functions

//   A slug is just a URL-friendly version of a string (usually the title or name of something).
  async createPoste({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.databseid,
        config.collectionid,
        slug,
        {
          // further information --> in slug
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  //  slug needed to uniquely identify
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.databseid,
        config.collectionid,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.databseid,
        config.collectionid,
        slug
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.databseid,
        config.collectionid,
        slug
      );
    } catch(error){
      console.log(error);
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.databseid,
        config.collectionid,
        queries
      );
    } catch (error) {
      console.log(error);
    }
  }


//   file upload service
async uploadFile(file) {
    try {
        return await this.bucket.createFile(
            config.bucketid,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log(error)
    }
}

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            config.bucketid,
            fileId
        )
         return true;
    } catch (error) {
        console.log(error)
    }


return true
}


 getfilepreview(fileId){
   
   return this.bucket.getFilePreview(
            config.bucketid,
            fileId
        )
}


}

// returning object .. so it will have all attributrs of class Service...and need to create constructor
const service = new Service();
export default service;


//    ...........................if springboot.................
// import config from "../../conf/config";

// export class Service {
//   token = null;

//   constructor() {
//     // load JWT token if available
//     const savedToken = localStorage.getItem("jwt_token");
//     if (savedToken) {
//       this.token = savedToken;
//     }
//   }

//   getAuthHeaders() {
//     return this.token
//       ? { Authorization: `Bearer ${this.token}` }
//       : {};
//   }

//   // -------- Posts --------
//   async createPost({ title, slug, content, featuredImage, status, userId }) {
//     try {
//       const res = await fetch(`${config.apiBaseUrl}/posts`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           ...this.getAuthHeaders(),
//         },
//         body: JSON.stringify({
//           title,
//           slug,
//           content,
//           featuredImage,
//           status,
//           userId,
//         }),
//       });

//       return await res.json();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async updatePost(slug, { title, content, featuredImage, status }) {
//     try {
//       const res = await fetch(`${config.apiBaseUrl}/posts/${slug}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           ...this.getAuthHeaders(),
//         },
//         body: JSON.stringify({
//           title,
//           content,
//           featuredImage,
//           status,
//         }),
//       });

//       return await res.json();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async deletePost(slug) {
//     try {
//       await fetch(`${config.apiBaseUrl}/posts/${slug}`, {
//         method: "DELETE",
//         headers: this.getAuthHeaders(),
//       });
//       return true;
//     } catch (error) {
//       console.error(error);
//       return false;
//     }
//   }

//   async getPost(slug) {
//     try {
//       const res = await fetch(`${config.apiBaseUrl}/posts/${slug}`, {
//         headers: this.getAuthHeaders(),
//       });
//       return await res.json();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async getPosts() {
//     try {
//       const res = await fetch(`${config.apiBaseUrl}/posts`, {
//         headers: this.getAuthHeaders(),
//       });
//       return await res.json();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   // -------- File Uploads --------
//   async uploadFile(file) {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await fetch(`${config.apiBaseUrl}/files/upload`, {
//         method: "POST",
//         headers: this.getAuthHeaders(), // don’t set content-type, browser does it for FormData
//         body: formData,
//       });

//       return await res.json();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async deleteFile(fileId) {
//     try {
//       await fetch(`${config.apiBaseUrl}/files/${fileId}`, {
//         method: "DELETE",
//         headers: this.getAuthHeaders(),
//       });
//       return true;
//     } catch (error) {
//       console.error(error);
//       return false;
//     }
//   }

//   async getFilePreview(fileId) {
//     return `${config.apiBaseUrl}/files/${fileId}/preview`;
//   }
// }

// const service = new Service();
// export default service;
