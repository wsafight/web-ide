<script lang="ts">
  export let keywords: Record<string, any>

  import MonkeyLexer from './monkey-lan/Lexer'

  let sourceCode = '';

  function handleLexing() {
    const lexer: MonkeyLexer = new MonkeyLexer(sourceCode)
    lexer.lexing()
  }
</script>

<style>
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
    <div
            contenteditable
            style="height: 480px"
    >
    </div>
    <button
            on:click={handleLexing}>lexing
    </button>
</main>

