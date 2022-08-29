var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello this is for domainAssessment" }');
});

app.get('/health', function (req, res) {
    res.send('{ "response": "app is up & running" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, DJ!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
