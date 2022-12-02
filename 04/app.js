new Vue({
  el: '#app',
  data: {
    gameIsInit: false,
    loading: false,
    pointsP: 0,
    pointsM: 0,
    players: {
      me: 'PLAYER',
      monster: 'MONSTER'
    },
    actionType: {
      attack: 'ATTACK',
      special: 'SPECIAL',
      heal: 'HEAL'
    },
    history: [],
    points: {
      player: 100,
      monster: 100
    },

  },
  methods: {
    startGame: function(event) {
      console.log(event);
      this.gameIsInit = !this.gameIsInit;
    },
    resetGame: function() {
      this.history = [];
      this.points = {
        player: 100,
        monster: 100
      };
      this.gameIsInit = false;
    },
    endGame: function() {
      this.gameIsInit = false;
      this.loading = true;
      setTimeout(() => {
        this.resetGame();
        this.loading = false;
      }, 3000);
    },
    giveUp: function() {
      this.history.push(`MONSTER WINS!`);
      this.endGame();
    },
    performAction(type) {
      console.log("🚀 ~ file: app.js:32 ~ performAction ~ type", type)
      this.render(type);
      this.checkWinningConditions();
    },

    render: function(type) {
      console.log("🚀 ~ file: app.js:41 ~ type", type);
      console.log("🚀 ~ file: app.js:53 ~ this.history", this.history);
      this.setPoints(1, 10);
      switch (type) {
        case this.actionType.attack:
          this.dealDamage();
          break;
        case this.actionType.special:
          this.setPoints(10, 20);
          this.dealDamage();
          break;
        case this.actionType.heal:
          this.performHeal();
          break;
        default:
          break;
      }
    },
    setPoints(min, max) {
      this.pointsP = this.random(min, max);
      this.pointsM = this.random(min, max);
    },
    dealDamage() {
      this.history.push(`PLAYER HITS MONSTER FOR: ${this.pointsP}`);
      this.history.push(`MONSTER HITS PLAYER FOR: ${this.pointsM}`);
      this.points.player -= this.pointsM;
      this.points.monster -= this.pointsP;
    },
    performHeal() {
      this.history.push(`PLAYER HEALS HIMSELF FOR: ${this.pointsP}`);
      this.history.push(`MONSTER HITS PLAYER FOR: ${this.pointsM}`);
      this.points.player += this.pointsP;
      this.points.player -= this.pointsM;
    },
    checkWinningConditions() {
      if (this.points.player > 100) this.points.player = 100;
      if (this.points.monster > 100) this.points.monster = 100;
      if (this.points.player < 0 || this.points.monster < 0) {
        this.endGame();
      }
      if (this.points.player < 0 && this.points.monster < 0) {
        this.history.push(`DRAW!`);

      } else if (this.points.player < 0) {
        this.points.player = 0;
        this.history.push(`MONSTER WINS!`);
      } else if (this.points.monster < 0) {
        this.points.monster = 0;
        this.history.push(`PLAYER WINS!`);
      }
    },
    random: function(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getClass: function(index) {
      return index % 2 === 0 ? { 'monster-turn': true } : { 'player-turn': true };
    }

  },
  computed: {
    outputHistory: function() {
      return [...this.history].reverse();
    },
  }
})
