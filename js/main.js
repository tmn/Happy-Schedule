var course_clicked = 0;

$(document).ready(function() {
	


	// ========================== [ Animation when click list item ]
	$('#subj_list li').click(function() {

		if (!course_clicked) {

			course_clicked = $(this).attr('id');

			$('#left_content').addClass('hide');
			$(this).addClass('wider');

			if ( $('#more_info').hasClass('show') ) {
				$('#more_info').removeClass('expanded');
			}
			else {
				$('#more_info').addClass('show');
			}

			console.log($(this).attr('id'))
		}
		else if ( course_clicked !== $(this).attr('id') )  {
			$('#more_info').addClass('expanded');
			
			setTimeout(function() {
				$('#more_info div').html('Laster<br><img src="images/loading.gif" alt="loading">');
				$('#more_info').removeClass('expanded');
			}, 800);

			$(this).addClass('wider');
			$('#' + course_clicked).removeClass('wider');
			course_clicked = $(this).attr('id');
		}
	});
	// ========================== [ / Animation when click list item ]

});


// NEED FIX method for resetting all changes in interface
function reset_all() {
	alert("reset needz fix")
	$('#more_info').addClass('expanded');

	$('#' + course_clicked).removeClass('wider');

	$('#left_content').removeClass('hide');
	course_clicked = 0;
}