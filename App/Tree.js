
class Tree{
    #depth
    #rootNode;
    constructor(){
        this.#depth = -1;
        this.#rootNode = null;
        this.initialize = true;
    }
    get depth(){
        return this.#depth;
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
}