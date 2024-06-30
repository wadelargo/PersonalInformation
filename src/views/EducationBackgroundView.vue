<template>
  <div class="education-container">
    <div class="education-section">
      <h2>High School:</h2>
      <h4>
        Location: <br>
        Buenos Aires, Tubigon, Bohol <br>
        School Name: <br>
        Holy Cross Acadeny <br>
        S.Y.: <br>
        2015-2020
      </h4>
    </div>
    <div class="education-section">
      <h2>College:</h2>
      <h4>
        Location: <br>
        Cabulijan, Tubigon, Bohol <br>
        College Name: <br>
        Mater Dei College <br>
        Course: <br>
        Bachelor of Science and Information Technology<br>
      </h4>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .education-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    color: #333;
    font-family: 'Arial', sans-serif;
    border: 1px solid #ddd; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    padding: 20px; 
    border-radius: 8px;
  }

  .education-section {
    max-width: 400px;
  }

  h2 {
    color: #007BFF;
    margin-bottom: 10px;
  }

  h4 {
    line-height: 1.6;
  }
}
</style>