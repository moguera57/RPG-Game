let fighter = {
    name: 'Fighter',
    img: 'https://placekitten.com/200/200',
    life: 120,
    abilities: [
        attack = {
            name: 'Attack',
            damage: 10
        }
    ]
}
let mage = {
    name: 'Mage',
    img: 'https://placekitten.com/300/200',
    life: 60,
    abilities: [
        attack = {
            name: 'Attack',
            damage: 20
        }
    ]
}
let rogue = {
    name: 'Rogue',
    img: 'https://placekitten.com/400/200',
    life: 80,
    abilities: [
        attack = {
            name: 'Attack',
            damage: 15
        }
    ]
}
let paladin = {
    name: 'Paladin',
    img: 'https://placekitten.com/500/200',
    life: 140,
    abilities: [
        attack = {
            name: 'Attack',
            damage: 5
        }
    ]
}

const characters = [fighter, mage, rogue, paladin]
let characterSelected = false

reset()

$('#resetBtn').click(reset)

function selectDisplay(e, i){
    let ablStr = ''
    let stats = (`<h1>${e.name}</h1>
                    <img width='100' src=${e.img}>
                    <h3>Life: ${e.life}</h3>
                    <h3>Mana: ${e.mana}</h3>
                    <h3>Dodge: ${e.dodge}</h3>
                    <h3>Armor: ${e.armor}</h3>
                  `)
    e.abilities.forEach(function(e){
        ablStr += (`${e.name}, `) 
    });

    ablStr = (`<p>${ablStr}</p>`)

    stats = (`<div id=${i} class="character" value="${e.name}">${stats}${ablStr}</div>`)


    $("#player-select").append(stats)
}

function combatDisplay(character){

    let charStats = $(`<div class="combat-card">
                       <h1>${character.name}</h1>
                       <img width='100' src=${character.img}>
                       <h3>Life: ${character.life}</h3>
                       <h3>Mana: ${character.mana}</h3>
                       </div>
                       `)

    if(character == characterSelected)
        $('#player').append(charStats)
    else
        $('#enemy-select').append(charStats)

}

function init(){
    $('#player-select').empty()
    characters.forEach(combatDisplay)
}

function reset(){
    $('#player-select').empty()
    $('#player').empty()
    $('#enemy').empty()
    for(let i=0; i<characters.length; i++){
        selectDisplay(characters[i], i)
    }
    $('.character').click(function(){
        characterSelected = ($(this).attr('id'))
        characterSelected = characters[characterSelected]
        init()
    })
}