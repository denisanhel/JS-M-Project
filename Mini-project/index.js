fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        let usersDiv = document.getElementById('Users');
        users.forEach(user => {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `<div class="innerDiv"><p>ID:${user.id}, Name:${user.name}</p></div>`;
            let detailsButton = document.createElement('button');
            detailsButton.innerText = 'Details';
            detailsButton.addEventListener('click', () => {
                window.location.href = `user-details.html?id=${user.id}`;
            });
            userDiv.appendChild(detailsButton);
            usersDiv.appendChild(userDiv);
        });
    });

