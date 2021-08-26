function createVar(name,val){
    var code = 'var '+name+' = '+val+';';
    eval(code);
    }
    createVar('hello','Hello world');
    alert(hello);
    //affiche 'Hello world'
    var nb = 3;
    createVar(('variable'+nb),'Je m\'appelle variable3');
    alert(variable3);
    //affiche 'Je m'appelle variable3'