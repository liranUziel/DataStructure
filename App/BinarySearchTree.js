class BinarySearchTree extends BinaryTree{
    //uniqe to binary tree;
    constructor(){
        super();

    }
    isEmpty(){
        return this.rootNode  == null;
    }
    addNode(_value,_depth){
        if(this.isEmpty()){
            let node = new Node(_value);
            this.rootNode = node;
            this.depth = _depth || 0;
        }else{
            if(this.rootNode.value > _value){
                if(!this.leftChild){
                    this.leftChild = new BinarySearchTree();
                }
                this.leftChild.addNode(_value,this.depth+1);
            }else{
                if(!this.rightChild){
                    this.rightChild = new BinarySearchTree();
                }
                this.rightChild.addNode(_value,this.depth+1);
            }
        }
    }
    sortPrint(){
        if(this.isEmpty()){
            console.error('the tree is empty');
            return -1;
        }
        if(!this.leftChild && !this.rightChild){
            return this.rootNode.value;
        }
        let sortArray = [];
        if(this.leftChild){
            sortArray = sortArray.concat(this.leftChild.sortPrint());
        }
        sortArray = sortArray.concat(this.rootNode.value);
        if(this.rightChild){
            sortArray = sortArray.concat(this.rightChild.sortPrint());
        }
        return sortArray;
    }
    searchNode(_value){
        if(this.isEmpty()){
            console.error('the tree is empty');
            return -1;
        }
        if(this.rootNode.value == _value){
            return 'found';
        }
        if(this.rootNode.value > _value){
            if(this.leftChild){
                return this.leftChild.searchNode(_value);
            }else{
                console.error(`${_value} is not excited`);
                return -1;
            }
        }
        if(this.rootNode.value < _value){
            if(this.rightChild){
                return this.rightChild.searchNode(_value);
            }else{
                console.error(`${_value} is not excited`);
                return -1;
            }
        }
    }
    removeNode(_value){
        if(this.rootNode.value == _value){
            /// a lot of code.
        }
        else{
            if(_value < this.rootNode.value){
                this.leftChild.removeNode(_value);
            }
            else{
                this.rightChild.removeNode(_value);
            }
        }
    }  
}  
