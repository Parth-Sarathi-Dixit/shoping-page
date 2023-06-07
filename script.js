const dropDownArrow = document.getElementById('dropdown-arrow')
const dropDownMenu = document.getElementById('dropdown-menu')
dropDownArrow.addEventListener('mouseover', () => {
    dropDownMenu.style.display = 'flex'
    dropDownArrow.addEventListener('mouseout', () => {
        dropDownMenu.style.display = 'none';
    })
})



const qnaArrow = document.querySelectorAll('.question-and-arrow .bi-caret-down-fill');
const quesDiv = document.querySelectorAll('.question-and-arrow')

// console.log(quesDiv)

qnaArrow.forEach(e => {
    e.addEventListener('click', (event) => {
        let idVal = event.target.id;
        const ansBox = document.getElementById(`ans-${idVal}`);
        ansBox.classList.toggle('hide');
    })
})


// quesDiv.forEach(e => {
//     e.addEventListener('click', (event) => {
//         let idVal = event.target.id;
//         console.log(`ans-${idVal}`)
//         const ansBox = document.getElementById(`ans-${idVal}`);
//         // ansBox.classList.toggle('hide');
//     })
// })



