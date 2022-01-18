// Generated from D:/projects/react-three-karol/antlrgrammar\karel.g4 by ANTLR 4.9.2
// jshint ignore: start
// noinspection ES6ConvertVarToLetConst

import antlr4 from 'antlr4';
import karelListener from './karelListener.js';
import karelVisitor from './karelVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003.X\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0019\n\u0002\f\u0002\u000e\u0002\u001c\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002 \n\u0002\f\u0002\u000e\u0002#\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u00042\n\u0004\u0003\u0005\u0003\u0005\u0007",
    "\u00056\n\u0005\f\u0005\u000e\u00059\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\bM\n\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0006\u000bT\n\u000b\r\u000b\u000e\u000bU\u0003\u000b",
    "\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002",
    "\u0004\u0004\u0002\u0012\u0016++\u0003\u0002\u0017*\u0002V\u0002\u0016",
    "\u0003\u0002\u0002\u0002\u0004\'\u0003\u0002\u0002\u0002\u00061\u0003",
    "\u0002\u0002\u0002\b3\u0003\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002",
    "\fA\u0003\u0002\u0002\u0002\u000eF\u0003\u0002\u0002\u0002\u0010N\u0003",
    "\u0002\u0002\u0002\u0012P\u0003\u0002\u0002\u0002\u0014S\u0003\u0002",
    "\u0002\u0002\u0016\u001a\u0007\u0003\u0002\u0002\u0017\u0019\u0005\u0004",
    "\u0003\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001c\u0003\u0002",
    "\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002",
    "\u0002\u0002\u001b\u001d\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002",
    "\u0002\u0002\u001d!\u0007\u0004\u0002\u0002\u001e \u0005\u0006\u0004",
    "\u0002\u001f\u001e\u0003\u0002\u0002\u0002 #\u0003\u0002\u0002\u0002",
    "!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"$\u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002$%\u0007\u0005\u0002\u0002",
    "%&\u0007\u0006\u0002\u0002&\u0003\u0003\u0002\u0002\u0002\'(\u0007\u0007",
    "\u0002\u0002()\u0007+\u0002\u0002)*\u0007\b\u0002\u0002*+\u0005\u0006",
    "\u0004\u0002+\u0005\u0003\u0002\u0002\u0002,2\u0005\b\u0005\u0002-2",
    "\u0005\n\u0006\u0002.2\u0005\f\u0007\u0002/2\u0005\u000e\b\u000202\u0005",
    "\u0010\t\u00021,\u0003\u0002\u0002\u00021-\u0003\u0002\u0002\u00021",
    ".\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000210\u0003\u0002\u0002",
    "\u00022\u0007\u0003\u0002\u0002\u000237\u0007\t\u0002\u000246\u0005",
    "\u0006\u0004\u000254\u0003\u0002\u0002\u000269\u0003\u0002\u0002\u0002",
    "75\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028:\u0003\u0002\u0002",
    "\u000297\u0003\u0002\u0002\u0002:;\u0007\n\u0002\u0002;\t\u0003\u0002",
    "\u0002\u0002<=\u0007\u000b\u0002\u0002=>\u0005\u0014\u000b\u0002>?\u0007",
    "\f\u0002\u0002?@\u0005\u0006\u0004\u0002@\u000b\u0003\u0002\u0002\u0002",
    "AB\u0007\r\u0002\u0002BC\u0005\u0012\n\u0002CD\u0007\u000e\u0002\u0002",
    "DE\u0005\u0006\u0004\u0002E\r\u0003\u0002\u0002\u0002FG\u0007\u000f",
    "\u0002\u0002GH\u0005\u0012\n\u0002HI\u0007\u0010\u0002\u0002IL\u0005",
    "\u0006\u0004\u0002JK\u0007\u0011\u0002\u0002KM\u0005\u0006\u0004\u0002",
    "LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002M\u000f\u0003\u0002",
    "\u0002\u0002NO\t\u0002\u0002\u0002O\u0011\u0003\u0002\u0002\u0002PQ",
    "\t\u0003\u0002\u0002Q\u0013\u0003\u0002\u0002\u0002RT\u0007-\u0002\u0002",
    "SR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002V\u0015\u0003\u0002\u0002\u0002\b\u001a",
    "!17LU"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class karelParser extends antlr4.Parser {

    static grammarFileName = "karel.g4";
    static literalNames = [ null, "'BEGINNING-OF-PROGRAM'", "'BEGINNING-OF-EXECUTION'", 
                            "'END-OF-EXECUTION'", "'END-OF-PROGRAM'", "'DEFINE'", 
                            "'AS'", "'BEGIN'", "'END'", "'ITERATE'", "'TIMES'", 
                            "'WHILE'", "'DO'", "'IF'", "'THEN'", "'ELSE'", 
                            "'MOVE'", "'TURNLEFT'", "'PICKBEEPER'", "'PUTBEEPER'", 
                            "'TURNOFF'", "'FRONT-IS-CLEAR'", "'FRONT-IS-BLOCKED'", 
                            "'LEFT-IS-CLEAR'", "'LEFT-IS-BLOCKED'", "'RIGHT-IS-CLEAR'", 
                            "'RIGHT-IS-BLOCKED'", "'BACK-IS-CLEAR'", "'BACK-IS-BLOCKED'", 
                            "'NEXT-TO-A-BEEPER'", "'NOT-NEXT-TO-A-BEEPER'", 
                            "'ANY-BEEPERS-IN-BEEPER-BAG'", "'NO-BEEPERS-IN-BEEPER-BAG'", 
                            "'FACING-NORTH'", "'NOT-FACING-NORTH'", "'FACING-SOUTH'", 
                            "'NOT-FACING-SOUTH'", "'FACING-EAST'", "'NOT-FACING-EAST'", 
                            "'FACING-WEST'", "'NOT-FACING-WEST'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "IDENTIFIER", "LETTER", "DIGIT", "WS" ];
    static ruleNames = [ "karel", "definition", "statement", "block", "iteration", 
                         "loop", "conditional", "instruction", "condition", 
                         "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = karelParser.ruleNames;
        this.literalNames = karelParser.literalNames;
        this.symbolicNames = karelParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	karel() {
	    let localctx = new KarelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, karelParser.RULE_karel);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(karelParser.T__0);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===karelParser.T__4) {
	            this.state = 21;
	            this.definition();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        this.match(karelParser.T__1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << karelParser.T__6) | (1 << karelParser.T__8) | (1 << karelParser.T__10) | (1 << karelParser.T__12) | (1 << karelParser.T__15) | (1 << karelParser.T__16) | (1 << karelParser.T__17) | (1 << karelParser.T__18) | (1 << karelParser.T__19))) !== 0) || _la===karelParser.IDENTIFIER) {
	            this.state = 28;
	            this.statement();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(karelParser.T__2);
	        this.state = 35;
	        this.match(karelParser.T__3);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, karelParser.RULE_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(karelParser.T__4);
	        this.state = 38;
	        this.match(karelParser.IDENTIFIER);
	        this.state = 39;
	        this.match(karelParser.T__5);
	        this.state = 40;
	        this.statement();
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, karelParser.RULE_statement);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case karelParser.T__6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.block();
	            break;
	        case karelParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.iteration();
	            break;
	        case karelParser.T__10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.loop();
	            break;
	        case karelParser.T__12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.conditional();
	            break;
	        case karelParser.T__15:
	        case karelParser.T__16:
	        case karelParser.T__17:
	        case karelParser.T__18:
	        case karelParser.T__19:
	        case karelParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.instruction();
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, karelParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(karelParser.T__6);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << karelParser.T__6) | (1 << karelParser.T__8) | (1 << karelParser.T__10) | (1 << karelParser.T__12) | (1 << karelParser.T__15) | (1 << karelParser.T__16) | (1 << karelParser.T__17) | (1 << karelParser.T__18) | (1 << karelParser.T__19))) !== 0) || _la===karelParser.IDENTIFIER) {
	            this.state = 50;
	            this.statement();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this.match(karelParser.T__7);
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



	iteration() {
	    let localctx = new IterationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, karelParser.RULE_iteration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(karelParser.T__8);
	        this.state = 59;
	        this.number();
	        this.state = 60;
	        this.match(karelParser.T__9);
	        this.state = 61;
	        this.statement();
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



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, karelParser.RULE_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(karelParser.T__10);
	        this.state = 64;
	        this.condition();
	        this.state = 65;
	        this.match(karelParser.T__11);
	        this.state = 66;
	        this.statement();
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



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, karelParser.RULE_conditional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(karelParser.T__12);
	        this.state = 69;
	        this.condition();
	        this.state = 70;
	        this.match(karelParser.T__13);
	        this.state = 71;
	        this.statement();
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 72;
	            this.match(karelParser.T__14);
	            this.state = 73;
	            this.statement();

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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, karelParser.RULE_instruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (karelParser.T__15 - 16)) | (1 << (karelParser.T__16 - 16)) | (1 << (karelParser.T__17 - 16)) | (1 << (karelParser.T__18 - 16)) | (1 << (karelParser.T__19 - 16)) | (1 << (karelParser.IDENTIFIER - 16)))) !== 0))) {
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, karelParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (karelParser.T__20 - 21)) | (1 << (karelParser.T__21 - 21)) | (1 << (karelParser.T__22 - 21)) | (1 << (karelParser.T__23 - 21)) | (1 << (karelParser.T__24 - 21)) | (1 << (karelParser.T__25 - 21)) | (1 << (karelParser.T__26 - 21)) | (1 << (karelParser.T__27 - 21)) | (1 << (karelParser.T__28 - 21)) | (1 << (karelParser.T__29 - 21)) | (1 << (karelParser.T__30 - 21)) | (1 << (karelParser.T__31 - 21)) | (1 << (karelParser.T__32 - 21)) | (1 << (karelParser.T__33 - 21)) | (1 << (karelParser.T__34 - 21)) | (1 << (karelParser.T__35 - 21)) | (1 << (karelParser.T__36 - 21)) | (1 << (karelParser.T__37 - 21)) | (1 << (karelParser.T__38 - 21)) | (1 << (karelParser.T__39 - 21)))) !== 0))) {
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, karelParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 80;
	            this.match(karelParser.DIGIT);
	            this.state = 83; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===karelParser.DIGIT);
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

