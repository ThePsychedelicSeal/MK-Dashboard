$('.course-thumbnail').hide(); 
$('#snesConsole').click(function (){
    $('.course-thumbnail').not(':eq(.snesCourses)').hide();
    $('.snesCourses').show();
})
$('#n64Console').click(function (){
    $('.course-thumbnail').not(':eq(.n64Courses)').hide();
    $('.n64Courses').show();
})
$('#gbaConsole').click(function (){
    $('.course-thumbnail').not(':eq(.gbaCourses)').hide();
    $('.gbaCourses').show();
})
$('#gcnConsole').click(function (){
    $('.course-thumbnail').not(':eq(.gcnCourses)').hide();
    $('.gcnCourses').show();
})
$('#dsConsole').click(function (){
    $('.course-thumbnail').not(':eq(.dsCourses)').hide();
    $('.dsCourses').show();
})
$('#wiiConsole').click(function (){
    $('.course-thumbnail').not(':eq(.wiiCourses)').hide();
    $('.wiiCourses').show();
})
$('#mk7Console').click(function (){
    $('.course-thumbnail').not(':eq(.mk7Courses)').hide();
    $('.mk7Courses').show();
})
$('#tourConsole').click(function (){
    $('.course-thumbnail').not(':eq(.tourCourses)').hide();
    $('.tourCourses').show();
})
$('#mk8Console').click(function (){
    $('.course-thumbnail').not(':eq(.mk8Courses)').hide();
    $('.mk8Courses').show();
})
$('#boosterConsole').click(function (){
    $('.course-thumbnail').not(':eq(.boosterCourses)').hide();
    $('.boosterCourses').show();
})