
var config = {
    development: {
        database: {
            user: 'nupsmafjrohwkq',
            host: 'ec2-54-163-253-94.compute-1.amazonaws.com',
            database: 'd3lqc0ad8csf0n',
            password: 'c016782212e9240c7bd1b58aa2a9ff84d7b228608035468dd7a7974988859759',
            port: 5432,
            ssl: true
        }
    },
    local: {
        database: {
            user: 'sandesh',
            host: 'localhost',
            database: 'matrimonial',
            password: 'sandesh',
            port: 5432
        }
    }
}

exports.get = function get(env) {
    console.log("Environment : "+env);
    return config[env] || config.local;
}