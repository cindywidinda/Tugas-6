function prima(num){
    return new Promise((resolve, reject) => {
        for(i=2;i<num;i++){
        if(num % i==0) {
            resolve("bukan bilangan prima")
        }else {
            reject('bilangan prima')
        }}
    })
}
const nilaiprima = async() => {
    try{
    const termasuk = await prima(13)
    console.log(termasuk)
}catch(gagal){
    console.log(gagal)
}
}
nilaiprima()