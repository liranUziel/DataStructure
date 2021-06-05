class Node{

    #value;
    #nextNode = [];
    constructor(_value){
        this.#value = _value;
    }

    get value() {
        return this.#value;
    }
    getNthChild(index){
        return this.#nextNode[i];
    }

}