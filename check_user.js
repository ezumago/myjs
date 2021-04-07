function checku(str) {
      var url = '/lastseen?username=' + str;
      $.getJSON(url,
          function(data) {
            var user = $.parseJSON(JSON.stringify(data));

            var items = [];
            items.push( "<div id='"+ user[0].name +"'>"+ user[0].name + " : " + user[0].d + " UTC</div>" );

            var liname = "#" + user[0].name

            if ($( liname ).length) {
              $( liname ).replaceWith(items.join( "" ));

            } else {
              $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
              }).appendTo( "body" );

            }
            $( liname ).click(function() {
                //console.log($(liname))
                checku(user[0].name)
            });
      });
      return false;
}