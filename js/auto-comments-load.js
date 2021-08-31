const updateComments  = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
updateComments();

const displayComments = comments => {
   const commentsContainer  = document.getElementById('comments');
   for (const comment of comments){
       // console.log(comment)
       const div = document.createElement('div');
       div.innerHTML = `
       <h3 onclick="displayCommentsDetail('${comment.id}')">Name: ${comment.name}</h3>
       <h5></h5>
       `
       commentsContainer.appendChild(div)

       
   }
}


const displayCommentsDetail = commentId => {
   const url = `https://jsonplaceholder.typicode.com/comments/${commentId }`
   fetch(url)
   .then(res => res.json())
   .then(data => displaySingleComments(data))
}


const displaySingleComments = details => {
    //    console.log(details)
    
        const container = document.getElementById('details');
        container.textContent = ''
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>Name: ${details.name}</h2>
            <h3>Email:${details.email}</h3>
            <h5>Id: 00${details.id}</h5>
            <h5>Comment: ${details.body}</h5>
        `
       container.appendChild(div)
    }

//  console.log('connected')