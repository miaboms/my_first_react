//gracias a que llamamos la libreria de react Dom ahora tenemos una variable global 
//llamada ReactDOM, que tiene el metodo render(), que nos permite renderizar o poner cosas en
// la pantalla de nuestra webpage
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("raiz"))
//el primer parametro es para que es lo que quiero poner en mi pagina y el segundo es donde,
//en este parametro busco el div a traves de su id con el metodo getElementById()
ReactDOM.render(<p1>Hola, me llamo Mia y estoy aprendiendo a usar React!</p1>, document.getElementById('raiz'))

ReactDOM.render(
    <ul><li>queso</li><li>jamon</li><li>salame</li></ul>,
    document.getElementById('raiz')
    )

    //making a component called Main content
//lo hacemos a traves de una funcion
function Maincontent(){
    return (<h2>I made a component on React</h2>)
}
ReactDOM.render(
//calling my function
    <Maincontent/>,
    document.getElementById('raiz')
)
const h1 = document.createElement("h1")
h1.textContent = 'esto es programacion imperativa'
h1.className='header'
document.getElementById('raiz').append(h1)
