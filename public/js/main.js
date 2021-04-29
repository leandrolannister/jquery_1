$( () => {
   paintBorder();
   timer();  
   countLetterAndWordsOnTexarea();
   countNumberWordsOfPhrase();
   
   $('#btn_novo').click( () => { resetGame() });
});

function paintBorder(){
  let phrase = $('.phrase').text();
  $('.textarea').on('input', () => {
    let inputText = $('.textarea').val();
    let partOfPhrase = phrase.substr(0,inputText.length);   
    
    if(inputText == partOfPhrase){
      $('.textarea').addClass('borda-verde'); 
      $('.textarea').removeClass('borda-vermelha');
    }else{
      $('.textarea').addClass('borda-vermelha');
      $('.textarea').removeClass('borda-verde');  
    }
  });
}

function resetGame(){
  $('#timer').text(10);   
   
  $('.textarea').attr('disabled', false)
  .toggleClass('desativar-textarea')
  .removeClass('borda-verde')
  .removeClass('borda-vermelha')
  .val("");   
 
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
       clearInterval(cronos); 
       endOfTheGame();       

      }
  
    },1000);
  });
}

function endOfTheGame(){   
  $('.textarea').attr('disabled', true)
  .toggleClass('desativar-textarea');
  addPlacar();  
}

function addPlacar(){
  let tbody = $('.placar').find("tbody");
  let numWords = $('#count_words').text();
  
  let row = addRow('Leandro', numWords);
  
  row.find('.btn-remover').click(function(){
    $(this).parent().parent().remove(); 
  });

  tbody.prepend(row);
}

 

function addRow(userName, numWords){
  let tr = $("<tr>");
  let userColumn = $("<td>").text(userName);
  let wordsColumn = $("<td>").text(numWords);
  
  let removerColumn = $('<td>');
  let link = $("<a>").addClass('btn-remover').attr("href", "#");
  let icon = $("<i>").addClass('small').addClass('material-icons')
  .text("delete");

  link.append(icon);
  removerColumn.append(link);

  tr.append(userColumn);
  tr.append(wordsColumn);
  tr.append(removerColumn);

  return tr;  
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