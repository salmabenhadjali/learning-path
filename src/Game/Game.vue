<template>
  <div>
    <section class="row">
      <div class="small-5 columns" v-for="gamer in gamers">
        <h1 class="text-center">{{ gamer.name }}</h1>
        <div class="healthbar">
          <div
            class="healthbar text-center"
            style="background-color: green; margin: 0; color: white"
            :style="{ width: gamer.score + '%' }"
          >
            {{ gamer.score }}
          </div>
        </div>
      </div>
    </section>
    <section class="row controls" v-if="!gameOn">
      <div class="small-12 columns">
        <button id="start-game" @click="startGame">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls" v-else>
      <div class="small-12 columns">
        <button id="attack" @click="attack">ATTACK</button>
        <button id="special-attack" @click="specialAttack">
          SPECIAL ATTACK
        </button>
        <button id="heal" @click="heal">HEAL</button>
        <button id="give-up" @click="giveUp">GIVE UP</button>
      </div>
    </section>
    <section class="row log" v-if="turns.length">
      <div class="small-12 columns">
        <ul v-for="turn in turns">
          <li :class="turn.isPlayer ? 'player-turn' : 'monster-turn'">
            {{ turn.text }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script src="./Game.js"></script>

<style scoped src="./foundation.min.css"></style>
<style scoped src="./Game.css"></style>
