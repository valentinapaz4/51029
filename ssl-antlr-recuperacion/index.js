const antlr4 = require('antlr4');
const fs = require('fs');

const CronGrammarLexer = require('./generated/CronGrammarLexer').default;
const CronGrammarParser = require('./generated/CronGrammarParser').default;
const CustomCronVisitor = require('./CustomCronVisitor');

function printTokenTable(tokenStream, lexer) {
  console.log("\nTabla de lexemas y tokens:");
  console.log('----------------------------------------');
  console.log('| TOKEN TYPE           | LEXEMA        |');
  console.log('----------------------------------------');

  const allTokens = [];
let token = tokenStream.LT(1);
let i = 1;
while (token && token.type !== antlr4.Token.EOF) {
    allTokens.push(token);
    token = tokenStream.LT(++i);
}

  allTokens.forEach(token => {
    const symbolicNames = CronGrammarLexer.symbolicNames || [];
    const tokenName = symbolicNames[token.type] || "UNKNOWN";

    const text = token.text;

    if (tokenName !== 'WS' && tokenName !== 'EOF') {
      const paddedType = tokenName.padEnd(21, ' ');
      const paddedText = text.padEnd(13, ' ');
      console.log(`| ${paddedType} | ${paddedText} |`);
    }
  });

  console.log('----------------------------------------\n');
}

async function main() {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = '@daily';
    }

    const chars = new antlr4.InputStream(input);
    const lexer = new CronGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    tokens.fill();
    printTokenTable(tokens, lexer);
    const parser = new CronGrammarParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.schedule();

    if (parser._syntaxErrors > 0) {
        console.error("Errores de sintaxis encontrados.");
    } else {
        console.log("Entrada válida.");
        const treeString = tree.toStringTree(parser.ruleNames);
        console.log("\nÁrbol de derivación (sintáctico):");
        console.log(treeString);
        const visitor = new CustomCronVisitor();
        const result = visitor.visit(tree);
        console.log(result);
    }
}

main();
