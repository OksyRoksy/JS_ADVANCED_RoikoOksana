/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/
var CommentsFeed = document.createElement("div");
    document.body.appendChild(CommentsFeed);

    function Comment(name, text, avatarUrl){
        this.name = name;
        this.text = text;
        if(avatarUrl) {
            this.avatarUrl = avatarUrl;
        }
        this.likes = 0;
    }
    Comment.prototype = {
        avatarUrl: "img1.jpg",
        like: function(){
            this.likes++;
        }
    }

    var myComment1 = new Comment("Jacky", "I'm cool!");
    var myComment2 = new Comment("Oggy", "Hey! How are you?", "img2.jpg");
    var myComment3 = new Comment("Di-Di", "Omg...", "img3.jpg");
    var myComment4 = new Comment("Marky", "I'm smart cat", "img4.jpg");
    var CommentsArray = [myComment1, myComment2, myComment3, myComment4];
    
    function Avatar(comments){
        var create = function(){
            comments.forEach(function(comment){
                var divProt = document.createElement("div");

                var title = document.createElement("h3");
                title.innerHTML = comment.name;
                divProt.appendChild(title);

                var descr = document.createElement("p");
                descr.innerHTML = comment.text;
                divProt.appendChild(descr);

                var img = document.createElement("img");
                img.src = comment.avatarUrl;
                divProt.appendChild(img);

                var likes = document.createElement("div");
                likes.innerHTML = 0;
                divProt.appendChild(likes);

                CommentsFeed.appendChild(divProt);

                divProt.addEventListener("click", function(){
                    comment.like();
                    likes.innerHTML = comment.likes;
                });
            });
        }
        create();
    }
    var avatars = new Avatar(CommentsArray);