    const ButtonTech = document.querySelector('.js-tech');
    const ButtonGaming = document.querySelector('.js-gaming');
    const ButtonBlog = document.querySelector('.js-blog');

    function Button1(){
        ButtonTech.classList.add('buttonclicked');
        ButtonGaming.classList.remove('buttonclicked');
        ButtonBlog.classList.remove('buttonclicked');
    }
    function Button2(){
        ButtonGaming.classList.add('buttonclicked');
        ButtonTech.classList.remove('buttonclicked');
        ButtonBlog.classList.remove('buttonclicked');
      }
    function Button3(){
        ButtonBlog.classList.add('buttonclicked');
        ButtonTech.classList.remove('buttonclicked');
        ButtonGaming.classList.remove('buttonclicked');
    }