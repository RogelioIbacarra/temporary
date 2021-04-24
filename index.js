// "let" if changable and "const" if constant
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const username = document.getElementById("username");
const date = document.getElementById("date");
const address = document.getElementById("address");
const yearlevel = document.getElementById("yearlevel");
const course = document.getElementById("course");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const tableBody = document.querySelector("tbody");

let ID = 1;

function addStudent(){

    let row = document.createElement("tr");
    row.id = "student-"+ID;
    // <tr> </tr>
    row.classList.add("table-active");

    let id = document.createElement("th");
    id.scope = "row";
    id.innerHTML = ID;
    row.appendChild(id);
// name
    let firstNameValue = firstName.value;
    let newFirstNameEl = document.createElement("td");
    newFirstNameEl.innerHTML = firstNameValue;
    row.appendChild(newFirstNameEl);
// lastname
    let lastNameValue = lastName.value;
    let newlastNameEl = document.createElement("td");
    newlastNameEl.innerHTML = lastNameValue;
    row.appendChild(newlastNameEl);
// username
    let usernameValue = username.value;
    let usernameEl = document.createElement("td");
    usernameEl.innerHTML = usernameValue;
    row.appendChild(usernameEl);
// date
    let dateValue = date.value;
    let dateEl = document.createElement("td");
    dateEl.innerHTML =  dateValue;
    row.appendChild(dateEl);
// address
    let addressValue = address.value;
    let addressEl= document.createElement("td");
    addressEl.innerHTML = addressValue;
    row.appendChild(addressEl);
// yearlevel
    let yearlevelValue = yearlevel.value;
    let yearlevelEl = document.createElement("td");
    yearlevelEl.innerHTML = yearlevelValue;
    row.appendChild(yearlevelEl);
// course
    let courseValue = course.value;
    let courseEl = document.createElement("td");
    courseEl.innerHTML = courseValue;
    row.appendChild(courseEl);
// email
    let emailValue = email.value;
    let emailEl = document.createElement("td");
    emailEl.innerHTML = emailValue;
    row.appendChild(emailEl);
//edit (Not functional kamo nay bahala. ily)
    let editTd = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.id = "student-"+ID;
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");
    editBtn.classList.add("btn-block");
    editBtn.innerHTML = "Edit";

    editBtn.onclick = editStudent;

    editTd.appendChild(editBtn);
    row.appendChild(editTd)
    
//remove button
    let removeTd = document.createElement("td");
    let removeBtn = document.createElement("button");
    removeBtn.type = "submit";
    removeBtn.classList.add("btn");
    removeBtn.classList.add("btn-primary");
    removeBtn.classList.add("btn-block");
    removeBtn.innerHTML = "Remove";
    removeBtn.onclick = () => {
        removeBtn.parentElement.parentElement.remove();
        console.log("remove");
    };

    removeTd.appendChild(removeBtn);
    row.appendChild(removeTd);

    tableBody.appendChild(row);

    ID++;

    firstName.value = "";
    lastName.value = "";
    username.value = "";
    date.value = "";
    address.value = "";
    yearlevel.value = "";
    course.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";

}

function editStudent(e){

    let id = e.target.id;

    let row = document.querySelector(`tr #${id}`)

    console.log(row);
    let data = row.childNodes;
    console.log(data);
}


{/* <tr class="table-active">
<th scope="row">1</th>
<td>Rogelio Jr</td>
<td>Ibacarra</td>
<td>admiral</td>
<td>February 26,2000</td>
<td>Cagayan de oro City</td>
<td>3 year</td>
<td>BSCS</td>
<td>20180015162@my.xu.edu.ph</td>
<td><button type="submit" class="btn btn-primary btn-block" id="loginbtn">Edit</button></td>
<td><button type="submit" class="btn btn-primary btn-block" id="loginbtn">Remove</button></td>
</tr> */}