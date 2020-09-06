<script>
    export let keywords: any[]
    import rangy from 'rangy/lib/rangy-selectionsaverestore';
    import MonkeyLexer from './monkey-lan/Lexer'

    rangy.init()
    let keyWordClass = 'keyword'
    let keyWordElementArray = []
    // change here
    let identifierElementArray = []
    let textNodeArray = []
    let lineNodeClass = 'line'
    let lineSpanNode = 'LineSpan'
    let identifierClass = "Identifier"
    let spanToTokenMap = {}
    initPopoverControl()

    let state: Record<string, any> = {}
    state.popoverStyle = {}
    state.popoverStyle.placement = "right"
    state.popoverStyle.positionLeft = -100
    state.popoverStyle.positionTop = -100
    state.popoverStyle.content = ""

    let keyToIgnore = ["Enter", " ", "ArrowUp", "ArrowDown",
      "ArrowLeft", "ArrowRight"]

</script>


<div
        contenteditable
        style="height: 480px"
>
</div>