function fetechUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(data =>{
        if(data.length > 0){
            data.forEach(element => {
                document.querySelector('tbody').innerHTML += `
                     <tr>
                        <th>${element.id}</th>
                        <th>${element.name}</th>
                        <th>${element.phone}</th>
                        <th>${element.email}</th>
                        <th>
                            <button id="detail">Detail</button>
                            <button id="edit">Edit</button>
                            <button id="delete">Delete</button>
                        </th>
                    </tr>

                `
            });
        }
        
    })


}

// call fetech user function
fetechUser();

// call to delete user

function handleDeleteuser(userId){
    console.log(userId);

    if(!userId){
        alert('No User ID');
    }

    fetch('https://jsonplaceholder.typicode.com/users/' +userId, {
        method: 'DELETE'
    }) 
}