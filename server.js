const http = require("http");
const mongodb = require("mongodb");
let db;
const connectionString = "mongodb+srv://miyya_2399:nxoezXibh1HAMi3b@cluster0.dybzq92.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true},
    (err, client)=> {
        if (err) console.log("ERROR on connection Mangodb", err);
        else {
            console.log("Mongodb connected successfully");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 5012;
            server.listen(PORT, function() {
                console.log(`
                    The server is running on port: 
                    ${PORT}, http://localhost:${PORT}`
                );
            });
        };
    }
);

