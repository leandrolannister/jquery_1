$( () => {
   timer();  
   countLetterAndWordsOnTexarea();
   countNumberWordsOfPhrase();
   
   $('#btn_novo').click( () => { resetGame() });
});

function resetGame(){
  $('#timer').text(10);   
   
  $('.textarea').attr('disabled', false).val("");

  $('#count_letters').text(0);
  $('#count_words').text(0);

  timer();
}

function timer(){
  //one->Executa uma unica vez
  $('.textarea').one("focus", () => {
    let timer = $('#timer').text();
  
    let cronos = setInterval( () => {     
      $('#timer').text(timer--);
      
      if(timer < 0){ 
        $('.textarea').attr('disabled', true);
        clearInterval(cronos); 
      }
  
    },1000);
  });
}

function countLetterAndWordsOnTexarea(){
  $('.textarea').on("input",() => {
  
    $('#count_letters').text( () => {
      return $('.textarea').val().length;
    });
  
    $('#count_words').text( () => {
      return $('.textarea').val().split(/\S+/).length;
    });   
  });
}

function countNumberWordsOfPhrase(){
  $('#phraseSize').text( () => {
    return $('.phrase').text().split(" ").length;    
  });
}