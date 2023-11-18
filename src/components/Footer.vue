<template>
    <footer>
        
            <img class="bg-img" src="../assets/images/LooperGroup4.png" alt="">
        
        <section class="container">
            <div class="grid-container">
                <div class="col1">
                    <img src="../assets/images/logo.png" alt="" class="logo">
                    <p>Our goal is to democratize the travel tech industry, and make travel inventories easily accessible</p>
                    <div class="socials">
                        <img src="../assets/images/linkedin.png" alt="" class="social">
                        <img src="../assets/images/twitter.png" alt="" class="social">
                        <img src="../assets/images/instagram.png" alt="" class="social">
                        <img src="../assets/images/facebook.png" alt="" class="social">
                    </div>
                </div>
                <div class="col2">
                    <article class="list">
                        <h3>Developers</h3>
                        <ul>
                            <li>Documentation</li>
                            <li>Support</li>
                            <li>Rate Limit</li>
                        </ul>
                    </article>
                    <article class="list">
                        <h3>Company</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Carrer</li>
                            <li>Contact Us</li>
                        </ul>
                    </article>
                    <article class="list">
                        <h3>Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </article>
                </div>
            </div>
            <div class="copyright">
                <!-- <span class="material-icons icon">copyright</span> -->
                <img src="../assets/images/copyright.png" class="icon" alt="">
                <p>2023 Tiqwa. All rights reserved </p>
            </div>
        </section>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    footer {
        position: relative;
        border: 1px solid transparent;
    }

    .bg-img {
        position: absolute;
        width: 55.2rem;
        bottom: 0;
        z-index: -1;
    }

    
    
    .container {
        width: 90%;
        margin: 0 auto;
    }

    .grid-container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 3.87rem;
    }

    .col1 {
        width: 17.56rem;
    }

    .col1, .socials, .list, ul {
        display: flex;
        flex-direction: column;
        gap: 1.16rem;
    }

    .socials {
        flex-direction: row;
        gap: 0.4rem;
        cursor: pointer;
        /* width: auto; */
    }

    .col1 p {
        color: var(--gray-3);
        font-family: Product Sans;
        font-size: 0.96rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.54rem;
    }

    .logo {
        width: 4.38rem;
    }

    .col2 {
        display: flex;
        align-items: center;
        gap: 7.12rem;
    }

    .list, ul {
        gap: 0.5rem;
    }

    .list h3, li, .copyright p {
        color: var(--white);
        font-family: Nunito Sans;
        font-size: 0.96rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.54rem;
    }

    .list li {
        color: var(--gray-3);
    }

    .copyright {
        width: 16rem;
        margin: 6.28rem auto 3.9rem;
        display: flex;
        align-items: center;
        gap: 0.34rem;

    }

    .copyright p {
        color: #9EACC0;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.23rem;
    }
    

</style>