export default {
  name: 'Game',
  // Store data to be used
  data() {
    return {
      gameOn: false,
      gamers: [
        { name: 'YOU', score: 100, isPlayer: true },
        { name: 'MONSTER', score: 100, isPlayer: false },
      ],
      turns: [],
    }
  },

  methods: {
    attack() {
      for (let gamer of this.gamers) {
        const damage = this.calculateDamage(3, 10)
        gamer.score -= damage
        this.addTurns(gamer.isPlayer, damage)
        if (this.checkWining(gamer.score, gamer.name)) break
      }
    },

    specialAttack() {
      for (let gamer of this.gamers) {
        const damage = gamer.isPlayer
          ? this.calculateDamage(3, 10)
          : this.calculateDamage(10, 10)
        gamer.score -= damage
        this.addTurns(gamer.isPlayer, damage)
        if (this.checkWining(gamer.score, gamer.name)) break
      }
    },

    heal() {
      this.gamers.forEach(gamer => {
        if (gamer.isPlayer) {
          if (gamer.score <= 90) gamer.score += this.calculateDamage(3, 10)
          else gamer.score = 100
        }
      })
    },

    giveUp() {
      this.gameOn = false
    },

    startGame() {
      this.gameOn = true
      this.gamers.forEach(gamer => (gamer.score = 100))
      this.turns = []
    },

    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },

    checkWining(score, playerName) {
      if (score <= 0) {
        if (confirm('End of the game! ' + playerName + ' lost!  New Game ?')) {
          this.startGame()
        } else {
          this.gameOn = false
        }
        return true
      }
      return false
    },
    addTurns(isPlayer, damage) {
      let msg = ''
      if (isPlayer) {
        msg = 'Player hits monster for '
      } else {
        msg = 'Monster hits player for '
      }
      this.turns.unshift({
        isPlayer: isPlayer,
        text: msg + damage,
      })
    },
  },
}
