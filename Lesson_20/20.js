$(document).ready(function(){
    $('.todo-item').on('click', function(){
        let taskText = $(this).text();
        $('#modal-task-text').text(taskText);
        $('#taskModal').modal('show');
    });
});