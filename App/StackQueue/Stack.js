class Stack{
    #Nodes
    #top
    constructor(){
        this.#top = -1;
        this.#Nodes = [];
    }
    static FromArray(_array){
        let lenght = _array.length;
        let stack = new Stack();
        for(let i = 0;i < lenght;i++){
            stack.push(_array[i]);
        }
        return stack;
    }
    toString(){
        let lenght = this.#Nodes.length;
        let report = '['; 
        for(let i = 0;i < lenght - 1;i++){
            report += `${this.#Nodes[i].value},`
        }
        report += `${this.#Nodes[lenght-1].value}]`;
        return report;
    }
    push(_value){
        let node = new Node(_value);
        this.#Nodes.push(node);
        this.#top++;
    }
    pop(){
        if(!this.empty()){
            let node = this.#Nodes.pop();
            this.#top--;
            return node.value;
        }else{
            console.error(`The stack is empty`);
            return -1;
        }
    }
    peek(){
        if(!this.empty()){
            return this.#Nodes[this.#top].value;
        }else{
            console.error(`The stack is empty`);
        return -1;
    }
    }
    empty(){
        return this.#top == -1;
    }
    print(){
        let lenght = this.#Nodes.length;
        let report = '|Back|> '; 
        for(let i = 0;i < lenght;i++){
            report += `|${this.#Nodes[i].value}|> `
        }
        report += `<|Top|`
        console.log(report);
    }
}