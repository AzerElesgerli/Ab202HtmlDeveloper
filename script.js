var persons = [
    {
        name: "Paul",
        surname: "Qasimov",
        age: 33
    },
    {
        name: "Herry",
        surname: "AdiGozelova",
        age: 55
    },
    {
        name: "Jake",
        surname: "Babayev",
        age: 19
    },
    {
        name: "Michael",
        surname: "Memmedov",
        age: 32
    }
];

var div1 = document.getElementById("div1");
for (var i = 0; i < persons.length; i++) {
    var person = persons[i];
    var row = table.insertRow(i + 1);
}