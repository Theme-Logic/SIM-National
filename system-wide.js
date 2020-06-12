/* EDIT EVENT MANAGER LINKS SO CHAPTER ADMINS DON'T GET CONFUSED */
$(document).ready(function(){
	$('a[href*="/communities/community-home/manage-events"]').attr('href','https://members.simnet.org/members/my_groups.asp');
	$('a[href*="community-payment-provider"]').remove();
});