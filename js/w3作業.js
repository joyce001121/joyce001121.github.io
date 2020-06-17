
$('.ham-icon').click(function(e) {
    e.preventDefault();
    $('.dropdown').toggleClass('active')
  })

// QA: arrow轉180度/collapse顯示
$(".qa-list h4").click(function() {
   $(this).parent().toggleClass("show");
});




  

  