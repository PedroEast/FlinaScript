class Stack {
    index = 0;
    storage = {}

    push(element) {
        this.storage[this.index++] = element;
        // this.storage[this.index] = element;
        // this.index++;
    }

    pop() {
        if(this.index === 0) return undefined;
        
        let result = this.storage[--this.index];
        // this.index--;
        // let result = this.storage[this.index];
        delete this.storage[this.index]
        return result
    }

    peek() {
        return this.storage[this.index - 1];
    }

    size() {
        return this.index;
    }

}

const stackTest = function() {
    console.log(`aStack = new Stack() and push 'h','e','l','l','o'`);
    const aStack = new Stack();
    aStack.push('h')
    aStack.push('e')
    aStack.push('l')
    aStack.push('l')
    aStack.push('o')
    
    let result;
    console.log(`expect 5: number = aStack.size()`)
    result = aStack.size();
    console.log(typeof result, result)// number 5
    
    console.log(`expect o: string = aStack.pop()`)
    result = aStack.pop();
    console.log(typeof result, result)// string o
    
    console.log(`expect l: string = aStack.peek()`)
    result = aStack.peek();
    console.log(typeof result, result)// string l
    
    console.log(`expect 4: number = aStack.size()`)
    result = aStack.size();
    console.log(typeof result, result)// number 4
}

module.exports = {
    Stack: Stack,
    stackTest: stackTest
}