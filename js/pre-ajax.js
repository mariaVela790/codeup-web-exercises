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
    function createListHtml(peopleObjects){
        var outputStr = '<ul>';
        console.log('button works');

        peopleObjects.forEach(function (person) {
            outputStr += '<li id="hello">' + personObjects.name;
            outputStr += '</li>';


        });
        outputStr += '</ul>';
        console.log(outputStr);
        return outputStr;
    }


    $('#add-names-btn').click(function () {
       $('#names-list').html(createListHtml(people));


       $('li').each(function (index) {
          $(this).css('color', people[index].favColor);
       });

    });
















});