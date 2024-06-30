<template>
  <div class="container">
    <div class="header">
      <h1>Portfolio</h1>
      <button class="add-button" @click="addProject">Add</button>
    </div>

    <!-- Loop through projects and display them -->
    <div v-for="(project, index) in projects" :key="index" class="project" @mouseenter="hoveredProjectIndex = index" @mouseleave="hoveredProjectIndex = null">
      <h2>{{ project.title }}</h2>
      <p>Description: {{ project.description }}</p>
      <a :href="project.link" target="_blank">View Project</a>
      <button v-if="hoveredProjectIndex === index" class="delete-button" @click="deleteProject(index)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Instagram Project', description: 'This is my first project, showcasing my skills in web development...', link: 'https://www.instagram.com/' },
        { title: 'Facebook Project', description: 'A responsive website developed to demonstrate my design capabilities...', link: 'https://www.facebook.com/' },
        { title: 'Youtube Project', description: 'An interactive web application that I built using the latest technologies...', link: 'https://www.youtube.com/' }
      ],
      hoveredProjectIndex: null
    };
  },
  methods: {
    addProject() {
      // Add a new project to the projects array
      const newProject = {
        title: 'New Project',
        description: 'Description of the new project...',
        link: '#'
      };
      this.projects.push(newProject);
    },
    deleteProject(index) {
      // Remove the project at the specified index from the projects array
      this.projects.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-button {
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db; /* Blue */
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.add-button:hover {
  filter: brightness(1.2); /* Increase brightness on hover */
}

.project {
  position: relative;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project h2 {
  color: #2c3e50;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.project p {
  color: #555;
  font-size: 1.2em;
  margin-bottom: 8px;
}

.project a {
  color: #4c88a3;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  display: block;
  margin-top: 10px;
}

.delete-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c; /* Red */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c0392b; /* Darker red */
}
</style>