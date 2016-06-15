$(function(){
  $('#fullpage').fullpage({
    scrollBar:true,
    navigation:true,
    navigationTooltips:['首页','视觉','交互','皮肤','功能','待办邮件','联系人邮件','科技','连接易信','马上体验'],
    scrollingSpeed:1000,
    onLeave:function(index,nextIndex,direction){
      if(direction === 'down'){
      $('.section:nth-child('+index+')').addClass('totop');
    }else if(direction === 'up'){
      $('.section:nth-child('+nextIndex+')').removeClass('totop');
      // $('.section:nth-child('+index+')').addClass('up2');
      // $('.section:nth-child('+nextIndex+')').removeClass('up2');
    }else{
      return false;
    }
    }
  })

})
