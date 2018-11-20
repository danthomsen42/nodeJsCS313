var express = require('express');
var app = express();
app.use(express.static('public'))


app.set('views', __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    console.log("Hey, I want to talk to you!!");
    res.write("show me the money");
    res.end();
});
 
app.get("/tacos", function (req, res) {
    console.log("Taco Tuesday");
    var num = getNumberOfTacos();

    res.render("tacos", {
        num: num
    });
});

app.listen(8888, function () {
    console.log("Listening on port 5000");
});

app.get("/math", function (req, res) {
    console.log("Do some Math");
    var num = doSomeMath(req, res);

    res.render("answer", {
        num: num
    });
});

function getNumberOfTacos() {
    return 10;
}

function doSomeMath(req, res) {
    var op1 = parseInt(req.query.operand1);
    //    var op2 = parseInt(req.query.operand2);
    var oer = req.query.operation;

    if (oer == "Letters(Stamped)") {
        if (op1 >= 0 && op1 < 2) {
            var answer = 0.5;
            return answer;
        } else if (op1 >= 2 && op1 < 3) {
            var answer = 0.71;
            return answer;
        } else if (op1 >= 3 && op1 < 3.5) {
            var answer = 0.92;
            return answer;
        } else if (op1 == 3.5) {
            var answer = 1.13;
            return answer;
        } else {
            var answer = LargeFlat(op1);
            return answer;
            //res.render("answer", {num:num});
        }
    } else if (oer == "Letters(Metered)") {
        if (op1 >= 0 && op1 < 2) {
            var answer = 0.47;
            return answer;
        } else if (op1 >= 2 && op1 < 3) {
            var answer = 0.68;
            return answer;
        } else if (op1 >= 3 && op1 < 3.5) {
            var answer = 0.89;
            return answer;
        } else if (op1 == 3.5) {
            var answer = 1.10;
            return answer;
        } else {
            var answer = LargeFlat(op1);
            return answer;
            //res.render("answer", {num:num});
        }
    } else if (oer == "Large Envelopes(Flats)") {
        var answer = LargeFlat(op1);
        return answer;
    } else if (oer == "First-Class Package Service--Retail") {
        if (op1 >= 0 && op1 < 5) {
            var answer = 3.50;
            return answer;
        } else if (op1 >= 5 && op1 < 9) {
            var answer = 3.75;
            return answer;
        }
    } else if (op1 >= 9 && op1 < 10) {
        var answer = 4.10;
        return answer;
    } else if (op1 >= 10 && op1 < 11) {
        var answer = 4.45;
        return answer;
    } else if (op1 >= 11 && op1 < 12) {
        var answer = 4.80;
        return answer;
    } else if (op1 >= 12 && op1 < 13) {
        var answer = 5.15;
        return answer;
    } else if (op1 >= 13) {
        var answer = 5.50;
        return answer;
    }

}

function LargeFlat(op1) {
    if (op1 >= 0 && op1 < 2) {
        var answer = 1;
        return answer;
    } else if (op1 >= 2 && op1 < 3) {
        var answer = 1.21;
        return answer;
    } else if (op1 >= 3 && op1 < 4) {
        var answer = 1.42;
        return answer;
    } else if (op1 >= 4 && op1 < 5) {
        var answer = 1.63;
        return answer;
    } else if (op1 >= 5 && op1 < 6) {
        var answer = 1.84;
        return answer;
    } else if (op1 >= 6 && op1 < 7) {
        var answer = 2.05;
        return answer;
    } else if (op1 >= 7 && op1 < 8) {
        var answer = 2.26;
        return answer;
    } else if (op1 >= 8 && op1 < 9) {
        var answer = 2.47;
        return answer;
    } else if (op1 >= 9 && op1 < 10) {
        var answer = 2.68;
        return answer;
    } else if (op1 >= 10 && op1 < 11) {
        var answer = 2.89;
        return answer;
    } else if (op1 >= 11 && op1 < 12) {
        var answer = 3.10;
        return answer;
    } else if (op1 >= 12 && op1 < 13) {
        var answer = 3.31;
        return answer;
    } else if (op1 >= 13) {
        var answer = 3.52;
        return answer;
    }


}
