class TravelServiceApi {
    static getUser() { // [1]
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    email : "somemockemail@email.com",
                    repository: "http://github.com/username"
                });
            }, 3000);
        });
    }
    static getDeparture(user) { // [2]
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    userID : user.email,
                    flightID : 'AR1973',
                    date : '10/27/2016 16:0o0PM'
            });
            }, 2500);
        });
    }
    static getForecast(date) { // [3]
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    date: date,
                    forecast: "rain"
                });
            }, 2000);
        });
    }
}