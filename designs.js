// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (evemt) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    //console.log("Height: " + height + " and Width: " + width);
})


function makeGrid(x, y) {
    $('tr').remove();
    
// Your code goes here!
    for (var i = 1; i <= x; i = i + 1) {
        $('#pixelCanvas').append('<tr id = table' + i + '></tr>');
        for (var j = 1; j <= y; j = j + 1) {
            $('#table' + i).append('<td></td>');
        }
    }
    
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        
        if($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color: ' + color);
        }
    })
}
