export {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square, 
    Panorama,
}

interface Picture{
    title:string, 
    date:string, 
    orientation:PhotoOrientation,
}

const showPicture = (picture:Picture)=>{

    console.log(`
                title: ${picture.title}, 
                date: ${picture.date},
                orintation: ${picture.orientation}`)
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic);

showPicture({
    title:'TEST1',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
})



interface PictureConfig{
    title?:string, 
    date?:string, 
    orientation?:PhotoOrientation,
}

const generatePicture = (config:PictureConfig) =>{
    const pic = {title: 'default', date: '2020-03', };
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date= config.date;
    }
    return pic
}

let picture = generatePicture({});
console.log('picture', picture);


picture = generatePicture({title:'Travel Pic'});
console.log('picture', picture);

picture = generatePicture({date:'2021-04'});
console.log('picture', picture);


//READONLY

interface User{
   readonly id:number,
    username:string,
    isPro: boolean,

}

let user: User;
user = {id:10, username:'mengeroshi', isPro:true}
console.log(user);
user.username = 'dopellganger';
console.log(user);