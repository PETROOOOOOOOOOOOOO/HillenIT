$(document).ready(() => {
    const $taskModal = $('#taskModal');
    const $modalText = $('#modal-task-text');

    $('.todo-item').on('click', (event) => {
        const taskText = $(event.target).text();
        $modalText.text(taskText);
        $taskModal.modal('show');
    });
});