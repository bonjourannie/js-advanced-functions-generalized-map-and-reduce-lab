function map(source, fn){
    let a = []
    for (let i = 0; i < source.length; i ++){
        let element = source[i]
        a.push(fn(element))
    }
    return a;
}

function reduce(source, fn, start){
    let a = (!!start) ? start : source[0]
    let i = (!!start) ? 0 : 1 
    for (; i < source.length; i++){
        a = fn(source[i], a)
    }
    return a;
}