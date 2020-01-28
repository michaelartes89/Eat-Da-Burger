// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    //click create button to create new burger
    $(".create-burger").on("click", function(event) {
        event.preventDefault();
        console.log("create button clicked");
        
        const newBurger = { burgerName: $("#burgerName").val().trim(), burgerToppings: $("#burgerToppings").val().trim() };

        //send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger")
            //reload the page to get updated list
            location.reload();
        }
        );


    });
    //click the eat now button
    $(".eat-burger").on("click", function (event) {
        let id = $(this).data("id");
        let newBurger = $(this).data("burger");

        let newBurgerState = {
            eaten: newBurger
        };

        //send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState,

        }).then(function () {
            console.log("changed to", newBurger);
            location.reload()
        });
    });
    //delete with on click 
    $(".delete-burger").on("click", function (event) {
        let id = $(this).data("id");

        $.ajax("api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        }
        );

    });
});

