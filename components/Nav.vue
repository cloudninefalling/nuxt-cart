<template>
  <nav class="nav">
    <NuxtLink class="nav__link" to="/">Главная</NuxtLink>
    <div class="nav__separator"></div>
    <NuxtLink class="nav__link nav__link_inactive" to="/">Корзина</NuxtLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.nav__link {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #33374e;
  text-decoration: none;
  transition: all 0.2s;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
}

.nav__link:hover {
  border-bottom: 1px solid;
}

.nav__link_inactive {
  color: #797b86;
}

.nav__separator {
  width: 5px;
  height: 8px;
  background-image: url("~/assets/triangle.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>