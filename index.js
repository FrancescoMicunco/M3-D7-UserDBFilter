let input = document.getElementById("input")



let fetchUsers = async() => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.ok) {
            let result = res.json();
            return result;
        } else {
            throw new Error("no users fetched!")
        }
    } catch (error) {
        throw error;
    }
}
window.onload = () => {
    fetchUsers
}