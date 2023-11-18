<template>
    <div class="homepage">
        <section class="sect-1">
            <header> Built For Developers </header>
            <div class="container">
                <div class="bg-img">
                    <img src="../assets/images/map-base.png" alt="">
                </div>

                <div class="card">
                    <h1>Seamless Travel Planning, Unleashed with One API Call</h1>
                    <p>Revolutionizing Travel Experiences: Making Travel Inventories Easily Accessible to All for Unforgettable Journeys and Seamless Adventures.</p>
                    <button class="btn">Request Demo in 1 minute!</button>
                </div>
                
                <div class="images-layout">
                    <img src="../assets/images/Mark.png" class="mark" alt="">
                    <img src="../assets/images/Airplane1.png" class="plane1 plane" alt="">
                    <img src="../assets/images/Airplane2.png" class="plane2 plane" alt="">
                    <img src="../assets/images/Airplane3.png" class="plane3 plane" alt="">
                </div>
            </div>
        </section>
        <section class="teams section">
            <p class="header">Trusted by esteemed teams at</p>
            <div class="teams-logos">
                <img src="../assets/images/luf.png" alt="" class="team-logo">
                <img src="../assets/images/airfrance.png" alt="" class="team-logo">
                <img src="../assets/images/airpeace.png" alt="" class="team-logo">
                <img src="../assets/images/arik.png" alt="" class="team-logo">
                <img src="../assets/images/ibomair.png" alt="" class="team-logo">
            </div>
        </section>
        <section class="demo section">
            <p class="header">Built for Developers!</p>
            <h3 class="demo-text">
                <span>Get up and running today with Tiqwa.</span> Our robust set of APIs and comprehensive documentation will help you spend less time consuming APIs and more time running your business.
            </h3>
            <div class="demo-codes">
                <div class="active code python">
                    <img src="../assets/images/python.png" alt="">
                </div>
                <div class="frame2 code php">
                   <img src="../assets/images/Php.png" alt="">
                </div>
                <div class="frame3 code java">
                   <img src="../assets/images/Java.png" alt="">
                </div>
            </div>
        </section>
        <section class="access">
            <div class="section">
                <p class="hero">Single Access, Multiple Airlines</p>
                <div class="grid-container">
                    <div class="col1">
                        <article class="col1-text">
                            <p>We have made it super easy to access multiple airlines with your access to our agent tool. You don't have to spend so much time looking for affordable flights for your customers. Which is why we have:
                            </p>
                            <ul>
                                <li>Local Airlines</li>
                                <li>International Airlines</li>
                            </ul>
                            <p>All in a single access.</p>
                        </article>
                        <button class="access-btn">Get Started in 1 min!</button>
                    </div>
                    <div class="col2">
                        <img src="../assets/images/airpeace.png" alt="" class="peace">
                        <img src="../assets/images/arik.png" alt="" class="arik">
                        <img src="../assets/images/ibomair.png" alt="ibom" class="ibom">
                        <img src="../assets/images/airfrance.png" alt="" class="france">
                        <img src="../assets/images/luf.png" alt="" class="luf">
                        <img src="../assets/images/elipse.png" alt="" class="elipse">
                    </div>
                </div>
            </div>
        </section>
        <section class="integration">
            <div class="section">
                <div class="top-row">
                    <img src="../assets/images/Integration.png" alt="" class="animate-img top">
                    <div class="center-text">
                        <h3>Seamless Integration</h3>
                        <p>We understand how tedious it has been over the years to consume SOAP services, and the difficulty reading through XML responses.</p>
                        <button class="btn2">
                            View our Documentation
                            <img src="../assets/images/arrow.png" alt="">
                        </button>
                    </div>
                    <img src="../assets/images/Integration.png" alt="" class="animate-img btm">
                </div>
                <div class="btm-row">
                    <article class="feature-card" v-for="feature in features" :key="feature.id">
                        <img src="../assets/images/icon-park.png" alt="">
                        <h3>{{ feature.heading }}</h3>
                        <p>{{ feature.desc }}</p>
                    </article>
                </div>
            </div>
        </section>
        <section class="distribution">
            <div class="top-row">
                <h3 class="hero">Multiple Global Distribution System</h3>
                <p>Get flight inventories from different GDS using our combined seamless API</p>
                <div class="dist-system">
                    <img src="../assets/images/Sabre.png"  alt="">
                    <img src="../assets/images/amadeus.png"  alt="">
                    <img src="../assets/images/galileo.png"  alt="">
                </div>
                <button class="btn2">
                    View our Documentation
                    <img src="../assets/images/arrow.png" alt="">
                </button>
            </div>
            <div class="btm-row">
                <img src="../assets/images/card.png" alt="" class="card">
                <img src="../assets/images/api-demo.png" alt="" class="api-demo">
                <img src="../assets/images/link.png" alt="" class="link">
                <div class="tags">
                    <article class="tag">
                        <img src="../assets/images/check-icon.png" alt="">
                        <p>Flight Booking</p>
                    </article>
                    <article class="tag">
                        <img src="../assets/images/check-icon.png" alt="">
                        <p>Flight offer search</p>
                    </article>
                    <article class="tag">
                        <img src="../assets/images/check-icon.png" alt="">
                        <p>Post Booking Management</p>
                    </article>
                </div>
            </div>
        </section>
        <Slide />
        <section>
            <div class="section-container">
                <h3 class="hero">Start building with Tiqwa</h3>
                <p>Accelerate your development process with Tiqwa: powerful tools, extensive APIs, scalable infrastructure, developer-friendly documentation, and a supportive community. </p>
                <button class="btn">Request Demo in 1 minute!</button>
            </div>
        </section>
    </div>
