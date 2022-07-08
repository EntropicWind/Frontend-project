
const $factsBttn = $(".btn")
const $result = $('.result')




$factsBttn.on('click', (event) => {
    event.preventDefault()
            $.get(`https://api.chucknorris.io/jokes/random`,(data) => {
            console.log(data, "we click excuse button got excuse")
            
            let result = `${data.value} <br>`;
            $result.append(result)
            console.log(result) 
    })
});
    
    // clear button functionality  
    $('.clr-btn').click(() => {
        $result.empty();
        console.log('empty')
        });