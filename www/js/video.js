$(document).on('pagebeforeshow', '#contact', function(){
    var output ='<iframe width="560" height="315" src="http://www.youtube.com/embed/_js1gWuxB_E" frameborder="0" allowfullscreen></iframe>';
    $('#video-container').append(output);
});

$(document).on('pagebeforehide', '#contact', function(){
    $('#video-container').empty();
});
