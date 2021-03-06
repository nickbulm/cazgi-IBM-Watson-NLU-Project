const express = require('express');
const dotenv = require('dotenv');
const app = new express();
const cors_app = require('cors');
dotenv.config()
app.use(express.static('client'))
app.use(cors_app());


function getNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: api_key,
        }),
        serviceUrl: api_url,
    });
    return naturalLanguageUnderstanding;
}
async function getData (p) {
    let response = await getNLUInstance().analyze(p);
    console.log(response)
    return response;
};

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {
    const analyzeParams = {
        'url': req.query.url,
        'features': {
            'emotion': {},
            'sentiment': {}
          },
      };
    getData(analyzeParams)
    .then(response => {
        return res.json(response.result.emotion.document.emotion)
    })
});

app.get("/url/sentiment", (req,res) => {
    const analyzeParams = {
        'url': req.query.url,
        'features': {
            'emotion': {},
            'sentiment': {}
          },
      };
    getData(analyzeParams)
    .then(response => {
        return res.json(response.result.sentiment.document.label)
    })
});

app.get("/text/emotion", (req,res) => {
    const analyzeParams = {
        'text': req.query.text,
        'features': {
            'emotion': {},
            'sentiment': {}
          },
      };
    getData(analyzeParams)
    .then(response => {
        return res.json(response.result.emotion.document.emotion)
    })
    
});

app.get("/text/sentiment", (req,res) => {
    const analyzeParams = {
        'text': req.query.text,
        'features': {
            'emotion': {},
            'sentiment': {}
          },
      };
    getData(analyzeParams)
    .then(response => {
        return res.json(response.result.sentiment.document.label)
    })
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

