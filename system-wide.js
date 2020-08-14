$(document).ready(function(){
	// EDIT EVENT MANAGER LINKS SO CHAPTER ADMINS DON'T GET CONFUSED
	$('a[href*="/communities/community-home/manage-events"]').attr('href','https://members.simnet.org/members/my_groups.asp');
	$('a[href*="community-payment-provider"]').remove();
	// FIX FOOTER INSERTED IN WRONG PLACE BY MOVING IT BACK TO THE FOOTER
	$('.section1 .footer-content').appendTo('#FOOTER');
});