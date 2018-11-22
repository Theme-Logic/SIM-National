function setHeader(headerTheme) {
    $("body").addClass("header-" + headerTheme);
    switch (headerTheme) {
        case 1:
            $("#NAV").insertAfter(".headrow");
            $(".HLWelcomeHeader").closest(".inline").addClass("search-sign-up-wrapper");
            $("a.level1.MPAuxNav.static[href*='contact']").insertBefore("#MPSearchBlock");
            $("#searchColumn").removeClass("pull-right").insertAfter(".HLWelcomeHeader");
            break;
        case 2:
            $("#NAV").insertAfter(".headrow");
            $("a.level1.MPAuxNav.static[href*='contact']").insertBefore("#MPSearchBlock");
            $("#searchColumn").removeClass("pull-right").insertAfter(".HLWelcomeHeader");
            break;
        case 3:
            $("<h1 class='head-heading'>Providing high-quality professional<br> development for career advancement</h1>").insertBefore("#NAV");
            $("#NAV").appendTo("#MPOuterHeader");
            $("#searchColumn").removeClass("pull-right").insertBefore("#HEADER");
            $("#searchColumn .input-group-btn").insertBefore("#SearchControl_SearchTerm")
            break;
    }
}

function setNews(newsTheme) {
    $("body").addClass("news-" + newsTheme);
    switch (newsTheme) {
        case 1:
            $(".chapter-news ul li").each(function () {
                var thus = $(this);
                var link = thus.find(".content-row a:first");
                $('<img />', { src: link.attr("href") }).insertBefore(thus.find('.title-row'));
                link.remove();
            })
            break;
        case 2:
            $(".chapter-news ul li").each(function () {
                var thus = $(this);
                var link = thus.find(".content-row a:first");
                /*var str = $(".content-row .margin-bottom-small:first").html().replace(/\="" /g, '/')
                str = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
                link = str.substring(0, str.lastIndexOf('=""')).replace(" ", "//");*/
                var postImage = $('<img />', { src: link.attr("href") });
                var imgWrapper = $('<div />', { class: 'image-wrap' });
                postImage.appendTo(imgWrapper);
                imgWrapper.insertBefore(thus.find('.title-row'));
                link.remove();
            })
            break;
    }
}

function setEvents(eventsTheme) {
    var newsEventsWrapper = (eventsTheme > 1 || newsTheme > 1) ? "-2" : "";
    $("body").addClass("events-" + eventsTheme);
    switch (eventsTheme) {
        case 1:

            $(".chapter-events ul li").each(function () {
                var thus = $(this);
                var link = thus.find(".col-md-3 img");
                var date = thus.find(".col-md-2.no-pad");
                var postImage = $('<img />', { src: link.attr("src") });
                var imgWrapper = $('<div />', { class: 'image-wrap' });
                var text = $.trim(thus.find(".title-row .col-md-9").clone().children().remove().end().text());
                thus.find(".col-md-9 p.break-word").text(text.substring(0, 200) + "...");
                var child = thus.find(".title-row .col-md-9").children("p, h3, div");
                date.insertBefore(thus.find(".title-row .col-md-9"));
                thus.find(".title-row .col-md-9").html('').html(child);
                postImage.appendTo(imgWrapper);
                imgWrapper.insertBefore(thus.find('.title-row'));
                link.closest(".col-md-3").remove();
            });

            $(".chapter-events ul li .timeAgoFormat").each(function () {
                var thus = $(this);
                var sanitizedText = thus.text().split(",").pop();
                var htmlizedText = sanitizedText.replace(/PM/g, '<span class="smallcaps">PM</span>')
                .replace(/AM/g, '<span class="smallcaps">AM</span>')
                .replace("(ET)", '<span class="smallcaps">(ET)</span>');
                thus.insertAfter(thus.closest("li").find(".calendar-month")).html(htmlizedText);
            });
            break;
        case 2:
            $(".chapter-events ul li").each(function () {
                var thus = $(this);
                thus.find(".col-md-3").removeClass("col-md-3").addClass("col-md-5");
                thus.find(".col-md-9").removeClass("col-md-9").addClass("col-md-7");
                thus.find(".col-md-5").insertBefore(thus.find(".col-md-7"));
                var text = $.trim(thus.find(".title-row .col-md-7").clone().children().remove().end().text());
                thus.find(".col-md-7 p.break-word").text(text.substring(0, 200) + "...");
                var child = thus.find(".title-row .col-md-7").children("p, h3, div");
                thus.find(".title-row .col-md-7").html('').html(child);
                var link = thus.find(".col-md-7 h3 a").attr("href");
                //$('<a />', { href: link, class: "sub-link" }).text("View details").insertAfter(thus.find(".timeAgoFormat"));
            })
            break;
    }


    //$(".section6, .section7").wrapAll("<div class='row-wide'></div>");
    //$(".chapter-events").insertBefore(".chapter-news");
}