</template>

<script>
import Slide from '../components/Slide.vue'
    export default {
        components: { Slide },
        setup(){
            const features = [
                {
                    id: 1,
                    heading: 'Consistent Data Format',
                    desc: 'A well-structured API response adheres to a consistent data format, such as JSON or XML. This uniformity simplifies parsing and handling the response.'
                },
                {
                    id: 2,
                    heading: 'Clear and Descriptive Field Name',
                    desc: 'API responses with clear and descriptive field names enhance developer productivity. When the response payload includes intelligible and self-explanatory field names.'
                },
                {
                    id: 3,
                    heading: 'Hierarchical Structure',
                    desc: 'This nesting of data promotes better organization, making it easier for developers to navigate through the response and locate the specific information they need.'
                },
                {
                    id: 4,
                    heading: 'Error Handling and Status Codes',
                    desc: 'Clear and standardized error messages allow developers to identify and resolve issues quickly, ensuring a smoother development process and reducing the time spent on diagnosing errors.'
                },
                {
                    id: 5,
                    heading: 'Consistent Response Structure',
                    desc: 'API maintains a consistent response structure across different endpoints and versions, developers can build reusable code components and anticipate how the data will be structured.'
                },
                {
                    id: 6,
                    heading: 'Comprehensive Documentation',
                    desc: 'Accompanying a well-structured API response, comprehensive and up-to-date documentation is indispensable. It acts as a guide, ensuring developers can understand and utilize the API effectively.'
                },
            ]


            return { features }
        }
        
    }
</script>

