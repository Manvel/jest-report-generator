const ul = document.querySelector("#reports");
function generate(data) {
  console.log("data", data);
  const {testFiles} = data;
  if (!testFiles) {
    throw "No test files";
  }
  
  for (const {tests} of testFiles) {
    for (const test of tests) {
      generateItem(test);
    }
  }
}

function generateItem({title, ancestorTitles, status, fullName}) {
  const item = document.createElement("li");
  item.classList.add(status);
  item.textContent = title;
  ul.appendChild(item);
}

fetch("./data.json").then((data) => data.json()).then(generate);