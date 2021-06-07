let ctx;
function creatCanvas(_witdh,_height){
    let canvas = document.createElement('canvas');
    let body = document.body;
    body.append(canvas);
    this.canvas = document.getElementsByTagName('canvas')[0];
    this.canvas.width = _witdh;
    this.canvas.height = _height;
    this.canvas.classList.add('defultCanvas');
    ctx = this.canvas.getContext("2d");
}
function backgroundColor(_color){
    let color = _color;
    if(color < 255 && color < 255){
        //conver to hex;
        color = '#' + color.toString(16).repeat(3);
    }
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setup(){
    let tree = BinarySearchTree.arrayToTree([5,3,8,4,1,10,9,7,11,2,0,15,16]);
    creatCanvas(600,600);
    backgroundColor(52);
    let canvas = document.getElementsByClassName('defultCanvas')[0];
    tree.initDraw({'x':canvas.width/2,'y':50});
    drawTree(tree);
}
function strokeSetColor(){
    let color = _color;
    if(color < 255 && color < 255){
        //conver to hex;
        color = '#' + color.toString(16).repeat(3);
    }
    ctx.strokeStyle = color;
}

function drawTree(_tree){
    if(_tree.isNodeLeaf()){
        //draw
        //console.log(_tree.pos,)
        drawLine(_tree.pos.x,_tree.pos.y,_tree.parent.pos.x,_tree.parent.pos.y);
        drawCircle(_tree.pos.x,_tree.pos.y);
    }
    if(_tree.leftChild != null)
    {
        drawTree(_tree.leftChild);
    }
    if(_tree.rightChild != null)
    {
        drawTree(_tree.rightChild);
    }
    if(_tree.parent != null){
        drawLine(_tree.pos.x,_tree.pos.y,_tree.parent.pos.x,_tree.parent.pos.y);
    }
    drawCircle(_tree.pos.x,_tree.pos.y);
    //draw parent
}
function drawCircle(_x,_y){
    ctx.beginPath();
    ctx.arc(_x, _y,15, 0, 2 * Math.PI);
    ctx.stroke();
}
function drawLine(_x1,_y1,_x2,_y2){
    ctx.beginPath();
    ctx.moveTo(_x1, _y1);
    ctx.lineTo(_x2, _y2);
    ctx.stroke();
}
setup();

