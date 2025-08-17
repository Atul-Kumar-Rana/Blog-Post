import config from "../../conf/config";
import { Client, Account, ID } from "appwrite";

export class Authservice {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(config.appwriteurl).setProject(config.projectid);
    //     creating account only when a new obj is called ...
    this.account = new Account(this.client);
  }
  // created a fxn as .. if in feature chnage the backend then only chnage the content ... cover would be same
  async createAccount({ email, password, name }) {
    try {
      //  used ID.unique to assign unique key ... provided by appwrite
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // calling anaother mtd as .. when useraaccount exist then login directly
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      return error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      return error;
    }
  }

  // to know if user is logedin or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {}
  }
}
//  creating a object of class so to i can eaily use all functionality of the class
const authservice = new Authservice();

export default authservice;

//  only change the inside function code if changed the backend .. functions would be same



//                   ..............for spring-jwt-hehe................
// import config from "../../conf/config"; // your API base URL

// export class AuthService {
//   token = null;

//   constructor() {
//     // Load token from localStorage on page load (so refresh doesn't log you out)
//     const savedToken = localStorage.getItem("jwt_token");

//       im using this .... to save in local storage so when refreshes doesnt loss my token ... and constructor is creted  to save details in  token ... and if constructor is not there then ,. cant use   this.token ... once refreshed it will be null .. 


//     if (savedToken) {
//       this.token = savedToken;
//     }
//   }

//   async createAccount({ email, password, name }) {
//     try {
//       const res = await fetch(`${config.apiBaseUrl}/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password, name }),
//       });

//       if (!res.ok) throw new Error("Failed to create account");

//       // Optionally auto-login
//       return this.login({ email, password });
//     } catch (error) {
//       return { success: false, message: error.message };
//     }
//   }

//   async login({ email, password }) {
//     try {
//       const res = await fetch(`${config.apiBaseUrl}/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!res.ok) throw new Error("Invalid credentials");

//       const data = await res.json();
//       this.token = data.token; // backend returns JWT token
//       localStorage.setItem("jwt_token", this.token);

//       return { success: true, token: this.token };
//     } catch (error) {
//       return { success: false, message: error.message };
//     }
//   }

//   async getCurrentUser() {
//     if (!this.token) return null;

//     try {
//       const res = await fetch(`${config.apiBaseUrl}/auth/me`, {
//         headers: { Authorization: `Bearer ${this.token}` },
//       });

//       if (!res.ok) throw new Error("Not authenticated");

//       return await res.json(); // user object
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   }

//   logout() {
//     this.token = null;
//     localStorage.removeItem("jwt_token");
//   }
// }

// const authService = new AuthService();
// export default authService;
