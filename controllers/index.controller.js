const welcome = (req, res) => {
    res.send("<h1/> Hello, World</>")
}

const greet = (req, res) => {
    res.send("<h1> Hello 👋 Fellow Programmers")
}

module.exports = {
    welcome,
    greet
}