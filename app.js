function generateElement(){
    
    var text = document.getElementById("input-txt").value;
    
    var list_items = document.getElementById("list-items"); 

    var li = document.createElement("LI");

    var textNodes = document.createTextNode(text);

    li.setAttribute("class",'para')
    li.appendChild(textNodes);

    list_items.appendChild(li);

    // text.value="";


    var btn = document.createElement("BUTTON");
    var btnTxt = "delete"
    var btnVal = document.createTextNode(btnTxt);
    btn.appendChild(btnVal);
    btn.setAttribute("onclick",'del(this)');
    btn.setAttribute("class",'betn');
    li.appendChild(btn)

}

function del(e){
    
    e.parentNode.remove();
    // console.log(e.parentNode);
}