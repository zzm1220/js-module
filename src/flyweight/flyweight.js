let examCarNum = 0
class ExamCar {
    constructor(carType) {
        examCarNum++
        this.carId = examCarNum
        this.carType= carType ? '手动挡' : '自动挡'
        this.usingState = false
    }
    examine(candidateId) {
        return new Promise((resolve, reject) => {
            this.usingState = true
            console.log(`${candidateId} is examing at ${this.carId}`)
            setTimeout(()=>{
                this.usingState = false
                console.log(`${candidateId} ended`)
                resolve()
            }, 2000)
        })
    }
}
ManualExamCarPool = {
    _pool: [],
    _candidateQueue: [],
    initManualExamCar(num) {
        for(let i = 0; i < num; i++) {
            this._pool.push(new ExamCar(true))
        }
    },
    getManualExamCar() {
        return this._pool.find(car => !car.usingState)
    },
    registerCandidates(candidateList) {
        candidateList.forEach(candidateId => this.registerCandidate(candidateId))
    },
    registerCandidate(candidateId) {
        const examCar = this.getManualExamCar()
        if (examCar) {
            examCar.examine(candidateId)
                .then(()=>{
                    const nextCandidateId = this._candidateQueue.length && this._candidateQueue.shift()
                    nextCandidateId && this.registerCandidate(nextCandidateId)
                })
        } else {
            this._candidateQueue.push(candidateId)
        }
    }
}

ManualExamCarPool.initManualExamCar(3)
ManualExamCarPool.registerCandidates([1,2,3,4,5])