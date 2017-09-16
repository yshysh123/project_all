var textedit = function() {
    var editControls = document.getElementById('editControls')
    var lis = editControls.getElementsByTagName('a')
    for(var i=0;i<lis.length;i++){
        lis[i].onclick = function(){
            switch(this.getAttribute('btnname')) {
            case 'h1':
            case 'h2':
            case 'p':
                document.execCommand('formatBlock', false, '<' + this.getAttribute('btnname') + '>');
                break;
            default:
                document.execCommand(this.getAttribute('btnname'), false, null);
                break;
            }
        }
    }
}
export {
    textedit
}
