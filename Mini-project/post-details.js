let urlParams = new URLSearchParams(window.location.search);
let postId = urlParams.get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        let postDetailsDiv = document.getElementById('post-details');
        postDetailsDiv.innerHTML = `
                    <h2>Post Details</h2>
                    <p>ID: ${post.id}</p>
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.body}</p>
                    <hr>
                `;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                postDetailsDiv.innerHTML += '<h3>Comments</h3>';
                comments.forEach(comment => {
                    postDetailsDiv.innerHTML += `
                               <div class="father"> <div class="coment"><h4>${comment.name}</h4>
                                <p>${comment.body}</p></div></div>
                            `;
                });
            })
    })
