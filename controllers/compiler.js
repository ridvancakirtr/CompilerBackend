const axios = require('axios');

const url = 'https://api.jdoodle.com/v1/execute';

var program = {
    script: "",
    language: "",
    versionIndex: "0",
    clientId: "a6b7edf76c9573e79aeded2dcbefc09b",
    clientSecret: "93144cc31b1479d363465c354747d157259c79e19c9aaf42ae65512788071e91"
};

const compilerServer = axios.create({
    method: 'POST'
});

// @desc    Compiler
// @route   GET /api/v1/compiler/
// @access  Private
const compiler = async (req, res, next) => {

    const languages = ["java", "c", "php","python3","nodejs"];
    console.log(languages.includes(req.body.language));
    if(!languages.includes(req.body.language)){
        console.log(program)
        res.json({
            output:"",
            statusCode: 404,
            memory:"",
            cpuTime:""
        });
        
    }else{
        program.language=req.body.language
        program.script=req.body.script
        const result = await compilerServer.post(url,program);
        console.log(result.data)
        res.json(result.data);
    }
    
};



module.exports = {
    compiler
}