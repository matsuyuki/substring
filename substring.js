<script>
  $(document).ready(function(){
    var w = $('#wrapper').width();
    if ( w < 600){
      $('.text-limit').each(function() {
        var texts = $(this).text();
        if(texts.length > 18 ){
          var shortname = texts.substring(0, 18) + " ...";
          $(this).text(shortname);
        }
      });
    }
  });
</script>
