export default class Api {
  static token = JSON.parse(localStorage.getItem("@token")) || ""
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`
  }

  static async loginUser(loginData) {
    return await fetch('https://habits-kenzie.herokuapp.com/api/userLogin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
        if (res.token) {

          localStorage.setItem("@token", JSON.stringify(res.token))
          localStorage.setItem("@usr_name", JSON.stringify(res.response.usr_name))
          localStorage.setItem("@usr_image", JSON.stringify(res.response.usr_image))
          window.location.href = "./src/views/Home.views.html"
        } else {
          alert(res.message)
        }
      })
      .catch(err => console.log(err))
  }


  static async updateProfile(update) {
    console.log(update)
    return await fetch("https://habits-kenzie.herokuapp.com/api/user/profile", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.log(err))
  }

  static async createHabit(data) {
    return await fetch("https://habits-kenzie.herokuapp.com/api/habits", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }


  static async readAll() {

    return await fetch("https://habits-kenzie.herokuapp.com/api/habits", {
      method: "GET",
      headers: this.headers
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.log(err))
  }


  static async readByCategory(categoria) {

    return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/category/${categoria}`, {
      method: "GET",
      headers: this.headers
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  static async updateHabit(id, editarHabit) {
    return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(editarHabit)
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.log(err))


  }

  static async completeHabit(id) {
    return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/complete/${id}`, {
      method: "PATCH",
      headers: this.headers,
    })
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.log(err))

  }


  static async deleteHabit(botao_id) {
    console.log(botao_id)
    return await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${botao_id}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(res => res.json())
      .then(res => {
        // localStorage.clear()
        console.log(res)
        return res
      })
      .catch(err => console.log(err))
  }


}

// let login = await Api.loginUser(
//     {
//         email: "grupo3Jardel@mail.com",
//         password: "248ce6d1b9f92685eb668278894af0a8"
//       }
// )




 

// let criarHabito = await Api.createHabit({
//     "habit_title": "bater ponto corretamente",
//     "habit_description": "bater ponto todos os dias nos horários corretos",
//     "habit_category": "Saude"
//   })

// let read = await Api.readAll()


// let lerCategoria = await Api.readByCategory("saude")

// let editarHabito = await Api.updateHabit(187,{
//     "habit_title": "Jogar RPG aos sabados na residencia do Daniel",
//     "habit_description": "Ir aos sabados com a família na residencia do Daniel e jogar um RPG",
//     "habit_category": "lazer"
//   }
//   )

// let complete = await Api.completeHabit(188)
