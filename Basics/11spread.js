// a = [200, 500, 900, 100, 11]
// b = Math.max(a)
// c = Math.min(a)
// console.log("Max = ", b, "Min = ", c)

// a = [200, 500, 900, 100, 11]
// b = Math.max(...a)
// c = Math.min(...a)
// console.log("Max = ", b, "Min = ", c)


// const dc = ['Batman', 'Superman', 'RobinHood', 'CatWoman']
// const marvel = ['Iron Man', 'Captain America', 'Thor']
// const superheroes = [...dc, ...marvel]
// console.log(superheroes)
// console.log(...superheroes)

const Players = {
    Attacker: "Suarez",
    Midfielder: "Modric",
    Defender: "Ramos"
}

const Board = {
    Captain: "Messi",
    Manager: "Pep Guardiola"
}

const DreamTeam = { ...Board, ...Players, Team: "Barcelona" }
console.log(DreamTeam)