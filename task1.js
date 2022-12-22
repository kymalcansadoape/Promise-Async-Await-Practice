// Task 1: Translate the story into code.
const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isKayoSick){
                resolve(2);
            }else{
                reject(new Error('Something went wrong'));
            }
        }, 2000)
    });
}

onMyBirthday(true)
.then((result) => {
        console.log(`I have ${result} cakes`);
    }
)
.catch((error) => {
        console.log(error);
    }
)
.finally(() => {
    console.log('party')
    } 
)