<style scoped>


    .container {
        width: 97vw;
        margin: 0 auto;
        position: relative;
    }

    .bg-img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        margin-bottom: 3.08rem;
        z-index: -1;
    }

    .bg-img img {
        width: 100%;
        z-index: 1;
    }

    header {
        border-radius: 1.925rem;
        border: 1px solid var(--primary-transparent);
        background: #161B22;
        color: var(--primary-font-color);
        font-family: Nunito Sans;
        font-size: 0.8rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.23rem;
        padding: 0.29rem 1.16rem;
        width: 10.3rem;
        margin: 6.88rem auto 1.93rem;
    }

    .card p {
        color: var(--secondary-font-color);
        font-family: Nunito Sans;
        font-size: 1.16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.25rem;
        width: 39.17rem;
        max-width: 90%;
        margin: 2.89rem auto 2.89rem;
    }

    .card {
        width: 50.8rem;
        margin: 0 auto;
        text-align: center;
        z-index: 20;
    }

    .card h1 {
        color: var(--white);
        font-family: Nunito Sans;
        font-size: 2.7rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.8rem;
    }

    .btn {
        border-radius: 0.25rem;
        background: #891189;
        padding: 0.7rem 1.925rem;
        color: var(--white);
        font-family: Nunito Sans;
        font-size: 0.87;
        font-style: normal;
        font-weight: 800;
        line-height: 1.3rem; /* 1.6875rem */
        cursor: pointer;
        margin-bottom: 6.93rem;
        border: none;
    }

    .images-layout img {
        position: absolute;
    }
    .mark {
        top: 7.46rem;
        left: 50%;
        transform: translateX(-50%);
        width: 12.03rem;
        height: 1.6875rem;
    }

    .plane {
        width: 4.62rem;
        max-width: 6rem;
    }

    .plane1 {
        top: 14.52rem;
        left: 8.26rem;
    }

    .plane2 {
        top: 7.69rem;
        left: 51.63rem;
    }

    .plane3 {
        top: 12.89rem;
        right: 7.03rem;
    }

    .teams, .section {
        width: 90%;
        margin: 0 auto 7.31rem;
    }

    .header {
        color: var(--gray-3);
        font-family: Nunito Sans;
        font-size: 0.96rem;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 1.875rem */
        margin-bottom: 1.16rem;
    }

    .teams-logos img {
        width: 10.9rem;
    }

    .teams-logos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 7.31rem;
    }

    .demo {
        padding-bottom: 7.32rem;
        height: 59rem;
        background: url('../assets/images/LooperGroup.png') no-repeat, url('../assets/images/bgBox.png') right bottom no-repeat;
        background-size: 20.86rem, 16.86rem;
        background-position: right 8rem bottom, right  bottom;
        margin-bottom: 0;
    }

    .demo .header {
        color: var(--white);
        margin-bottom: 2.02rem;
        
    }

    .demo-text {
        width: 64.3rem;
        font-family: Nunito Sans;
        font-size: 1.93rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.88rem; /* 3.75rem */
       color: var(--white);
       margin-bottom: 3.85rem;
    }

    .demo-text span {
        background: linear-gradient(91deg, #891189 7.31%, #84389E 23.91%, #7B208A 40.02%, #4D094D 50.83%, #4D094D 57.27%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .demo-codes {
        position: relative;
    }

    .demo-codes .code {
        position: absolute;
    }

    .demo-codes img {
        width: 100%;
        height: 100%;
    }

    .demo-codes .active {
        width: 39.53rem;
        height: 28.97rem;
        top: 7.54rem;
        left: 1.62rem;
        z-index: 11;
        bottom: 7.32rem;
    }

    .demo-codes .frame2 {
        width: 35.01rem;
        height: 25.42rem;
        top: 3.66rem;
        left: 12.71rem;
        z-index: 10;
        
    }

    .demo-codes .frame3 {
        width: 30.52rem;
        height: 25.41rem;
        top: 0;
        left: 23.78rem;
        z-index: 9;
    }

    .access {
        width: 100%;
        padding: 6.16rem 0 0;
        position: relative;
    }

    .hero {
        color: #FFF;
        font-family: Nunito Sans;
        font-size: 2.69rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4.04rem; /* 5.25rem */
        width: auto;
        margin-bottom: 1.16rem;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .col1-text {
        color: #FFF;
        font-family: Nunito Sans;
        font-size: 1.16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.85rem; /* 2.4rem */
        width: 36.58rem;
    }

    .col1-text ul {
        padding-left: 1.5rem;
    }

    .access-btn {
        border-radius: 0.19rem;
        border: 1px solid #D182D2;
        margin-top: 7.58rem;
        color: #D182D2;
        font-family: Nunito Sans;
        font-size: 0.87rem;
        font-style: normal;
        font-weight: 800;
        line-height: 1.30rem; /* 1.6875rem */
        background: none;
        padding: 0.7rem 1.92rem;
    }

    .col2 img {
        width: 10.68rem;
        position: absolute;
    }

    img.elipse {
        width: 7.12rem;
        top: 20.17rem;
        right: 19.78rem;
    }

    img.luf {
        top: 11.7rem;
        right: 19.78rem;
    }

    .peace {
        top: 19.97rem;
        left: 40.81rem;
        /* right: 31.66rem; */
    }

    .ibom{
        top: 29.02rem;
        right: 26.41;
    }

    .arik {
        top: 29.02rem;
        right: 8.42rem;
    }

    .france {
        top: 16.85rem;
        right: 7.27rem;
    }

    .integration {
        background: #080E17 url('../assets/images/LooperGroup2.png') right bottom no-repeat;
        background-size: 23rem;
        display: block;
        height: auto;
        border: 1px solid transparent;
    }

   .integration .section {
    margin-bottom: 0;
   }

    .integration .top-row {
        border: 1px solid transparent;
        position: relative;
        border-bottom: 1px solid rgba(121, 82, 179, 0.20);
        margin-bottom: 2.7rem;
    }

    @keyframes rotation {
        0% {-webkit-transform: rotate(0deg);}
        12.5%, 25% {-webkit-transform: rotate(90deg);} 
        37.5%, 50% {-webkit-transform: rotate(180deg);} 
        62.5%, 75% {-webkit-transform: rotate(270deg);} 
        87.5%, 100% {-webkit-transform: rotate(360deg);}
    }

    .animate-img {
        width: 8.69rem;
        height: 8.62rem;
        position: absolute;
        animation: rotation 10s infinite ease-out;
    }

    .animate-img.top {
        top: 3.12rem;
        left: 5.82rem;
    }
    .animate-img.btm {
        bottom: 0;
        /* left: 61.62rem; */
        right: 7.07rem;
    }

    .center-text {
        width: auto;
        max-width: 34.8rem;
        margin: 8.78rem auto 3.47rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.54rem;
    }

    .center-text h3 {
        color: #FFF;
        font-family: Nunito Sans;
        font-size: 1.93rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.89rem;
    }

    .center-text p {
        color: #FFF;
        font-family: Product Sans, Nunito Sans;
        font-size: 1.16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.85; /* 2.4rem */
    }

    .btn2 {
        display: flex;
        width: 14.44rem;
        margin: 0 auto;
        padding: 0.77rem 1.93rem;
        justify-content: center;
        align-items: center;
        gap: 0.48rem;
        border-radius: 0.48rem;
        border: 1px solid #D182D2;
        color: #D384D4;
        font-family: Product Sans;
        font-size: 0.77rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.16rem; /* 1.5rem */
        background: none;
    }

    .integration .btm-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 4.5rem 1.54rem;
        margin-bottom: 8.09rem;
    }

    .feature-card h3 {
        color: var(--white);
        font-family: Nunito Sans;
        font-size: 1.16rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.85rem; /* 2.4rem */
        margin:0.2rem 0 0.4rem;
    }

    .feature-card p {
        color: var(--gray-3);
        font-family: Nunito Sans;
        font-size: 0.96rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.54rem; /* 2rem */
    }

    .distribution {
        background: url('../assets/images/LooperGroup1.png') no-repeat, url('../assets/images/Vector.png') no-repeat;
        background-position: left 28.18rem top, left 20.2rem bottom -2.5rem;
        background-size: 35.61rem, 20.44rem;
        margin-top: 3.08rem;
    }

    .distribution .top-row {
        width: auto;
        max-width: 48rem;
        margin: 0 auto;
        text-align: center;
    }    

    .distribution .top-row p {
        color: var(--white);
        text-align: center;
        font-family: Nunito Sans;
        font-size: 1.16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.85rem;
        margin-bottom: 2.31rem;
    }

    .dist-system {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4.04rem;
    }

    .distribution .btn2 {
        padding: 0.75rem 1.93rem;
        margin:3.08rem auto 6.16rem;
    }

    .dist-system img {
        width: 8.62rem;
    }

    .distribution .btm-row {
        border-radius: 0.625rem;
        border: 0.5px solid #7952B3;
        width: 77%;
        margin: 0 auto 5.34rem;
        padding: 4.81rem;
        display: flex;
        align-items: flex-end;
        gap: 2rem;
        position: relative;
    }

    .link {
        position: absolute;
        top: 0.92rem;
        left: 14.22rem;
        width: 7rem;
    }

    .distribution .btm-row .api-demo {
        width: 19.15rem;
        height: auto;
    }
    .distribution .btm-row .card {
        width: 12.07rem;
        height: auto;
    }

    .tags {
        display: flex;
        flex-direction: column;
        gap: 1.59rem;
        width: 100%;
    }

    .tag {
        display: flex;
        align-items: center;
        padding: 0.39rem 0.77rem;
        border-radius: 0.625rem;
        border: 1px solid #891189;
        gap: 0.77rem;
        max-width: 100%;
        width: 12.6rem;
    }

    .tag:last-of-type {
        width: 100%;
    }

    .tag p {
        font-family: Nunito Sans;
        font-size: 0.96rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: linear-gradient(180deg, rgba(137, 17, 137, 0.86) 0%, rgba(234, 155, 234, 0.86) 22.4%, rgba(187, 60, 187, 0.86) 53.12%, rgba(215, 6, 215, 0.86) 78.65%, rgba(232, 98, 232, 0.86) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .section-container {
        width: 52.12rem;
        max-width: 90%;
        margin: 6.9rem auto;
        text-align: center;
    }

    .section-container p {
        color: var(--white);
        font-family: Nunito Sans;
        font-size: 1.34rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.16rem; /* 2.8rem */
        margin-bottom: 2.7rem;
    }

    .section-container .btn {
        background: transparent;
        border: 1px solid #D182D2;
        color: #D182D2;
        margin-bottom: 0;
    }

    
</style>