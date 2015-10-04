$('#something').animate({'margin-top': '300px', 'margin-left': '400px'},1000);
//animate({'property':'value'},speed,callback);

$('h2').parent(); //this would select the div
$('h2').children('a'); //selects all children of the h2 that are anchor elements
$('li'); //selects all list items
$('li').children(); //selects list children
$('li').eq(2); //selects list item 3
//jquery principle of chainability...running functions after another like below
$('ul').children('li').eq(3).animate({...});
/*
$('ul'); selects all ul on page
children('li'); all children of lists
eq(3); select 2nd list from each list
animate({...}); animates item
*/
