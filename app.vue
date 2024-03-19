<template>
  <Header></Header>
  <Nav></Nav>
  <main class="main">
    <NuxtPage />
  </main>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  gap: 95px;
  padding: 0 0 116px;
  margin: 0 auto;

}

:root {
  --font-family: "Lato", sans-serif;
  --second-family: "Roboto", sans-serif;

  color: #1f2432;
  background-color: #fff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;

  max-width: 1280px;
  margin: 0 auto;
}

h1,
h2,
h3,
p {
  margin: 0;
  font-family: var(--font-family);
}
</style>