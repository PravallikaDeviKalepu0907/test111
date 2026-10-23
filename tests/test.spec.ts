function send(): void
{
    console.log("Sending data...");
}
send();

class test
{
    count=300;
    getcount()
    {
        return this.count;
    }
}
const obj=new test();
console.log(obj.getcount());

function login(username:string,password:string){
    console.log(`Username: ${username}, Password: ${password}`);
}

interface exam{
    uname: string;
    login(): void;
}
let obj1:exam={
    uname: "user1",
    login(){
        console.log('Logging in');
    }
};
obj1.login();

class Hima{
    sundhar(a: number, b: number){
        console.log(a+b);
    }
    naya(age: number, name: string){
        return { age, name };
    }
}
class Sima extends Hima{
    sundhar(a: number, b: number){
        console.log(a+b);
    }
    naya(age: number, name: string){
        return { age, name };
    }
}
const obj2=new Sima();
obj2.sundhar(10,20);
console.log(obj2.naya(25,"Hima"));