class LinkList{
    #Node;
    #nextNode;
    #previousNode;
    constructor(){
        this.#Node = 'manage';
        this.#nextNode = null;
        this.#previousNode = null;
    }

    get previousNode(){
        return this.#previousNode; 
    }    
    get Node(){
        return this.#Node; 
    }
    get nextNode(){
        return this.#nextNode; 
    }
    get previousNode(){
        return this.#previousNode; 
    } 
    set Node(_node){
        this.#Node = _node;
    }
    set Node(_nextNode){
        this.#nextNode = _nextNode;
    }
    set Node(_previousNode){
        this.#previousNode = _previousNode;
    }
    static lastFreeNode(_node){
        if(_node.#nextNode == null){
            return _node;
        }else{
            return LinkList.lastFreeNode(_node.#nextNode);
        }
    }
    findNode(_value){
        let currentNode = this;
        let found = false;
        while(currentNode.#nextNode != null){
            currentNode = currentNode.#nextNode;
            if(currentNode.Node.value == _value)
            {
                found = currentNode;
            }
        }
        return found != false ? found : -1;
    }

    linkFromArray(_array){
        let lenght = _array.length;
        for(let i = 0;i < lenght;i++){
            this.addNode(_array[i]);
        }
    }
    addNode(_value){
        let newNode = new Node(_value);
        let LinkedNode = new LinkList;
        LinkedNode.#Node = newNode;
        let lastNode = LinkList.lastFreeNode(this);
        lastNode.#nextNode = LinkedNode;
    }
    printList(){
        let respos = '';
        let currentNode = this;
        respos += `M->`;
        while(currentNode.#nextNode != null && currentNode.#nextNode.#Node != 'manage' ){
            currentNode = currentNode.#nextNode;
            respos += `->${currentNode.Node.value}`;
        }
        respos += `-||`;
        console.log(respos);
    }


}