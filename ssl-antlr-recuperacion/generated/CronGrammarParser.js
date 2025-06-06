// Generated from c:/Users/valen/ssl-antlr-calculator - copia/CronGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CronGrammarListener from './CronGrammarListener.js';
import CronGrammarVisitor from './CronGrammarVisitor.js';

const serializedATN = [4,1,13,63,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,3,0,23,8,0,3,0,25,8,0,1,
1,1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,3,4,43,
8,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,4,6,53,8,6,11,6,12,6,54,1,7,1,7,3,7,
59,8,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,1,6,63,0,24,1,0,0,
0,2,31,1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,42,1,0,0,0,10,47,1,0,0,0,12,49,
1,0,0,0,14,58,1,0,0,0,16,60,1,0,0,0,18,25,3,16,8,0,19,20,3,2,1,0,20,22,5,
12,0,0,21,23,3,2,1,0,22,21,1,0,0,0,22,23,1,0,0,0,23,25,1,0,0,0,24,18,1,0,
0,0,24,19,1,0,0,0,25,1,1,0,0,0,26,32,3,4,2,0,27,32,3,6,3,0,28,32,3,8,4,0,
29,32,3,10,5,0,30,32,3,12,6,0,31,26,1,0,0,0,31,27,1,0,0,0,31,28,1,0,0,0,
31,29,1,0,0,0,31,30,1,0,0,0,32,3,1,0,0,0,33,34,5,11,0,0,34,5,1,0,0,0,35,
36,5,11,0,0,36,37,5,8,0,0,37,38,5,11,0,0,38,7,1,0,0,0,39,43,3,10,5,0,40,
43,3,6,3,0,41,43,3,4,2,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,44,
1,0,0,0,44,45,5,9,0,0,45,46,5,11,0,0,46,9,1,0,0,0,47,48,5,7,0,0,48,11,1,
0,0,0,49,52,3,14,7,0,50,51,5,10,0,0,51,53,3,14,7,0,52,50,1,0,0,0,53,54,1,
0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,13,1,0,0,0,56,59,3,4,2,0,57,59,3,6,
3,0,58,56,1,0,0,0,58,57,1,0,0,0,59,15,1,0,0,0,60,61,7,0,0,0,61,17,1,0,0,
0,6,22,24,31,42,54,58];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CronGrammarParser extends antlr4.Parser {

    static grammarFileName = "CronGrammar.g4";
    static literalNames = [ null, "'@yearly'", "'@monthly'", "'@weekly'", 
                            "'@daily'", "'@hourly'", "'@reboot'", "'*'", 
                            "'-'", "'/'", "','", null, "' '" ];
    static symbolicNames = [ null, "AT_YEARLY", "AT_MONTHLY", "AT_WEEKLY", 
                             "AT_DAILY", "AT_HOURLY", "AT_REBOOT", "STAR", 
                             "DASH", "SLASH", "COMMA", "NUMBER", "SP", "WS" ];
    static ruleNames = [ "schedule", "time_field", "value", "range", "step", 
                         "wildcard", "list", "item", "predefined" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CronGrammarParser.ruleNames;
        this.literalNames = CronGrammarParser.literalNames;
        this.symbolicNames = CronGrammarParser.symbolicNames;
    }



	schedule() {
	    let localctx = new ScheduleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CronGrammarParser.RULE_schedule);
	    var _la = 0;
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.predefined();
	            break;
	        case 7:
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.time_field();
	            this.state = 20;
	            this.match(CronGrammarParser.SP);
	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===11) {
	                this.state = 21;
	                this.time_field();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	time_field() {
	    let localctx = new Time_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CronGrammarParser.RULE_time_field);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.range();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.step();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 29;
	            this.wildcard();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 30;
	            this.list();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CronGrammarParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(CronGrammarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CronGrammarParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(CronGrammarParser.NUMBER);
	        this.state = 36;
	        this.match(CronGrammarParser.DASH);
	        this.state = 37;
	        this.match(CronGrammarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	step() {
	    let localctx = new StepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CronGrammarParser.RULE_step);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 39;
	            this.wildcard();
	            break;

	        case 2:
	            this.state = 40;
	            this.range();
	            break;

	        case 3:
	            this.state = 41;
	            this.value();
	            break;

	        }
	        this.state = 44;
	        this.match(CronGrammarParser.SLASH);
	        this.state = 45;
	        this.match(CronGrammarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CronGrammarParser.RULE_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(CronGrammarParser.STAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CronGrammarParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.item();
	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 50;
	            this.match(CronGrammarParser.COMMA);
	            this.state = 51;
	            this.item();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CronGrammarParser.RULE_item);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.range();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predefined() {
	    let localctx = new PredefinedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CronGrammarParser.RULE_predefined);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CronGrammarParser.EOF = antlr4.Token.EOF;
CronGrammarParser.AT_YEARLY = 1;
CronGrammarParser.AT_MONTHLY = 2;
CronGrammarParser.AT_WEEKLY = 3;
CronGrammarParser.AT_DAILY = 4;
CronGrammarParser.AT_HOURLY = 5;
CronGrammarParser.AT_REBOOT = 6;
CronGrammarParser.STAR = 7;
CronGrammarParser.DASH = 8;
CronGrammarParser.SLASH = 9;
CronGrammarParser.COMMA = 10;
CronGrammarParser.NUMBER = 11;
CronGrammarParser.SP = 12;
CronGrammarParser.WS = 13;

CronGrammarParser.RULE_schedule = 0;
CronGrammarParser.RULE_time_field = 1;
CronGrammarParser.RULE_value = 2;
CronGrammarParser.RULE_range = 3;
CronGrammarParser.RULE_step = 4;
CronGrammarParser.RULE_wildcard = 5;
CronGrammarParser.RULE_list = 6;
CronGrammarParser.RULE_item = 7;
CronGrammarParser.RULE_predefined = 8;

class ScheduleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_schedule;
    }

	predefined() {
	    return this.getTypedRuleContext(PredefinedContext,0);
	};

	time_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Time_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Time_fieldContext,i);
	    }
	};

	SP() {
	    return this.getToken(CronGrammarParser.SP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterSchedule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitSchedule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitSchedule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Time_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_time_field;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	step() {
	    return this.getTypedRuleContext(StepContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterTime_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitTime_field(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitTime_field(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_value;
    }

	NUMBER() {
	    return this.getToken(CronGrammarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_range;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CronGrammarParser.NUMBER);
	    } else {
	        return this.getToken(CronGrammarParser.NUMBER, i);
	    }
	};


	DASH() {
	    return this.getToken(CronGrammarParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_step;
    }

	SLASH() {
	    return this.getToken(CronGrammarParser.SLASH, 0);
	};

	NUMBER() {
	    return this.getToken(CronGrammarParser.NUMBER, 0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitStep(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitStep(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_wildcard;
    }

	STAR() {
	    return this.getToken(CronGrammarParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitWildcard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitWildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_list;
    }

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CronGrammarParser.COMMA);
	    } else {
	        return this.getToken(CronGrammarParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_item;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredefinedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CronGrammarParser.RULE_predefined;
    }

	AT_YEARLY() {
	    return this.getToken(CronGrammarParser.AT_YEARLY, 0);
	};

	AT_MONTHLY() {
	    return this.getToken(CronGrammarParser.AT_MONTHLY, 0);
	};

	AT_WEEKLY() {
	    return this.getToken(CronGrammarParser.AT_WEEKLY, 0);
	};

	AT_DAILY() {
	    return this.getToken(CronGrammarParser.AT_DAILY, 0);
	};

	AT_HOURLY() {
	    return this.getToken(CronGrammarParser.AT_HOURLY, 0);
	};

	AT_REBOOT() {
	    return this.getToken(CronGrammarParser.AT_REBOOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.enterPredefined(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CronGrammarListener ) {
	        listener.exitPredefined(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CronGrammarVisitor ) {
	        return visitor.visitPredefined(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CronGrammarParser.ScheduleContext = ScheduleContext; 
CronGrammarParser.Time_fieldContext = Time_fieldContext; 
CronGrammarParser.ValueContext = ValueContext; 
CronGrammarParser.RangeContext = RangeContext; 
CronGrammarParser.StepContext = StepContext; 
CronGrammarParser.WildcardContext = WildcardContext; 
CronGrammarParser.ListContext = ListContext; 
CronGrammarParser.ItemContext = ItemContext; 
CronGrammarParser.PredefinedContext = PredefinedContext; 
