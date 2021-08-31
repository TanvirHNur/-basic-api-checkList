const updateUser = () => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}


const displayUser = users => {
    // const users = randomUsers.results;
    users.forEach(user => {
        const userContainer = document.getElementById('users')
        const div = document.createElement('div');
        div.classList = 'user m-5'
        div.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="" class="img-thumbnail rounded">
        <h6>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h6>
            <h6>Email: ${user.email}</h6>
            <h6>Gender: ${user.gender}</h6>
            <h6>Location: ${user.location.city}, ${user.location.state}, ${user.location.country}</h6>
            <h6>Phone: ${user.phone}</h6>
           
            
        `

        userContainer.appendChild(div)
        console.log(user)
    })
    
    // console.log(users)    

}
                                                                                                                                                                                                         









// const displayUser = randomUsers => {
//     const users = randomUsers.results;
//     for(const user of users) {
//         const userContainer = document.getElementById('users')
//         const h6 = document.createElement('p');
//         h6.innerText = user.name.last;
//         userContainer.appendChild(h6)
//     }
    
//     console.log(users)
// }
