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

/* function snesCourses(){
    document.getElementById('snesCourses').style.display = 'grid';
    document.getElementById('snesCourses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('snesCourses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function n64Courses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'grid';
    document.getElementById('n64Courses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('n64Courses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function gbaCourses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'grid';
    document.getElementById('gbaCourses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('gbaCourses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function gcnCourses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'grid';
    document.getElementById('gcnCourses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('gcnCourses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function dsCourses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'grid';
    document.getElementById('dsCourses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('dsCourses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function wiiCourses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'grid';
    document.getElementById('wiiCourses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('wiiCourses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function mk7Courses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'grid';
    document.getElementById('mk7Courses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('mk7Courses').style.gridTemplateRows = 'repeat(5, 1fr)';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function tourCourses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'grid';
    document.getElementById('tourCourses').style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    document.getElementById('tourCourses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'none';
}

function mk8Courses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'grid';
    document.getElementById('mk8Courses').style.gridTemplateColumns = 'repeat(5, 15%)'; 
    document.getElementById('mk8Courses').style.gridautoRows = 'repeat(5, 18%)';
    document.getElementById('mk8Courses').style.gap = '15px';
    document.getElementById('boosterCourses').style.display = 'none';
}

function boosterCourses(){
    document.getElementById('snesCourses').style.display = 'none';
    document.getElementById('n64Courses').style.display = 'none';
    document.getElementById('gbaCourses').style.display = 'none';
    document.getElementById('gcnCourses').style.display = 'none';
    document.getElementById('dsCourses').style.display = 'none';
    document.getElementById('wiiCourses').style.display = 'none';
    document.getElementById('mk7Courses').style.display = 'none';
    document.getElementById('tourCourses').style.display = 'none';
    document.getElementById('mk8Courses').style.display = 'none';
    document.getElementById('boosterCourses').style.display = 'grid';
    document.getElementById('boosterCourses').style.gridTemplateColumns = 'repeat(5, 1fr)';
    document.getElementById('boosterCourses').style.gridTemplateRows = 'repeat(5, 1fr)'; 
} */