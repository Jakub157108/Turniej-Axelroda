const strategies = {
    alwaysCooperate: {
      name: 'Zawsze współpracuje',
      decision: () => 1,
      reset: function() {}
    },
    alwaysDefect: {
      name: 'Zawsze zdradza',
      decision: () => -1,
      reset: function() {}
    },
    randomStrategy: {
      name: 'Losowa',
      decision: () => Math.random() > 0.5 ? 1 : -1,
      reset: function() {}
    },
    titForTat: {
      name: 'Wet za wet',
      history: [],
      decision: function(historyA, historyB) {
        if (historyB.length === 0) return 1;
        return historyB[historyB.length - 1];
      },
      reset: function() {
        this.history = [];
      }
    },
    grudger: {
      name: 'Mściwy',
      history: [],
      decision: function(historyA, historyB) {
        if (historyB.length === 0) return 1;
        if (historyB.includes(-1)) return -1;
        return 1;
      },
      reset: function() {
        this.history = [];
      }
    },
    pavlov: {
      name: 'Pawłow',
      history: [],
      decision: function(historyA, historyB) {
        if (historyA.length === 0) return 1;
        return (historyA[historyA.length - 1] === historyB[historyB.length - 1]) ? 1 : -1;
      },
      reset: function() {
        this.history = [];
      }
    }
  };
  
  export default strategies;
  