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

function generateTableByMap(id) {
  //Create table
  let table = document.createElement("table");

  // Create header
  let thead = table.createTHead();
  let row = thead.insertRow();
  tableInfo.tableHeader.map((ele) => {
    let td = row.insertCell();
    td.textContent = ele;
  });

  //Create content
  tableInfo.tableContent.map((ele) => {
    let row = table.insertRow();
    Object.keys(ele).map((key) => {
      let cell = row.insertCell();
      cell.textContent = ele[key];
    });
  });

  // Append to DOM
  let domTarget = document.getElementById(id);
  domTarget.appendChild(table);
}

generateTableByMap("test-table");

//  List
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function generateList(id, type) {
  let listContainer = document.getElementById(id);
  let newList = document.createElement(type);

  let listItem = list.map((info) => {
    let li = document.createElement("li");
    li.textContent = info;
    return li;
  });

  newList.append(...listItem);
  listContainer.appendChild(newList);
}

generateList("o-list", "ol");

generateList("u-list", "ul");

// Dropdown box
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function generateDBox(id) {
  let dropBoxContainer = document.getElementById(id);
  let dBox = document.createElement("select");

  let list = dropDownList.map(({ value, content }) => {
    let selection = document.createElement("option");
    selection.value = value;
    selection.textContent = content;
    return selection;
  });

  dBox.append(...list);
  dropBoxContainer.appendChild(dBox);
}

generateDBox("d-box");

{
  /* <select name="address" id="address">
  <option value="Newark">Newark</option>
  <option value="Santa Clara">Santa Clara</option>
  <option value="Union City">Union city</option>
  <option value="Daly city">Daly city</option>
  <option value="San Jose">San Jose</option>
</select>; */
}
