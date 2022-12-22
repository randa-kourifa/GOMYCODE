function NavBar(navItems) {
    console.log("this is the NavBar" + navItems);
}

function Button(content) {
    return "<button>" + content + "</button>";
}

function App() {
    NavBar(["Home", "About", "Contact"]);
    console.log(Button("Click me"));
}
App()

// transform this function into an arrow function