// Generated from c:/Users/valen/ssl-antlr-calculator - copia/CronGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,101,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,
1,7,1,8,1,8,1,9,1,9,1,10,4,10,87,8,10,11,10,12,10,88,1,11,1,11,1,12,1,12,
1,13,4,13,96,8,13,11,13,12,13,97,1,13,1,13,0,0,14,1,1,3,2,5,3,7,4,9,5,11,
6,13,7,15,8,17,9,19,10,21,11,23,12,25,0,27,13,1,0,2,1,0,48,57,2,0,9,10,13,
13,101,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
0,23,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,37,1,0,0,0,5,46,1,0,0,0,7,54,1,
0,0,0,9,61,1,0,0,0,11,69,1,0,0,0,13,77,1,0,0,0,15,79,1,0,0,0,17,81,1,0,0,
0,19,83,1,0,0,0,21,86,1,0,0,0,23,90,1,0,0,0,25,92,1,0,0,0,27,95,1,0,0,0,
29,30,5,64,0,0,30,31,5,121,0,0,31,32,5,101,0,0,32,33,5,97,0,0,33,34,5,114,
0,0,34,35,5,108,0,0,35,36,5,121,0,0,36,2,1,0,0,0,37,38,5,64,0,0,38,39,5,
109,0,0,39,40,5,111,0,0,40,41,5,110,0,0,41,42,5,116,0,0,42,43,5,104,0,0,
43,44,5,108,0,0,44,45,5,121,0,0,45,4,1,0,0,0,46,47,5,64,0,0,47,48,5,119,
0,0,48,49,5,101,0,0,49,50,5,101,0,0,50,51,5,107,0,0,51,52,5,108,0,0,52,53,
5,121,0,0,53,6,1,0,0,0,54,55,5,64,0,0,55,56,5,100,0,0,56,57,5,97,0,0,57,
58,5,105,0,0,58,59,5,108,0,0,59,60,5,121,0,0,60,8,1,0,0,0,61,62,5,64,0,0,
62,63,5,104,0,0,63,64,5,111,0,0,64,65,5,117,0,0,65,66,5,114,0,0,66,67,5,
108,0,0,67,68,5,121,0,0,68,10,1,0,0,0,69,70,5,64,0,0,70,71,5,114,0,0,71,
72,5,101,0,0,72,73,5,98,0,0,73,74,5,111,0,0,74,75,5,111,0,0,75,76,5,116,
0,0,76,12,1,0,0,0,77,78,5,42,0,0,78,14,1,0,0,0,79,80,5,45,0,0,80,16,1,0,
0,0,81,82,5,47,0,0,82,18,1,0,0,0,83,84,5,44,0,0,84,20,1,0,0,0,85,87,3,25,
12,0,86,85,1,0,0,0,87,88,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,22,1,0,0,
0,90,91,5,32,0,0,91,24,1,0,0,0,92,93,7,0,0,0,93,26,1,0,0,0,94,96,7,1,0,0,
95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,
100,6,13,0,0,100,28,1,0,0,0,3,0,88,97,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CronGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "CronGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'@yearly'", "'@monthly'", "'@weekly'", "'@daily'", 
                         "'@hourly'", "'@reboot'", "'*'", "'-'", "'/'", 
                         "','", null, "' '" ];
	static symbolicNames = [ null, "AT_YEARLY", "AT_MONTHLY", "AT_WEEKLY", 
                          "AT_DAILY", "AT_HOURLY", "AT_REBOOT", "STAR", 
                          "DASH", "SLASH", "COMMA", "NUMBER", "SP", "WS" ];
	static ruleNames = [ "AT_YEARLY", "AT_MONTHLY", "AT_WEEKLY", "AT_DAILY", 
                      "AT_HOURLY", "AT_REBOOT", "STAR", "DASH", "SLASH", 
                      "COMMA", "NUMBER", "SP", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CronGrammarLexer.EOF = antlr4.Token.EOF;
CronGrammarLexer.AT_YEARLY = 1;
CronGrammarLexer.AT_MONTHLY = 2;
CronGrammarLexer.AT_WEEKLY = 3;
CronGrammarLexer.AT_DAILY = 4;
CronGrammarLexer.AT_HOURLY = 5;
CronGrammarLexer.AT_REBOOT = 6;
CronGrammarLexer.STAR = 7;
CronGrammarLexer.DASH = 8;
CronGrammarLexer.SLASH = 9;
CronGrammarLexer.COMMA = 10;
CronGrammarLexer.NUMBER = 11;
CronGrammarLexer.SP = 12;
CronGrammarLexer.WS = 13;



