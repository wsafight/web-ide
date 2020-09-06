<script lang="ts">
  import MonkeyLexer from './monkey-lan/Lexer'

  let sourceCode = '';

  function handleLexing() {
    const lexer: MonkeyLexer = new MonkeyLexer(sourceCode)
    lexer.lexing()
    console.log('cccccc')
  }
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
            bind:value={sourceCode}
    />
    <button on:click={handleLexing}>lexing</button>
</main>

