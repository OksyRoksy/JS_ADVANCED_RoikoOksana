/*
    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные по ссылке: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2
*/

var postForm = document.getElementById('postForm');
var postContainer = document.getElementById('postContainer');
var loadPostsBtn = postForm.querySelector('._loadPostsBtn');
var posts = [];

class Post {
    constructor(isActive, title, about, likes, _id, created_at) {
        this._id = _id ? _id : new Date();
        this.isActive = isActive;
        this.title = title;
        this.about = about;
        this.likes = likes ? likes : 0;
        this.created_at = created_at ? created_at : new Date();

        this.addLike = this.addLike.bind(this);
        this.render();
    }
    
    addLike() {
        this.likes++;
            
        const like = document.querySelector(`[data-id="${this._id}"] .count`);
        like.innerHTML = this.likes;

        posts.forEach( post => {
            if (post._id === this._id) {
                post.likes = this.likes;
            }
        });

        localStorage.setItem('posts', JSON.stringify(posts));
    };

    render() {
        let block = document.createElement('div');
        block.dataset.id = this._id;
        block.classList.add('post');

        if (this.isActive) {
            block.classList.add('active');
        }

        let context = `            
                <i>Date: ${this.created_at}</i>
                <h3>Title: ${this.title}</h3>
                <p>${this.about}</p>
                <span class="like">
                    <img src="like.png" alt="like">
                </span>                
                <i>likes: <span class="count">${this.likes}</span></i>            
            `;
        block.innerHTML = context;

        let likeBtn = block.querySelector('.like');
        likeBtn.addEventListener('click', this.addLike);

        postContainer.prepend(block);
    };
}

async function fetchPost() {
    let respone = await fetch('http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2');
    let json = await respone.json();

    let currentPosts = GetSavedPosts();

    if (currentPosts !== null) {
        var uniquePosts = json.filter(function(obj) {
            return !currentPosts.some(function(obj2) {
                return obj._id == obj2._id;
            });
        });
    
        uniquePosts.forEach(post => {
            var post = new Post(post.isActive, post.title, post.about, 0, post._id, post.created_at);   
            posts.push(post); 
        });
    } else {
        json.forEach(post => {
            var post = new Post(post.isActive, post.title, post.about, 0, post._id, post.created_at);   
            posts.push(post);
        })
    }

    localStorage.setItem('posts', JSON.stringify(posts));
}

const GetSavedPosts = () => {
    let data = localStorage.getItem('posts');

    if (data !== null) {
        posts = JSON.parse(data);
        return posts;
    }

    return null;
}

postForm.addEventListener('submit', e => {
    e.preventDefault();
    var post = new Post(true, postForm.title.value, postForm.about.value);
    posts.push(post);

    localStorage.setItem('posts', JSON.stringify(posts));

    postForm.reset();
});

loadPostsBtn.addEventListener('click', fetchPost);

var postsLS = GetSavedPosts();

if (postsLS !== null) {
    postsLS.forEach(function (post) {
        new Post(post.isActive, post.title, post.about, post.likes, post._id, post.created_at);            
    })   
}

