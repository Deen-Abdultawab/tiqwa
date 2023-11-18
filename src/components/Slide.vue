<template>
    <section class="review">
        <div class="text">
            <h3 class="hero">Read our customers reviews</h3>
            <p class="desc">We understand how tedious it has been over the years to consume SOAP services, and the difficulty reading through XML responses.</p>
        </div>
    </section>
        <div class="slide-container">
            <div class="row1">
                <div class="card" v-for="card in reviews" :key="card.id">
                    <div class="underlay"></div>
                    <article>
                        <div class="img">
                            <img :src="require(`@/assets/images/${card.src}`)" alt="">
                        </div>
                        <h3 class="name">{{ card.name }}</h3>
                        <p>{{ card.desc }}</p>
                    </article>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        setup (){
            const reviews = [
                {
                    id: 1,
                    src: 'user1.png',
                    name: 'James Kayode',
                    desc: 'A well-structured API response adheres to a consistent data format, such as JSON or XML. This uniformity simplifies parsing and handling the response, allowing developers to quickly extract relevant information without unnecessary complexities.'
                },
                {
                    id: 1,
                    src: 'user2.png',
                    name: 'Mohammed Raheem',
                    desc: 'A well-structured API response adheres to a consistent data format, such as JSON or XML. This uniformity simplifies parsing and handling the response, allowing developers to quickly extract relevant information without unnecessary complexities.'
                },
                {
                    id: 3,
                    src: 'user3.png',
                    name: 'Faith Constance',
                    desc: 'A well-structured API response adheres to a consistent data format, such as JSON or XML. This uniformity simplifies parsing and handling the response, allowing developers to quickly extract relevant information without unnecessary complexities.'
                },
            ]

            return { reviews }
        }
        
    }
</script>

<style scoped>
    .review {
        padding: 3.85rem 0;
        width: 90%;
        margin: 0 auto;
        position: relative;
    }

    .text {
        border-bottom: 1px solid rgba(121, 82, 179, 0.20);
        margin-bottom: 1.93rem;
    }

    .hero {
        color: var(--white);
        font-family: Nunito Sans;
        font-size: 1.93rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.89rem;
    }

    .desc {
        color: #FFF;
        font-family: Nunito Sans;
        font-size: 1.16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.85rem;
        width: 35.81rem;
        margin: 1.16rem 0 1.35rem;
    }

    .row1 {
        gap: 3.8rem;
        height: 37.39rem;
        position: relative;
        display: flex;
    }

    .card {
        border-radius: 0.48rem;
        border: 1px solid var(--white);
        background: var(--background);
        padding: 1.93rem;
        width: 26.71rem;
        height: 19.06rem;
        position: absolute;
    }

    .underlay {
        width: 100%;
        height: 16.9rem;
        position: absolute;
        top: 0.82rem;
        left: 1.11rem;
        z-index: -1;
        border-radius: 0.625rem;
        background: var(--primary-transparent, rgba(121, 82, 179, 0.20));
    }

    .slide-container {
        width: 95%;
        margin-left: auto;
        display: flex;
        overflow-x: auto;
        gap: 3.8rem;
        background: url('../assets/images/LooperGroup3.png') no-repeat;
        background-position: bottom right;
        background-size: 30rem;
        height: 42rem;
    }

    .slide-container::-webkit-scrollbar{
        display: none;
    }

    .card h3 {
        color: var(--white);
        font-family: Nunito Sans;
        font-size: 0.96rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.54rem;
        margin: 0.4rem 0;
    }

    .card p {
        color: #98A3B2;
        font-family: Nunito Sans;
        font-size: 1.16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.85rem;
    }

   .row1 .card:nth-of-type(2){
        top: 9.77rem;
        left: 30.46rem;
    }

    .row1 .card:last-of-type{
        top: 18.33rem;
        left: 60.97rem;
        bottom: 3.61rem;
    }
</style>