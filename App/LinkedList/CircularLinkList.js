class CircularLinkList extends LinkList{
    constructor(){
        super();
    }
    addNode(_value){
        let newNode = new Node(_value);
        let LinkedNode = new CircularLinkList;
        LinkedNode.Node = newNode;
        let lastNode = CircularLinkList.lastNode(this);
        lastNode.nextNode = LinkedNode;
        this.previousNode = lastNode.nextNode;
        lastNode.nextNode.nextNode = this;
    }
    static ListFromArray(_array){
        let lenght = _array.length;
        let list = new CircularLinkList();
        for(let i = 0;i < lenght;i++){
            list.addNode(_array[i]);
        }
        return list;
    }
}