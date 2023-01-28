str = " ";

let db = [
  {
    name: "ABC",
    email: "abc@gmail.com",
    gender: "Male",
    website: "www.abc.com",
    skills: "html"
  }
];

function getValsRadio() {
  let ele = document.getElementsByName("gender");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) return ele[i].value;
  }
}

const here = document.getElementById("here");

function getValsChecks() {
  let ele = document.getElementsByName("skill");
  valStr = "";

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) valStr += ele[i].value + " ";
  }
  return valStr;
}

function reset() {
  document.getElementById("name").value = "";
  document.getElementById("ema").value = "";
  document.getElementById("web").value = "";
  document.getElementById("imgUrl").value = "";
}

function adder() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("ema").value;
  let website = document.getElementById("web").value;
  let gender = getValsRadio();
  let skills = getValsChecks();

  if (
    name.length > 1 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
    website.length > 7
  ) {
    db.push({
      name: name,
      email: email,
      website: website,
      gender: gender,
      skills: skills
    });
  } else {
    alert("invalid inputs");
  }

  str = "";

  renders();
  reset();
}

renders();

function renders() {
  db.forEach((element) => {
    str += `
        <tr>
            <td>
                <span class="name">${element.name}</span>
                <span class="gender">${element.gender}</span>
                <span class="email">${element.email}</span>
                <span class="website">${element.website}</span>
                <span class="skills">${element.skills}</span>
            </td>
            <td>
                <img src="./img.jpg" alt="">
            </td>
        </tr>`;

    here.innerHTML = str;
  });
}
