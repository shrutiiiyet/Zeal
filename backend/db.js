const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let adminModel = new Schema ({
    email: {type: String, unique: true},
    adminName: String,
    password: String,
});

let cricketModel = new Schema ({
    teamA: String,
    teamB: String,
    winningTeam: {type: String, default:null},
    teamARuns: {type: Number, default:0},
    teamAWickets: {type: Number, default:0},
    teamBRuns: {type: Number, default:0},
    teamBWickets: {type: Number, default:0},
    date: Date,
    startTime: Date,
    status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
})

let footballModel = new Schema ({
    teamA: String,
    teamB: String,
    winningTeam: {type: String, default:null},
    teamAGoals: {type: Number, default:0},
    teamBGoals: {type: Number, default:0},
    date: Date,
    startTime: Date,
    status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
})

let kabaddiModel = new Schema ({
    teamA: String,
    teamB: String,
    winningTeam: {type: String, default:null},
    teamAPoints: {type: Number, default:0},
    teamBPoints: {type: Number, default:0},
    date: Date,
    startTime: Date,
    status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
})

let badmintonModel = new Schema ({
    playerA: String,
    playerB: String,
    winningPlayer: {type: String, default:null},
    playerAPoints: {type: Number, default:0},
    playerBPoints: {type: Number, default:0},
    date: Date,
    startTime: Date,
    status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
})

let carromModel = new Schema ({
    playerA: String,
    playerB: String,
    winningPlayer: {type: String, default:null},
    playerAPoints: {type: Number, default:0},
    playerBPoints: {type: Number, default:0},
    date: Date,
    startTime: Date,
    status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
})

let basketballModel = new Schema ({
    teamA: String,
    teamB: String,
    winningTeam: {type: String, default:null},
    teamAPoints: {type: Number, default:0},
    teamBPoints: {type: Number, default:0},
    date: Date,
    startTime: Date,
    status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
})

let AdminModel = mongoose.model("admin", adminModel);
let CricketModel = mongoose.model("cricket", cricketModel);
let FootballModel = mongoose.model("football", footballModel);
let KabaddiModel = mongoose.model("kabaddi", kabaddiModel);
let CarromModel = mongoose.model("carrom", carromModel);
let BadmintonModel = mongoose.model("badminton", badmintonModel);
let BasketballModel = mongoose.model("basketball", basketballModel);

module.exports = {
    AdminModel: AdminModel,
    CricketModel: CricketModel,
    FootballModel: FootballModel,
    KabaddiModel: KabaddiModel,
    CarromModel: CarromModel,
    BadmintonModel: BadmintonModel,
    BasketballModel: BasketballModel
};