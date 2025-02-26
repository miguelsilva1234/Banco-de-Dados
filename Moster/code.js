
function banco(){
    const bd = [
        {id:1,login:"neymar", senha:"1234",nome:"Neymar",email:"neymar@gmail.com"},
        {id:2,login:"sebastiao", senha:"1234@",nome:"Sebastiao",email:"sebastiao@gmail.com"},
        {id:3,login:"messi", senha:"12345",nome:"Messi",email:"messi@gmail.com"}
    ]
    let dados = JSON.stringify(bd)

    localStorage.setItem("banco", dados)

    console.log(dados)
}
