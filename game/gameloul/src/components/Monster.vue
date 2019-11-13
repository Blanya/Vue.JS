<template>
  <div class="monster">
      <div class="parts">
      <img src="../assets/img/body.jpg"/>
      <img src="../assets/img/head.jpg"/>
      <img src="../assets/img/animal.jpg"/>
      </div>
    <div class="point_first">
          <span class="remaining-points">{{remainingPoints}}</span>
          <span class="life-points">/{{lifePoints}}</span>
    </div>
    <div class="point_scd">
          <span class="remaining-points">{{remainingPoints}}</span>
          <span class="life-points">/{{lifePoints}}</span>
    </div>
    <div class="point_thd">
          <span class="remaining-points">{{remainingPoints}}</span>
          <span class="life-points">/{{lifePoints}}</span>
    </div>
      <h2>Sous-fifre</h2>
  </div>
</template>

<script>
export default {
  name: 'Monster',
  data: function()
  {
      return {
          lifePoints: 50,
          remainingPoints: 50
      }
  },
  computed:
  {
      lifePoints: function()
      {
          return Store.lifePoints;
      }
  }

}
</script>

<style scoped>
img
{
    margin: 1rem;
}
.parts
{
    cursor: pointer;
}
</style>
