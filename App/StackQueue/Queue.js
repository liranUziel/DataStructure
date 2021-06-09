class Queue{
    #top;
    #back;
    #Nodes;
    constructor(){
        this.#back = 0;
        this.#top = 0;
        this.#Nodes = [];
    }
    static FromArray(_array){
        let lenght = _array.length;
        let queue = new Queue();
        for(let i = 0;i < lenght;i++){
            queue.insert(_array[i]);
        }
        return queue;
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
    insert(_value){
        let node = new Node(_value);
        this.#back = this.#Nodes.push(node);

    }
    empty(){
        return this.#back == this.#back;
    }
    remove(){
        if(!this.empty()){
            this.#back--;
            return this.#Nodes.shift().value;
        }else{
            console.error(`The queue is empty`);
            return -1;
        }
    }
    peek(){
        if(!this.empty()){
            return this.#Nodes[this.#back].value;
        }else{
            console.error(`The queue is empty`);
            return -1;
        }
    }
    print(){
        let lenght = this.#Nodes.length;
        let report = '|Tpp|> '; 
        for(let i = 0;i < lenght;i++){
            report += `|${this.#Nodes[i].value}|> `
        }
        report += `<|Back|`
        console.log(report);
    }
}