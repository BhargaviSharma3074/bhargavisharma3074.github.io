let users = [];
let user = {};

const validateUser = () => {
    let email = document.getElementById("txtemail1").value;
    let pass = document.getElementById("txtpass1").value;
    const found = users.find(
        (value) => value.email === email && value.pass === pass
    );
    if (found) {
        showHome();
    }
    else {
        document.getElementById("errorText").innerHTML = "Access Denied!";
    }
};

const userList = () => {
    let x = "<h4>Registered Users: </h4>";
    if(users.length==0)
    {
        return "<p>No registered users.</p>";
    }
    users.forEach(user => {
        x+=`<p> Name: ${user.name}; Email: ${user.email}; Password: ${user.pass}; Balance: ${user.balance}</p>`;
    })
    return x;
};

const loginForm = () => {
    const str = `
    <div style='display:flex'>
    <div>
    <h3>Login</h3>
    <p id='errorText'></p>
    <label>Email</label>
    <input type='email' placeholder='Enter email' id='txtemail1' required><br><br>
    <label>Password</label>
    <input type='password' placeholder='Enter password' id='txtpass1' required><br><br>
    <p><button onclick='validateUser()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    </div>
    <div>
    <h2>List of Users</h2>
    ${userList()}
    </div>
    </div>
    `
    root.innerHTML = str
}

const saveUser = () => {
    let name = document.getElementById("txtname").value;
    let email = document.getElementById("txtemail").value;
    let pass = document.getElementById("txtpass").value;
    users.push({
        name, //name:name - in new model of js, no need to write name and value if both are same, writing once is enough
        email, //email:email
        pass, //pass:pass
        balance: 1000,
    });
    loginForm()
};

const registerForm = () => {
    const str = `<div>
    <h3>Register</h3>
    <label>Name</label>
    <input type='text' placeholder='Enter name' id='txtname' required><br><br>
    <label>Email</label>
    <input type='email' placeholder='Enter email' id='txtemail' required><br><br>
    <label>Password</label>
    <input type='password' placeholder='Enter password' id='txtpass' required><br><br>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here</button></p>
    `
    root.innerHTML = str+"</div>"
}

const showHome = () => {
    const str = `<div>
    <h3>Welcome!</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str+"</div>"
}