
class BinaryTree extends Tree{
    #leftChild;
    #rightChild;
    constructor(){
        super();
        this.initialize = true;
        this.#leftChild = null;
        this.#rightChild = null;
    }

    get rightChild(){
        return this.#rightChild;
    }
    get leftChild(){
        return this.#leftChild;
    }
    set leftChild(_subTree){
        this.#leftChild = _subTree;
    }
    set rightChild(_subTree){
        this.#rightChild = _subTree;
    }
}