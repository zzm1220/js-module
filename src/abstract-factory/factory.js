/**
 *抽象工厂类
 *
 * @class AbstractFactory
 */
class AbstractFactory {
    constructor() {
        if (new.target === AbstractFactory) {
            throw new Error('抽象类不能实例化')
        }
    }
    /**抽象方法 */
    createProduct() {
        throw new Error('抽象方法不能调用！')
    }
}
/**
 *具体工厂，继承抽象工厂
 *
 * @class Factory
 * @extends {AbstractFactory}
 */
class Factory extends AbstractFactory {
    constructor() {
        super()
    }
    /**
     * 
     * @param {*} type 
     */
    createProduct(type) {
        switch(type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有该产品')
        }
    }
}
/**
 *抽象产品类
 *
 * @class AbstractProduct
 */
class AbstractProduct {
    constructor() {
        if (new.target === AbstractProduct) {
            throw new Error('抽象产品类，不能实例化')
        }
        this.kind = '抽象产品类'
    }
    operate() {
        throw new Error('抽象方法不能直接调用!')
    }
}
class Product1 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product1'
    }
    operate() {
        console.log(`${this.kind} - ${this.type}`)
    }
}
class Product2 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product2'
    }
    operate() {
        console.log(`${this.kind} - ${this.type}`)
    }
}