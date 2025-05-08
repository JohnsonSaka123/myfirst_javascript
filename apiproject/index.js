document.getElementById("load-users").addEventListener("click" , fetchUsers);

async function fetchUsers(){
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    // creating the list to contain the users

    let userlist = document.getElementById("user-list");
    userlist.innerHTML = "";

    users.forEach( user => {
      
      let li = document.createElement("li");
      li.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
      userlist.appendChild(li);
    });

  }catch (error){
    console.error('Error fetching users:', error);
  }
};

console.log("script is running....");