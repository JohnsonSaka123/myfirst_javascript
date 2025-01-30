


function delay(ms){
  return new Promise((resolve) => setTimeout(resolve,ms))
}

async function fetchData(){
  await delay(2000)
  return "Data fetched successfully" ;
}

async function main(){
  let result = await fetchData();
  console.log(result);
}

main();


const getUserData = async (userId) => {
  if (userId === 0) {
    throw new Error("Invalid User ID");
  }
  return `User data for ID: ${userId}`;
};

