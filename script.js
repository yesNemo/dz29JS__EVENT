const dz1 = document.getElementById("dz1").textContent;
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key.toLowerCase() === "e" || event.key === "у") {
        event.preventDefault();
        const textarea = document.createElement("textarea");
        textarea.value = dz1;
        document.getElementById("dz1").replaceWith(textarea);
        textarea.classList.add("textareaThis");

        textarea.addEventListener("keydown", function (event) {
            if (event.ctrlKey && event.key === "s"|| event.key === "ы"|| event.key === "і") {
                event.preventDefault();
                const div = document.createElement("div");
                div.textContent = textarea.value;
                textarea.replaceWith(div);
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {

     const getSort = ({ target }) => {
         const order = (target.dataset.order = -(target.dataset.order || -1));
         const index = [...target.parentNode.cells].indexOf(target);
         const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
         const comparator = (index, order) => (a, b) => order * collator.compare(
             a.children[index].innerHTML,
             b.children[index].innerHTML
         );

         for(const tBody of target.closest('table').tBodies)
             tBody.append(...[...tBody.rows].sort(comparator(index, order)));

         for(const cell of target.parentNode.cells)
             cell.classList.toggle('sorted', cell === target);
     };

     document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

 });
const block = document.getElementById('block');
let startX, startY, startWidth, startHeight;
block.onmousedown = function (event) {
    event.preventDefault();
    startWidth = block.offsetWidth;
    startHeight = block.offsetHeight;
    startX = event.clientX;
    startY = event.clientY;
    document.onmousemove = function (event) {
        block.style.width = startWidth + event.clientX - startX + 'px';
        block.style.height = startHeight + event.clientY - startY + 'px';
    };
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    };
};
