### javascript 设计模式学习
1. 对常用的javascript设计模式学习和总结
2. 思路是：画出UML类图，对常用的场景进行举例，并给出相应的code
### MVC,MVP,MVVM
1. MVC模式的View层和Model层存在耦合，为了解决这个问题，MVP将View层和Model层解耦，之间的交互只能通过Presenter层；
2. MVP的目的就是将View和Model完全解耦；
3. 在MVP中Presenter层需要调用View层的方法更新视图，Presenter层直接持有View层导致了Presenter对View的依赖；
4. MVVM: 模型(Model),视图(View),视图模型(view-model)
### 发布订阅模式(观察者模式)
1. Subscriber：订阅者，当消息发生时被通知的对象
2. Publisher: 发布者，当消息发生时通知对应订阅者
3. SubscriberMap: 持有不同type的数组，存储有所有订阅者的数组
4. type: 消息类型，订阅者可以订阅的不同消息类型
5. subscribe: 该方法将订阅者添加到SubscriberMap中对应的数组中
6. unSubscribe: 该方法在SubscriberMap中删除订阅者
7. notify: 该方法遍历SubscriberMap中对应的type的每个订阅者
8. 发布-订阅模式的优缺点：
   1. 解耦：时间上的解耦和对象上的解耦
   2. 时间上的解耦：注册的订阅行为由发布方决定何时调用；对象上的解耦：发布者不用提前知道消息的接收者是谁
### 状态模式
1. 状态模式把状态和状态对应的行为分离；把每个状态所对应的功能进行封装；
2. 状态和行为时相关联的，状态决定行为；
3. 重点强调对象内部状态的变化改变对象的行为，状态类之间是平行的，无法相互替换；
### 单例模式
### 工厂模式
