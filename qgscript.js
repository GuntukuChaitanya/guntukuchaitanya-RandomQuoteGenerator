var quotesInspire =[
    'Act as if what you do makes a difference. It does. -Willian James',
    'Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill',
    'Never bend your head. Always hold it high. Look the world straight in the eye. -Helen Keller',
    'What you get by achieving your goals is not as important as what you become by achieving your goals. -Zig Ziglar',
    'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean',
    'When you have a dream, you\'ve got to grab it and never let go. -Carol Burnett',
    'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. -William James',
    'No matter what you\'re going through, there\'s a light at the end of the tunnel. -Demi Lovato',
    'Limit your "always" and your "nevers." -Amy Poehler​​',
    'Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong. -Ella Fitzgerald',
    'You are never too old to set another goal or to dream a new dream. -C.S. Lewis',
    'Nothing is impossible. The word itself says "I\'m possible!" -Audrey Hepburn',
    'You do not find the happy life. You make it. -Camilla Eyring Kimball',
    'Try to be a rainbow in someone else\'s cloud. -Maya Angelou',
    'The most wasted of days is one without laughter. -E. E. Cummings',
    'Sometimes you will never know the value of a moment, until it becomes a memory. -Dr. Seuss',
    'Inspiration comes from within yourself. One has to be positive. When you\'re positive, good things happen. -Deep Roy',
    'Some people look for a beautiful place. Others make a place beautiful. -Hazrat Inayat Khan',
    'You get what you give. -Jennifer Lopez',
    'Stay close to anything that makes you glad you are alive. -Hafez',
    'It is never too late to be what you might have been. -George Eliot',
    'It isn\'t where you came from. It\'s where you\'re going that counts. -Ella Fitzgerald',
    'You must do the things you think you cannot do. -Eleanor Roosevelt'
]
function genInspireQuote(){
    var randInsNum=Math.floor(Math.random()*(quotesInspire.length));
    document.getElementById('displayInspireQuote').innerHTML=quotesInspire[randInsNum];
}
var quotesMotivate =[
    'All our dreams can come true, if we have the courage to pursue them. – Walt Disney',
    '“The secret of getting ahead is getting started.” – Mark Twain',
    'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed. – Michael Jordan',
    '“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey',
    '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”― Neil Gaiman',
    '“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington',
    '“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz',
    '“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’” – Leah Busque',
    '“It’s hard to beat a person who never gives up.” – Babe Ruth',
    '“Only the paranoid survive.” – Andy Grove',
    '“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb',
    '“Impossible is just an opinion.” – Paulo Coelho',
    '“People who wonder if the glass is half empty or full miss the point. The glass is refillable.” – Unknown',
    'You can either experience the pain of discipline or the pain of regret. The choice is yours.”  – Unknown',
    '“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” – Unknown',
    '“Whatever you are, be a good one.” ― Abraham Lincoln',
    '“Do what you feel in your heart to be right – for you’ll be criticized anyway.”― Eleanor Roosevelt',
    '“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ― William W. Purkey',
    '“It’s no use going back to yesterday, because I was a different person then.”― Lewis Carroll',
    '“Everything you can imagine is real.”― Pablo Picasso',
    'No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah',
    '“Everything comes to him who hustles while he waits.”― Thomas Edison',
    '“Hustlers don’t sleep, they nap.” – Unknown'
]
function genMotivateQuote(){
    var randMotNum=Math.floor(Math.random()*(quotesMotivate.length));
    document.getElementById('displayMotivateQuote').innerHTML=quotesMotivate[randMotNum];
}