function Account(login, email) {
    this.login = login;
    this.email = email;
};

Account.prototype.getInfo = function (){
    console.log(`Login: ${this.login} \nEmail: ${this.email}`);
}

const mango = new Account("Denis", "denis@gmail.com")
mango.getInfo()