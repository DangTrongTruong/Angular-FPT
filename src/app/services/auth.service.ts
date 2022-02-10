export class AuthService {
  loggedIn = false;
  constructor() { }
  isAuthenticated(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1000);
    })
    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}
