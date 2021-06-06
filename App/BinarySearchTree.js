class BinarySearchTree extends BinaryTree{
    constructor(){
        super();
    }
    isEmpty(){
        return this.rootNode  == null;
    }
    static arrayToTree(_array){
        let BST = new BinarySearchTree();
        for(let i = 0;i < _array.length;i++){
            BST.addNode(_array[i]);
        }
        return BST;
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
                    this.leftChild.parent = this;
                }
                this.leftChild.addNode(_value,this.depth+1);
            }else{
                if(!this.rightChild){
                    this.rightChild = new BinarySearchTree();
                    this.rightChild.parent = this;
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

    findMinimumNode(){
        if(this.isEmpty()){
            console.error('the tree is empty');
            return -1;
        }
        if(!this.leftChild){
            return this;
        }
        if(this.leftChild){
            return this.leftChild.findMinimumNode();
        }

    }
    increaseDepth(_amount){
        let amount = _amount || 1;
        if(this.isEmpty()){
            console.error('the tree is empty');
            return -1;
        }
        this.depth+=_amount;
        if(this.leftChild){
           this.leftChild.increaseDepth();
        }
        if(this.rightChild){
            this.rightChild.increaseDepth();
         }
    }
    //TODO: need to find a way to get the parent
    removeNode(_value){
        if(this.isEmpty()){
            console.error('the tree is empty');
            return -1;
        }
        if(this.rootNode.value == _value){
            //This point on the node to remove
            let childCount  = this.numderOfChilds();
            let parentSide;
            switch(childCount){
                case 0:
                    if(this.parent != null){
                        parentSide = this.parent.leftChild.rootNode.value == this.rootNode.value ? 'left' : 'right';
                        this.rootNode = null;
                    }
                    if(parentSide == 'left'){//can be shorten
                        this.parent.leftChild = null;
                    }else{
                        this.parent.rightChild = null;    
                    }
                    break;
                case 1:
                    let childNode = this.leftChild != null ? this.leftChild : this.rightChild;
                    if(this.parent != null){
                        parentSide = this.parent.leftChild.rootNode.value == this.rootNode.value ? 'left' : 'right';
                        this.rootNode = childNode;
                    }
                    if(parentSide == 'left'){//can be shorten
                        this.parent.leftChild = childNode;
                    }else{
                        this.parent.rightChild = childNode;    
                    }
                    break;
                case 2:
                    let inorderSuccessor = this.leftChild.findMinimumNode();
                    if(this.parent != null){
                        parentSide = this.parent.leftChild.rootNode.value == this.rootNode.value ? 'left' : 'right';
                    }       
                    if(parentSide == 'left'){//can be shorten
                        if(this.depth != 0){
                            //maybe works
                            let depthIncreaseAmount = inorderSuccessor.leftChild.depth - this.leftChild.depth;
                            this.leftChild.increaseDepth(depthIncreaseAmount);
                            //maybe works
                            this.parent.leftChild = this.leftChild;
                        }
                        inorderSuccessor.leftChild = this.rightChild;
                    }else{
                        
                    }
                    break;        
            }
            return this.rootNode.value;
        }
        if(this.rootNode.value > _value){
            if(this.leftChild){
                return this.leftChild.removeNode(_value);
            }else{
                console.error(`${_value} is not excited`);
                return -1;
            }
        }
        if(this.rootNode.value < _value){
            if(this.rightChild){
                return this.rightChild.removeNode(_value);
            }else{
                console.error(`${_value} is not excited`);
                return -1;
            }
        }
    }  
}  
