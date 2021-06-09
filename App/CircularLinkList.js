class CircularLinkList extends LinkList{
    constructor(){
        super();
    }
    addNode(_value){
        let newNode = new Node(_value);
        let LinkedNode = new LinkList;
        LinkedNode.Node = newNode;
        let lastNode = LinkList.lastFreeNode(this);
        lastNode.nextNode = LinkedNode;
        this.previousNode = lastNode.nextNode;
        lastNode.nextNode.nextNode = this;
    }
}