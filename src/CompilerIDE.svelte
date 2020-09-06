<script>
  export let name;
</script>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>


<header>
    Compiler IDE
</header>

<main>
    <textarea
            name=""
            id=""
            cols="30"
            rows="10"
/>
<button>lexing</button>
</main>

