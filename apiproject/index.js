document.getElementById("load-users").addEventListener("click" , fetchUsers);

async function fetchUsers(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // creating the list to contain the users

    let userlist = document.getElementById("user-list");
    userlist.innerHTML = "";

    users.forEach( user => {
      
      const li = document.createElement("li");
      li.innerHTML = `${user.name} - ${user.email}`;
      userlist.appendChild(li);
    });

  }catch (error){
    console.error('Error fetching users:', error);
  }
};