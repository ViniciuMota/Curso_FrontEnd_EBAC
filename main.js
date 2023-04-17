$(document).ready(function(){
    $('ul').on('click','li',function(){
        $(this).toggleClass('riscado');
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const notaTarefa = $('#nome-tarefa').val();
        $(`<li>${notaTarefa}</li>`).appendTo('ul');
        $('#nome-tarefa').val('');
    })
})