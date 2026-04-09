const breedBtn = document.getElementById("breedBtn");
const output = document.getElementById("output");

const mare = {
  name: "Mare",
  extension: ["E", "e"],
  agouti: ["A", "a"]
};

const stallion = {
  name: "Stallion",
  extension: ["e", "e"],
  agouti: ["A", "a"]
};

function pickAllele(pair) {
  return pair[Math.floor(Math.random() * pair.length)];
}

function sortPair(a, b) {
  return [a, b].sort().join("");
}

function phenotype(extension, agouti) {
  const hasE = extension.includes("E");
  if (!hasE) return "Chestnut";
  if (agouti.includes("A")) return "Bay";
  return "Black";
}

breedBtn.addEventListener("click", () => {
  const ext = sortPair(pickAllele(mare.extension), pickAllele(stallion.extension));
  const ag = sortPair(pickAllele(mare.agouti), pickAllele(stallion.agouti));
  output.innerHTML = `
    <p><strong>Foal genotype:</strong> Extension ${ext}, Agouti ${ag}</p>
    <p><strong>Phenotype:</strong> ${phenotype(ext, ag)}</p>
  `;
});
