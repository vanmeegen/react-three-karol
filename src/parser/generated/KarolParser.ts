
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class KarolParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly T__44 = 45;
    public static readonly T__45 = 46;
    public static readonly T__46 = 47;
    public static readonly T__47 = 48;
    public static readonly T__48 = 49;
    public static readonly T__49 = 50;
    public static readonly T__50 = 51;
    public static readonly T__51 = 52;
    public static readonly T__52 = 53;
    public static readonly T__53 = 54;
    public static readonly T__54 = 55;
    public static readonly T__55 = 56;
    public static readonly T__56 = 57;
    public static readonly T__57 = 58;
    public static readonly T__58 = 59;
    public static readonly T__59 = 60;
    public static readonly T__60 = 61;
    public static readonly T__61 = 62;
    public static readonly T__62 = 63;
    public static readonly IDENTIFIER = 64;
    public static readonly LETTER = 65;
    public static readonly DIGIT = 66;
    public static readonly WS = 67;
    public static readonly RULE_karol = 0;
    public static readonly RULE_definition = 1;
    public static readonly RULE_methoddefinition = 2;
    public static readonly RULE_conditiondefinition = 3;
    public static readonly RULE_statement = 4;
    public static readonly RULE_customMethodCall = 5;
    public static readonly RULE_iteration = 6;
    public static readonly RULE_loop = 7;
    public static readonly RULE_conditional = 8;
    public static readonly RULE_instruction = 9;
    public static readonly RULE_parameterizedinstruction = 10;
    public static readonly RULE_conditionexpression = 11;
    public static readonly RULE_customConditionCall = 12;
    public static readonly RULE_condition = 13;
    public static readonly RULE_parameterizedcondition = 14;
    public static readonly RULE_color = 15;
    public static readonly RULE_number = 16;

    public static readonly literalNames = [
        null, "'programm'", "'endeprogramm'", "'*programm'", "'anweisung'", 
        "'endeanweisung'", "'*anweisung'", "'methode'", "'endemethode'", 
        "'*methode'", "'bedingung'", "'endebedingung'", "'*bedingung'", 
        "';'", "'karol'", "'.'", "'('", "')'", "'wiederhole'", "'mal'", 
        "'endewiederhole'", "'*wiederhole'", "'solange'", "'bis'", "'wenn'", 
        "'dann'", "'sonst'", "'endewenn'", "'*wenn'", "'schritt'", "'linksdrehen'", 
        "'rechtsdrehen'", "'hinlegen'", "'aufheben'", "'markesetzen'", "'markel\\u00F6schen'", 
        "'warten'", "'ton'", "'beenden'", "'schnell'", "'langsam'", "'nicht'", 
        "'istwand'", "'nichtistwand'", "'ists\\u00FCden'", "'istnorden'", 
        "'istwesten'", "'istosten'", "'istvoll'", "'nichtistvoll'", "'istleer'", 
        "'nichtistleer'", "'istziegel'", "'nichtistziegel'", "'istmarke'", 
        "'nichtistmarke'", "'hatziegel'", "'wahr'", "'falsch'", "'rot'", 
        "'gelb'", "'blau'", "'gr\\u00FCn'", "'schwarz'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "IDENTIFIER", 
        "LETTER", "DIGIT", "WS"
    ];
    public static readonly ruleNames = [
        "karol", "definition", "methoddefinition", "conditiondefinition", 
        "statement", "customMethodCall", "iteration", "loop", "conditional", 
        "instruction", "parameterizedinstruction", "conditionexpression", 
        "customConditionCall", "condition", "parameterizedcondition", "color", 
        "number",
    ];

    public get grammarFileName(): string { return "Karol.g4"; }
    public get literalNames(): (string | null)[] { return KarolParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return KarolParser.symbolicNames; }
    public get ruleNames(): string[] { return KarolParser.ruleNames; }
    public get serializedATN(): number[] { return KarolParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, KarolParser._ATN, KarolParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public karol(): KarolContext {
        let localContext = new KarolContext(this.context, this.state);
        this.enterRule(localContext, 0, KarolParser.RULE_karol);
        let _la: number;
        try {
            this.state = 60;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 37;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168) !== 0)) {
                    {
                    {
                    this.state = 34;
                    this.definition();
                    }
                    }
                    this.state = 39;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 40;
                this.match(KarolParser.T__0);
                this.state = 44;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 41;
                    this.statement();
                    }
                    }
                    this.state = 46;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 47;
                _la = this.tokenStream.LA(1);
                if(!(_la === 2 || _la === 3)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 51;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168) !== 0)) {
                    {
                    {
                    this.state = 48;
                    this.definition();
                    }
                    }
                    this.state = 53;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 57;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 54;
                    this.statement();
                    }
                    }
                    this.state = 59;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public definition(): DefinitionContext {
        let localContext = new DefinitionContext(this.context, this.state);
        this.enterRule(localContext, 2, KarolParser.RULE_definition);
        try {
            this.state = 64;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case KarolParser.T__9:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 62;
                this.conditiondefinition();
                }
                break;
            case KarolParser.T__3:
            case KarolParser.T__6:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 63;
                this.methoddefinition();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methoddefinition(): MethoddefinitionContext {
        let localContext = new MethoddefinitionContext(this.context, this.state);
        this.enterRule(localContext, 4, KarolParser.RULE_methoddefinition);
        let _la: number;
        try {
            this.state = 84;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case KarolParser.T__3:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 66;
                this.match(KarolParser.T__3);
                this.state = 67;
                this.match(KarolParser.IDENTIFIER);
                this.state = 71;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 68;
                    this.statement();
                    }
                    }
                    this.state = 73;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 74;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 6)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case KarolParser.T__6:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 75;
                this.match(KarolParser.T__6);
                this.state = 76;
                this.match(KarolParser.IDENTIFIER);
                this.state = 80;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 77;
                    this.statement();
                    }
                    }
                    this.state = 82;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 83;
                _la = this.tokenStream.LA(1);
                if(!(_la === 8 || _la === 9)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditiondefinition(): ConditiondefinitionContext {
        let localContext = new ConditiondefinitionContext(this.context, this.state);
        this.enterRule(localContext, 6, KarolParser.RULE_conditiondefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 86;
            this.match(KarolParser.T__9);
            this.state = 87;
            this.match(KarolParser.IDENTIFIER);
            this.state = 90;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 90;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                case 1:
                    {
                    this.state = 88;
                    this.statement();
                    }
                    break;
                case 2:
                    {
                    this.state = 89;
                    this.conditionexpression();
                    }
                    break;
                }
                }
                this.state = 92;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 4294935569) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 270335) !== 0));
            this.state = 94;
            _la = this.tokenStream.LA(1);
            if(!(_la === 11 || _la === 12)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 8, KarolParser.RULE_statement);
        let _la: number;
        try {
            this.state = 122;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 96;
                this.iteration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 97;
                this.loop();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 98;
                this.conditional();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 99;
                this.instruction();
                this.state = 101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 100;
                    this.match(KarolParser.T__12);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 103;
                this.match(KarolParser.T__13);
                this.state = 104;
                this.match(KarolParser.T__14);
                this.state = 105;
                this.instruction();
                this.state = 106;
                this.match(KarolParser.T__15);
                this.state = 107;
                this.match(KarolParser.T__16);
                this.state = 109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 108;
                    this.match(KarolParser.T__12);
                    }
                }

                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 111;
                this.parameterizedinstruction();
                this.state = 113;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 112;
                    this.match(KarolParser.T__12);
                    }
                }

                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 115;
                this.match(KarolParser.T__13);
                this.state = 116;
                this.match(KarolParser.T__14);
                this.state = 117;
                this.parameterizedinstruction();
                this.state = 119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 118;
                    this.match(KarolParser.T__12);
                    }
                }

                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 121;
                this.customMethodCall();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public customMethodCall(): CustomMethodCallContext {
        let localContext = new CustomMethodCallContext(this.context, this.state);
        this.enterRule(localContext, 10, KarolParser.RULE_customMethodCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 124;
            this.match(KarolParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public iteration(): IterationContext {
        let localContext = new IterationContext(this.context, this.state);
        this.enterRule(localContext, 12, KarolParser.RULE_iteration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 126;
            this.match(KarolParser.T__17);
            this.state = 127;
            this.number_();
            this.state = 128;
            this.match(KarolParser.T__18);
            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                {
                {
                this.state = 129;
                this.statement();
                }
                }
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 135;
            _la = this.tokenStream.LA(1);
            if(!(_la === 20 || _la === 21)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loop(): LoopContext {
        let localContext = new LoopContext(this.context, this.state);
        this.enterRule(localContext, 14, KarolParser.RULE_loop);
        let _la: number;
        try {
            this.state = 168;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 137;
                this.match(KarolParser.T__17);
                this.state = 138;
                this.match(KarolParser.T__21);
                this.state = 139;
                this.conditionexpression();
                this.state = 143;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 140;
                    this.statement();
                    }
                    }
                    this.state = 145;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 146;
                _la = this.tokenStream.LA(1);
                if(!(_la === 20 || _la === 21)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 148;
                this.match(KarolParser.T__17);
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 149;
                    this.statement();
                    }
                    }
                    this.state = 154;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 155;
                _la = this.tokenStream.LA(1);
                if(!(_la === 20 || _la === 21)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 156;
                this.match(KarolParser.T__21);
                this.state = 157;
                this.conditionexpression();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 158;
                this.match(KarolParser.T__17);
                this.state = 162;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 159;
                    this.statement();
                    }
                    }
                    this.state = 164;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 165;
                _la = this.tokenStream.LA(1);
                if(!(_la === 20 || _la === 21)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 166;
                this.match(KarolParser.T__22);
                this.state = 167;
                this.conditionexpression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditional(): ConditionalContext {
        let localContext = new ConditionalContext(this.context, this.state);
        this.enterRule(localContext, 16, KarolParser.RULE_conditional);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 170;
            this.match(KarolParser.T__23);
            this.state = 171;
            this.conditionexpression();
            this.state = 172;
            this.match(KarolParser.T__24);
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                {
                {
                this.state = 173;
                this.statement();
                }
                }
                this.state = 178;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 179;
                this.match(KarolParser.T__25);
                this.state = 183;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 134186001) !== 0) || _la === 64) {
                    {
                    {
                    this.state = 180;
                    this.statement();
                    }
                    }
                    this.state = 185;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 188;
            _la = this.tokenStream.LA(1);
            if(!(_la === 27 || _la === 28)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public instruction(): InstructionContext {
        let localContext = new InstructionContext(this.context, this.state);
        this.enterRule(localContext, 18, KarolParser.RULE_instruction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 190;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 4095) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterizedinstruction(): ParameterizedinstructionContext {
        let localContext = new ParameterizedinstructionContext(this.context, this.state);
        this.enterRule(localContext, 20, KarolParser.RULE_parameterizedinstruction);
        try {
            this.state = 220;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case KarolParser.T__28:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 192;
                this.match(KarolParser.T__28);
                this.state = 193;
                this.match(KarolParser.T__15);
                this.state = 194;
                this.number_();
                this.state = 195;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__31:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 197;
                this.match(KarolParser.T__31);
                this.state = 198;
                this.match(KarolParser.T__15);
                this.state = 201;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case KarolParser.T__58:
                case KarolParser.T__59:
                case KarolParser.T__60:
                case KarolParser.T__61:
                case KarolParser.T__62:
                    {
                    this.state = 199;
                    this.color();
                    }
                    break;
                case KarolParser.DIGIT:
                    {
                    this.state = 200;
                    this.number_();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 203;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__32:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 205;
                this.match(KarolParser.T__32);
                this.state = 206;
                this.match(KarolParser.T__15);
                this.state = 207;
                this.number_();
                this.state = 208;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__33:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 210;
                this.match(KarolParser.T__33);
                this.state = 211;
                this.match(KarolParser.T__15);
                this.state = 212;
                this.color();
                this.state = 213;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__35:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 215;
                this.match(KarolParser.T__35);
                this.state = 216;
                this.match(KarolParser.T__15);
                this.state = 217;
                this.number_();
                this.state = 218;
                this.match(KarolParser.T__16);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public conditionexpression(): ConditionexpressionContext {
        let localContext = new ConditionexpressionContext(this.context, this.state);
        this.enterRule(localContext, 22, KarolParser.RULE_conditionexpression);
        try {
            this.state = 236;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 222;
                this.match(KarolParser.T__40);
                this.state = 223;
                this.conditionexpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 224;
                this.condition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 225;
                this.match(KarolParser.T__13);
                this.state = 226;
                this.match(KarolParser.T__14);
                this.state = 227;
                this.condition();
                this.state = 228;
                this.match(KarolParser.T__15);
                this.state = 229;
                this.match(KarolParser.T__16);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 231;
                this.parameterizedcondition();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 232;
                this.match(KarolParser.T__13);
                this.state = 233;
                this.match(KarolParser.T__14);
                this.state = 234;
                this.parameterizedcondition();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 235;
                this.customConditionCall();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public customConditionCall(): CustomConditionCallContext {
        let localContext = new CustomConditionCallContext(this.context, this.state);
        this.enterRule(localContext, 24, KarolParser.RULE_customConditionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 238;
            this.match(KarolParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public condition(): ConditionContext {
        let localContext = new ConditionContext(this.context, this.state);
        this.enterRule(localContext, 26, KarolParser.RULE_condition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 240;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 131071) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterizedcondition(): ParameterizedconditionContext {
        let localContext = new ParameterizedconditionContext(this.context, this.state);
        this.enterRule(localContext, 28, KarolParser.RULE_parameterizedcondition);
        try {
            this.state = 273;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case KarolParser.T__51:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 242;
                this.match(KarolParser.T__51);
                this.state = 243;
                this.match(KarolParser.T__15);
                this.state = 246;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case KarolParser.T__58:
                case KarolParser.T__59:
                case KarolParser.T__60:
                case KarolParser.T__61:
                case KarolParser.T__62:
                    {
                    this.state = 244;
                    this.color();
                    }
                    break;
                case KarolParser.DIGIT:
                    {
                    this.state = 245;
                    this.number_();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 248;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__52:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 250;
                this.match(KarolParser.T__52);
                this.state = 251;
                this.match(KarolParser.T__15);
                this.state = 254;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case KarolParser.T__58:
                case KarolParser.T__59:
                case KarolParser.T__60:
                case KarolParser.T__61:
                case KarolParser.T__62:
                    {
                    this.state = 252;
                    this.color();
                    }
                    break;
                case KarolParser.DIGIT:
                    {
                    this.state = 253;
                    this.number_();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 256;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__53:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 258;
                this.match(KarolParser.T__53);
                this.state = 259;
                this.match(KarolParser.T__15);
                this.state = 260;
                this.color();
                this.state = 261;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__54:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 263;
                this.match(KarolParser.T__54);
                this.state = 264;
                this.match(KarolParser.T__15);
                this.state = 265;
                this.color();
                this.state = 266;
                this.match(KarolParser.T__16);
                }
                break;
            case KarolParser.T__55:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 268;
                this.match(KarolParser.T__55);
                this.state = 269;
                this.match(KarolParser.T__15);
                this.state = 270;
                this.number_();
                this.state = 271;
                this.match(KarolParser.T__16);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public color(): ColorContext {
        let localContext = new ColorContext(this.context, this.state);
        this.enterRule(localContext, 30, KarolParser.RULE_color);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 275;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 31) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public number_(): NumberContext {
        let localContext = new NumberContext(this.context, this.state);
        this.enterRule(localContext, 32, KarolParser.RULE_number);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 277;
                this.match(KarolParser.DIGIT);
                }
                }
                this.state = 280;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 66);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,67,283,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,1,0,5,0,36,8,0,10,0,12,0,39,9,0,1,
        0,1,0,5,0,43,8,0,10,0,12,0,46,9,0,1,0,1,0,5,0,50,8,0,10,0,12,0,53,
        9,0,1,0,5,0,56,8,0,10,0,12,0,59,9,0,3,0,61,8,0,1,1,1,1,3,1,65,8,
        1,1,2,1,2,1,2,5,2,70,8,2,10,2,12,2,73,9,2,1,2,1,2,1,2,1,2,5,2,79,
        8,2,10,2,12,2,82,9,2,1,2,3,2,85,8,2,1,3,1,3,1,3,1,3,4,3,91,8,3,11,
        3,12,3,92,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,102,8,4,1,4,1,4,1,4,1,
        4,1,4,1,4,3,4,110,8,4,1,4,1,4,3,4,114,8,4,1,4,1,4,1,4,1,4,3,4,120,
        8,4,1,4,3,4,123,8,4,1,5,1,5,1,6,1,6,1,6,1,6,5,6,131,8,6,10,6,12,
        6,134,9,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,142,8,7,10,7,12,7,145,9,7,
        1,7,1,7,1,7,1,7,5,7,151,8,7,10,7,12,7,154,9,7,1,7,1,7,1,7,1,7,1,
        7,5,7,161,8,7,10,7,12,7,164,9,7,1,7,1,7,1,7,3,7,169,8,7,1,8,1,8,
        1,8,1,8,5,8,175,8,8,10,8,12,8,178,9,8,1,8,1,8,5,8,182,8,8,10,8,12,
        8,185,9,8,3,8,187,8,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
        10,1,10,1,10,1,10,3,10,202,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,221,8,
        10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,1,11,3,11,237,8,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,3,
        14,247,8,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,255,8,14,1,14,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
        1,14,1,14,3,14,274,8,14,1,15,1,15,1,16,4,16,279,8,16,11,16,12,16,
        280,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,
        9,1,0,2,3,1,0,5,6,1,0,8,9,1,0,11,12,1,0,20,21,1,0,27,28,1,0,29,40,
        1,0,42,58,1,0,59,63,313,0,60,1,0,0,0,2,64,1,0,0,0,4,84,1,0,0,0,6,
        86,1,0,0,0,8,122,1,0,0,0,10,124,1,0,0,0,12,126,1,0,0,0,14,168,1,
        0,0,0,16,170,1,0,0,0,18,190,1,0,0,0,20,220,1,0,0,0,22,236,1,0,0,
        0,24,238,1,0,0,0,26,240,1,0,0,0,28,273,1,0,0,0,30,275,1,0,0,0,32,
        278,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,
        0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,0,0,0,40,44,5,1,0,0,41,43,
        3,8,4,0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,
        45,47,1,0,0,0,46,44,1,0,0,0,47,61,7,0,0,0,48,50,3,2,1,0,49,48,1,
        0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,57,1,0,0,0,53,
        51,1,0,0,0,54,56,3,8,4,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,
        0,57,58,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,60,37,1,0,0,0,60,51,
        1,0,0,0,61,1,1,0,0,0,62,65,3,6,3,0,63,65,3,4,2,0,64,62,1,0,0,0,64,
        63,1,0,0,0,65,3,1,0,0,0,66,67,5,4,0,0,67,71,5,64,0,0,68,70,3,8,4,
        0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,
        1,0,0,0,73,71,1,0,0,0,74,85,7,1,0,0,75,76,5,7,0,0,76,80,5,64,0,0,
        77,79,3,8,4,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,
        0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,85,7,2,0,0,84,66,1,0,0,0,84,
        75,1,0,0,0,85,5,1,0,0,0,86,87,5,10,0,0,87,90,5,64,0,0,88,91,3,8,
        4,0,89,91,3,22,11,0,90,88,1,0,0,0,90,89,1,0,0,0,91,92,1,0,0,0,92,
        90,1,0,0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,95,7,3,0,0,95,7,1,0,0,
        0,96,123,3,12,6,0,97,123,3,14,7,0,98,123,3,16,8,0,99,101,3,18,9,
        0,100,102,5,13,0,0,101,100,1,0,0,0,101,102,1,0,0,0,102,123,1,0,0,
        0,103,104,5,14,0,0,104,105,5,15,0,0,105,106,3,18,9,0,106,107,5,16,
        0,0,107,109,5,17,0,0,108,110,5,13,0,0,109,108,1,0,0,0,109,110,1,
        0,0,0,110,123,1,0,0,0,111,113,3,20,10,0,112,114,5,13,0,0,113,112,
        1,0,0,0,113,114,1,0,0,0,114,123,1,0,0,0,115,116,5,14,0,0,116,117,
        5,15,0,0,117,119,3,20,10,0,118,120,5,13,0,0,119,118,1,0,0,0,119,
        120,1,0,0,0,120,123,1,0,0,0,121,123,3,10,5,0,122,96,1,0,0,0,122,
        97,1,0,0,0,122,98,1,0,0,0,122,99,1,0,0,0,122,103,1,0,0,0,122,111,
        1,0,0,0,122,115,1,0,0,0,122,121,1,0,0,0,123,9,1,0,0,0,124,125,5,
        64,0,0,125,11,1,0,0,0,126,127,5,18,0,0,127,128,3,32,16,0,128,132,
        5,19,0,0,129,131,3,8,4,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,
        1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,136,
        7,4,0,0,136,13,1,0,0,0,137,138,5,18,0,0,138,139,5,22,0,0,139,143,
        3,22,11,0,140,142,3,8,4,0,141,140,1,0,0,0,142,145,1,0,0,0,143,141,
        1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,147,
        7,4,0,0,147,169,1,0,0,0,148,152,5,18,0,0,149,151,3,8,4,0,150,149,
        1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,155,
        1,0,0,0,154,152,1,0,0,0,155,156,7,4,0,0,156,157,5,22,0,0,157,169,
        3,22,11,0,158,162,5,18,0,0,159,161,3,8,4,0,160,159,1,0,0,0,161,164,
        1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,162,
        1,0,0,0,165,166,7,4,0,0,166,167,5,23,0,0,167,169,3,22,11,0,168,137,
        1,0,0,0,168,148,1,0,0,0,168,158,1,0,0,0,169,15,1,0,0,0,170,171,5,
        24,0,0,171,172,3,22,11,0,172,176,5,25,0,0,173,175,3,8,4,0,174,173,
        1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,186,
        1,0,0,0,178,176,1,0,0,0,179,183,5,26,0,0,180,182,3,8,4,0,181,180,
        1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,187,
        1,0,0,0,185,183,1,0,0,0,186,179,1,0,0,0,186,187,1,0,0,0,187,188,
        1,0,0,0,188,189,7,5,0,0,189,17,1,0,0,0,190,191,7,6,0,0,191,19,1,
        0,0,0,192,193,5,29,0,0,193,194,5,16,0,0,194,195,3,32,16,0,195,196,
        5,17,0,0,196,221,1,0,0,0,197,198,5,32,0,0,198,201,5,16,0,0,199,202,
        3,30,15,0,200,202,3,32,16,0,201,199,1,0,0,0,201,200,1,0,0,0,202,
        203,1,0,0,0,203,204,5,17,0,0,204,221,1,0,0,0,205,206,5,33,0,0,206,
        207,5,16,0,0,207,208,3,32,16,0,208,209,5,17,0,0,209,221,1,0,0,0,
        210,211,5,34,0,0,211,212,5,16,0,0,212,213,3,30,15,0,213,214,5,17,
        0,0,214,221,1,0,0,0,215,216,5,36,0,0,216,217,5,16,0,0,217,218,3,
        32,16,0,218,219,5,17,0,0,219,221,1,0,0,0,220,192,1,0,0,0,220,197,
        1,0,0,0,220,205,1,0,0,0,220,210,1,0,0,0,220,215,1,0,0,0,221,21,1,
        0,0,0,222,223,5,41,0,0,223,237,3,22,11,0,224,237,3,26,13,0,225,226,
        5,14,0,0,226,227,5,15,0,0,227,228,3,26,13,0,228,229,5,16,0,0,229,
        230,5,17,0,0,230,237,1,0,0,0,231,237,3,28,14,0,232,233,5,14,0,0,
        233,234,5,15,0,0,234,237,3,28,14,0,235,237,3,24,12,0,236,222,1,0,
        0,0,236,224,1,0,0,0,236,225,1,0,0,0,236,231,1,0,0,0,236,232,1,0,
        0,0,236,235,1,0,0,0,237,23,1,0,0,0,238,239,5,64,0,0,239,25,1,0,0,
        0,240,241,7,7,0,0,241,27,1,0,0,0,242,243,5,52,0,0,243,246,5,16,0,
        0,244,247,3,30,15,0,245,247,3,32,16,0,246,244,1,0,0,0,246,245,1,
        0,0,0,247,248,1,0,0,0,248,249,5,17,0,0,249,274,1,0,0,0,250,251,5,
        53,0,0,251,254,5,16,0,0,252,255,3,30,15,0,253,255,3,32,16,0,254,
        252,1,0,0,0,254,253,1,0,0,0,255,256,1,0,0,0,256,257,5,17,0,0,257,
        274,1,0,0,0,258,259,5,54,0,0,259,260,5,16,0,0,260,261,3,30,15,0,
        261,262,5,17,0,0,262,274,1,0,0,0,263,264,5,55,0,0,264,265,5,16,0,
        0,265,266,3,30,15,0,266,267,5,17,0,0,267,274,1,0,0,0,268,269,5,56,
        0,0,269,270,5,16,0,0,270,271,3,32,16,0,271,272,5,17,0,0,272,274,
        1,0,0,0,273,242,1,0,0,0,273,250,1,0,0,0,273,258,1,0,0,0,273,263,
        1,0,0,0,273,268,1,0,0,0,274,29,1,0,0,0,275,276,7,8,0,0,276,31,1,
        0,0,0,277,279,5,66,0,0,278,277,1,0,0,0,279,280,1,0,0,0,280,278,1,
        0,0,0,280,281,1,0,0,0,281,33,1,0,0,0,31,37,44,51,57,60,64,71,80,
        84,90,92,101,109,113,119,122,132,143,152,162,168,176,183,186,201,
        220,236,246,254,273,280
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!KarolParser.__ATN) {
            KarolParser.__ATN = new antlr.ATNDeserializer().deserialize(KarolParser._serializedATN);
        }

        return KarolParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(KarolParser.literalNames, KarolParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return KarolParser.vocabulary;
    }

    private static readonly decisionsToDFA = KarolParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class KarolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public definition(): DefinitionContext[];
    public definition(i: number): DefinitionContext | null;
    public definition(i?: number): DefinitionContext[] | DefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DefinitionContext);
        }

        return this.getRuleContext(i, DefinitionContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_karol;
    }
}


export class DefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public conditiondefinition(): ConditiondefinitionContext | null {
        return this.getRuleContext(0, ConditiondefinitionContext);
    }
    public methoddefinition(): MethoddefinitionContext | null {
        return this.getRuleContext(0, MethoddefinitionContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_definition;
    }
}


export class MethoddefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(KarolParser.IDENTIFIER, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_methoddefinition;
    }
}


export class ConditiondefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(KarolParser.IDENTIFIER, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public conditionexpression(): ConditionexpressionContext[];
    public conditionexpression(i: number): ConditionexpressionContext | null;
    public conditionexpression(i?: number): ConditionexpressionContext[] | ConditionexpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConditionexpressionContext);
        }

        return this.getRuleContext(i, ConditionexpressionContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_conditiondefinition;
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iteration(): IterationContext | null {
        return this.getRuleContext(0, IterationContext);
    }
    public loop(): LoopContext | null {
        return this.getRuleContext(0, LoopContext);
    }
    public conditional(): ConditionalContext | null {
        return this.getRuleContext(0, ConditionalContext);
    }
    public instruction(): InstructionContext | null {
        return this.getRuleContext(0, InstructionContext);
    }
    public parameterizedinstruction(): ParameterizedinstructionContext | null {
        return this.getRuleContext(0, ParameterizedinstructionContext);
    }
    public customMethodCall(): CustomMethodCallContext | null {
        return this.getRuleContext(0, CustomMethodCallContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_statement;
    }
}


export class CustomMethodCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(KarolParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_customMethodCall;
    }
}


export class IterationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_iteration;
    }
}


export class LoopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public conditionexpression(): ConditionexpressionContext {
        return this.getRuleContext(0, ConditionexpressionContext)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_loop;
    }
}


export class ConditionalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public conditionexpression(): ConditionexpressionContext {
        return this.getRuleContext(0, ConditionexpressionContext)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_conditional;
    }
}


export class InstructionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_instruction;
    }
}


export class ParameterizedinstructionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public number(): NumberContext | null {
        return this.getRuleContext(0, NumberContext);
    }
    public color(): ColorContext | null {
        return this.getRuleContext(0, ColorContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_parameterizedinstruction;
    }
}


export class ConditionexpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public conditionexpression(): ConditionexpressionContext | null {
        return this.getRuleContext(0, ConditionexpressionContext);
    }
    public condition(): ConditionContext | null {
        return this.getRuleContext(0, ConditionContext);
    }
    public parameterizedcondition(): ParameterizedconditionContext | null {
        return this.getRuleContext(0, ParameterizedconditionContext);
    }
    public customConditionCall(): CustomConditionCallContext | null {
        return this.getRuleContext(0, CustomConditionCallContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_conditionexpression;
    }
}


export class CustomConditionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(KarolParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_customConditionCall;
    }
}


export class ConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_condition;
    }
}


export class ParameterizedconditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public color(): ColorContext | null {
        return this.getRuleContext(0, ColorContext);
    }
    public number(): NumberContext | null {
        return this.getRuleContext(0, NumberContext);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_parameterizedcondition;
    }
}


export class ColorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_color;
    }
}


export class NumberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIGIT(): antlr.TerminalNode[];
    public DIGIT(i: number): antlr.TerminalNode | null;
    public DIGIT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(KarolParser.DIGIT);
    	} else {
    		return this.getToken(KarolParser.DIGIT, i);
    	}
    }
    public override get ruleIndex(): number {
        return KarolParser.RULE_number;
    }
}
