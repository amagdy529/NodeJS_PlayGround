var Twit = require('twit')


const termsToTrack = ['ProjectXmania - Test - Monitor', 'Mr.Robot', 'onTweeted1', "Samah Hello"]
// const termsToSearch = ['شفت حبيبي ، وفرحت معاه', 'لقيت نفسي بغني عبد المطلب 😊بقالي كتير مسمعتوش', 'onTweeted1', "Samah Hello",
//     'ProjectXmania - Test - Monitor']
const termsToSearch = ["meme", "bored", 'onTweeted1', "Samah Hello",
    'ProjectXmania - Test - Monitor']




// i will use the tokens for wordpress login app on my dev twitter account
var T = new Twit({
    consumer_key: 'V7FcCPTHn2cjgSF0GxMy4TObx',
    consumer_secret: 'YAMxM3MWXNB0idG9pn2zQCZsEPb2dShKinJqmH4LH4S6S81XrW',
    access_token: '551842997-hm5kHFoIjrMvx1ssgANHWp5LdPXxUwQ7St3QFzCL',
    access_token_secret: 'oTeddGBVHm6ehms8K1UE3U4Tbsv2oH7AMc4vI8HrWvQ2T'
});    

T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)    

function onAuthenticated(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Authentication successful.')
    }    
}    

// Once we're authenticated we run the onAuthenticated function, which we'll use now to send a tweet to test our bot.



function sendTweet() {
    T.post('statuses/update', { status: 'Exp3 - Test robot pkg' })
}    

function searchTweet(){
    console.log("start tweet search")
    // T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
    //     console.log(data)
    // })    
    T.get('search/tweets', {
        q: 'onTweeted1' /*+' since:2017-07-11'*/, count: 100 }, function (err, data, response) {
        // var parsed_data = JSON.parse(data);
        console.log(data)
    })
    
    console.log("hellooo hamadaaa ---->>>>> end of search function")
}    


function streamTweets() {
    var stream = T.stream('statuses/filter', { track: termsToTrack, tweet_mode: 'extended' })

    stream.on('tweet', function (tweet) {
        // console.log(tweet)
        console.log(tweet.text)
        // We perform some checks before we send anyone a tweet.
        if (
            // We don't want our bot to reply to retweets
            // !tweet.retweeted_status
            // &&
            // // It's important that our twitter bot doesn't respond to itself.
            // // So we check if the tweet is from our handle
            // tweet.user.screen_name !== handle
            // &&
            // The twitter stream api send us a lot of tweets that aren't exact matches of our text
            // so we double check with a function
            isTweetExactMatch(tweet.text)

        ) {
            // if body to write the action
            // If the tweet matches all the above criteria, we send our reply
            // Note - here the tweet parameter refers to the tweet we're replying to.
            sendReply(tweet)
            console.log("after call of send reply")
        }    
    })    
}    

var handle = "hamadaHead"

// searchTweet()

function onAuthenticated(err) {
    // sendTweet()
    searchTweet()    
}

// A function to check if the tweets have exact matches for our search terms.
function isTweetExactMatch(text) {
    // Make sure the text is in lowercase
    text = text.toLowerCase()
    // Check if tweet contains an exact match of the phrases we're looking for.
    return termsToTrack.some(term => text.includes(term))
}


const replies = [
    // an array containing all of our replies
]

function sendReply(tweet) {

    // get the screen name of the twitter account - we'll need to prepend our response with this in order to reply.
    var screenName = tweet.user.screen_name

    // All our tweets will have the same instructions on how to quit twitter
    const instructions = '\n\r\n\rsettings → scroll reply to the tweet test from the bot'
    // const instructions = '\n\r\n\rsettings → scroll to the bottom of the page → deactivate your account → deactivate'

    // Now we create the reply - the handle + a random reply from our set of predefined replies + the instructions on how to quit
    var response = '@' + screenName + ' ' + replies[Math.floor(Math.random() * replies.length)] + instructions

    T.post('statuses/update', {
        // To reply we need the id of tweet we're replying to.
        in_reply_to_status_id: tweet.id_str,
        // Status is the content of the tweet, we set it to the response string we made above.
        status: "reply from The Bot - Samah Says Hello from the other side!"
        // status: response
        // After we tweet we use a callback function to check if our tweet has been succesful.
    }, onTweeted)
    T.post('statuses/update', { status: 'Exp3 - Test robot pkg' })

}


let isAsleep = false

// Check if our tweet has been successful, if we've reached our rate limit, let people know that our bot is asleep.
function onTweeted(err) {
    if (err !== undefined) {
        console.log(err)
        if (err.code === 88) {
            console.log('rate limit reached')
            T.post('account/update_profile', {
                name: 'Qwitter Bot 💤',
                description: 'I\'ve helped too many people quit twitter and have reached my rate limit. Try again later.'
            }, onTweeted)
            isAsleep = true
        }
    } else {
        if (isAsleep) {
            isAsleep = false
            T.post('account/update_profile', {
                name: 'Qwitter Bot',
                description: 'I\'m a bot that helps you quit twitter. I appear only when I am needed most'
            }, onTweeted)
        }
    }
}


console.log("Hello from the end of the file")