//NUMBER ---------------------
//EXPLICITA
let phone:number;
phone = 1;
phone = 9932415892;
// phone ="hola"; ERROR

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//INFERIDO
let phone2 = 55


//BOOLEAN---------------------

let isPro: boolean;
isPro = true;

//STRING---------------------
let userName: string = "Luis"

//template string
let userInfo: string;
userInfo = `
     User Info:
     userName: ${userName} + Aviles
     phone: ${phone};
     isPro:${isPro};
`

console.log(userInfo)

