function texto() {
    document.getElementById('todo').innerHTML = "<h1>Hola Mundo!!</h1>";

}
function volver() {
    document.getElementById('todo').innerHTML = location.reload();
}

function forma() {
    document.getElementById('todo').innerHTML = `
<div id="todoForm" class="container">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>    `;


}

