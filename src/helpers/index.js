export function checkButtonStatus(expDate, today, postData, accountId, haveTicket, profileData) {
    var dayNowDate = String(today.getDate()).padStart(2, '0');
    var mountNowDate = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yearNowDate = today.getFullYear();

    var expDay = parseInt(expDate[1]);
    var expMount = parseInt(expDate[0]);
    var expYear = parseInt(expDate[2]);
 
    let buttonState = {
        joinState: true,
        statusText: '',
        colorButton: ''
    };
    if (haveTicket) {
        buttonState.joinState = false
        buttonState.statusText = 'You already ticket'
        buttonState.colorButton = 'rgb(235, 235, 235)'
    } 
    else if (parseInt(accountId) === parseInt(postData.account_id)) {
        buttonState.joinState = false
        buttonState.statusText = 'This is your post'
        buttonState.colorButton = 'rgb(235, 235, 235)'
    }
    else if (postData.amount >= postData.full && buttonState.joinState) {
        buttonState.joinState = false
        buttonState.statusText = 'Soldout'
        buttonState.colorButton = 'rgb(255,216,212)'
    }
    else if (yearNowDate === expYear && buttonState.joinState) {
        if (mountNowDate < expMount && buttonState.joinState) {
            buttonState.joinState = true
            buttonState.statusText = 'Buy Ticket'
            buttonState.colorButton = '#ffeb99'
        }
        else if (mountNowDate === expMount && buttonState.joinState) {
            if (dayNowDate < expDay) {
                buttonState.joinState = true
                buttonState.statusText = 'Buy Ticket'
                buttonState.colorButton = '#ffeb99'
            }
            else if (dayNowDate >= expDay && buttonState.joinState) {
                buttonState.joinState = false
                buttonState.colorButton = 'rgb(255,216,212)'
                buttonState.statusText = 'Out of date'
            }
        }
        else if (mountNowDate > expMount && buttonState.joinState) {
            buttonState.joinState = false
            buttonState.colorButton = 'rgb(255,216,212)'
            buttonState.statusText = 'Out of date'
        }
    }
    else if (yearNowDate < expYear && buttonState.joinState) {
        buttonState.joinState = true
        buttonState.statusText = 'Buy Ticket'
        buttonState.colorButton = '#ffeb99'
    }

    else if (yearNowDate > expYear && buttonState.joinState) {
        buttonState.joinState = false
        buttonState.colorButton = 'rgb(255,216,212)'
        buttonState.statusText = 'Out of date'
    }
    if (profileData.coin_amount < postData.price){
        buttonState.joinState = false
        buttonState.statusText = 'Not enough money'
        buttonState.colorButton = 'rgb(255,216,212)'
    }
    return buttonState
}

