const ButtonTech = document.querySelector('.js-tech');
    const ButtonGaming = document.querySelector('.js-gaming');
    const ButtonBlog = document.querySelector('.js-blog');
    function Button1(){
      if(ButtonTech.classList.contains('buttonclicked')){
        ButtonTech.classList.remove('buttonclicked');
      }
      else{
        ButtonTech.classList.add('buttonclicked');
      }
    }
    function Button2(){
      if(ButtonGaming.classList.contains('buttonclicked')){
        ButtonGaming.classList.remove('buttonclicked');
      }
      else{
        ButtonGaming.classList.add('buttonclicked');
      }
    }
    function Button3(){
      if(ButtonBlog.classList.contains('buttonclicked')){
        ButtonBlog.classList.remove('buttonclicked');
      }
      else{
        ButtonBlog.classList.add('buttonclicked');
      }
    }