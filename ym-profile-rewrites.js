/* REWRITES FONTEVA PROFILE LINKS TO YM PROFILE LINKS */
$(document).ready(function(){
	$('a[href*="CPBase__profile"]:contains(Update Contact Information)').attr('href','https://members.simnet.org/members/edit.asp');
	$('a[href*="renew-redirect"], a[href*="CPBase__profile"]').attr('href','https://members.simnet.org/members/manage_profile.asp');
});