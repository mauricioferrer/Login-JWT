const jwt = require('jsonwebtoken');

const user = {
    id: "10",
    name: "Marcos",
    username: "marcos@hotmail.com",
    password: "121212"
}

const secret = "hiuhiuhiuh"

function createToken(){
const token = jwt.sign({ id: user.id, username: user.username}, secret, { expiresIn: 60 })
}

function testToken(token){
    try{
        const validData = jwt.verify(token, secret)

    } catch(error) {
        console.log(error)
    }
}
createToken();
testToken();