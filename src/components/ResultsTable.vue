<template>
  <div>
    <h2>Wyniki Turnieju:</h2>
    <table v-if="results.length">
      <thead>
        <tr>
          <th>Strategia A</th>
          <th>Strategia B</th>
          <th>Wynik A</th>
          <th>Wynik B</th>
          <th>Współpraca A</th>
          <th>Zdrada A</th>
          <th>Współpraca B</th>
          <th>Zdrada B</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results" :key="result.strategyA + result.strategyB">
          <td>{{ result.strategyA }}</td>
          <td>{{ result.strategyB }}</td>
          <td>{{ result.scoreA }}</td>
          <td>{{ result.scoreB }}</td>
          <td>{{ result.cooperationsA }}</td>
          <td>{{ result.defectionsA }}</td>
          <td>{{ result.cooperationsB }}</td>
          <td>{{ result.defectionsB }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p>Brak wyników do wyświetlenia.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsTable',
  props: ['results']
};
</script>
