<template>
  <div id="app">
    <div class="hero-img">
      <div class="hero-shadow"></div>
      <div class="container">
        <h1>Turniej Axelroda</h1>
        <button @click="runTournament">Rozpocznij Turniej</button>
        <div id="results">
          <results-table :results="results"></results-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultsTable from './components/ResultsTable.vue';
import strategies from './strategies';

export default {
  name: 'App',
  components: {
    ResultsTable
  },
  data() {
    return {
      results: []
    };
  },
  methods: {
    myPenalty(myDecision, hisDecision) {
      if (myDecision === -1 && hisDecision === -1) return 7;
      if (myDecision === 1 && hisDecision === 1) return 3;
      if (myDecision === -1 && hisDecision === 1) return 0;
      if (myDecision === 1 && hisDecision === -1) return 10;
    },
    playGame(strategyA, strategyB, rounds = 1000) {
      let scoreA = 0;
      let scoreB = 0;
      let historyA = [];
      let historyB = [];

      for (let i = 0; i < rounds; i++) {
        const moveA = strategyA.decision(historyA, historyB);
        const moveB = strategyB.decision(historyB, historyA);
        scoreA += this.myPenalty(moveA, moveB);
        scoreB += this.myPenalty(moveB, moveA);
        historyA.push(moveA);
        historyB.push(moveB);
      }
      return { scoreA, scoreB, historyA, historyB };
    },
    runTournament() {
      const results = [];

      for (const strategyNameA in strategies) {
        for (const strategyNameB in strategies) {
          const strategyA = strategies[strategyNameA];
          const strategyB = strategies[strategyNameB];

          // Resetowanie strategii przed każdą grą
          strategyA.reset();
          strategyB.reset();

          const { scoreA, scoreB, historyA, historyB } = this.playGame(strategyA, strategyB);
          const cooperationsA = historyA.filter(move => move === 1).length;
          const defectionsA = historyA.filter(move => move === -1).length;
          const cooperationsB = historyB.filter(move => move === 1).length;
          const defectionsB = historyB.filter(move => move === -1).length;

          results.push({
            strategyA: strategyA.name,
            strategyB: strategyB.name,
            scoreA,
            scoreB,
            cooperationsA,
            defectionsA,
            cooperationsB,
            defectionsB
          });
        }
      }
      this.results = results;
    }
  }
};
</script>

<style src="./assets/style.css"></style>
