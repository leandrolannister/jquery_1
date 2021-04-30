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