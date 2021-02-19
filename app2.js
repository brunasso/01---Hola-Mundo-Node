console.log('Inicio de script'); //#1

setTimeout(()=>{
    console.log('Primer Timeout');
}, 5000)

setTimeout(()=>{
    console.log('Segundo Timeout');
}, 0)

setTimeout(()=>{
    console.log('Tercero Timeout');
}, 0)

console.log('Fin de Script'); //#2