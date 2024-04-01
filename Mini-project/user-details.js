let url = new URL(location.href);
let userId = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        let userDetailsDiv = document.getElementById('userDetails');
        userDetailsDiv.innerHTML = `
<div class="forDetails">
                    <p><b>Адрес:></b> {${user.address.street}</p>

${user.address.city}</p>
${user.address.suite}</p>
${user.address.zipcode}</p>}
                    <p><b>Компанія:</b>{${user.company.name}</p>
${user.company.bs}</p>}
                    <p><b>Пошта:</b> ${user.email}</p>
                    <p><b>Айді:</b> ${user.id}</p>
                    <p><b>Ім'я:</b> ${user.name}</p>
                    <p><b>Номер телефону:</b> ${user.phone}</p>
                    <p><b>Нікнейм:</b> ${user.username}</p><br>
                    <p><b>Сайт:</b> ${user.website}</p>
     </div>               
                `;

        function getUserPosts(userId) {
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(res => res.json());
        }
        function displayUserPosts(userId) {
            getUserPosts(userId)
                .then(posts => {
         let contentDiv = document.getElementById('content');
                    posts.forEach(post => {
                        let postTitle = document.createElement('footer');
                        postTitle.textContent = post.title;
                        let postDetailLink = document.createElement('a');
                        postDetailLink.textContent = 'View Details';
                        postDetailLink.href = `post-details.html?postId=${post.id}`;  contentDiv.appendChild(postTitle);
                        contentDiv.appendChild(postDetailLink);
                        contentDiv.appendChild(document.createElement('br'));
                    });
                })
        }
        const postOfCurrentUserBtn = document.createElement('button');
        postOfCurrentUserBtn.textContent = 'Post of current user';
        postOfCurrentUserBtn.addEventListener('click', () => {
            displayUserPosts(1);
        });
        document.body.appendChild(postOfCurrentUserBtn);})

