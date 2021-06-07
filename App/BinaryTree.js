
class BinaryTree extends Tree{
    #leftChild;
    #rightChild;
    constructor(){
        super();
        this.initialize = true;
        this.#leftChild = null;
        this.#rightChild = null;
        this.gap = 100;//+ (40*this.depth);
        this.line = 50;
    }

    /*
    draw on screen
    */
    initDraw(_pos){
        this.maxDapth = this.setDepthTree;
        //this.gap = 40* this.maxDapth;
        let pos = {'x':_pos.x,'y':_pos.y};
        this.setPos(pos);   
    }

    setPos(_pos,_side){
        if(this.isNodeLeaf()){
            this.pos = {'x':_pos.x,'y':_pos.y};
            return;
        }
        this.pos = {'x':_pos.x,'y':_pos.y};
        if(this.#leftChild != null){
            this.#leftChild.setPos({'x':_pos.x - this.gap,'y':_pos.y + this.line},1);
        }
        if(this.#rightChild != null){
            this.#rightChild.setPos({'x':_pos.x + this.gap,'y':_pos.y + this.line},-1);
        }
        
    }
    setDepthTree(_depth){
        let depth = _depth || 0;
        this.depth = depth;
        this.#leftChild.setDepthTree(depth + 1);
        this.#rightChild.setDepthTree(depth + 1);
    }
    lenght(){
        if(this.isNodeLeaf()){
            return 1;
        }
        let leftChildsCount = this.#leftChild != null ? this.#leftChild.lenght() : 0;    
        let rightChildsCount = this.#rightChild != null ? this.#rightChild.lenght() : 0;

        return leftChildsCount + rightChildsCount + 1;
    }

    isNodeLeaf(){
        return this.#leftChild == null && this.#rightChild == null;
    }
    getMaxDepthTree(){
        if(this.isNodeLeaf()){
            return this.depth;
        }
        let maxLeft = this.#leftChild != null ? this.#leftChild.getMaxDepthTree() : -1;    
        let maxRight = this.#rightChild != null ? this.#rightChild.getMaxDepthTree() : -1;  
        return ((maxLeft + maxRight) + Math.abs(maxLeft - maxRight))/2;
    }


    numderOfChilds(){
        let childCount = this.#leftChild ? 1 : 0;
        childCount += this.#rightChild ? 1 : 0;
        return childCount;
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