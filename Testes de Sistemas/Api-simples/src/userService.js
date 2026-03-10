export function createUser (userData) {

    if(!userData.name) {
        throw new Error("O nome do usuário é obrigatório.")
    }
    if(userDate.age < 18) {
        throw new Error ("O usuário deve ser maior de idade")
    }

     return{
        id: Math.floor(Math.random() * 10000),
        name: userData.name, 
        age: userDate.age, 
        isActive: true, 
        roles: ["user"]
    
     };

}
