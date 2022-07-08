// global variables for user input and for button
const $userForm = $(".form-select");
const $userNum = $(".number-select")
let userInput = $userForm.val();
let userNum = $userNum.val();
const $excuseBttn = $(".btn")
const $result = $('.result')

//dropdown listening to change. .change
// .val to get value

$userForm.change((event) => {
    event.preventDefault();
     userInput = $userForm.val();
        console.log(userInput)
      numChange();
      $result.empty()
 });

 // random generated excuse
 $excuseBttn.on('click', (event) => {
    event.preventDefault()
        if(userInput === 'random') {
            $.get(`https://excuser.herokuapp.com/v1/excuse/${userNum}`,(data) => {
            console.log(data, "we click excuse button got excuse")
            for (i = 0; i < data.length; i++) {
                result = `${data[i].excuse} <br>`;
            $result.append(result)
            console.log(result) 
        }});
        }else { //random excuse with a specific category 
            $.get(`https://excuser.herokuapp.com/v1/excuse/${userInput}/${userNum}`,(data) => {
            console.log(data, "we click excuse button got excuse")
                for (i = 0; i < data.length; i++) {
                result = `${data[i].excuse} <br>`;
                $result.append(result)
            console.log(result) 
        }
        });
    }
});

// function to control the num change box
        function numChange() {
            $userNum.change((event) => {
            event.preventDefault();
            userNum = $userNum.val();
            console.log(userNum)
            });
        };
// clear button functionality  
    $('.clr-btn').click(() => {
    $result.empty();
    console.log('empty')
    });

    //   Get a random excuse
// https://excuser.herokuapp.com/v1/excuse

// Get n random excuses
// https://excuser.herokuapp.com/v1/excuse/3

// Get a random excuse for a specific category
// https://excuser.herokuapp.com/v1/excuse/office
// https://excuser.herokuapp.com/v1/excuse/family
// https://excuser.herokuapp.com/v1/excuse/children
// https://excuser.herokuapp.com/v1/excuse/office

// Get n random excuses for a specific category
// https://excuser.herokuapp.com/v1/excuse/college/4
// ambitious is adding the number of excuses generated 

