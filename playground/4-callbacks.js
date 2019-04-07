setTimeout(() => {
    console.log('2 seconds are up')
}, 2000)

const names = ['Magdy' ,'Jen' , 'Hamada' , 'Jack']
const shortNames = names.filter((name)=>{
    return name.length <= 4
})

const geocode = (address,callback) => {
    setTimeout(() => {        
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data)
    }, 2000);
}

// (address, callback)
geocode('Philadelphia',(data) => {
    console.log(data)
})

// console.log(data)


// Callback add function
const add = (num1,num2,callback) => {
    setTimeout(() => {
        const sum = num1 + num2     
        callback(sum)
    }, 2000);
}

add(1,5,(data) => {
    console.log(data)
})
