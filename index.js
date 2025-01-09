const data = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    response=await response.json()
    console.log(response);
};

data()