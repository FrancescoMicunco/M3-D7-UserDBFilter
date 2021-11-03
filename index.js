let input = document.getElementById("input")
let btnInput = document.getElementById("btnInput")
let rowtable = document.getElementById("rowTable")
let groupSelect = document.getElementById("inputGroupSelect04")

let tbody = document.getElementById('tbody');

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

// create row

let fetchUsers = async() => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.ok) {
            let result = await res.json();
            return result;
        } else {
            throw new Error("no users fetched!")
        }
    } catch (error) {
        throw error;
    }
}
let row = (e) => {
    `<tr>
    <td>${e.name}</td>
<td>${e.username}</td>
<td>${e.email}</td>
</tr>
`
}

let renderUser = () => {
    tbody.innerHTML = ""
    result.forEach(e => {
        tbody.innerHTML += row(result)
    })
}
window.onload = () => {
    fetchUsers()


}
renderUser()