const data = [
    {
        id:1,
        state:0,
        content:'todo1',
    },
    {
        id:2,
        state:0,
        content:'todo2'
    }
]

const todoList = document.querySelector('#todoList');
const addButton = document.querySelector('#addButton');
const putTodoList = document.querySelector('#putTodoList');

printList();

//추가
addButton.addEventListener('click', function (){
    data.push({id:3, state:0, content:'todo3'})
    printList();
})

//불러오기
function printList() {
    //printList
    todoList.innerHTML = data.map((todo) => `
        <li class="li" data-id="${todo.id}">
            <span class="todoList ${ todo.state==1 ? 'completedList' : ''}">${todo.content}</span>
            <button class="deleteBtn">X</button>
            <button class="complete">V</button>
        </li>`).join('')

    const deleteBtn = document.querySelectorAll('.deleteBtn');

    deleteBtn.forEach((x) => 
        x.addEventListener('click',remove)
    )

    const complete = document.querySelectorAll('.complete')

    complete.forEach((x) => 
        x.addEventListener('click',completeTodo)
)
    /*
    for(let i = 0; i < data.length; ++i){
        todoList.innerHTML += `<li data-id="${data[i].id}">${data[i].content}<button class="deleteBtn" onClick="remove(this)">X</button></li>`
    }
    */
}

function remove(e){
    console.log(e.target.parentNode.dataset.id);
    //id를 가지고와서(2)
    //data 에서 id 가 2인 요소 찾기(1)
    // 배열에서 삭제
    const id = e.target.parentNode.dataset.id;

    
    const index = data.findIndex(x => x.id ==e.target.parentNode.dataset.id)
        if( data[index].id == id ){
            data.splice(index, 1) //삭제할 요소 index, 갯수
            printList();
        }
    
}

function completeTodo(e){
    //클릭한 요소의 state가 변경되어야한다.
    // console.log(e.target.parentNode.dataset.id);

    const id = e.target.parentNode.dataset.id;

        const index = data.findIndex(x => x.id ==e.target.parentNode.dataset.id)
            if(data[index].state == 1){
                data[index].state = 0
            }else{
                data[index].state = 1
            }
            printList()
}

    //삭제

    /*
    for(let i = 0; i < data.length; ++i){
        if( data[i].state==1){
            data[i].state=0
            //alert( data[i].state=0)
        }else{
            data[i].state=1
            
            //alert(data[i].state=1)
        }
    }
    */


// id, state, content,