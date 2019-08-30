const Singleton = (function(){
    let _instance = null
    const Singleton = function() {
        if (_instance) return _instance
        _instance = this
        this.init()
    }
    Singleton.prototype.init = function() {
        console.log('单例')
    }
    Singleton.getInstance = function() {
        if (_instance) return _instance
        _instance = new Singleton()
        return _instance
    }
    return Singleton
})()