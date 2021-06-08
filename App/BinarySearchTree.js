class BinarySearchTree extends BinaryTree{
    /**
    * Represents a Binary Search Tree (BST).
    * @alias BTS
    * @constructor
    */
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
    /**
     * @function addNode adding a new node to the tree (this), finding the loction (the leaf)
     * to add the new node with the right value;
     * @param _value the value to add to the tree.
     * @param _depth use to find the current depth in the search for the loction 
     * i.e value 4 add under leaf with value 3 and depth 1 there for the new loction depth is 2.
     */
    addNode(_value,_depth){
        if(this.isEmpty()){
            let node = new Node(_value);
            this.rootNode = node;
            this.depth = _depth || 0;
        }
        else{
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
    /**
     * @function removeNode removing node with the value from the tree (this), by finding the loction 
     * of the node to remove. remove the node and fix the tree by finding the 'inorderSuccessor'
     * @param _value the value to add to the tree.
     * @returns returning the value that was remove or -1 if not found
     */
    removeNode(_value){
        if(this.isEmpty()){
            console.error('the tree is empty');
            return -1;
        }
        //find the pointer to remove the node;
        let nodeToRemove = this.searchNode(_value)["pointer"];
        if(!nodeToRemove){
            console.error(`${_value} not found in the tree`);
            return -1;
        }
        let returnValue = nodeToRemove.rootNode.value;
        let childCount  = nodeToRemove.numderOfChilds();
        let childParentSide;
        if(nodeToRemove.parent != null){
            if(nodeToRemove.parent.leftChild){
                childParentSide = nodeToRemove.parent.leftChild.rootNode.value == nodeToRemove.rootNode.value ? 'left' : 'right';
            }else{
                childParentSide = 'right';
            }
            
        }    
        switch(childCount){
            case 0:
                nodeToRemove.rootNode = null;
                if(childParentSide){
                    nodeToRemove.parent.leftChild == 'left' ? nodeToRemove.parent.leftChild = null : nodeToRemove.parent.rightChild = null;   
                }
                break;
            case 1:
                let childNode = nodeToRemove.leftChild != null ? nodeToRemove.leftChild : nodeToRemove.rightChild;
                this.rootNode = childNode;
                //need to fix
                childParentSide == 'left' ? nodeToRemove.parent.leftChild = childNode : nodeToRemove.parent.rightChild = childNode;   
                break;
            case 2:
                let inorderSuccessor = nodeToRemove.rightChild.findMinimumNode();
                if(nodeToRemove.parent != null){
                    childParentSide = nodeToRemove.parent.leftChild.rootNode.value == nodeToRemove.rootNode.value ? 'left' : 'right';
                } 
                inorderSuccessor.leftChild = nodeToRemove.leftChild;
                nodeToRemove.leftChild.parent = inorderSuccessor;  
                if(nodeToRemove.parent == null){
                    nodeToRemove.rootNode = nodeToRemove.rightChild.rootNode;
                    nodeToRemove.leftChild = nodeToRemove.rightChild.leftChild;
                    nodeToRemove.rightChild = nodeToRemove.rightChild.rightChild;
                    nodeToRemove.parent = null;
                }else if(childParentSide == 'left'){
                    nodeToRemove.parent.leftChild = nodeToRemove.rightChild;
                }else{
                    nodeToRemove.parent.rightChild = nodeToRemove.rightChild;
                }
                break;        
        }
        console.log(this);
        this.setDepthTree();
        return returnValue; 
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
            return {'depth':this.depth,'pointer':this};
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
}  
