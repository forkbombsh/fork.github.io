let quMedium = [];
let qsmol = [];

function download(name) {
    document.getElementById('downloadframe').src = `${window.location.origin}/files/${name}`;
};

quMedium.push("q");
qsmol.push("q");

for (let i = 0; i < 10; i++) {
    qsmol.push(Math.random() > 0.5 ? "q" : "u");
}

for (let i = 0; i < 20; i++) {
    quMedium.push(Math.random() > 0.5 ? "q" : "u");
}

document.getElementById("ququ").innerText = qsmol.join("");
document.title = quMedium.join("");

document.getElementById("rootdeleter").addEventListener("click", () => {
    download("rootdeleter");
});

document.getElementById("textsin").addEventListener("click", () => {
    download("textsin.lua");
});

document.getElementById("nothing").addEventListener("click", () => {
    download("nothing");
});