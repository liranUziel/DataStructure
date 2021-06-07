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
            return {'depth':this.depth};
        }
        if(this.rootNode.value > _value){
            if(this.leftChild){
                return this.leftChild.searchNode(_value);
            }else{
                console.error(`${_value} is not excited`);
                return {'depth':-1};
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
            let childParentSide;
            if(this.parent != null){
                if(this.parent.leftChild){
                    childParentSide = this.parent.leftChild.rootNode.value == this.rootNode.value ? 'left' : 'right';
                }else{
                    childParentSide = 'right';
                }
                
            }    
            switch(childCount){
                case 0:
                    this.rootNode = null;
                    if(childParentSide){
                        this.parent.leftChild == 'left' ? this.parent.leftChild = null : this.parent.rightChild = null;   
                    }
                    break;
                case 1:
                    let childNode = this.leftChild != null ? this.leftChild : this.rightChild;
                    this.rootNode = childNode;
                    //need to fix
                    childParentSide == 'left' ? this.parent.leftChild = childNode : this.parent.rightChild = childNode;   
                    break;
                case 2:
                    let inorderSuccessor = this.rightChild.findMinimumNode();
                    if(this.parent != null){
                        childParentSide = this.parent.leftChild.rootNode.value == this.rootNode.value ? 'left' : 'right';
                    } 
                    this.rightChild.increaseDepth(-1);
                    let depthIncreaseAmount = inorderSuccessor.depth - this.leftChild.depth + 1;
                    this.leftChild.increaseDepth(depthIncreaseAmount);    
                    inorderSuccessor.leftChild = this.leftChild;
                    this.leftChild.parent = inorderSuccessor;  
                    if(this.parent == null){
                        this.rootNode = this.rightChild.rootNode;
                        this.leftChild = this.rightChild.leftChild;
                        this.rightChild = this.rightChild.rightChild;
                        this.parent = null;
                    }else if(childParentSide == 'left'){
                        this.parent.leftChild = this.rightChild;
                    }else{
                        this.parent.rightChild = this.rightChild;
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
