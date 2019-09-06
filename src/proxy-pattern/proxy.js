const SuperStar = {
    name: '小鲜肉',
    scheduleFlag: false,
    playAdvertisement(ad) {
        console.log(ad)
    }
}
const ProxyAssistant = {
    name: '经纪人',
    playAdvertisement(reward, ad) {
        if (reward > 1000) {
            console.log("没问题！！！")
            this.scheduleTime(ad)

        } else {
            console.log("没空！！！")
        }
    },
    scheduleTime(ad) {
        const schedule = new Proxy(SuperStar, {
            set(obj, prop, val) {
                if (prop !== 'scheduleFlag') return
                if(obj.scheduleFlag === false && val === true) {
                    obj.scheduleFlag = val
                    obj.playAdvertisement(ad)
                }
            }
        })
        setTimeout(()=>{
            console.log("有空拉")
            schedule.scheduleFlag = true
        },2000)
    }
}

ProxyAssistant.playAdvertisement(1000001, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')