export {}
let idUser: number | string;
idUser = 10;
idUser = '10';



const userNameById =(id:number | string) =>{
    //logica del la funcion
}




//ALIAS DE TIPOS

type idUser = number | string;
type userName = string;

export {}
let idUserobo: idUser;
idUserobo = 10;
idUserobo = '10';



const userNameByIdObo =(id:idUser):userName =>{
    //logica del la funcion
    return 'mengeroshi';
}

 

//Tipos literales
type  SquareSize = '100x100'| '500x500' | '1000x1000';
//let smallPicture:SquareSize = '200x200';//Error;

let smallPicture: SquareSize = '100x100';
let mediumPicture:  SquareSize  = '500x500';
