class LinkList{
    #Node;
    #nextNode;
    #previousNode;
    constructor(){
        this.#Node = 'manage';
        this.#nextNode = null;
        this.#previousNode = null;
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
    get previousNode(){
        return this.#previousNode; 
    } 
    set Node(_node){
        this.#Node = _node;
    }
    set nextNode(_nextNode){
        this.#nextNode = _nextNode;
    }
    set previousNode(_previousNode){
        this.#previousNode = _previousNode;
    }
    static lastNode(_node){
        if(_node.#nextNode == null || _node.#nextNode.#Node == 'manage'){
            return _node;
        }else{
            return LinkList.lastNode(_node.#nextNode);
        }
    }
    static ListFromArray(_array,_classType){
        let lenght = _array.length;
        let list = new  LinkList();
        for(let i = 0;i < lenght;i++){
            list.addNode(_array[i]);
        }
        return list;
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
  
    addNode(_value){
        let newNode = new Node(_value);
        let LinkedNode = new LinkList;
        LinkedNode.#Node = newNode;
        let lastNode = LinkList.lastNode(this);
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