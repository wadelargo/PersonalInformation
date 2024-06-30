<template>
  <div class="personal-information">
    <center><h1>About me</h1></center>
    <hr>
    <div class="info-container">
      <div class="info-item">
        <label for="name">"Dedicated and detail-oriented Software Engineer with a passion for developing efficient and scalable solutions. Demonstrated expertise in full-stack development, complemented by a strong foundation in algorithms and problem-solving. Proven ability to collaborate with cross-functional teams to deliver high-quality software solutions"</label>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.personal-information {
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #007BFF;
  margin-bottom: 20px;
}

h1:hover {
  color: #d93025;
}

label {
  font-size: 1.2em;
  color: #495057;
  align-self: flex-start;
}

.info-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.info-item {
  flex: 1;
  margin: 10px;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.info-item:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

span {
  margin: 10px 0;
  font-size: 1.1em;
  color: #333;
  display: block;
}
</style>
