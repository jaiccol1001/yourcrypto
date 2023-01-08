var visible = 1; //var that keeps track of which table is visible (1 or 2)
function change_table(visible) {
  var t1 = document.getElementById("TABLE1");
 var t2 = document.getElementById("TABLE2");
  if(visible == 1) {
    visible = 2;
    t1.style.visibility = 'hidden';
    t2.style.visibility = 'visible';
  } else {
    visible = 1;
    t1.style.visibility = 'visible';
    t2.style.visibility = 'hidden';
  }
}