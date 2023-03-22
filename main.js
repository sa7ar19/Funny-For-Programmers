const mcont = document.querySelector(".mcont");
const jcont = document.querySelector(".jcont");
const qcont = document.querySelector(".qcont");
const rcont = document.querySelector(".rcont");


function clearAll(){
    const isim = document.querySelector("img");
    const isjoke = document.querySelector("img");
    const isquote = document.querySelector("img");
    const isriddle = document.querySelector("img");
    mcont.innerHTML = '';
    jcont.innerHTML = '';
    qcont.innerHTML = '';
    rcont.innerHTML = ''

}

function meme(){
    const randomMemeUrl = getRandomData('memes');
    const newIm = document.createElement("img");
    newIm.setAttribute("src", randomMemeUrl);
    clearAll();
    mcont.appendChild(newIm);

}

function joke(){
    const randomJokeText = getRandomData('jokes');
    const jcont = document.querySelector(".jcont");
    const newp = document.createElement("p");
    newp.textContent = randomJokeText;
    clearAll();
    jcont.appendChild(newp);
}

function showQuote(){
    const randomQuote = getRandomData('quotes');
    const qcont = document.querySelector(".qcont");
    const quote = document.createElement("p");
    const author = document.createElement("p");
    quote.textContent = randomQuote.quote;
    author.textContent= "- " + randomQuote.author;
    clearAll();
    qcont.appendChild(quote);
    qcont.appendChild(author);
}

function riddle(){
    const randomRiddle = getRandomData('riddles');
    const q = document.createElement("p");
    const a = document.createElement("p");
    const {question , answer } = randomRiddle; 
    a.textContent= "=> " + answer;
    a.id = 'ans';
    a.hidden = true;
    q.textContent = question;
    clearAll();
    rcont.appendChild(q);
    rcont.appendChild(a);
}

function reveal(){
    const riddle = rcont.querySelector("p");
    const answer = document.querySelector("#ans");
    if(riddle && answer.hidden){
        answer.hidden = false;
        console.log(answer);
    }else if(riddle){
        alert("The answer is already reveales !");
    }else{
        alert("there is no riddle to reveale the answer to !");
    }
}

function getRandomData(type){
    return data[type][rn(data[type].length)];
}

const memes =["images/1.png", "images/2.png", "images/4.jpg", "images/4.png", "images/5.jpeg","images/6.png","images/7.jpeg","images/8.jpg","images/9.jpg","images/10.jpg","images/14.jpg","images/15.jpg","images/15.png","images/16.jpeg","images/19.jpg","images/20.jpeg", "images/21.png", "images/80.jpg"];
const jokes = ["A steamed veggie", "My fake plants died because I did not pretend to water them.", "I am not a member of any organized political party. I am a Democrat.","I love deadlines. I like the whooshing sound they make as they fly by.", "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.", "“You know the world is going crazy when the best rapper is a white guy, the best golfer is a black guy, the tallest guy in the NBA is Chinese, the Swiss hold the America's Cup, France is accusing the U.S. of arrogance, Germany doesn't want to go to war, and the three most powerful men in America are named \"Bush\", \"Dick\", and \"Colin.\" Need I say more?”"];
const quotes = [
    { quote:"“Programmer: A machine that turns coffee into code.”" ,
    author:'Wade'},{quote:'“Computers are fast; programmers keep it slow.”' ,author:'Dave'},{quote:'“When I wrote this code, only God and I understood what I did. Now only God knows.”', author:'Seth'}, {quote:"“A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!”" , author:"Ivan"}, {quote:"“How many programmers does it take to change a light bulb? None, that’s a hardware problem.”" , author:"Riley"}, {quote:"“Programming is like sex: One mistake and you have to support it for the rest of your life.”" , author:"Gilbert"}, {quote:"“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.”" , author:"Jorge"}, {quote:"“Copy-and-Paste was programmed by programmers for programmers actually.”" , author:"Dan"}, {quote:"“Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.”" , author:"Brian"}, {quote:"“Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.”" , author:"Roberto"}, {quote:"“Algorithm: Word used by programmers when they don\’t want to explain what they did.”" , author:"Ramon"}, {quote:"“Software and cathedrals are much the same — first we build them, then we pray.”" , author:"Miles"}, {quote:"“There are two ways to write error-free programs; only the third works.”" , author:"Nathaniel"}, {quote:"“If debugging is the process of removing bugs, then programming must be the process of putting them in.”" , author:"Ethan"}, {quote:"“99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code …”" , author:"Liam"}, {quote:"“Remember that there is no code faster than no code.” " , author:"Claude"}, {quote:"“One man\’s crappy software is another man\’s full-time job.”" , author:"Joshua"}, {quote:"“No code has zero defects.”" , author:"Glen"}, {quote:"“A good programmer is someone who always looks both ways before crossing a one-way street.”" , author:"Harvey"}, {quote:"“Deleted code is debugged code.”" , author:"Victor"}, {quote:"“Don't worry if it doesn't work right. If everything did, you'd be out of a job.”" , author:"Rick"}];

const riddles=[{question:"What’s the best thing about Switzerland?", answer:'I don’t know, but the flag is a big plus.'},{question:"Did you hear about the mathematician who’s afraid of negative numbers?",answer:"He’ll stop at nothing to avoid them"}, {question:"Why do we tell actors to “break a leg?”", answer:"Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor"}, {question:"Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”", answer:"Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house. Don't miss these hilarious egg puns that will absolutely crack you up."}, {question:"Hear about the new restaurant called Karma?", answer:"There’s no menu: You get what you deserve."}, {question:"A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”", answer:"“Don’t worry,” said the doc. “Those are just contractions.”"}, {question:"A bear walks into a bar and says, “Give me a whiskey and … cola.”", answer:"“Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”"}, {question:"What did the horse say after it tripped?", answer:"Help! I’ve fallen and I can’t giddyup!"}, {question:"Why can’t you hear a pterodactyl going to the bathroom?", answer:"Because the “P” is silent"}, {question:"What do you call a well-balanced horse?", answer:"Stable"}, {question:"What do you call an angry carrot?", answer:"A steamed veggie."}];

function rn(len){
    return Math.floor(Math.random()* len);
}

const data ={
    memes,
    jokes,
    quotes,
    riddles,
};