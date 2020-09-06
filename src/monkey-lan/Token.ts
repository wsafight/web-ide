export default class Token {
  constructor(
    private tokenType: number,
    private literal: string,
    private lineNumber: number
  ) {
  }

  getTokenType() {
    return this.tokenType
  }

  getLiteral() {
    return this.literal
  }

  getLineNumber() {
    return this.lineNumber
  }

}


