const liItemAll = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItemAll.length}`)

liItemAll.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`)
});