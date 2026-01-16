<template>
  <div class="header-wrapper">
    <header class="header-section">
      <h1>Hi, I'm Eli!</h1>
    </header>
    <nav class="menu-space" id="navbar">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#goals">Goals</a>
      <a href="#app">Guestbook</a>
      <a href="#gallery">Picture Gallery</a>
      <a href="resources.html">Resources</a>
    </nav>
  </div>

  <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="30">
    <div class="background-container" id="about">
      <img :src="getImgUrl('me-nobg.png')" alt="Eli" class="left-character body-behind">
      <img :src="getImgUrl('me-nobg.png')" alt="Eli" class="left-character head-overlap">
      <div class="content-area">
        <blockquote class="custom-quote">
          Hi! I’m <strong> Elijah Crisehea M. Nollen </strong>, you can call me Eli. A student passionate about analytics and turning data into actionable insights. I enjoy exploring patterns and solving problems. Fun fact: Computer Science wasn’t my first choice, I initially wanted to study Industrial Engineering. But thanks to a scholarship from SM, I ended up in Computer Science, and I’ve grown to love the field even more! Outside of academics, I enjoy reading books and watching movies.
        </blockquote>
      </div>
    </div>

    <section id="education">
      <div class="direction-container">
        <span class="direction-text">Click on a circle</span>
      </div>
      <div class="timeline-wrapper" id="wrapper" @mousemove="handleTimelineMove" @click="resetTimeline">
        <div class="timeline-line" :style="{ transform: `translateX(-${timelineScroll}px)` }">
          <div 
            v-for="(item, index) in educationData" 
            :key="index" 
            class="item"
            :class="{ active: activeTimelineIndex === index }"
          >
            <div class="content">
              <h2>{{ item.school }}</h2>
              <p>{{ item.text }}</p>
            </div>
            <div class="dot" @click.stop="activeTimelineIndex = index"></div>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="skills">
      <div class="skills-container">
        <h3 class="skills-title">IT Experience</h3>
        <div class="skills-box">
          <div class="base-layer">
            <img v-for="icon in skillIcons" :key="icon" :src="getImgUrl(icon)" class="skills-icon" :alt="icon">
          </div>
        </div>
      </div>
    </section>

    <section id="hobbies" class="hobbies-section">
      <div class="container">
        <h3 class="skills-title">My Hobbies</h3>
        <div class="hobbies-grid">
          <div v-for="hobby in hobbiesList" :key="hobby.id" class="hobby-item">
            <div class="hobby-icon-box">
              <img :src="getImgUrl(hobby.img)" :alt="hobby.name">
            </div>
            <button class="doodle-btn text-capitalize" data-bs-toggle="modal" :data-bs-target="`#${hobby.id}Modal`">
              {{ hobby.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="goals" class="goal-page">
      <div class="goal-grid">
        <div class="goal-card card-manifesto">
          <div class="emoji-pop"><span>☺</span><span>☻</span><span>☺</span></div>
          <h3 class="skills-title"> Goals & <br> Dreams</h3>
        </div>
        <div v-for="goal in goals" :key="goal.id" :class="['goal-card', goal.class]">
          <div class="emoji-pop"><span v-for="e in goal.emojis" :key="e">{{ e }}</span></div>
          <span class="goal-id">{{ goal.id }} // {{ goal.title }}</span>
          <p v-html="goal.desc"></p>
        </div>
      </div>
    </section>

    <section id="app" class="doodle-guestbook">
      <header class="guestbook-header">
        <h3 class="skills-title"> Leave a little trace of yourself! </h3>
      </header>
      <div class="guestbook-main">
        <div class="form-container">
          <div class="hand-drawn-box">
            <h3>Sign the Guestbook</h3>
            <form @submit.prevent="submitForm">
              <input type="text" placeholder="Your Name" v-model="formData.name">
              <input type="email" placeholder="Your Email (optional)" v-model="formData.email">
              <div class="message-area">
                <textarea placeholder="Say something (optional)" v-model="formData.message"></textarea>
                <div class="sticker-dropzone">
                  <p v-if="!selectedSticker">Sticker here</p>
                  <img v-else :src="getImgUrl(selectedSticker)" alt="Sticker preview" class="active-sticker-preview">
                </div>
              </div>
              <button type="submit" class="doodle-submit">SUBMIT</button>
              <div class="guestbook-icons">
                <a href="https://github.com/elijahnollen" target="_blank" class="guest-icon-link"><img :src="getImgUrl('github.png')" class="custom-icon"></a>
                <a href="https://www.linkedin.com/in/elijah-nollen-527563321/" target="_blank" class="guest-icon-link"><img :src="getImgUrl('linkedin.png')" class="custom-icon"></a>
                <a href="mailto:emnollen@student.apc.edu.ph" class="guest-icon-link"><img :src="getImgUrl('outlook.png')" class="custom-icon"></a>
              </div>
            </form>
          </div>
        </div>
        <div class="sticker-container">
          <div class="hand-drawn-box sticker-board">
            <h3>Sticker Box</h3>
            <div class="sticker-grid">
              <img v-for="(src, index) in stickerAssets" :key="index" :src="getImgUrl(src)" @click="selectedSticker = src" :class="{ 'is-selected': selectedSticker === src }" class="doodle-sticker">
            </div>
            <p class="hint-text">(Click a sticker to add it!)</p>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery-section">
      <button class="nav-btn btn-prev" @click="rotateGallery('prev')">
        <span class="arrow"> &lt; </span> <small>BACK</small>
      </button>
      <div class="gallery-container">
        <div class="gallery-wheel" :style="{ transform: `rotate(${currentRotation}deg)` }">
          <div v-for="(img, idx) in galleryItems" :key="idx" :class="['gallery-item', `item-${idx+1}`, img.type]">
            <img :src="getImgUrl(img.src)" alt="Gallery">
          </div>
        </div>
      </div>
      <button class="nav-btn btn-next" @click="rotateGallery('next')">
        <span class="arrow"> &gt; </span> <small>NEXT</small>
      </button>
      <h3 class="gallery-caption">Picture Gallery</h3>
    </section>

    <div class="modal fade" id="moviesModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fw-bold">Movies/Series</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row g-5">
                <div v-for="movie in movies" :key="movie.name" class="col-4">
                  <div class="movie-item text-center">
                    <img :src="getImgUrl(movie.img)" :alt="movie.name">
                    <p class="item-label">{{ movie.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Helper function to resolve paths from src/assets/img
const getImgUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};

// 1. Timeline Logic
const activeTimelineIndex = ref(null);
const timelineScroll = ref(0);
const educationData = [
  { school: 'Bernardo College', date: '2018-2021', text: 'Spent most of junior high school here...' },
  { school: 'Las Piñas National High School', date: '2021-2022', text: 'Completed 10th grade here...' },
  { school: 'Philippine Christian University', date: '2022-2024', text: 'STEM strand student with highest honors...' },
  { school: 'Asia Pacific College', date: '2024-2028', text: 'BSCS student focused on Cybersecurity...' }
];

const handleTimelineMove = (e) => {
  const moveX = (e.clientX / window.innerWidth) * 1200;
  timelineScroll.value = Math.max(0, moveX);
};
const resetTimeline = () => { activeTimelineIndex.value = null; };

// 2. Data Lists
const skillIcons = ['sap.png', 'powerbi.png', 'sql.png', 'python.png', 'css.png', 'html.png', 'linux.png', 'cisco-packet-tracer.png'];
const hobbiesList = [
  { id: 'movies', name: 'Movies', img: 'movies.png' },
  { id: 'books', name: 'Books', img: 'books.png' },
  { id: 'blogs', name: 'Blogs', img: 'blogs.png' }
];

const goals = [
  { id: '01', title: 'SKILLS', class: 'card-skills', emojis: ['ツ','☺'], desc: 'Strengthen my <strong>technical and analytical</strong> skills.' },
  { id: '02', title: 'BALANCE', class: 'card-vibe', emojis: ['♥','☺'], desc: 'Maintain balance, <strong>grow academically</strong> while enjoying life.' },
  { id: '03', title: 'IMPACT', class: 'dark-theme', emojis: ['★','☺'], desc: 'Making a <strong>positive impact</strong> beyond financial success.' },
  { id: '04', title: 'PURPOSE', class: 'wide-theme', emojis: ['☀','☺','ヅ'], desc: 'Live a <strong>purpose-driven life</strong> focused on service.' }
];

const movies = [
  { name: 'Interstellar', img: 'interstellar.jpg' },
  { name: 'Little Women', img: 'little_women.jpeg' },
  { name: 'Anne with an E', img: 'anne_with_an_e.jpg' },
  { name: 'Avatar', img: 'avatar.jpg' }
];

// 3. Guestbook Logic
const formData = reactive({ name: '', email: '', message: '' });
const selectedSticker = ref(null);
const stickerAssets = ['star.png', 'thinking.png', 'lol.png', 'in-love.png'];

const submitForm = () => {
  if (!formData.name) return alert("Please enter your name!");
  console.log("Saving:", { ...formData, sticker: selectedSticker.value });
  alert("dog");
};

// 4. Gallery Logic
const currentRotation = ref(0);
const galleryItems = [
  { src: 'minnie.jpg', type: 'vertical' },
  { src: 'JPCS_general_assembly.JPG', type: 'horizontal' },
  { src: 'sea.jpg', type: 'vertical' },
  { src: 'layag.jpg', type: 'horizontal' },
  { src: 'paragliding.jpg', type: 'vertical' },
  { src: 'rai.jpg', type: 'horizontal' }
];

const rotateGallery = (dir) => {
  currentRotation.value += (dir === 'next' ? -60 : 60);
};
</script>

<style>
@import "@/assets/css/header-menu.css";
@import "@/assets/css/about.css";
@import "@/assets/css/education.css";
@import "@/assets/css/skills.css";
@import "@/assets/css/hobbies.css";
@import "@/assets/css/gallery.css";
@import "@/assets/css/goals.css";
@import "@/assets/css/guestbook.css";
</style>