karelParser.EOF = antlr4.Token.EOF;
karelParser.T__0 = 1;
karelParser.T__1 = 2;
karelParser.T__2 = 3;
karelParser.T__3 = 4;
karelParser.T__4 = 5;
karelParser.T__5 = 6;
karelParser.T__6 = 7;
karelParser.T__7 = 8;
karelParser.T__8 = 9;
karelParser.T__9 = 10;
karelParser.T__10 = 11;
karelParser.T__11 = 12;
karelParser.T__12 = 13;
karelParser.T__13 = 14;
karelParser.T__14 = 15;
karelParser.T__15 = 16;
karelParser.T__16 = 17;
karelParser.T__17 = 18;
karelParser.T__18 = 19;
karelParser.T__19 = 20;
karelParser.T__20 = 21;
karelParser.T__21 = 22;
karelParser.T__22 = 23;
karelParser.T__23 = 24;
karelParser.T__24 = 25;
karelParser.T__25 = 26;
karelParser.T__26 = 27;
karelParser.T__27 = 28;
karelParser.T__28 = 29;
karelParser.T__29 = 30;
karelParser.T__30 = 31;
karelParser.T__31 = 32;
karelParser.T__32 = 33;
karelParser.T__33 = 34;
karelParser.T__34 = 35;
karelParser.T__35 = 36;
karelParser.T__36 = 37;
karelParser.T__37 = 38;
karelParser.T__38 = 39;
karelParser.T__39 = 40;
karelParser.IDENTIFIER = 41;
karelParser.LETTER = 42;
karelParser.DIGIT = 43;
karelParser.WS = 44;

