window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector("#navbar1").classList.add('activefixed');

    } else {
        document.querySelector("#navbar1").classList.remove('activefixed');

    }
}


$(document).ready(function(){
	

// vedio close when modal will be closed
$('#vedioModal').on('hide.bs.modal', function(e) {    
  var $if = $(e.delegateTarget).find('iframe');
  var src = $if.attr("src");
  $if.attr("src", '/empty.html');
  $if.attr("src", src);
});

// stepform jquery start from here


});

