const phaseScores = [
    {name: 'Vinicius Costa', score: 337},
    {name: 'Roger Melo', score: 43},
    {name: 'Alfredo Braga', score: 234},
    {name: 'Ana Paula Rocha', score: 261},
    {name: 'Vinicius Costa', score: 167},
    {name: 'Roger Melo', score: 137},
    {name: 'Alfredo Braga', score: 135},
    {name: 'Ana Paula Rocha', score: 359},
    {name: 'Pedro H. Silva', score: 133}
]

const rogerScore = phaseScores.reduce((acc, score) => {
    if (score.name === 'Roger Melo') {
        acc += score.score
    }
    return acc
}, 0)


console.log(rogerScore)