// Table
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let tableContainer = document.getElementById("table");
let table = document.createElement("table");
tableContainer.appendChild(table);

function generateTable(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();

  for (let key of tableInfo.tableHeader) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);

    th.appendChild(text);
    row.appendChild(th);
  }

  for (info of tableInfo.tableContent) {
    let row = table.insertRow();
    for (key in info) {
      let cell = row.insertCell();
      let text = document.createTextNode(info[key]);
      cell.appendChild(text);
    }
  }
}

generateTable(table);

// Ordered List
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let listContainer = document.getElementById("table");
let oList = document.createElement("ol");
listContainer.appendChild(oList);

function generateList(oList) {
  for (info of list) {
    let li = document.createElement("li");
    oList.appendChild(li);
    let text = document.createTextNode(info);
    li.appendChild(text);
  }
}

generateList(oList);

// Dropdown box
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let dropBoxContainer = document.getElementById("d-box");
let dBox = document.createElement("select");
dropBoxContainer.appendChild(dBox);

function generateDBox(dBox) {
  for (info of dropDownList) {
    let option = document.createElement("option");
    dBox.appendChild(option);
    let text = document.createTextNode(info.content);
    option.appendChild(text);
  }
}

generateDBox(dBox);

{
  /* <select name="address" id="address">
  <option value="Newark">Newark</option>
  <option value="Santa Clara">Santa Clara</option>
  <option value="Union City">Union city</option>
  <option value="Daly city">Daly city</option>
  <option value="San Jose">San Jose</option>
</select>; */
}
