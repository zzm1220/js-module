const Publisher = (function(){
    const _subsMap = {};
    return {
        subscribe(type, cb) {
            if(_subsMap[type]) {
                if(!_subsMap[type].includes(cb)) {
                    _subsMap[type].push(cb);
                }
            } else {
                _subsMap[type] = [cb];
            }
        },
        unSubscribe(type, cb) {
            if(!_subsMap[type]||!_subsMap[type].includes(cb)) {
                return;
            }
            const id = _subsMap[type].indexOf(cb);
            _subsMap[type].splice(id,1);
        },
        notify(type,...payload) {
            if(!_subsMap[type]) return
            _subsMap[type].forEach(cb => cb(...payload));
        }
    }
})();