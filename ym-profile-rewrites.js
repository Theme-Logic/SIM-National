/* REWRITES FONTEVA PROFILE LINKS TO YM PROFILE LINKS */
$(document).ready(fuction(){
	$('a[href*="a0df4000000EvkkAAC"]:contains(Update Contact Information)').attr('href','https://members.simnet.org/members/edit.asp');
	$('a[href*="renew-redirect"], a[href*="a0df4000000EvkkAAC"]').attr('href','https://members.simnet.org/members/manage_profile.asp');
});