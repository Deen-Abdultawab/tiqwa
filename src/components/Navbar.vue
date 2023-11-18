<template>
  <nav>
    <div class="nav-center">
      <div class="logo font-Nunito">
        Logo
      </div>
      <ul class="nav-links">
        <li>About Us</li>
        <li>Pricing</li>
        <li>FAQs</li>
        <li>Blog</li>
        <li>Terms & Conditions</li>
      </ul>
      <div class="nav-btns">
        <button class="btn login-btn">Log In</button>
        <button class="btn signup-btn">Get Started</button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .font-Nunito, li {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
nav {
    padding: 1.16rem 0;
    width: 100%;
    border: 1px solid red;
  }

  .nav-center {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto 1fr auto;
  }

  .logo, li {
    color: var(--white);
    cursor: pointer;
  }

  .logo {
    color: var(--white);
    font-size: 1.54rem;
    font-weight: 700;
  }

  
  li {
    color: var(--white);
    font-size: 0.77rem;
    border-radius: 0.2rem;
    padding: 0.7rem 0;
  }

  .nav-btns {
    height: 100%;
    display: flex;
    gap: 1.5rem;
  }

  .btn {
    padding: 0.7rem 1.9rem;
    height: 100%;
    background: var(--main-branding-light);
    color: var(--main-branding-primary);
    font-family: Nunito Sans Medium;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 0.19rem;
  }

  .signup-btn {
    padding: 0.7rem 0.77rem;
    background: var(--main-branding-primary);
    color: var(--white);
  }

</style>
