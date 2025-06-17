const loginForm = () => {
    const str = `
    <h3>Login</h3>
    <label>Email</label>
    <input type='email' placeholder='Enter email' name='email' required><br><br>
    <label>Password</label>
    <input type='password' placeholder='Enter password' name='password' required><br><br>
    <p><button onclick='showHome()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    `
    root.innerHTML = str
}

const registerForm = () => {
    const str = `<div>
    <h3>Register</h3>
    <label>Name</label>
    <input type='text' placeholder='Enter name' name='name' required><br><br>
    <label>Email</label>
    <input type='email' placeholder='Enter email' name='email' required><br><br>
    <label>Password</label>
    <input type='password' placeholder='Enter password' name='password' required><br><br>
    <p><button onclick='loginForm()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here</button></p>
    `
    root.innerHTML = str + "</div>"
}

const showHome = () => {
    const str = `
    <h3>Welcome!</h3>
    <p><button>Logout</button></p>
    `
    root.innerHTML = str
}