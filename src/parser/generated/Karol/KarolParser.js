// Generated from D:/projects/react-three-karol/antlrgrammar\Karol.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import KarolVisitor from './KarolVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003?\u00b3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e\n\u0002",
    "\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "%\n\u0002\f\u0002\u000e\u0002(\u000b\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002,\n\u0002\f\u0002\u000e\u0002/\u000b\u0002\u0003\u0002\u0006\u0002",
    "2\n\u0002\r\u0002\u000e\u00023\u0005\u00026\n\u0002\u0003\u0003\u0003",
    "\u0003\u0005\u0003:\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004?\n\u0004\f\u0004\u000e\u0004B\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004H\n\u0004\f\u0004\u000e\u0004K\u000b",
    "\u0004\u0003\u0004\u0005\u0004N\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005S\n\u0005\f\u0005\u000e\u0005V\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006_\n\u0006\u0005\u0006a\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007g\n\u0007\f\u0007\u000e\u0007j\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\br\n",
    "\b\f\b\u000e\bu\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b{\n\b",
    "\f\b\u000e\b~\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
    "\b\u0085\n\b\f\b\u000e\b\u0088\u000b\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b\u008d\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0093\n\t\f\t\u000e",
    "\t\u0096\u000b\t\u0003\t\u0003\t\u0007\t\u009a\n\t\f\t\u000e\t\u009d",
    "\u000b\t\u0005\t\u009f\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00a8\n\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0006\u000e\u00af\n\u000e\r\u000e\u000e\u000e",
    "\u00b0\u0003\u000e\u0002\u0002\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u0002\u000b\u0003\u0002\u0004\u0005\u0003",
    "\u0002\u0007\b\u0003\u0002\n\u000b\u0003\u0002\r\u000e\u0003\u0002\u0012",
    "\u0013\u0003\u0002\u0019\u001a\u0003\u0002\u001b&\u0003\u0002(6\u0003",
    "\u00027;\u0002\u00be\u00025\u0003\u0002\u0002\u0002\u00049\u0003\u0002",
    "\u0002\u0002\u0006M\u0003\u0002\u0002\u0002\bO\u0003\u0002\u0002\u0002",
    "\n`\u0003\u0002\u0002\u0002\fb\u0003\u0002\u0002\u0002\u000e\u008c\u0003",
    "\u0002\u0002\u0002\u0010\u008e\u0003\u0002\u0002\u0002\u0012\u00a2\u0003",
    "\u0002\u0002\u0002\u0014\u00a7\u0003\u0002\u0002\u0002\u0016\u00a9\u0003",
    "\u0002\u0002\u0002\u0018\u00ab\u0003\u0002\u0002\u0002\u001a\u00ae\u0003",
    "\u0002\u0002\u0002\u001c\u001e\u0005\u0004\u0003\u0002\u001d\u001c\u0003",
    "\u0002\u0002\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003",
    "\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \"\u0003\u0002\u0002",
    "\u0002!\u001f\u0003\u0002\u0002\u0002\"&\u0007\u0003\u0002\u0002#%\u0005",
    "\n\u0006\u0002$#\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&",
    "$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\')\u0003\u0002",
    "\u0002\u0002(&\u0003\u0002\u0002\u0002)6\t\u0002\u0002\u0002*,\u0005",
    "\u0004\u0003\u0002+*\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002",
    "-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002",
    "\u0002/-\u0003\u0002\u0002\u000202\u0005\n\u0006\u000210\u0003\u0002",
    "\u0002\u000223\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003",
    "\u0002\u0002\u000246\u0003\u0002\u0002\u00025\u001f\u0003\u0002\u0002",
    "\u00025-\u0003\u0002\u0002\u00026\u0003\u0003\u0002\u0002\u00027:\u0005",
    "\b\u0005\u00028:\u0005\u0006\u0004\u000297\u0003\u0002\u0002\u00029",
    "8\u0003\u0002\u0002\u0002:\u0005\u0003\u0002\u0002\u0002;<\u0007\u0006",
    "\u0002\u0002<@\u0007<\u0002\u0002=?\u0005\n\u0006\u0002>=\u0003\u0002",
    "\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003",
    "\u0002\u0002\u0002AC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002",
    "CN\t\u0003\u0002\u0002DE\u0007\t\u0002\u0002EI\u0007<\u0002\u0002FH",
    "\u0005\n\u0006\u0002GF\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002",
    "IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002LN\t\u0004\u0002\u0002M;\u0003\u0002",
    "\u0002\u0002MD\u0003\u0002\u0002\u0002N\u0007\u0003\u0002\u0002\u0002",
    "OP\u0007\f\u0002\u0002PT\u0007<\u0002\u0002QS\u0005\n\u0006\u0002RQ",
    "\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002TU\u0003\u0002\u0002\u0002UW\u0003\u0002\u0002\u0002VT\u0003\u0002",
    "\u0002\u0002WX\t\u0005\u0002\u0002X\t\u0003\u0002\u0002\u0002Ya\u0005",
    "\f\u0007\u0002Za\u0005\u000e\b\u0002[a\u0005\u0010\t\u0002\\^\u0005",
    "\u0012\n\u0002]_\u0007\u000f\u0002\u0002^]\u0003\u0002\u0002\u0002^",
    "_\u0003\u0002\u0002\u0002_a\u0003\u0002\u0002\u0002`Y\u0003\u0002\u0002",
    "\u0002`Z\u0003\u0002\u0002\u0002`[\u0003\u0002\u0002\u0002`\\\u0003",
    "\u0002\u0002\u0002a\u000b\u0003\u0002\u0002\u0002bc\u0007\u0010\u0002",
    "\u0002cd\u0005\u001a\u000e\u0002dh\u0007\u0011\u0002\u0002eg\u0005\n",
    "\u0006\u0002fe\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003",
    "\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ik\u0003\u0002\u0002\u0002",
    "jh\u0003\u0002\u0002\u0002kl\t\u0006\u0002\u0002l\r\u0003\u0002\u0002",
    "\u0002mn\u0007\u0010\u0002\u0002no\u0007\u0014\u0002\u0002os\u0005\u0014",
    "\u000b\u0002pr\u0005\n\u0006\u0002qp\u0003\u0002\u0002\u0002ru\u0003",
    "\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002",
    "tv\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vw\t\u0006\u0002",
    "\u0002w\u008d\u0003\u0002\u0002\u0002x|\u0007\u0010\u0002\u0002y{\u0005",
    "\n\u0006\u0002zy\u0003\u0002\u0002\u0002{~\u0003\u0002\u0002\u0002|",
    "z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u007f\u0003\u0002",
    "\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0080\t\u0006\u0002\u0002",
    "\u0080\u0081\u0007\u0014\u0002\u0002\u0081\u008d\u0005\u0014\u000b\u0002",
    "\u0082\u0086\u0007\u0010\u0002\u0002\u0083\u0085\u0005\n\u0006\u0002",
    "\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002",
    "\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u0089\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0089\u008a\t\u0006\u0002\u0002\u008a\u008b\u0007\u0015\u0002\u0002",
    "\u008b\u008d\u0005\u0014\u000b\u0002\u008cm\u0003\u0002\u0002\u0002",
    "\u008cx\u0003\u0002\u0002\u0002\u008c\u0082\u0003\u0002\u0002\u0002",
    "\u008d\u000f\u0003\u0002\u0002\u0002\u008e\u008f\u0007\u0016\u0002\u0002",
    "\u008f\u0090\u0005\u0014\u000b\u0002\u0090\u0094\u0007\u0017\u0002\u0002",
    "\u0091\u0093\u0005\n\u0006\u0002\u0092\u0091\u0003\u0002\u0002\u0002",
    "\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u009e\u0003\u0002\u0002\u0002",
    "\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u009b\u0007\u0018\u0002\u0002",
    "\u0098\u009a\u0005\n\u0006\u0002\u0099\u0098\u0003\u0002\u0002\u0002",
    "\u009a\u009d\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002",
    "\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u0097\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\t\u0007\u0002\u0002\u00a1\u0011\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\t\b\u0002\u0002\u00a3\u0013\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0007\'\u0002\u0002\u00a5\u00a8\u0005\u0014\u000b\u0002\u00a6",
    "\u00a8\u0005\u0016\f\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002\u00a7",
    "\u00a6\u0003\u0002\u0002\u0002\u00a8\u0015\u0003\u0002\u0002\u0002\u00a9",
    "\u00aa\t\t\u0002\u0002\u00aa\u0017\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\t\n\u0002\u0002\u00ac\u0019\u0003\u0002\u0002\u0002\u00ad\u00af\u0007",
    ">\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0\u0003",
    "\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003",
    "\u0002\u0002\u0002\u00b1\u001b\u0003\u0002\u0002\u0002\u0018\u001f&",
    "-359@IMT^`hs|\u0086\u008c\u0094\u009b\u009e\u00a7\u00b0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class KarolParser extends antlr4.Parser {

    static grammarFileName = "Karol.g4";
    static literalNames = [ null, "'Programm'", "'endeProgramm'", "'*Programm'", 
                            "'Anweisung'", "'endeAnweisung'", "'*Anweisung'", 
                            "'Methode'", "'endeMethode'", "'*Methode'", 
                            "'Bedingung'", "'endeBedingung'", "'*Bedingung'", 
                            "';'", "'wiederhole'", "'mal'", "'endewiederhole'", 
                            "'*wiederhole'", "'solange'", "'bis'", "'wenn'", 
                            "'dann'", "'sonst'", "'endewenn'", "'*wenn'", 
                            "'Schritt'", "'LinksDrehen'", "'RechtsDrehen'", 
                            "'Hinlegen'", "'Aufheben'", "'MarkeSetzen'", 
                            "'MarkeL\u00F6schen'", "'Warten'", "'Ton'", 
                            "'Beenden'", "'schnell'", "'langsam'", "'nicht'", 
                            "'IstWand'", "'NichtIstWand'", "'IstZiegel'", 
                            "'NichtIstZiegel'", "'IstMarke'", "'NichtIstMarke'", 
                            "'IstS\u00FCden'", "'IstNorden'", "'IstWesten'", 
                            "'IstOsten'", "'IstVoll'", "'NichtIstVoll'", 
                            "'IstLeer'", "'NichtIstLeer'", "'HatZiegel'", 
                            "'rot'", "'gelb'", "'blau'", "'gr\u00FCn'", 
                            "'schwarz'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "IDENTIFIER", "LETTER", "DIGIT", 
                             "WS" ];
    static ruleNames = [ "karol", "definition", "methoddefinition", "conditiondefinition", 
                         "statement", "iteration", "loop", "conditional", 
                         "instruction", "conditionexpression", "condition", 
                         "color", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = KarolParser.ruleNames;
        this.literalNames = KarolParser.literalNames;
        this.symbolicNames = KarolParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	karol() {
	    let localctx = new KarolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, KarolParser.RULE_karol);
	    var _la = 0; // Token type
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KarolParser.T__3) | (1 << KarolParser.T__6) | (1 << KarolParser.T__9))) !== 0)) {
	                this.state = 26;
	                this.definition();
	                this.state = 31;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 32;
	            this.match(KarolParser.T__0);
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	                this.state = 33;
	                this.statement();
	                this.state = 38;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 39;
	            _la = this._input.LA(1);
	            if(!(_la===KarolParser.T__1 || _la===KarolParser.T__2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KarolParser.T__3) | (1 << KarolParser.T__6) | (1 << KarolParser.T__9))) !== 0)) {
	                this.state = 40;
	                this.definition();
	                this.state = 45;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 46;
	                this.statement();
	                this.state = 49; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0));
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, KarolParser.RULE_definition);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case KarolParser.T__9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.conditiondefinition();
	            break;
	        case KarolParser.T__3:
	        case KarolParser.T__6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.methoddefinition();
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



	methoddefinition() {
	    let localctx = new MethoddefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, KarolParser.RULE_methoddefinition);
	    var _la = 0; // Token type
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case KarolParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.match(KarolParser.T__3);
	            this.state = 58;
	            this.match(KarolParser.IDENTIFIER);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	                this.state = 59;
	                this.statement();
	                this.state = 64;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 65;
	            _la = this._input.LA(1);
	            if(!(_la===KarolParser.T__4 || _la===KarolParser.T__5)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case KarolParser.T__6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(KarolParser.T__6);
	            this.state = 67;
	            this.match(KarolParser.IDENTIFIER);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	                this.state = 68;
	                this.statement();
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 74;
	            _la = this._input.LA(1);
	            if(!(_la===KarolParser.T__7 || _la===KarolParser.T__8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	conditiondefinition() {
	    let localctx = new ConditiondefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, KarolParser.RULE_conditiondefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(KarolParser.T__9);
	        this.state = 78;
	        this.match(KarolParser.IDENTIFIER);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	            this.state = 79;
	            this.statement();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        _la = this._input.LA(1);
	        if(!(_la===KarolParser.T__10 || _la===KarolParser.T__11)) {
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, KarolParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.iteration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.loop();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.conditional();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 90;
	            this.instruction();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===KarolParser.T__12) {
	                this.state = 91;
	                this.match(KarolParser.T__12);
	            }

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



	iteration() {
	    let localctx = new IterationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, KarolParser.RULE_iteration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(KarolParser.T__13);
	        this.state = 97;
	        this.number();
	        this.state = 98;
	        this.match(KarolParser.T__14);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	            this.state = 99;
	            this.statement();
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        _la = this._input.LA(1);
	        if(!(_la===KarolParser.T__15 || _la===KarolParser.T__16)) {
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



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, KarolParser.RULE_loop);
	    var _la = 0; // Token type
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.match(KarolParser.T__13);
	            this.state = 108;
	            this.match(KarolParser.T__17);
	            this.state = 109;
	            this.conditionexpression();
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	                this.state = 110;
	                this.statement();
	                this.state = 115;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 116;
	            _la = this._input.LA(1);
	            if(!(_la===KarolParser.T__15 || _la===KarolParser.T__16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.match(KarolParser.T__13);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	                this.state = 119;
	                this.statement();
	                this.state = 124;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 125;
	            _la = this._input.LA(1);
	            if(!(_la===KarolParser.T__15 || _la===KarolParser.T__16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 126;
	            this.match(KarolParser.T__17);
	            this.state = 127;
	            this.conditionexpression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 128;
	            this.match(KarolParser.T__13);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	                this.state = 129;
	                this.statement();
	                this.state = 134;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 135;
	            _la = this._input.LA(1);
	            if(!(_la===KarolParser.T__15 || _la===KarolParser.T__16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 136;
	            this.match(KarolParser.T__18);
	            this.state = 137;
	            this.conditionexpression();
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



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, KarolParser.RULE_conditional);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(KarolParser.T__19);
	        this.state = 141;
	        this.conditionexpression();
	        this.state = 142;
	        this.match(KarolParser.T__20);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	            this.state = 143;
	            this.statement();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===KarolParser.T__21) {
	            this.state = 149;
	            this.match(KarolParser.T__21);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (KarolParser.T__13 - 14)) | (1 << (KarolParser.T__19 - 14)) | (1 << (KarolParser.T__24 - 14)) | (1 << (KarolParser.T__25 - 14)) | (1 << (KarolParser.T__26 - 14)) | (1 << (KarolParser.T__27 - 14)) | (1 << (KarolParser.T__28 - 14)) | (1 << (KarolParser.T__29 - 14)) | (1 << (KarolParser.T__30 - 14)) | (1 << (KarolParser.T__31 - 14)) | (1 << (KarolParser.T__32 - 14)) | (1 << (KarolParser.T__33 - 14)) | (1 << (KarolParser.T__34 - 14)) | (1 << (KarolParser.T__35 - 14)))) !== 0)) {
	                this.state = 150;
	                this.statement();
	                this.state = 155;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 158;
	        _la = this._input.LA(1);
	        if(!(_la===KarolParser.T__22 || _la===KarolParser.T__23)) {
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, KarolParser.RULE_instruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        _la = this._input.LA(1);
	        if(!(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (KarolParser.T__24 - 25)) | (1 << (KarolParser.T__25 - 25)) | (1 << (KarolParser.T__26 - 25)) | (1 << (KarolParser.T__27 - 25)) | (1 << (KarolParser.T__28 - 25)) | (1 << (KarolParser.T__29 - 25)) | (1 << (KarolParser.T__30 - 25)) | (1 << (KarolParser.T__31 - 25)) | (1 << (KarolParser.T__32 - 25)) | (1 << (KarolParser.T__33 - 25)) | (1 << (KarolParser.T__34 - 25)) | (1 << (KarolParser.T__35 - 25)))) !== 0))) {
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



	conditionexpression() {
	    let localctx = new ConditionexpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, KarolParser.RULE_conditionexpression);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case KarolParser.T__36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.match(KarolParser.T__36);
	            this.state = 163;
	            this.conditionexpression();
	            break;
	        case KarolParser.T__37:
	        case KarolParser.T__38:
	        case KarolParser.T__39:
	        case KarolParser.T__40:
	        case KarolParser.T__41:
	        case KarolParser.T__42:
	        case KarolParser.T__43:
	        case KarolParser.T__44:
	        case KarolParser.T__45:
	        case KarolParser.T__46:
	        case KarolParser.T__47:
	        case KarolParser.T__48:
	        case KarolParser.T__49:
	        case KarolParser.T__50:
	        case KarolParser.T__51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.condition();
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, KarolParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        _la = this._input.LA(1);
	        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (KarolParser.T__37 - 38)) | (1 << (KarolParser.T__38 - 38)) | (1 << (KarolParser.T__39 - 38)) | (1 << (KarolParser.T__40 - 38)) | (1 << (KarolParser.T__41 - 38)) | (1 << (KarolParser.T__42 - 38)) | (1 << (KarolParser.T__43 - 38)) | (1 << (KarolParser.T__44 - 38)) | (1 << (KarolParser.T__45 - 38)) | (1 << (KarolParser.T__46 - 38)) | (1 << (KarolParser.T__47 - 38)) | (1 << (KarolParser.T__48 - 38)) | (1 << (KarolParser.T__49 - 38)) | (1 << (KarolParser.T__50 - 38)) | (1 << (KarolParser.T__51 - 38)))) !== 0))) {
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



	color() {
	    let localctx = new ColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, KarolParser.RULE_color);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (KarolParser.T__52 - 53)) | (1 << (KarolParser.T__53 - 53)) | (1 << (KarolParser.T__54 - 53)) | (1 << (KarolParser.T__55 - 53)) | (1 << (KarolParser.T__56 - 53)))) !== 0))) {
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
	    this.enterRule(localctx, 24, KarolParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 171;
	            this.match(KarolParser.DIGIT);
	            this.state = 174; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===KarolParser.DIGIT);
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

KarolParser.EOF = antlr4.Token.EOF;
KarolParser.T__0 = 1;
KarolParser.T__1 = 2;
KarolParser.T__2 = 3;
KarolParser.T__3 = 4;
KarolParser.T__4 = 5;
KarolParser.T__5 = 6;
KarolParser.T__6 = 7;
KarolParser.T__7 = 8;
KarolParser.T__8 = 9;
KarolParser.T__9 = 10;
KarolParser.T__10 = 11;
KarolParser.T__11 = 12;
KarolParser.T__12 = 13;
KarolParser.T__13 = 14;
KarolParser.T__14 = 15;
KarolParser.T__15 = 16;
KarolParser.T__16 = 17;
KarolParser.T__17 = 18;
KarolParser.T__18 = 19;
KarolParser.T__19 = 20;
KarolParser.T__20 = 21;
KarolParser.T__21 = 22;
KarolParser.T__22 = 23;
KarolParser.T__23 = 24;
KarolParser.T__24 = 25;
KarolParser.T__25 = 26;
KarolParser.T__26 = 27;
KarolParser.T__27 = 28;
KarolParser.T__28 = 29;
KarolParser.T__29 = 30;
KarolParser.T__30 = 31;
KarolParser.T__31 = 32;
KarolParser.T__32 = 33;
KarolParser.T__33 = 34;
KarolParser.T__34 = 35;
KarolParser.T__35 = 36;
KarolParser.T__36 = 37;
KarolParser.T__37 = 38;
KarolParser.T__38 = 39;
KarolParser.T__39 = 40;
KarolParser.T__40 = 41;
KarolParser.T__41 = 42;
KarolParser.T__42 = 43;
KarolParser.T__43 = 44;
KarolParser.T__44 = 45;
KarolParser.T__45 = 46;
KarolParser.T__46 = 47;
KarolParser.T__47 = 48;
KarolParser.T__48 = 49;
KarolParser.T__49 = 50;
KarolParser.T__50 = 51;
KarolParser.T__51 = 52;
KarolParser.T__52 = 53;
KarolParser.T__53 = 54;
KarolParser.T__54 = 55;
KarolParser.T__55 = 56;
KarolParser.T__56 = 57;
KarolParser.IDENTIFIER = 58;
KarolParser.LETTER = 59;
KarolParser.DIGIT = 60;
KarolParser.WS = 61;

KarolParser.RULE_karol = 0;
KarolParser.RULE_definition = 1;
KarolParser.RULE_methoddefinition = 2;
KarolParser.RULE_conditiondefinition = 3;
KarolParser.RULE_statement = 4;
KarolParser.RULE_iteration = 5;
KarolParser.RULE_loop = 6;
KarolParser.RULE_conditional = 7;
KarolParser.RULE_instruction = 8;
KarolParser.RULE_conditionexpression = 9;
KarolParser.RULE_condition = 10;
KarolParser.RULE_color = 11;
KarolParser.RULE_number = 12;

class KarolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KarolParser.RULE_karol;
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

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitKarol(this);
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
        this.ruleIndex = KarolParser.RULE_definition;
    }

	conditiondefinition() {
	    return this.getTypedRuleContext(ConditiondefinitionContext,0);
	};

	methoddefinition() {
	    return this.getTypedRuleContext(MethoddefinitionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethoddefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KarolParser.RULE_methoddefinition;
    }

	IDENTIFIER() {
	    return this.getToken(KarolParser.IDENTIFIER, 0);
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

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitMethoddefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditiondefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KarolParser.RULE_conditiondefinition;
    }

	IDENTIFIER() {
	    return this.getToken(KarolParser.IDENTIFIER, 0);
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

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitConditiondefinition(this);
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
        this.ruleIndex = KarolParser.RULE_statement;
    }

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

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitStatement(this);
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
        this.ruleIndex = KarolParser.RULE_iteration;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
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
        this.ruleIndex = KarolParser.RULE_loop;
    }

	conditionexpression() {
	    return this.getTypedRuleContext(ConditionexpressionContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
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
        this.ruleIndex = KarolParser.RULE_conditional;
    }

	conditionexpression() {
	    return this.getTypedRuleContext(ConditionexpressionContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
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
        this.ruleIndex = KarolParser.RULE_instruction;
    }


	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KarolParser.RULE_conditionexpression;
    }

	conditionexpression() {
	    return this.getTypedRuleContext(ConditionexpressionContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitConditionexpression(this);
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
        this.ruleIndex = KarolParser.RULE_condition;
    }


	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ColorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = KarolParser.RULE_color;
    }


	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitColor(this);
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
        this.ruleIndex = KarolParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(KarolParser.DIGIT);
	    } else {
	        return this.getToken(KarolParser.DIGIT, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof KarolVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




KarolParser.KarolContext = KarolContext; 
KarolParser.DefinitionContext = DefinitionContext; 
KarolParser.MethoddefinitionContext = MethoddefinitionContext; 
KarolParser.ConditiondefinitionContext = ConditiondefinitionContext; 
KarolParser.StatementContext = StatementContext; 
KarolParser.IterationContext = IterationContext; 
KarolParser.LoopContext = LoopContext; 
KarolParser.ConditionalContext = ConditionalContext; 
KarolParser.InstructionContext = InstructionContext; 
KarolParser.ConditionexpressionContext = ConditionexpressionContext; 
KarolParser.ConditionContext = ConditionContext; 
KarolParser.ColorContext = ColorContext; 
KarolParser.NumberContext = NumberContext; 
