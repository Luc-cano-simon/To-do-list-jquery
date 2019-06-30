// window.localStorage.clear()

//local storage

$('#list-items').html(localStorage.getItem('listItems'));


//Ajoute une tache 
$("input[type='text']").keypress(function(event) 
{
  if (event.which === 13) 
  {
    var NewTask = $(this).val();
    $(this).val('');
    //create a new li and add to ul
    $('ul').append("<li class='cursor-pointer'><span><i class='fa fa-trash'></i></span>" + NewTask + "</li>");
    localStorage.setItem('listItems', $('#list-items').html());
    $('.InputValue').val("");

  }
  event.stopPropagation();
});

// permet de rayé une tache coché par l'utilisateur 
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//click on X to delete todo
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(1000, function() {
    $(this).remove();
    localStorage.setItem('listItems', $('#list-items').html());

  });
  event.stopPropagation();
});



$('.fa-plus').on('click', function() {
  $("input[type='text']").fadeToggle();
});
