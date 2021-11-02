let input = document.getElementById("input")
let btnInput = document.getElementById("btnInput")
let rowtable = document.getElementById("rowTable")
let groupSelect = document.getElementById("inputGroupSelect04")



function selectFilter() {

    console.log(groupSelect)
        /* dropdownItem.forEach(e => {
                if (e === "Name") {
                    console.log("hai selezionato nome")
                } else if (e === "Username") {
                    console.log("hai selezionato username")
                } else if (e === "email") {
                    console.log("hai selezionato email")
                }
            }


        ) */


}


btnInput.addEventListener("click", function(e) {
    // filter on db

    console.log("it works")
})


/* input.addEventListener("keyup", function(e) {
    if (input.key = "Enter") {
        console.log(input.value)
    }
}) */

let users = []
let fetchUsers = async() => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.ok) {
            let result = await res.json();
            result.forEach(e => {
                console.log(e.name)
            });
            return result;

        } else {
            throw new Error("no users fetched!")
        }

    } catch (error) {
        throw error;
    }
}

let cratetable = async() => {
    rowtable.innerHTML = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    
    `

}



window.onload = () => {
    fetchUsers()
}