const beliPizza = (Jenis) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const typepizza = ['Cheese Meat', 'Pepperoni sausage', 
                                'Tuna Melt', 'Veggie Garde', 'Meat Lovers']
            let cek = typepizza.find((type) => {
                return type === Jenis
        })
        if(cek){
            resolve(cek)
        } else {
            reject('Maaf, menu yang Anda pilih tidak ada.')
        }
    },3000)
    })
}
beliPizza('Corn Dog').then(word => {
    console.log(word, 'Tersedia')
}).catch(gagal => {
    console.log(gagal)
})