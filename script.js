// This is the function that determines the star sign: 
const starSign = (birthDay, birthMonth) => {
    if (birthMonth === 1 && birthDay >= 20 || birthMonth === 2 && birthDay <= 18){
            return "Aquarius";
        } else if (birthMonth === 2 && birthDay >= 19 || birthMonth === 3 && birthDay <= 20) {
            return "Pisces";
        } else if ( birthMonth === 3 && birthDay >= 21 || birthMonth === 4 && birthDay <= 19) {
            return "Aries";
        } else if (birthMonth === 4 && birthDay >= 20 || birthMonth === 5 && birthDay <= 20) {
            return "Taurus";
        } else if (birthMonth === 5 && birthDay >= 21 || birthMonth === 6 && birthDay <= 20) {
            return "Gemini";
        } else if (birthMonth === 6 && birthDay >= 21 || birthMonth === 7 && birthDay <= 22) {
            return "Cancer";
        } else if (birthMonth === 7 && birthDay >= 23 || birthMonth === 8 && birthDay <= 22) {
            return "Leo"; 
        } else if (birthMonth === 8 && birthDay >= 23 || birthMonth === 9 && birthDay <= 22) {
            return "Virgo";
        } else if (birthMonth === 9 && birthDay >= 23 || birthMonth === 10 && birthDay <= 22) {
            return "Libra";
        } else if (birthMonth === 10 && birthDay >= 23 || birthMonth === 11 && birthDay <= 22) {
            return "Scorpio";
        } else if (birthMonth === 11 && birthDay >= 23 || birthMonth === 12 && birthDay <= 21) {
            return "Sagittarius";
        } else if (birthMonth === 12 && birthDay >= 22 || birthMonth === 1 && birthDay <= 19) {
            return "Capricorn";
        } else {
            return 'It seems like you have no star sign? Maybe you are from out of this world! Or try to put in a valid birthdate...';
        }
    };
// enther here birtday, month and name
const zodiac = starSign(19, 12);
const name = "Seb";

// ranom activity and mood generator
let mood = ["enthousastic", "joyful", "interesting", "inspirational", ]
let fireActivity = ["vitit a sauna", "climb a vulcano", "make a campfire", "make candles"]
let airActivity = ["fly a plane", "go bungyjumping", "go paragliding", "make a hot air balloon trip"]
let waterActivity = ["go surfing", "go sailing", "go swimming", "go snorkelling"]
let earthActivity = ["take a hike", "dig a hole", "mountain climbing", "take a mud bath"]


const createPersonalMessage = () => {

    let random = Math.floor(Math.random() * 4)

    let radomFire = fireActivity[random]
    let radomAir = airActivity[random]
    let randomWater = waterActivity[random]
    let randomEarth = earthActivity[random]
    let randomMood = mood[random]


    if (zodiac === "Aries" || zodiac === "Leo" || zodiac === "Sagittarius") {
        console.log(`Hey ${name}! Today will be a very ${randomMood} day. The universe suggest that you will go ${radomFire}. Good luck!`)
    } else if (zodiac === "Taurus" || zodiac === "Virgo" || zodiac === "Capricorn") {
        console.log(`Hey ${name}! Today will be a very ${randomMood} day. The universe suggest that you will go ${randomEarth}. Good luck!`)
    } else if (zodiac === "Gemini" || zodiac === "Libra" || zodiac === "Aquarius") {
        console.log(`Hey ${name}! Today will be a very ${randomMood} day. The universe suggest that you will go ${radomAir}. Good luck!`)
    } else if (zodiac === "Cancer" || zodiac === "Scorpio" || zodiac === "Pisces") {
        console.log(`Hey ${name}! Today will be a very ${randomMood} day. The universe suggest that you will go ${randomWater}. Good luck!`)
    }
}

createPersonalMessage()