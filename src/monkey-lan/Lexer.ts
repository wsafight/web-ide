import Token from "./Token";
import {isDigit, isLetter} from "./util";

class MonkeyLexer {
  static ILLEGAL = -2
  static EOF = -1
  static LET = 0
  static IDENTIFIER = 1
  static EQUAL_SIGN = 2
  static PLUS_SIGN = 3
  static INTEGER = 4
  static SEMICOLON = 5
  static IF = 6
  static ELSE = 7

  static KeyWords = {
    let: new Token(MonkeyLexer.LET, 'let', 0),
    if: new Token(MonkeyLexer.IF, 'if', 0),
    else: new Token(MonkeyLexer.ELSE, 'else', 0),
  }


  private position: number = 0
  private readPosition: number = 0
  private lineCount: number = 0
  private ch: string | number = ''

  constructor(private sourceCode: string) {
  }

  initialKeyWords() {

  }


  readChar() {
    if (this.readPosition >= this.sourceCode.length) {
      this.ch = 0
    } else {
      this.ch = this.sourceCode[this.readPosition]
    }

    this.position = this.readPosition
    this.readPosition++
  }

  skipWhiteSpaceAndNewLine() {
    /*
    忽略空格
    */
    while (this.ch === ' ' || this.ch === '\t'
    || this.ch === '\n') {
      if (this.ch === '\t' || this.ch === '\n') {
        this.lineCount++;
      }
      this.readChar()
    }
  }

  nextToken() {
    let tok
    this.skipWhiteSpaceAndNewLine()
    let lineCount = this.lineCount

    switch (this.ch) {
      case '=':
        tok = new Token(MonkeyLexer.EQUAL_SIGN, "=", lineCount)
        break
      case ';':
        tok = new Token(MonkeyLexer.SEMICOLON, ";", lineCount)
        break;
      case '+':
        tok = new Token(MonkeyLexer.PLUS_SIGN, "+", lineCount)
        break;
      case 0:
        tok = new Token(MonkeyLexer.EOF, "", lineCount)
        break;

      default:
        let res = this.readIdentifier()
        if (res !== false) {
          if (res in MonkeyLexer.KeyWords) {
            tok = MonkeyLexer.KeyWords[res]
          } else {
            tok = new Token(MonkeyLexer.IDENTIFIER, res, lineCount)
          }
        } else {
          res = this.readNumber()
          if (res !== false) {
            tok = new Token(MonkeyLexer.INTEGER, res, lineCount)
          }
        }

        if (res === false) {
          tok = undefined
        }

    }

    this.readChar()
    return tok
  }

  readIdentifier() {
    let identifier = ""
    while (isLetter(this.ch as string)) {
      identifier += this.ch
      this.readChar()
    }

    if (identifier.length > 0) {
      return identifier
    } else {
      return false
    }
  }

  readNumber() {
    let number = ""
    while (isDigit(this.ch as string)) {
      number += this.ch
      this.readChar()
    }

    if (number.length > 0) {
      return number
    } else {
      return false
    }
  }

  lexing() {
    this.readChar()

    var tokens = []
    var token = this.nextToken()
    while (token.getTokenType() !== MonkeyLexer.EOF) {
      console.log(token)
      tokens.push(token)
      token = this.nextToken()
    }
    console.log('结束')
  }
}

export default MonkeyLexer