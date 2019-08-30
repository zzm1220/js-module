class FuncClass {
    constructor(bar) {
        this.bar = bar
        this.init()
    }
    init() {
        console.log("singleton")
    }
}
// 单例模式
const Singleton = (function(){
    let _instance = null
    const ProxySingleton = function(fn, bar) {
        if (_instance) return _instance
        _instance = new fn(bar)
        return _instance
    }
    ProxySingleton.getInstance = function(fn,bar) {
        if(_instance) return _instance
        _instance = new ProxySingleton(fn,bar)
        return _instance
    }
    return ProxySingleton
})()