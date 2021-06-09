class Tree{
    #depth
    #rootNode;
    #parent;
    constructor(){
        this.#depth = -1;
        this.#rootNode = null;
        this.#parent = null;
    }
    
    get depth(){
        return this.#depth;
    }
    get parent(){
        return this.#parent;
    }
    get rootNode(){
        return this.#rootNode;
    }
    set rootNode(_rootNode){
        this.#rootNode = _rootNode;
    }
    set depth(_depth){
        this.#depth = _depth;
    }
    set parent(_parent){
        this.#parent = _parent;
    }
    
}

