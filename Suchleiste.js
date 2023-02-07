function searchbar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
           if (filter === ""){
             li[i].style.display = "none";
             }
        } else {
            li[i].style.display = "none";
        }
    }
}

function openDialog() {
    document.getElementById("demo").innerHTML =
    `
    <dialog open>
        <p>Das Formular wurde abgeschickt!</p>
        <form method="dialog">
            <button>OK</button>
        </form>
    </dialog>
    `
  }