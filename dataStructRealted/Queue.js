class Queue {
    collection = []

    print() {
        console.log(this.collection);
    }

    enqueue(element) {
        this.collection.push(element);
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    size() {
        return this.collection.length;
    }
}

const queueTest = function() {

    console.log(`aQueue = new Queue()`);
    const aQueue = new Queue();
    
    let result;
    console.log(`expect true: boolean = aQueue.isEmpty()`)
    result = aQueue.isEmpty();
    console.log(typeof result, result)// boolean true
    
    console.log(`enqueue 'h','e','l','l','o'`);
    aQueue.enqueue('h');
    aQueue.enqueue('e');
    aQueue.enqueue('l');
    aQueue.enqueue('l');
    aQueue.enqueue('o');
    console.log(`expect false: boolean = aQueue.isEmpty()`)
    result = aQueue.isEmpty();
    console.log(typeof result, result)// boolean false
    
    aQueue.print();
    
    console.log(`expect 5: number = aQueue.size()`)
    result = aQueue.size();
    console.log(typeof result, result)// number 5
    console.log(`expect h: string = aQueue.front()`)
    result = aQueue.front();
    console.log(typeof result, result)// string h
    
    console.log(`expect h: string = aQueue.dequeue()`)
    result = aQueue.dequeue();
    console.log(typeof result, result)// string h
    console.log(`expect 4: number = aQueue.size()`)
    result = aQueue.size();
    console.log(typeof result, result)// number 4
    console.log(`expect e: string = aQueue.front()`)
    result = aQueue.front();
    console.log(typeof result, result)// string e
}



module.exports = {
    Queue: Queue, 
    queueTest: queueTest
}