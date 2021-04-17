$('#phraseSize').text( () => {
  return $('.phrase').text().split(" ").length;    
});

$('.textarea').on("input",() => {
  
  $('#count_letters').text( () => {
    return $('.textarea').val().length;
  });

  $('#count_words').text( () => {
    return $('.textarea').val().split(/\S+/).length;
  });
});

