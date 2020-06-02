$(document).ready(function() {
    $(".addBurgers").on("click", function(event) {
      var id = $(this).data("id");
      var addBurgers = $(this).data("addburgers");
  
      var burgersDevoured = {
        devoured: burgersDevoured
      };
  
      // Send the PUT request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "PUT",
    //     data: burgersDevoured
    //   }).then(
    //     function() {
    //       console.log("devoured", burgersDevoured);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    });
  
    $("#add-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurgers = {
        name: $("#ca").val().trim(),
        eaten: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurgers
      }).then(
        function() {
          console.log("created new burgers");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".box-2").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burgers", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  