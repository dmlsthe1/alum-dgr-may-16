const axios = require("axios");

let p1 = new Promise((resolve, reject) => {
    axios.get("http://192.168.1.63:5000/api/nodes").then(res => {
        console.log(res);
        resolve(res);
    }).catch(err => console.log(err));
});

let data = [
    {
        "name": "vraachu",
        "type": "yellow_star",
        "loc": [
            "-6",
            "57"
        ]
    },
    {
        "name": "adrensof",
        "type": "yellow_star",
        "loc": [
            "-50",
            "56"
        ]
    },
    {
        "name": "parruak",
        "type": "yellow_star",
        "loc": [
            "44",
            "-50"
        ]
    },
    {
        "name": "xeuyip",
        "type": "yellow_star",
        "loc": [
            "80",
            "7"
        ]
    },
    {
        "name": "kraamsa",
        "type": "black_hole",
        "loc": [
            "21",
            "1"
        ]
    },
    {
        "name": "ukleozror",
        "type": "yellow_star",
        "loc": [
            "-11",
            "31"
        ]
    },
    {
        "name": "xiufli",
        "type": "white_star",
        "loc": [
            "59",
            "-39"
        ]
    },
    {
        "name": "zliusros",
        "type": "black_hole",
        "loc": [
            "-57",
            "28"
        ]
    },
    {
        "name": "siodift",
        "type": "yellow_star",
        "loc": [
            "-19",
            "37"
        ]
    },
    {
        "name": "pheoldoth",
        "type": "white_star",
        "loc": [
            "-32",
            "-74"
        ]
    },
    {
        "name": "istritlaeh",
        "type": "nebula",
        "loc": [
            "71",
            "62"
        ]
    },
    {
        "name": "beebur",
        "type": "yellow_star",
        "loc": [
            "63",
            "-14"
        ]
    },
    {
        "name": "prelsoa",
        "type": "nebula",
        "loc": [
            "74",
            "-53"
        ]
    },
    {
        "name": "cranean",
        "type": "yellow_star",
        "loc": [
            "78",
            "-57"
        ]
    },
    {
        "name": "sraetrucs",
        "type": "black_hole",
        "loc": [
            "61",
            "24"
        ]
    },
    {
        "name": "srigduf",
        "type": "yellow_star",
        "loc": [
            "48",
            "23"
        ]
    },
    {
        "name": "ucheiztis",
        "type": "red_giant",
        "loc": [
            "-32",
            "-20"
        ]
    },
    {
        "name": "chokdox",
        "type": "yellow_star",
        "loc": [
            "-51",
            "35"
        ]
    },
    {
        "name": "peokdems",
        "type": "yellow_star",
        "loc": [
            "6",
            "-34"
        ]
    },
    {
        "name": "krepsao",
        "type": "red_giant",
        "loc": [
            "9",
            "-30"
        ]
    }
]
