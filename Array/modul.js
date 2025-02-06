class userJs {
    constructor(){
        this.user = [];
    }

    
    addUser(nama,email,umur){
        const user ={nama,email,umur};
        this.user.push(user)
    }
    getUser(){
        return this.user;
    }
}
export default userJs