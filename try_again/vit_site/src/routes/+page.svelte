<script>
  import coo from "$lib/images/ikram_mansori.jpeg";
  import vet_day from "$lib/images/vets_day.jpeg";
  import zoom_cohort from "$lib/images/cohort_image.jpeg";
  import invasion from "$lib/images/invasion.png";
  import full_stack from "$lib/images/full_stack.jpeg";
  import draftkings from "$lib/images/draftkings.png";
  import boeing from "$lib/images/boeing.png";
  import Header from "./Header.svelte";
  import logo from "$lib/images/VetsinTech_Logo.jpeg";
</script>

<!-- <svelte:head>
  <title>Vets in Tech</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head> -->

<!--everything is sitting too high, push everything down by 5%-->
<a href="https://www.vetsintech.co">
  <img src={logo} alt="ViT" class="logo" />
</a>

<section>
  <main>
    <!--create a 1x3 row-->
    <div class="container row">
      <div class="one-by-three column">
        <img src={full_stack} alt="full stack" />
        <p>Our full stack curriculum is coming!</p>
      </div>
      <div class="one-by-three column">
        <img src={boeing} alt="Boeing" />
        <p>Thank you to Boeing!</p>
      </div>
      <div class="column">
        <img src={draftkings} alt="Draft Kings" />
        <p>Thank you to Draft Kings, a huge sponsor!</p>
      </div>
    </div>
  </main>
  <!-- create a 1x4 grid of divs for content-->
  <div class="grid">
    <div class="grid-item">
      <img src={coo} alt="Meet our new COO" />
      <p>Meet our new COO</p>
    </div>
    <div class="grid-item">
      <img src={vet_day} alt="Veterans Day" />
      <p>Join us in honoring our Veterans</p>
    </div>
    <div class="grid-item">
      <img src={zoom_cohort} alt="Zoom cohort" />
      <p>Cohorts starting every month!</p>
    </div>
    <div class="grid-item">
      <img src={invasion} alt="The invasion is coming" />
      <p>The 2023 Invasion is right around the corner!</p>
    </div>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5em;
    justify-content: center;
  }
  .grid div {
    border: 1px solid black;
    width: 20vw;
    height: 25vh;
  }
  .head-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  img {
    width: 20vw;
    height: 25vh;
  }
  .one-by-three img {
    border: 1px solid black;
    margin: 1px;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .one-by-three p {
    /*wrap the text*/
    white-space: pre-wrap;
    overflow: auto;
  }
  main {
    margin-top: 10vh;
  }
  .thirty {
    width: 30%;
    border-right: 1px solid tan;
    height: 10%;
  }
  .logo {
    width: 15vw;
    height: 10vh;
    position: absolute;
    margin-left: -475px;
    top: -0.1em;
  }
</style>
