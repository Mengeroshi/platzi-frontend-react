type SquareSize = '100x100' |'500x500'| '1000x1000';

// const createPicture = (title:string, date:string, size:SquareSize)=>{
//     console.log('Creating Picture: ', title, date, size);

// }

// createPicture('My birthday', '2020-03-10','100x100');
// //createPicture('Colombia trip', '2020-03-10' ) //error


const createPicture = (title?:string, date?:string, size?:SquareSize)=>{
    console.log('Creating Picture: ', title, date, size);

}

createPicture('My birthday', '2020-03-10','100x100');
createPicture('Colombia trip', '2020-03-10' )




const createPic = (title:string, date:string, size:SquareSize):object=>{
    return{
        title,
        date,
        size,
    }
}

const picture = createPic('Platzi Session', '2020-03-10','1000x1000');

console.log('picture', picture);


//Tipo de retonrno
const handleErrorObo = (code: Number, message:string): never | string =>{
    if(message=='error'){
        throw  new Error(`${message}. Code Error: ${code}`)
    }else{
        return 'An Error has ocurred';
    }
}


try {
    let result = handleErrorObo(200, 'OK');
console.log(result);

result = handleErrorObo(404, 'error' );
console.log(result);
} catch{
    
}