const promise = new Promise((resolve, reject) => {
    setTimeout(()=>reject('This is my un-resolved data'),5000);
    // resolve('This is my resolved data');
});
 console.log('before');
promise.then((data)=>{
    console.log(data);
}).catch(error=>{
    console.log(error)
});
 console.log('after');
