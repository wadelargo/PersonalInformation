<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <div class="header">
        <!-- Add your picture here -->
        <img src="https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/439246560_346041438483142_6738095105484405457_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH5ZBu5iwxjjnFez6afcYMzUowQfQwqEwdSjBB9DCoTB_VDzRiFheruZPoZYBow0kF2PqdSkGKzrrSs63OVhtUG&_nc_ohc=0ucA5M64u-4Q7kNvgEV0jyP&_nc_ht=scontent.fceb1-4.fna&oh=00_AfBs8DUzQYc38aI9xH03Hm76kjmCmFOF74M1HF1IldkKuA&oe=6638BE0F" alt="My Picture" class="profile-picture" />
        <h1 class="name">John Meward L. Lanoy</h1>
        <h3 class="subtitle">Bachelor of Science Information Technology 3</h3>
      </div>
      <nav class="navigation">
        <ul>
          <li><RouterLink to="/"><i class="fas fa-user"></i> About Me</RouterLink></li>
          <li>
            <div class="email-box">
              <RouterLink to="/Portfolio"><i class="fas fa-briefcase"></i> EMAIL ME</RouterLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.container {
  display: flex;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to right, #e6f3ff, #cfd9e9); /* Updated gradient background */
}

.sidebar {
  width: 300px;
  background: #f4f7fa; /* Updated sidebar background */
  color: #444;
  padding: 20px;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 30px; /* Increased margin for better separation */
}

.profile-picture {
  width: 150px; /* Adjusted profile picture size */
  height: 150px;
  border-radius: 50%; /* Circular profile picture */
  object-fit: cover;
  margin-bottom: 20px;
}

.name {
  margin-bottom: 10px;
  font-size: 2em;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.2em;
  color: #666;
}

.navigation {
  margin-top: 20px;
}

.navigation ul {
  list-style-type: none;
  padding: 0;
}

.navigation li {
  margin-bottom: 10px;
}

.navigation a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  font-size: 1.1em;
  transition: transform 0.2s ease, background-color 0.3s ease, color 0.3s ease;
  padding: 10px;
}

.navigation i {
  margin-right: 10px;
}

.navigation a:hover {
  background-color: #ecf0f1;
  color: #3cdce7;
  transform: translateX(5px);
}

.content {
  flex: 1;
  padding: 20px;
}

.content h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.content p {
  color: #555;
  line-height: 1.6;
  font-size: 1.1em;
}

.email-box {
  background-color: #0c0d0f;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.email-box:hover {
  background-color: #2fd6ba;
}
</style>
