class dyClass{

    addFunction(_functionName,_function){
        this[_functionName] = _function;
    }
    addField(_fieldName){
        this[_fieldName] = undefined;
    }
    addValue(_fieldName,_value){
        if(_filedName in this){
            this[_filedName] = _value;
        }else{
            console.error(`${_fieldName} is not a field`);
            return -1;
        }
    }
}