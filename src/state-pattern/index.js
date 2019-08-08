class AbstractState {
    constructor() {
        if (new.target === AbstractState) {
            throw new Error("抽象类不能实例化")
        }
    }
    employ() {
        throw new Error("抽象方法不能调用")
    }
    changeState() {
        throw new Error("抽象方法不能调用")
    }
}
class RedState extends AbstractState {
    constructor() {
        super()
        this.colorState = "red"
    }
    employ(trafficLight) {
        console.log(`交通灯颜色变为${this.colorState}`)
    }
    changeState(trafficLight) {
        trafficLight.setState(trafficLight.greenState)
    }
}
class GreenState extends AbstractState {
    constructor() {
        super()
        this.colorState = "green"
    }
    employ(trafficLight) {
        console.log(`交通灯颜色变为${this.colorState}`)
    }
    changeState(trafficLight) {
        trafficLight.setState(trafficLight.yellowState)
    }
}
class YellowState extends AbstractState {
    constructor() {
        super()
        this.colorState = "yellow"
    }
    employ(trafficLight) {
        console.log(`交通灯颜色变为${this.colorState}`)
    }
    changeState(trafficLight) {
        trafficLight.setState(trafficLight.redState)
    }
}
class TrafficLight {
    constructor() {
        this.greenState = new GreenState();
        this.redState = new RedState();
        this.yellowState = new YellowState();
        this.state = this.greenState;
    }
    setState(state) {
        this.state = state;
        state.employ(this)
    }
    changeState() {
        this.state.changeState(this);
    }
}