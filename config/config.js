// TODO: Add SECRET and MONGODB_URI to Heroku's Config Vars when deploying
const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
    },
    default:{
        SECRET: "DUMMYSUPERSECRET123", // dummy secret
        DATABASE: 'mongodb+srv://user:pethaven123@cluster0.f6pmu.mongodb.net/pethaven?retryWrites=true&w=majority'
    }
};

exports.get = function get(env){
    return config[env] || config.default;
}