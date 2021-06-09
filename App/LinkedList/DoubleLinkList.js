class DoubleLinkList extends LinkList{
    constructor(){
        super();
    }
    addNode(_value){
        let newNode = new Node(_value);
        let LinkedNode = new LinkList;
        LinkedNode.Node = newNode;
        let lastNode = LinkList.lastNode(this);
        lastNode.nextNode = LinkedNode;
        LinkedNode.previousNode = lastNode;
    }
    static ListFromArray(_array){
        let lenght = _array.length;
        let list = new DoubleLinkList();
        for(let i = 0;i < lenght;i++){
            list.addNode(_array[i]);
        }
        return list;
    }
}