function setDiscussions(discussionsTheme) {
    var discussionsFilesWrapper = (discussionsTheme > 1 || filesTheme > 1) ? "-2" : "";
    $("body").addClass("discussions-" + discussionsTheme);
    $(".recent-shared-files").closest(".row-wide").removeClass("row-wide").addClass("row-full discussions-files-wrapper" + discussionsFilesWrapper);
}

function setSponsors(sponsorsTheme) {
    $("body").addClass("sponsors-" + sponsorsTheme);
    if ($('.sponsors')) {
        switch (sponsorsTheme) {
            case 1:
                $('.sponsors .HtmlContent').addClass("container").owlCarousel({
                    loop: true,
                    margin: 10,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                break;
            case 2:
                $(".sponsors").addClass("row-full").removeClass("container").insertBefore("#MPOuterFooter");
                $('.sponsors .HtmlContent').addClass("container")
                break;
        }
    }

}

function setLogos(logosTheme) {
    $("body").addClass("logos-" + logosTheme);
    if ($('.logos')) {
        switch (logosTheme) {
            case 1:
                $('.logos .HtmlContent').addClass("container").owlCarousel({
                    loop: true,
                    margin: 10,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                break;
            case 2:
                $(".logos").addClass("row-full").removeClass("container").insertBefore("#MPOuterFooter");
                $('.logos .HtmlContent').addClass("container")
                break;
        }
    }

}

function setFiles(filesTheme) {
    $("body").addClass("files-" + filesTheme);
} $(".chapter-events li .title-row .col-md-9").clone().children().remove().end().text()

function setFooter(footerTheme) {
    $("body").addClass("footer-" + footerTheme);
}

$(document).ready(function () {
    //$("#MPAuxNav").closest(".pull-right").removeClass("pull-right").addClass("text-center").insertAfter("#MPCopyright");
    $("#MPOuterFooter").addClass("row-full").insertAfter("#MPOuterMost");
    $("#MPOuterHeader").addClass("row-full").insertBefore("#MPOuterMost");
    if ($("body").hasClass("home")) {
        $(".section1").closest(".row-wide").addClass("row-full").insertBefore("#MPContentArea");
    }
    $("#MPOuterHeader .col-md-12:first").wrap("<div class='row row-wide clearfix headrow'></div>");
    $("#NAV").insertAfter("#Logo");
    $("a.level1.MPAuxNav.static[href*='sim-national']").insertBefore("#MPSearchBlock");
    setNews(newsTheme);
    setEvents(eventsTheme);
    setDiscussions(discussionsTheme);
    setFiles(filesTheme);
    setFooter(footerTheme);
    setSponsors(sponsorsTheme);
    setHeader(headerTheme);
    setLogos(logosTheme);
    $("#MPOuterHeader").insertBefore("#MasterPageForm .aspNetHidden:first");
    // HIDE REFRESH CONTACT INFO ON OTHER PROFILES 
    if (!$('[id*="upnlProfileImage"] .btn-group').length) { $('.tl-update-contact').hide(); }
    // SET GREY BACKGROUND SECTIONS FOR HOMEPAGE
    $('.home .bg-grey').each(function () {
        //console.log($(this).closest('#MainCopy_ContentWrapper .row-wide').length);
        if ($(this).closest('#MainCopy_ContentWrapper .row-full').length) {
            $(this).wrap('<div class="tl-bg-grey">');
        }
        if ($(this).closest('#MainCopy_ContentWrapper .row-wide').length) {
            $(this).closest('#MainCopy_ContentWrapper .row-wide').addClass('tl-bg-grey');
        }
    })
})

$(window).on('load', function () {
    $('#status').fadeOut();
    $('.simnet-preloader').fadeOut('slow');
    // EVENTS OPEN IN NEW TAB
    $('.chapter-events h3 a').attr('target', '_blank');
    $('.HLEventList h3 a').attr('target', '_blank');

});

//THEME LOGIC CUSTOM BLOG WIDGET FOR CHAPTER NEWS SECTION
//blognews images
function initBlogImg() {
    var domain = document.domain,
            domainArray = ['chapter.simnet.org'
                            , 'national.simnet.org'
                            , 'program.simnet.org'
                            , 'www.simnet.org'
                            , 'simnet.org',
            'trends.simnet.org', 'mit.simnet.org', 'asc.simnet.org'];
    if ($.inArray(domain, domainArray) != -1) {
        $('.tl-blog li h3 a').each(function () {
            var tlBlogLink = "https://" + $(this).attr("href").replace(/^[^.]*/, 'national') + ' .blogs-block img:first';
            $(this).closest('.title-row').before('<div class="row tlBlogImg" />');
            $(this).closest('.title-row').prev().load(tlBlogLink, function () {
                $('.tlBlogImg img').removeAttr('style data-mce-hlselector data-mce-hlimagekey data-skipsetcontent width height').addClass('tl-blog-img');
            });
        });
        $('.tl-blog li').each(function () {
            $(this).addClass('col-md-4');
        });
    }
    else {
        alert('To use the Logic Blogs plugin, please register this domain "' + domain + '" at www.theme-logic.com. This will allow us to notify you of any changes to the Logic Blogs service.');
    }
}
$(document).ready(function () {
    initBlogImg();
});

 