
document.querySelector("form").addEventListener("submit", myTodo);

let todoArr = JSON.parse(localStorage.getItem('todo')) || [];

displayTodo();
function displayTodo() {
    document.querySelector('tbody').textContent = '';
    todoArr.map(function (ele, index) {
        let tr = document.createElement("tr")

        let td1 = document.createElement('td')
        td1.textContent = ele.task

        let td2 = document.createElement('td')
        td2.textContent = ele.priority;

        if (ele.priority === 'Low') {
            td2.style.backgroundColor = "green"
        } else if (ele.priority === 'Medium') {
            td2.style.backgroundColor = "orange"
        } else {
            td2.style.backgroundColor = "red"
        }

        let td3 = document.createElement('td')
        td3.textContent = 'Delete'
        td3.addEventListener("click", () => {
            deleteTodo(index);
        })

        tr.append(td1, td2, td3);
        document.querySelector('tbody').append(tr)
    })
}

function myTodo() {
    event.preventDefault();
    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;

    let todoObj = {
        task: task,
        priority: priority
    }

    todoArr.push(todoObj);

    localStorage.setItem("todo", JSON.stringify(todoArr));

    displayTodo();
    // document.getElementById("task").value='';
    // document.getElementById("priority").value='';

}

function deleteTodo(index) {
    // console.log(event.target.parentNode)
    // event.target.parentNode.remove();
    todoArr.splice(index, 1)
    localStorage.setItem("todo", JSON.stringify(todoArr));
    displayTodo();
}