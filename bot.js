console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');


//twitter keys are placed in a config.js file
var T = new Twit(config); 



// Function that runs Bot at a set interval //


tweetPhoto();
setInterval(tweetPhoto, 1000*60*60*2);

function tweetPhoto() {

  // Choose a Random Photo to Tweet //

  var photoArray = ['./images/donald.jpg', './images/bernie.jpg', './images/elizabeth.jpg', './images/joe.jpg'];
  
  var photo = photoArray[Math.floor(Math.random()*photoArray.length)];


  // Choose a Random Quote //


  var quoteTrumpArray = [
      "\"The goal of real healthcare reform must be high-quality, universal coverage in a cost-effective way.\"",
      "\"On a good day I think I’m handsome, on an average day I’m average. I’m a man’s man so I don’t necessarily know how cute we’re supposed to be.\"",
      "\"My fellow Americans, we are and always will be a nation of immigrants. We were strangers once, too.\"",
      "\"The thing about hip-hop today is it's smart, it's insightful. The way they can communicate a complex message in a very short space is remarkable.\"",
      "\"The shift to a cleaner energy economy wont happen overnight, and it will require tough choices along the way. But the debate is settled. Climate change is a fact.\"", 
      "\"It's not surprising, then, they get bitter, they cling to guns or religion or antipathy to people who aren't like them or anti-immigrant sentiment or anti-trade sentiment as a way to explain their frustrations.\"", 
      "\"The cost of college education today is so high that many young people are giving up their dream of going to college, while many others are graduating deeply in debt.\"", 
      "\"I see a future where getting to work or to school or to the store does not have to cause pollution.\"", 
      "\"CEOs of large corporations earn 400 times what their workers make. That is not what America is supposed to be about.\"",
      "\"Who do you think controls the Republican Party? Big money controls the Republican Party. This is where their campaign contributions come from.\"", 
      "\"I am a socialist; of course I am a socialist. To hold a vision that society can be fundamentally different, to believe that all people can be equal - that is not a new idea.\"", 
      "\"The true revolutionary is guided by a great feeling of love. It is impossible to think of a genuine revolutionary lacking this quality.\"", 
      "\"Some days I think I look kind of cute, but other days I try to avoid the mirror.\"", 
      "\"I grew up with a very big extended family, with a lot of aunts. We had about five or six houses on one street.\"", 
      "\"Anything that’s fun costs at least $8.\"", 
      "\"The fireman is very magical. If you rub his helmet he spits in your eye.\"", 
      "\"I'm not fat, I just have a sweet hockey body.\"", 
      "\"Follow your dreams, you can reach your goals, I'm living proof. Beefcake! Beefcake!\"", 
      "\"If God didn’t want me to eat chicken in church, then he would have made gluttony a sin.\"",
      "\"If I could menstruate, I wouldn’t have to deal with idiotic calendars anymore. I’d just be able to count down from my previous cycle. Plus, I’d be more in tune with the moon and the tides.\"",
      "\"Women are like wolves. If you want one you must trap it. Snare it. Tame it. Feed it.\"",
      "\"I always wondered how they picked the person to die. I’d be good at picking the person.\"",
      "\"No, don’t call me a hero. Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs, and get a distress call from the Commissioner and take off their glasses and change into capes and fly around fighting crime.Those are the real heroes\"",
      "\"I don’t have a lot of experience with vampires, but I have hunted werewolves. I shot one once, but by the time I got to it, it had turned back into my neighbor’s dog.\"",
      "\"Now that I own the building I’m looking for new sources of revenue. And a daycare center? Muahahahahahahahaha…Well I guess it’s not an evil idea, it’s just a regular idea, but there’s no good laugh for a regular idea.\"",
      "\"The eyes are the groin of the head.\"",
      "\"You couldn’t handle my undivided attention.\"",
      "\"Would I ever leave this company? Look, I’m all about loyalty. In fact, I feel like part of what I’m being paid for here is my loyalty. But if there were somewhere else that valued loyalty more highly, I’m going wherever they value loyalty the most.\"",
      "\"Why are all these people here? There are too many people on this earth. We need a new plague.\"",
      "\"I signed up for Second Life about a year ago. Back then, my life was so great that I literally wanted a second one. Absolutely everything was the same…except I could fly.\"",
      "\"In the wild, there is no healthcare. Healthcare is Oh, I broke my leg! A lion comes and eats you, you’re dead. Well, I’m not dead, I’m the lion, you’re dead!\"",




  ];

  var quoteBernieArray = [
      "\"We can outsmart those dolphins. Don’t forget – we invented computers, leg warmers, bendy straws, peel-and-eat shrimp, the glory hole, and the pudding cup.\"",
      "\"“Even communism works… in theory.”\"",
      "\"Getting out of jury duty is easy. The trick is to say you’re prejudiced against all races.\"",
      "\"Old people don’t need companionship. They need to be isolated and studied so it can be determined what nutrients they have that might be extracted for our personal use.\"",
      "\"As the Bible says, ‘Screw that!\"",
      "\"That’s it! You people have stood in my way long enough. I’m going to clown college!\"", 
      "\"Ideas are more powerful than guns. We would not let our enemies have guns, why should we let them have ideas.\"",
      "\"I believe in one thing only, the power of human will.\"",
      "\"The people who cast the votes don't decide an election, the people who count the votes do.\"",
      "\"It's the game of life. Do I win or do I lose? One day they're gonna shut the game down. I gotta have as much fun and go around the board as many times as I can before it's my turn to leave.\"",
      "\"All I'm trying to do is survive and make good out of the dirty, nasty, unbelievable lifestyle that they gave me.\"",
      "\"What I learned in jail is that I can't change. I can't live a different lifestyle - this is it. This is the life that they gave and this is the life that I made.\"", 
      "\"It's not me trying to act or pose in a certain way. It's a lifestyle - like a suaveness or a swag, per se.\"",
      "\"Of course, I think that people are just waiting for that time when I make a mistake and they're gonna jump on it.... There's gonna be haters.\"",
      "\"I'm crazy, I'm nuts. Just the way my brain works. I'm not normal. I think differently.\"",
      "\"To live is to risk it all, otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.\"",
      "\"Don't pay for cool stuff with your soul. Pay for it with money. You know, like how every store in the world works?\"",
      "\"Anyone can be confident with a full head of hair. But a confident bald man - there's your diamond in the rough.\"",
      "\"I don't take on big things. What I do, pretty much, is make the big things small and the small things big.\"",
      "\"Anything that's for free, people will take. They don't discriminate.\"",
      "\"When I was living in New York and didn't have a penny to my name, I would walk around the streets and occasionally I would see an alcove or something. And I'd think, that'll be good, that'll be a good spot for me when I'm homeless.\"",
      "\"I never thought for a second that anything I ever did was going to make someone cringe. That never occurred to me.\"",
      "\"I'm really only happy when I'm on stage. I just feed off the energy of the audience. That's what I'm all about - people and laughter.\"",
      "\"I don't like people cleaning my room.\"",
      "\"I don't really know much about TV and what people want to see. I'm not that well-informed about it.\"",
      "\"You got any idea what my life would be worth if certain people found out I checked into a laughing academy?\"",
          

  ];

  var quoteElizabethArray = [
      "\"That's because losers look stuff up while the rest of us are carp'en all them 'diems.\"",
      "\"Women in my focus groups, they say a bald man is trustworthy. He has nothing to hide.\"",
      "\"Women overwhelmingly support conservative policies.\"", 
      "\"I think that people have realized it's very unwise to bet against @realDonaldTrump.\"",
      "\"I hope that a lot of the men and women who feel forgotten in this country really see that they have in me a champion.\"",
      "\"The more vile the thing that's said about me, the less it affects me. It doesn't bother me at all.\"", 
      "\"Every woman should have four pets in her life. A mink in her closet, a jaguar in her garage, a tiger in her bed, and a jackass who pays for everything.\"",
      "\"There's nobody in the world like me. I think every decade has an iconic blonde, like Marilyn Monroe or Princess Diana and, right now, I'm that icon.\"",
      "\"Increasing visibility is a good thing, and it will surely make us more... visible. To do that we should, uh... develop our strategy and strategize our development. Implement solutions and solutionize implementations. Aggressively.\"", 
      "\"Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.\"",
      "\"Sometimes the clothes at Gap Kids are too flashy, so I’m forced to go to the American Girl store and order clothes for large colonial dolls.\"",
      "\"Sexy is what I try to get them to see me as after I win them over with my personality.\"",
      "\"I don't believe in the Republican party or the Democratic party. I just believe in parties.\"",
      "\"Beauty is fleeting, but a rent-controlled apartment overlooking the park is forever.\"",
      "\"Hoes before bros. Uteruses before duderuses. Ovaries before brovaries.\"",
      "\"I stand behind my decision to avoid salad and other disgusting things.\"",
      "\"Guys love it when you can show them you’re better than they are at something they love.\"",
      "\"I'm gonna get drunk and then I'm gonna order a three course meal where each course is made of dessert.\"",
      "\"I would like to be president some day, so, no, I have not smoked marijuana.\"",
      "\"You know what? America is awesome. It's so full of hope. And small towns and big cities. And real people and delicious beverages and hot guys.\"",
      "\"No matter what I do, literally nothing bad can happen to me. I'm like a white male US senator.\"",
      "\"I mean, that’s why people respect Hillary Clinton so much, because nobody takes a punch like her. She’s the strongest, smartest punching bag in the world.\"",
      "\"I guess some people object to powerful depictions of awesome ladies.\"",


      
  ];

  var quoteJoeArray = [
      "\"Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.\"",
      "\"The worst thing about prison was the dementors.\"",
      "\"I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.\"",
      "\"It’s too damn hot for a penguin to be just walkin’ around here.\"",
      "\"I thought this was America!\"",
      "\"There’s plenty of other interesting things you can do. Have you ever tried marijuana? Maybe it’s time.\"", 
      "\"I’ll make less money, sure, but…as long as I buy everything at Wall-Mart, it’ll all even out. Don’t you see? Wall-Mart isn’t our enemy, it’s our neighborhood friend.\"", 
      "\"God, why do the economically challenged always have to screw up everything?!\"", 
      "\"You can turn painful situations around through laughter. If you can find humor in anything, even poverty, you can survive it.\"", 
      "\"Civilization had too many rules for me, so I did my best to rewrite them.\"", 
      "\"Women don't want to hear what you think. Women want to hear what they think - in a deeper voice.\"", 
      "\"For college seniors there should be a week of being allowed to cry. Just break down and cry because you are scared and don't know what's next.\"", 
      "\"Single parent situations drive poverty and often lead to unsupervised kids. Many boys growing up without fathers often feel angry and abandoned. Thus, they seek comfort in all the wrong places.\"", 
      "\"There is little anyone can do with fanatics. Reasoning with them is a fool's errand. Avoiding them is mandatory.\"", 
      "\"It's amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.\"",
      "\"Make no mistake about why these babies are here - they are here to replace us.\"",
      "\"People say that money is not the key to happiness, but I always figured if you have enough money, you can have a key made.\"",
      "\"I'm always shocked when I get an invitation. People are always shocked when they see me at a party.\"",
      "\"When you hit a groove, it's not you; it's the spirit world. The spirits whisper the ideas in your brain and prod you along. They're the ones that are really happy.\"",
      "\"You've got the brains and the talent to go as far as you want. And when you do, I'll be right there to borrow money.\"",
      "\"Just cause you got the monkey off your back doesn't mean the circus has left town.\"",
      "\"When you're born you get a ticket to the freak show. When you're born in America, you get a front row seat.\"",
      "\"The reason I talk to myself is that I'm the only one whose answers I accept.\"",
      "\"Not only do I not know what's going on, I wouldn't know what to do about it if I did.\"",
      "\"I'm completely in favor of the separation of Church and State. My idea is that these two institutions screw us up enough on their own, so both of them together is certain death.\"",
      
  ];


  var quote = null;

  if (photo == './images/donald.jpg'){
      quote = quoteTrumpArray[Math.floor(Math.random()*quoteTrumpArray.length)];
      statusUpdate = quote + ' @realDonaldTrump' + ' #Election2020' + ' #Trump2020';

    }
    else if (photo == './images/bernie.jpg'){
      quote = quoteBernieArray[Math.floor(Math.random()*quoteBernieArray.length)];  
      statusUpdate = quote + ' @BernieSanders' + ' #Election2020' + ' #Bernie2020';
    }
    
    else if (photo == './images/elizabeth.jpg'){
      quote = quoteElizabethArray[Math.floor(Math.random()*quoteElizabethArray.length)];
      statusUpdate = quote + ' @ewarren' + ' #Election2020' + ' #Warren2020';
    }
    
    else if (photo == './images/joe.jpg'){
      quote = quoteJoeArray[Math.floor(Math.random()*quoteJoeArray.length)];  
      statusUpdate = quote + ' @JoeBiden' + ' #Election2020' + ' #Biden2020';
    }








  // Include @person //

  var statusUpdate = null;



  if (photo == './images/donald.jpg'){
    statusUpdate = quote + ' @realDonaldTrump' + ' #Election2020' + ' #Trump2020';
  }
  else if (photo == './images/bernie.jpg'){
    statusUpdate = quote + ' @BernieSanders' + ' #Election2020' + ' #Bernie2020';
  }

  else if (photo == './images/elizabeth.jpg'){
    statusUpdate = quote + ' @ewarren' + ' #Election2020' + ' #Warren2020';
  }

  else if (photo == './images/joe.jpg'){
    statusUpdate = quote + ' @JoeBiden' + ' #Election2020' + ' #Biden2020';
  }



  // Tweets a Photo //


  var fs = require('fs');
  var b64content = fs.readFileSync(photo, { encoding: 'base64' })

  // first we must post the media to Twitter
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var altText = "Picture of Political Figure"
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        var params = { status: statusUpdate, media_ids: [mediaIdStr] }

        T.post('statuses/update', params, function (err, data, response) {
          console.log(data)
        })
      }
    })
  })
}