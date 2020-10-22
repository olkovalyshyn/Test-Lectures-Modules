import "./css/styles.css";

console.log("До виклику тайм аут");

const id1 = setTimeout((x, y) => {
    console.log(x, y)
}, 2000, 987654321, 20)

const id2 = setTimeout((r) => { console.log(r) }, 5000, 555)

console.log("Після виклику ТаймАут");

console.log("id1", id1);
console.log("id2", id2);