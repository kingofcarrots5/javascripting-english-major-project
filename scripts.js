userInput = prompt ("Enter any two digit number to find out if it is even or odd")
while (userInput >= 100, userInput <= -100 ) {
    userInput = prompt ("I said, any TWO digit number you fucking cheater")
}    
for (let i = 1; i < userInput; i = i + 1 ) 
    if (i % 2 == 0) {
        $("#response").append("<br />" + i + " is " + " even ")
    } else {
        $("#response").append("<br />" + i + " is " + " odd ")
}
$("#response").append("<br />" + "Actually, figure it out yourself, you cheater.")
