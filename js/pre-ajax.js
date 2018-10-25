"use strict";
$(document).ready(function () {
    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    /**
     * - add functionality to the button so that when it is clicked, an
     * unordered list of names from the people array (included below) is
     * added to the inner HTML of the div#names-list. For an extra bonus,
     * make the font color of each list item map to that person's favColor value.
     */


    $('#add-names-btn').click(function () {
        var outputStr = '<ul>';
        console.log('button works');

       people.forEach(function (person) {
          outputStr += '<li id="hello">' + person.name;
          outputStr += '</li>';


       });
       outputStr += '</ul>';
      console.log(outputStr);
       $('#names-list').html(outputStr);

       // $('li').each(function () {
       //    // $('li').css('color', $)
       //    //  console.log($('li'));
       //     // $('li')
       // });
       // var array

    });
















});