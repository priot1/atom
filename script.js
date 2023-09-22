document.querySelector('.case_button').addEventListener('click', addCase )
     let list = document.querySelector('ul');
     var todos;
     function toLocal(){
     todos = list.innerHTML;
     localStorage.setItem('todos', todos);
     }
function addCase(){
    let tower = document.querySelector('.case').value;
let floor = document.querySelector('.description').value;
let case_content = document.querySelector('.case_content');       
            let test = document.createElement("li");
            let img = document.createElement("img");
    img.setAttribute('onclick', 'this.parentNode.parentNode.removeChild(this.parentNode)');
    img.src = 'Vector.png';
     img.className = "img_delete";
     test.innerHTML = tower + "       " + floor + " ";
     let button = document.createElement("button");
    button.setAttribute('onclick', 'complected()');
    button.innerText = "complecte";
            list.appendChild(test);
            test.appendChild(img);
             test.appendChild(button);
             let complecte = document.createElement("div");
             complecte.className = "complecte";
             test.appendChild(complecte);
             toLocal();
   }
   function delete_last_case(){
             let listItems = list.getElementsByTagName('li');
  var last = listItems[listItems.length - 1];
    last.parentNode.removeChild(last);
    toLocal();
   }
   function delete_first_case(){
       list.querySelector('li').remove()
       toLocal();
   }
   function complected(){
        items = list.getElementsByTagName('li');
for(i=0;i<items.length;i++){
     items[i].i = i;
    items[i].onclick = finishCase ; 
   }
      }
   function  finishCase() {
t = this.i;
   var nodes = list.querySelectorAll('li');
    console.log(nodes.value);
   var length = document.getElementsByTagName('li').length;
   let com = document.querySelectorAll('.complecte');
       com[t].textContent='complected';
   toLocal();
for(var i = 0; i <= length ; ++i){
 list.appendChild(nodes[t]);
 toLocal();
}
      }  
function even_allocation(){
var liList = document.getElementsByTagName("li");
         // 2. ѕроведите по циклу каждый li, чтобы определить, четна€ или нечетна€ строка
    for (var i = 0; i < liList.length; i++) {
        if (i % 2) {
                         // „етные строки
             if(liList[i].style.backgroundColor !== "red"){
                             liList[i].style.backgroundColor = "red";
                         }else{
                             liList[i].style.backgroundColor = "#a6caf0";
                         }
                                 } 
    }
    }
    function add_selection(){
var liList = document.getElementsByTagName("li");
         // 2. ѕроведите по циклу каждый li, чтобы определить, четна€ или нечетна€ строка
    for (var i = 0; i < liList.length; i++) {
        if ((i % 2)==0 ){
                         // „етные строки
                         if(liList[i].style.backgroundColor !== "green"){
                             liList[i].style.backgroundColor = "green";
                         }else{
                             liList[i].style.backgroundColor = "#a6caf0";
                         }
        } 
    }
    }
    if (localStorage.getItem('todos')){
         list.innerHTML = localStorage.getItem('todos');
        
    }