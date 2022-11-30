const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
        })
        if(cek){
            resolve(cek)
        } else {
            reject(new Error('Hari ini bukan hari kerja'))
        }
    },3000)
    })
}

//menggunakan then and catch
cekHariKerja('Rabu').then(word => {
    console.log(word)
}).catch(gagal => {
    console.log(gagal.message)
})

// menggunakan try and catch
const hariBekerja = async() => {
    try{
    const termasuk = await cekHariKerja('Minggu')
    console.log(termasuk)
}catch(gagal){
    console.log(gagal.message)
}
}
hariBekerja()
