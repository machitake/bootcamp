$('.burger-btn').on('click',function(){ //.burger-btnをクリックすると

    $('.burger-btn').toggleClass('close'); //.burger-btnにcloseというclassを追加/削除する
    $('.nav-wrapper').fadeToggle(500); //.nav-wrapperがフェードイン/フェードアウトする

  });