karelParser.RULE_karel = 0;
karelParser.RULE_definition = 1;
karelParser.RULE_statement = 2;
karelParser.RULE_block = 3;
karelParser.RULE_iteration = 4;
karelParser.RULE_loop = 5;
karelParser.RULE_conditional = 6;
karelParser.RULE_instruction = 7;
karelParser.RULE_condition = 8;
karelParser.RULE_number = 9;

class KarelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_karel;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterKarel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitKarel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitKarel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_definition;
    }

	IDENTIFIER() {
	    return this.getToken(karelParser.IDENTIFIER, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_statement;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	iteration() {
	    return this.getTypedRuleContext(IterationContext,0);
	};

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IterationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_iteration;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterIteration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitIteration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitIteration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_loop;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_conditional;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitConditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitConditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_instruction;
    }

	IDENTIFIER() {
	    return this.getToken(karelParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_condition;
    }


	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = karelParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(karelParser.DIGIT);
	    } else {
	        return this.getToken(karelParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof karelListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof karelVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




karelParser.KarelContext = KarelContext; 
karelParser.DefinitionContext = DefinitionContext; 
karelParser.StatementContext = StatementContext; 
karelParser.BlockContext = BlockContext; 
karelParser.IterationContext = IterationContext; 
karelParser.LoopContext = LoopContext; 
karelParser.ConditionalContext = ConditionalContext; 
karelParser.InstructionContext = InstructionContext; 
karelParser.ConditionContext = ConditionContext; 
karelParser.NumberContext = NumberContext; 
