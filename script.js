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

    