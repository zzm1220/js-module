const pipe = (function(){
    return value=>{
        const funcStack = []
        const proxy = new Proxy({}, {
            get(target, fnName) {
                if (fnName === 'get') {
                    console.log(funcStack)
                    return funcStack.reduce((val, fn) => {
                        console.log(typeof fn)
                        return fn(val)
                        console.log(val)
                    }, value)
                }
                funcStack.push(window[fnName])
                return proxy
            }
        })
        return proxy
    }
})()

var double = n => n * 2
var pow = n => n * n
var reverseInt = n => n.toString().split("").reverse().join("") || 0;
// const arr = [double, pow, reverseInt]
// const sum = arr.reduce((f1, f2) => {
//    return f2(f1)
// }, 3)
// console.log(sum)
console.log(pipe(3).double.pow.reverseInt.get)
