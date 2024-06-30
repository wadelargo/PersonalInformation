<template>
  <div class="experience-container">
    <div class="work-experience"> 
      <div class="position">
        <h3>Senior Software Engineer</h3> 
        <h4>ABC Company</h4> 
        <p class="date">October 19, 1999 - Present</p> 
        <p class="duties">Responsibilities:</p>
        <ul class="responsibilities"> 
          <li>Designing, developing, and maintaining enterprise applications</li> 
          <li>Collaborating with cross-functional teams to define, design, and ship new features</li> 
          <li>Conducting code reviews to ensure adherence to coding standards and best practices</li> 
          <li>Providing technical guidance and mentorship to junior engineers</li> 
        </ul> 
      </div>

      <div class="position">
        <h3>Software Engineer</h3> 
        <h4>XYZ Company</h4> 
        <p class="date">January 2018 - December 2019</p> 
        <p class="duties">Responsibilities:</p> 
        <ul class="responsibilities"> 
          <li>Developing web applications using JavaScript, React, and Node.js</li> 
          <li>Implementing unit and integration tests using Jest and Enzyme</li> 
          <li>Collaborating with product managers and designers to define and develop new features</li> 
          <li>Troubleshooting and resolving performance and scalability issues</li> 
        </ul> 
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .experience-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f5f5f5; /* Light background color */
    color: #333;
    font-family: 'Arial', sans-serif;
    padding: 40px 20px;
  }

  .work-experience {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    width: 100%;
  }

  .position {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease; /* Add transition for hover effect */
  }

  .position:hover {
    transform: translateY(-5px); /* Add hover effect */
  }

  h3 {
    color: #007BFF;
    margin-bottom: 10px;
    font-size: 1.5em; /* Increase font size */
  }

  h4 {
    color: #333;
    margin-bottom: 5px;
    font-size: 1.2em; /* Increase font size */
  }

  .date {
    color: #555;
    margin-bottom: 10px;
  }

  .duties {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1.1em; /* Increase font size */
  }

  .responsibilities {
    margin-left: 20px;
    font-size: 1em; /* Adjust font size */
  }

  .responsibilities li {
    margin-bottom: 5px; /* Add margin between list items */
  }
}
</style>
