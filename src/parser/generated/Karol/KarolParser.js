// Generated from D:/projects/react-three-karol/antlrgrammar\Karol.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";
import KarolVisitor from "./KarolVisitor.js";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0003C\u011e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
  "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
  "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
  "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0007\u0002&\n",
  "\u0002\f\u0002\u000e\u0002)\u000b\u0002\u0003\u0002\u0003\u0002\u0007",
  "\u0002-\n\u0002\f\u0002\u000e\u00020\u000b\u0002\u0003\u0002\u0003\u0002",
  "\u0007\u00024\n\u0002\f\u0002\u000e\u00027\u000b\u0002\u0003\u0002\u0007",
  "\u0002:\n\u0002\f\u0002\u000e\u0002=\u000b\u0002\u0005\u0002?\n\u0002",
  "\u0003\u0003\u0003\u0003\u0005\u0003C\n\u0003\u0003\u0004\u0003\u0004",
  "\u0003\u0004\u0007\u0004H\n\u0004\f\u0004\u000e\u0004K\u000b\u0004\u0003",
  "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004Q\n\u0004\f\u0004",
  "\u000e\u0004T\u000b\u0004\u0003\u0004\u0005\u0004W\n\u0004\u0003\u0005",
  "\u0003\u0005\u0003\u0005\u0007\u0005\\\n\u0005\f\u0005\u000e\u0005_",
  "\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0005\u0006h\n\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006p\n\u0006",
  "\u0003\u0006\u0003\u0006\u0005\u0006t\n\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0005\u0006z\n\u0006\u0003\u0006\u0005\u0006",
  "}\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
  "\b\u0085\n\b\f\b\u000e\b\u0088\u000b\b\u0003\b\u0003\b\u0003\t\u0003",
  "\t\u0003\t\u0003\t\u0007\t\u0090\n\t\f\t\u000e\t\u0093\u000b\t\u0003",
  "\t\u0003\t\u0003\t\u0003\t\u0007\t\u0099\n\t\f\t\u000e\t\u009c\u000b",
  "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00a3\n\t\f\t\u000e",
  "\t\u00a6\u000b\t\u0003\t\u0003\t\u0003\t\u0005\t\u00ab\n\t\u0003\n\u0003",
  "\n\u0003\n\u0003\n\u0007\n\u00b1\n\n\f\n\u000e\n\u00b4\u000b\n\u0003",
  "\n\u0003\n\u0007\n\u00b8\n\n\f\n\u000e\n\u00bb\u000b\n\u0005\n\u00bd",
  "\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f",
  "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00cc\n\f\u0003",
  "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
  "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00df",
  "\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
  "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00ef\n\r\u0003",
  "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
  "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00fa\n\u0010\u0003\u0010",
  "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
  "\u0102\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
  "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
  "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
  "\u0010\u0005\u0010\u0115\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
  "\u0006\u0012\u011a\n\u0012\r\u0012\u000e\u0012\u011b\u0003\u0012\u0002",
  "\u0002\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
  '\u001a\u001c\u001e "\u0002\u000b\u0003\u0002\u0004\u0005\u0003\u0002',
  "\u0007\b\u0003\u0002\n\u000b\u0003\u0002\r\u000e\u0003\u0002\u0016\u0017",
  "\u0003\u0002\u001d\u001e\u0003\u0002\u001f*\u0003\u0002,:\u0003\u0002",
  ";?\u0002\u013c\u0002>\u0003\u0002\u0002\u0002\u0004B\u0003\u0002\u0002",
  "\u0002\u0006V\u0003\u0002\u0002\u0002\bX\u0003\u0002\u0002\u0002\n|",
  "\u0003\u0002\u0002\u0002\f~\u0003\u0002\u0002\u0002\u000e\u0080\u0003",
  "\u0002\u0002\u0002\u0010\u00aa\u0003\u0002\u0002\u0002\u0012\u00ac\u0003",
  "\u0002\u0002\u0002\u0014\u00c0\u0003\u0002\u0002\u0002\u0016\u00de\u0003",
  "\u0002\u0002\u0002\u0018\u00ee\u0003\u0002\u0002\u0002\u001a\u00f0\u0003",
  "\u0002\u0002\u0002\u001c\u00f2\u0003\u0002\u0002\u0002\u001e\u0114\u0003",
  '\u0002\u0002\u0002 \u0116\u0003\u0002\u0002\u0002"\u0119\u0003\u0002',
  "\u0002\u0002$&\u0005\u0004\u0003\u0002%$\u0003\u0002\u0002\u0002&)\u0003",
  "\u0002\u0002\u0002'%\u0003\u0002\u0002\u0002'(\u0003\u0002\u0002\u0002",
  "(*\u0003\u0002\u0002\u0002)'\u0003\u0002\u0002\u0002*.\u0007\u0003",
  "\u0002\u0002+-\u0005\n\u0006\u0002,+\u0003\u0002\u0002\u0002-0\u0003",
  "\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002",
  "/1\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u00021?\t\u0002\u0002",
  "\u000224\u0005\u0004\u0003\u000232\u0003\u0002\u0002\u000247\u0003\u0002",
  "\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026;\u0003",
  "\u0002\u0002\u000275\u0003\u0002\u0002\u00028:\u0005\n\u0006\u00029",
  "8\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
  "\u0002;<\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002",
  "\u0002\u0002>'\u0003\u0002\u0002\u0002>5\u0003\u0002\u0002\u0002?\u0003",
  "\u0003\u0002\u0002\u0002@C\u0005\b\u0005\u0002AC\u0005\u0006\u0004\u0002",
  "B@\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002C\u0005\u0003\u0002",
  "\u0002\u0002DE\u0007\u0006\u0002\u0002EI\u0007@\u0002\u0002FH\u0005",
  "\n\u0006\u0002GF\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002I",
  "G\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002\u0002",
  "\u0002KI\u0003\u0002\u0002\u0002LW\t\u0003\u0002\u0002MN\u0007\t\u0002",
  "\u0002NR\u0007@\u0002\u0002OQ\u0005\n\u0006\u0002PO\u0003\u0002\u0002",
  "\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002",
  "\u0002\u0002SU\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UW\t",
  "\u0004\u0002\u0002VD\u0003\u0002\u0002\u0002VM\u0003\u0002\u0002\u0002",
  "W\u0007\u0003\u0002\u0002\u0002XY\u0007\f\u0002\u0002Y]\u0007@\u0002",
  "\u0002Z\\\u0005\n\u0006\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002",
  "\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0003",
  "\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002`a\t\u0005\u0002\u0002a",
  "\t\u0003\u0002\u0002\u0002b}\u0005\u000e\b\u0002c}\u0005\u0010\t\u0002",
  "d}\u0005\u0012\n\u0002eg\u0005\u0014\u000b\u0002fh\u0007\u000f\u0002",
  "\u0002gf\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002h}\u0003\u0002",
  "\u0002\u0002ij\u0007\u0010\u0002\u0002jk\u0007\u0011\u0002\u0002kl\u0005",
  "\u0014\u000b\u0002lm\u0007\u0012\u0002\u0002mo\u0007\u0013\u0002\u0002",
  "np\u0007\u000f\u0002\u0002on\u0003\u0002\u0002\u0002op\u0003\u0002\u0002",
  "\u0002p}\u0003\u0002\u0002\u0002qs\u0005\u0016\f\u0002rt\u0007\u000f",
  "\u0002\u0002sr\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002t}\u0003",
  "\u0002\u0002\u0002uv\u0007\u0010\u0002\u0002vw\u0007\u0011\u0002\u0002",
  "wy\u0005\u0016\f\u0002xz\u0007\u000f\u0002\u0002yx\u0003\u0002\u0002",
  "\u0002yz\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{}\u0005\f",
  "\u0007\u0002|b\u0003\u0002\u0002\u0002|c\u0003\u0002\u0002\u0002|d\u0003",
  "\u0002\u0002\u0002|e\u0003\u0002\u0002\u0002|i\u0003\u0002\u0002\u0002",
  "|q\u0003\u0002\u0002\u0002|u\u0003\u0002\u0002\u0002|{\u0003\u0002\u0002",
  "\u0002}\u000b\u0003\u0002\u0002\u0002~\u007f\u0007@\u0002\u0002\u007f",
  "\r\u0003\u0002\u0002\u0002\u0080\u0081\u0007\u0014\u0002\u0002\u0081",
  '\u0082\u0005"\u0012\u0002\u0082\u0086\u0007\u0015\u0002\u0002\u0083',
  "\u0085\u0005\n\u0006\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0085",
  "\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086",
  "\u0087\u0003\u0002\u0002\u0002\u0087\u0089\u0003\u0002\u0002\u0002\u0088",
  "\u0086\u0003\u0002\u0002\u0002\u0089\u008a\t\u0006\u0002\u0002\u008a",
  "\u000f\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0014\u0002\u0002\u008c",
  "\u008d\u0007\u0018\u0002\u0002\u008d\u0091\u0005\u0018\r\u0002\u008e",
  "\u0090\u0005\n\u0006\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090",
  "\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091",
  "\u0092\u0003\u0002\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002\u0093",
  "\u0091\u0003\u0002\u0002\u0002\u0094\u0095\t\u0006\u0002\u0002\u0095",
  "\u00ab\u0003\u0002\u0002\u0002\u0096\u009a\u0007\u0014\u0002\u0002\u0097",
  "\u0099\u0005\n\u0006\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0099",
  "\u009c\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009a",
  "\u009b\u0003\u0002\u0002\u0002\u009b\u009d\u0003\u0002\u0002\u0002\u009c",
  "\u009a\u0003\u0002\u0002\u0002\u009d\u009e\t\u0006\u0002\u0002\u009e",
  "\u009f\u0007\u0018\u0002\u0002\u009f\u00ab\u0005\u0018\r\u0002\u00a0",
  "\u00a4\u0007\u0014\u0002\u0002\u00a1\u00a3\u0005\n\u0006\u0002\u00a2",
  "\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4",
  "\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
  "\u00a7\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7",
  "\u00a8\t\u0006\u0002\u0002\u00a8\u00a9\u0007\u0019\u0002\u0002\u00a9",
  "\u00ab\u0005\u0018\r\u0002\u00aa\u008b\u0003\u0002\u0002\u0002\u00aa",
  "\u0096\u0003\u0002\u0002\u0002\u00aa\u00a0\u0003\u0002\u0002\u0002\u00ab",
  "\u0011\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u001a\u0002\u0002\u00ad",
  "\u00ae\u0005\u0018\r\u0002\u00ae\u00b2\u0007\u001b\u0002\u0002\u00af",
  "\u00b1\u0005\n\u0006\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b1",
  "\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2",
  "\u00b3\u0003\u0002\u0002\u0002\u00b3\u00bc\u0003\u0002\u0002\u0002\u00b4",
  "\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b9\u0007\u001c\u0002\u0002\u00b6",
  "\u00b8\u0005\n\u0006\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8",
  "\u00bb\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9",
  "\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bd\u0003\u0002\u0002\u0002\u00bb",
  "\u00b9\u0003\u0002\u0002\u0002\u00bc\u00b5\u0003\u0002\u0002\u0002\u00bc",
  "\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be",
  "\u00bf\t\u0007\u0002\u0002\u00bf\u0013\u0003\u0002\u0002\u0002\u00c0",
  "\u00c1\t\b\u0002\u0002\u00c1\u0015\u0003\u0002\u0002\u0002\u00c2\u00c3",
  "\u0007\u001f\u0002\u0002\u00c3\u00c4\u0007\u0012\u0002\u0002\u00c4\u00c5",
  '\u0005"\u0012\u0002\u00c5\u00c6\u0007\u0013\u0002\u0002\u00c6\u00df',
  '\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007"\u0002\u0002\u00c8\u00cb',
  "\u0007\u0012\u0002\u0002\u00c9\u00cc\u0005 \u0011\u0002\u00ca\u00cc",
  '\u0005"\u0012\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00ca',
  "\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce",
  "\u0007\u0013\u0002\u0002\u00ce\u00df\u0003\u0002\u0002\u0002\u00cf\u00d0",
  "\u0007#\u0002\u0002\u00d0\u00d1\u0007\u0012\u0002\u0002\u00d1\u00d2",
  '\u0005"\u0012\u0002\u00d2\u00d3\u0007\u0013\u0002\u0002\u00d3\u00df',
  "\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007$\u0002\u0002\u00d5\u00d6",
  "\u0007\u0012\u0002\u0002\u00d6\u00d7\u0005 \u0011\u0002\u00d7\u00d8",
  "\u0007\u0013\u0002\u0002\u00d8\u00df\u0003\u0002\u0002\u0002\u00d9\u00da",
  "\u0007&\u0002\u0002\u00da\u00db\u0007\u0012\u0002\u0002\u00db\u00dc",
  '\u0005"\u0012\u0002\u00dc\u00dd\u0007\u0013\u0002\u0002\u00dd\u00df',
  "\u0003\u0002\u0002\u0002\u00de\u00c2\u0003\u0002\u0002\u0002\u00de\u00c7",
  "\u0003\u0002\u0002\u0002\u00de\u00cf\u0003\u0002\u0002\u0002\u00de\u00d4",
  "\u0003\u0002\u0002\u0002\u00de\u00d9\u0003\u0002\u0002\u0002\u00df\u0017",
  "\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007+\u0002\u0002\u00e1\u00ef",
  "\u0005\u0018\r\u0002\u00e2\u00ef\u0005\u001c\u000f\u0002\u00e3\u00e4",
  "\u0007\u0010\u0002\u0002\u00e4\u00e5\u0007\u0011\u0002\u0002\u00e5\u00e6",
  "\u0005\u001c\u000f\u0002\u00e6\u00e7\u0007\u0012\u0002\u0002\u00e7\u00e8",
  "\u0007\u0013\u0002\u0002\u00e8\u00ef\u0003\u0002\u0002\u0002\u00e9\u00ef",
  "\u0005\u001e\u0010\u0002\u00ea\u00eb\u0007\u0010\u0002\u0002\u00eb\u00ec",
  "\u0007\u0011\u0002\u0002\u00ec\u00ef\u0005\u001e\u0010\u0002\u00ed\u00ef",
  "\u0005\u001a\u000e\u0002\u00ee\u00e0\u0003\u0002\u0002\u0002\u00ee\u00e2",
  "\u0003\u0002\u0002\u0002\u00ee\u00e3\u0003\u0002\u0002\u0002\u00ee\u00e9",
  "\u0003\u0002\u0002\u0002\u00ee\u00ea\u0003\u0002\u0002\u0002\u00ee\u00ed",
  "\u0003\u0002\u0002\u0002\u00ef\u0019\u0003\u0002\u0002\u0002\u00f0\u00f1",
  "\u0007@\u0002\u0002\u00f1\u001b\u0003\u0002\u0002\u0002\u00f2\u00f3",
  "\t\t\u0002\u0002\u00f3\u001d\u0003\u0002\u0002\u0002\u00f4\u0115\u0003",
  "\u0002\u0002\u0002\u00f5\u00f6\u00076\u0002\u0002\u00f6\u00f9\u0007",
  "\u0012\u0002\u0002\u00f7\u00fa\u0005 \u0011\u0002\u00f8\u00fa\u0005",
  '"\u0012\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9\u00f8\u0003',
  "\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007",
  "\u0013\u0002\u0002\u00fc\u0115\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007",
  "7\u0002\u0002\u00fe\u0101\u0007\u0012\u0002\u0002\u00ff\u0102\u0005",
  ' \u0011\u0002\u0100\u0102\u0005"\u0012\u0002\u0101\u00ff\u0003\u0002',
  "\u0002\u0002\u0101\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002",
  "\u0002\u0002\u0103\u0104\u0007\u0013\u0002\u0002\u0104\u0115\u0003\u0002",
  "\u0002\u0002\u0105\u0106\u00078\u0002\u0002\u0106\u0107\u0007\u0012",
  "\u0002\u0002\u0107\u0108\u0005 \u0011\u0002\u0108\u0109\u0007\u0013",
  "\u0002\u0002\u0109\u0115\u0003\u0002\u0002\u0002\u010a\u010b\u00079",
  "\u0002\u0002\u010b\u010c\u0007\u0012\u0002\u0002\u010c\u010d\u0005 ",
  "\u0011\u0002\u010d\u010e\u0007\u0013\u0002\u0002\u010e\u0115\u0003\u0002",
  "\u0002\u0002\u010f\u0110\u0007:\u0002\u0002\u0110\u0111\u0007\u0012",
  '\u0002\u0002\u0111\u0112\u0005"\u0012\u0002\u0112\u0113\u0007\u0013',
  "\u0002\u0002\u0113\u0115\u0003\u0002\u0002\u0002\u0114\u00f4\u0003\u0002",
  "\u0002\u0002\u0114\u00f5\u0003\u0002\u0002\u0002\u0114\u00fd\u0003\u0002",
  "\u0002\u0002\u0114\u0105\u0003\u0002\u0002\u0002\u0114\u010a\u0003\u0002",
  "\u0002\u0002\u0114\u010f\u0003\u0002\u0002\u0002\u0115\u001f\u0003\u0002",
  "\u0002\u0002\u0116\u0117\t\n\u0002\u0002\u0117!\u0003\u0002\u0002\u0002",
  "\u0118\u011a\u0007B\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002",
  "\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002",
  "\u011b\u011c\u0003\u0002\u0002\u0002\u011c#\u0003\u0002\u0002\u0002",
  " '.5;>BIRV]gosy|\u0086\u0091\u009a\u00a4\u00aa\u00b2\u00b9\u00bc\u00cb",
  "\u00de\u00ee\u00f9\u0101\u0114\u011b",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.PredictionContextCache();

export default class KarolParser extends antlr4.Parser {
  static grammarFileName = "Karol.g4";
  static literalNames = [
    null,
    "'Programm'",
    "'endeProgramm'",
    "'*Programm'",
    "'Anweisung'",
    "'endeAnweisung'",
    "'*Anweisung'",
    "'Methode'",
    "'endeMethode'",
    "'*Methode'",
    "'Bedingung'",
    "'endeBedingung'",
    "'*Bedingung'",
    "';'",
    "'Karol'",
    "'.'",
    "'('",
    "')'",
    "'wiederhole'",
    "'mal'",
    "'endewiederhole'",
    "'*wiederhole'",
    "'solange'",
    "'bis'",
    "'wenn'",
    "'dann'",
    "'sonst'",
    "'endewenn'",
    "'*wenn'",
    "'Schritt'",
    "'LinksDrehen'",
    "'RechtsDrehen'",
    "'Hinlegen'",
    "'Aufheben'",
    "'MarkeSetzen'",
    "'MarkeL\u00F6schen'",
    "'Warten'",
    "'Ton'",
    "'Beenden'",
    "'schnell'",
    "'langsam'",
    "'nicht'",
    "'IstWand'",
    "'NichtIstWand'",
    "'IstS\u00FCden'",
    "'IstNorden'",
    "'IstWesten'",
    "'IstOsten'",
    "'IstVoll'",
    "'NichtIstVoll'",
    "'IstLeer'",
    "'NichtIstLeer'",
    "'IstZiegel'",
    "'NichtIstZiegel'",
    "'IstMarke'",
    "'NichtIstMarke'",
    "'HatZiegel'",
    "'rot'",
    "'gelb'",
    "'blau'",
    "'gr\u00FCn'",
    "'schwarz'",
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "IDENTIFIER",
    "LETTER",
    "DIGIT",
    "WS",
  ];
  static ruleNames = [
    "karol",
    "definition",
    "methoddefinition",
    "conditiondefinition",
    "statement",
    "customMethodCall",
    "iteration",
    "loop",
    "conditional",
    "instruction",
    "parameterizedinstruction",
    "conditionexpression",
    "customConditionCall",
    "condition",
    "parameterizedcondition",
    "color",
    "number",
  ];

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
      this.state = 60;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 37;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) & ((1 << KarolParser.T__3) | (1 << KarolParser.T__6) | (1 << KarolParser.T__9))) !== 0
          ) {
            this.state = 34;
            this.definition();
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 40;
          this.match(KarolParser.T__0);
          this.state = 44;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la & ~0x1f) == 0 &&
              ((1 << _la) &
                ((1 << KarolParser.T__13) |
                  (1 << KarolParser.T__17) |
                  (1 << KarolParser.T__23) |
                  (1 << KarolParser.T__28) |
                  (1 << KarolParser.T__29) |
                  (1 << KarolParser.T__30))) !==
                0) ||
            (((_la - 32) & ~0x1f) == 0 &&
              ((1 << (_la - 32)) &
                ((1 << (KarolParser.T__31 - 32)) |
                  (1 << (KarolParser.T__32 - 32)) |
                  (1 << (KarolParser.T__33 - 32)) |
                  (1 << (KarolParser.T__34 - 32)) |
                  (1 << (KarolParser.T__35 - 32)) |
                  (1 << (KarolParser.T__36 - 32)) |
                  (1 << (KarolParser.T__37 - 32)) |
                  (1 << (KarolParser.T__38 - 32)) |
                  (1 << (KarolParser.T__39 - 32)) |
                  (1 << (KarolParser.IDENTIFIER - 32)))) !==
                0)
          ) {
            this.state = 41;
            this.statement();
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 47;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__1 || _la === KarolParser.T__2)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 51;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) & ((1 << KarolParser.T__3) | (1 << KarolParser.T__6) | (1 << KarolParser.T__9))) !== 0
          ) {
            this.state = 48;
            this.definition();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 57;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la & ~0x1f) == 0 &&
              ((1 << _la) &
                ((1 << KarolParser.T__13) |
                  (1 << KarolParser.T__17) |
                  (1 << KarolParser.T__23) |
                  (1 << KarolParser.T__28) |
                  (1 << KarolParser.T__29) |
                  (1 << KarolParser.T__30))) !==
                0) ||
            (((_la - 32) & ~0x1f) == 0 &&
              ((1 << (_la - 32)) &
                ((1 << (KarolParser.T__31 - 32)) |
                  (1 << (KarolParser.T__32 - 32)) |
                  (1 << (KarolParser.T__33 - 32)) |
                  (1 << (KarolParser.T__34 - 32)) |
                  (1 << (KarolParser.T__35 - 32)) |
                  (1 << (KarolParser.T__36 - 32)) |
                  (1 << (KarolParser.T__37 - 32)) |
                  (1 << (KarolParser.T__38 - 32)) |
                  (1 << (KarolParser.T__39 - 32)) |
                  (1 << (KarolParser.IDENTIFIER - 32)))) !==
                0)
          ) {
            this.state = 54;
            this.statement();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
      this.state = 64;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case KarolParser.T__9:
          this.enterOuterAlt(localctx, 1);
          this.state = 62;
          this.conditiondefinition();
          break;
        case KarolParser.T__3:
        case KarolParser.T__6:
          this.enterOuterAlt(localctx, 2);
          this.state = 63;
          this.methoddefinition();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
      this.state = 84;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case KarolParser.T__3:
          this.enterOuterAlt(localctx, 1);
          this.state = 66;
          this.match(KarolParser.T__3);
          this.state = 67;
          this.match(KarolParser.IDENTIFIER);
          this.state = 71;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la & ~0x1f) == 0 &&
              ((1 << _la) &
                ((1 << KarolParser.T__13) |
                  (1 << KarolParser.T__17) |
                  (1 << KarolParser.T__23) |
                  (1 << KarolParser.T__28) |
                  (1 << KarolParser.T__29) |
                  (1 << KarolParser.T__30))) !==
                0) ||
            (((_la - 32) & ~0x1f) == 0 &&
              ((1 << (_la - 32)) &
                ((1 << (KarolParser.T__31 - 32)) |
                  (1 << (KarolParser.T__32 - 32)) |
                  (1 << (KarolParser.T__33 - 32)) |
                  (1 << (KarolParser.T__34 - 32)) |
                  (1 << (KarolParser.T__35 - 32)) |
                  (1 << (KarolParser.T__36 - 32)) |
                  (1 << (KarolParser.T__37 - 32)) |
                  (1 << (KarolParser.T__38 - 32)) |
                  (1 << (KarolParser.T__39 - 32)) |
                  (1 << (KarolParser.IDENTIFIER - 32)))) !==
                0)
          ) {
            this.state = 68;
            this.statement();
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 74;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__4 || _la === KarolParser.T__5)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          break;
        case KarolParser.T__6:
          this.enterOuterAlt(localctx, 2);
          this.state = 75;
          this.match(KarolParser.T__6);
          this.state = 76;
          this.match(KarolParser.IDENTIFIER);
          this.state = 80;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la & ~0x1f) == 0 &&
              ((1 << _la) &
                ((1 << KarolParser.T__13) |
                  (1 << KarolParser.T__17) |
                  (1 << KarolParser.T__23) |
                  (1 << KarolParser.T__28) |
                  (1 << KarolParser.T__29) |
                  (1 << KarolParser.T__30))) !==
                0) ||
            (((_la - 32) & ~0x1f) == 0 &&
              ((1 << (_la - 32)) &
                ((1 << (KarolParser.T__31 - 32)) |
                  (1 << (KarolParser.T__32 - 32)) |
                  (1 << (KarolParser.T__33 - 32)) |
                  (1 << (KarolParser.T__34 - 32)) |
                  (1 << (KarolParser.T__35 - 32)) |
                  (1 << (KarolParser.T__36 - 32)) |
                  (1 << (KarolParser.T__37 - 32)) |
                  (1 << (KarolParser.T__38 - 32)) |
                  (1 << (KarolParser.T__39 - 32)) |
                  (1 << (KarolParser.IDENTIFIER - 32)))) !==
                0)
          ) {
            this.state = 77;
            this.statement();
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 83;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__7 || _la === KarolParser.T__8)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
      this.state = 86;
      this.match(KarolParser.T__9);
      this.state = 87;
      this.match(KarolParser.IDENTIFIER);
      this.state = 91;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        ((_la & ~0x1f) == 0 &&
          ((1 << _la) &
            ((1 << KarolParser.T__13) |
              (1 << KarolParser.T__17) |
              (1 << KarolParser.T__23) |
              (1 << KarolParser.T__28) |
              (1 << KarolParser.T__29) |
              (1 << KarolParser.T__30))) !==
            0) ||
        (((_la - 32) & ~0x1f) == 0 &&
          ((1 << (_la - 32)) &
            ((1 << (KarolParser.T__31 - 32)) |
              (1 << (KarolParser.T__32 - 32)) |
              (1 << (KarolParser.T__33 - 32)) |
              (1 << (KarolParser.T__34 - 32)) |
              (1 << (KarolParser.T__35 - 32)) |
              (1 << (KarolParser.T__36 - 32)) |
              (1 << (KarolParser.T__37 - 32)) |
              (1 << (KarolParser.T__38 - 32)) |
              (1 << (KarolParser.T__39 - 32)) |
              (1 << (KarolParser.IDENTIFIER - 32)))) !==
            0)
      ) {
        this.state = 88;
        this.statement();
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 94;
      _la = this._input.LA(1);
      if (!(_la === KarolParser.T__10 || _la === KarolParser.T__11)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
      this.state = 122;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 96;
          this.iteration();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 97;
          this.loop();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 98;
          this.conditional();
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 99;
          this.instruction();
          this.state = 101;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 100;
            this.match(KarolParser.T__12);
          }

          break;

        case 5:
          this.enterOuterAlt(localctx, 5);
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
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 108;
            this.match(KarolParser.T__12);
          }

          break;

        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 111;
          this.parameterizedinstruction();
          this.state = 113;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 112;
            this.match(KarolParser.T__12);
          }

          break;

        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 115;
          this.match(KarolParser.T__13);
          this.state = 116;
          this.match(KarolParser.T__14);
          this.state = 117;
          this.parameterizedinstruction();
          this.state = 119;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 118;
            this.match(KarolParser.T__12);
          }

          break;

        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 121;
          this.customMethodCall();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  customMethodCall() {
    let localctx = new CustomMethodCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, KarolParser.RULE_customMethodCall);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 124;
      this.match(KarolParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 12, KarolParser.RULE_iteration);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 126;
      this.match(KarolParser.T__17);
      this.state = 127;
      this.number();
      this.state = 128;
      this.match(KarolParser.T__18);
      this.state = 132;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        ((_la & ~0x1f) == 0 &&
          ((1 << _la) &
            ((1 << KarolParser.T__13) |
              (1 << KarolParser.T__17) |
              (1 << KarolParser.T__23) |
              (1 << KarolParser.T__28) |
              (1 << KarolParser.T__29) |
              (1 << KarolParser.T__30))) !==
            0) ||
        (((_la - 32) & ~0x1f) == 0 &&
          ((1 << (_la - 32)) &
            ((1 << (KarolParser.T__31 - 32)) |
              (1 << (KarolParser.T__32 - 32)) |
              (1 << (KarolParser.T__33 - 32)) |
              (1 << (KarolParser.T__34 - 32)) |
              (1 << (KarolParser.T__35 - 32)) |
              (1 << (KarolParser.T__36 - 32)) |
              (1 << (KarolParser.T__37 - 32)) |
              (1 << (KarolParser.T__38 - 32)) |
              (1 << (KarolParser.T__39 - 32)) |
              (1 << (KarolParser.IDENTIFIER - 32)))) !==
            0)
      ) {
        this.state = 129;
        this.statement();
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 135;
      _la = this._input.LA(1);
      if (!(_la === KarolParser.T__19 || _la === KarolParser.T__20)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 14, KarolParser.RULE_loop);
    var _la = 0; // Token type
    try {
      this.state = 168;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 137;
          this.match(KarolParser.T__17);
          this.state = 138;
          this.match(KarolParser.T__21);
          this.state = 139;
          this.conditionexpression();
          this.state = 143;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la & ~0x1f) == 0 &&
              ((1 << _la) &
                ((1 << KarolParser.T__13) |
                  (1 << KarolParser.T__17) |
                  (1 << KarolParser.T__23) |
                  (1 << KarolParser.T__28) |
                  (1 << KarolParser.T__29) |
                  (1 << KarolParser.T__30))) !==
                0) ||
            (((_la - 32) & ~0x1f) == 0 &&
              ((1 << (_la - 32)) &
                ((1 << (KarolParser.T__31 - 32)) |
                  (1 << (KarolParser.T__32 - 32)) |
                  (1 << (KarolParser.T__33 - 32)) |
                  (1 << (KarolParser.T__34 - 32)) |
                  (1 << (KarolParser.T__35 - 32)) |
                  (1 << (KarolParser.T__36 - 32)) |
                  (1 << (KarolParser.T__37 - 32)) |
                  (1 << (KarolParser.T__38 - 32)) |
                  (1 << (KarolParser.T__39 - 32)) |
                  (1 << (KarolParser.IDENTIFIER - 32)))) !==
                0)
          ) {
            this.state = 140;
            this.statement();
            this.state = 145;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 146;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__19 || _la === KarolParser.T__20)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 148;
          this.match(KarolParser.T__17);
          this.state = 152;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la & ~0x1f) == 0 &&
              ((1 << _la) &
                ((1 << KarolParser.T__13) |
                  (1 << KarolParser.T__17) |
                  (1 << KarolParser.T__23) |
                  (1 << KarolParser.T__28) |
                  (1 << KarolParser.T__29) |
                  (1 << KarolParser.T__30))) !==
                0) ||
            (((_la - 32) & ~0x1f) == 0 &&
              ((1 << (_la - 32)) &
                ((1 << (KarolParser.T__31 - 32)) |
                  (1 << (KarolParser.T__32 - 32)) |
                  (1 << (KarolParser.T__33 - 32)) |
                  (1 << (KarolParser.T__34 - 32)) |
                  (1 << (KarolParser.T__35 - 32)) |
                  (1 << (KarolParser.T__36 - 32)) |
                  (1 << (KarolParser.T__37 - 32)) |
                  (1 << (KarolParser.T__38 - 32)) |
                  (1 << (KarolParser.T__39 - 32)) |
                  (1 << (KarolParser.IDENTIFIER - 32)))) !==
                0)
          ) {
            this.state = 149;
            this.statement();
            this.state = 154;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 155;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__19 || _la === KarolParser.T__20)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 156;
          this.match(KarolParser.T__21);
          this.state = 157;
          this.conditionexpression();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 158;
          this.match(KarolParser.T__17);
          this.state = 162;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la & ~0x1f) == 0 &&
              ((1 << _la) &
                ((1 << KarolParser.T__13) |
                  (1 << KarolParser.T__17) |
                  (1 << KarolParser.T__23) |
                  (1 << KarolParser.T__28) |
                  (1 << KarolParser.T__29) |
                  (1 << KarolParser.T__30))) !==
                0) ||
            (((_la - 32) & ~0x1f) == 0 &&
              ((1 << (_la - 32)) &
                ((1 << (KarolParser.T__31 - 32)) |
                  (1 << (KarolParser.T__32 - 32)) |
                  (1 << (KarolParser.T__33 - 32)) |
                  (1 << (KarolParser.T__34 - 32)) |
                  (1 << (KarolParser.T__35 - 32)) |
                  (1 << (KarolParser.T__36 - 32)) |
                  (1 << (KarolParser.T__37 - 32)) |
                  (1 << (KarolParser.T__38 - 32)) |
                  (1 << (KarolParser.T__39 - 32)) |
                  (1 << (KarolParser.IDENTIFIER - 32)))) !==
                0)
          ) {
            this.state = 159;
            this.statement();
            this.state = 164;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 165;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__19 || _la === KarolParser.T__20)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 166;
          this.match(KarolParser.T__22);
          this.state = 167;
          this.conditionexpression();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 16, KarolParser.RULE_conditional);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 170;
      this.match(KarolParser.T__23);
      this.state = 171;
      this.conditionexpression();
      this.state = 172;
      this.match(KarolParser.T__24);
      this.state = 176;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        ((_la & ~0x1f) == 0 &&
          ((1 << _la) &
            ((1 << KarolParser.T__13) |
              (1 << KarolParser.T__17) |
              (1 << KarolParser.T__23) |
              (1 << KarolParser.T__28) |
              (1 << KarolParser.T__29) |
              (1 << KarolParser.T__30))) !==
            0) ||
        (((_la - 32) & ~0x1f) == 0 &&
          ((1 << (_la - 32)) &
            ((1 << (KarolParser.T__31 - 32)) |
              (1 << (KarolParser.T__32 - 32)) |
              (1 << (KarolParser.T__33 - 32)) |
              (1 << (KarolParser.T__34 - 32)) |
              (1 << (KarolParser.T__35 - 32)) |
              (1 << (KarolParser.T__36 - 32)) |
              (1 << (KarolParser.T__37 - 32)) |
              (1 << (KarolParser.T__38 - 32)) |
              (1 << (KarolParser.T__39 - 32)) |
              (1 << (KarolParser.IDENTIFIER - 32)))) !==
            0)
      ) {
        this.state = 173;
        this.statement();
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 186;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === KarolParser.T__25) {
        this.state = 179;
        this.match(KarolParser.T__25);
        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) == 0 &&
            ((1 << _la) &
              ((1 << KarolParser.T__13) |
                (1 << KarolParser.T__17) |
                (1 << KarolParser.T__23) |
                (1 << KarolParser.T__28) |
                (1 << KarolParser.T__29) |
                (1 << KarolParser.T__30))) !==
              0) ||
          (((_la - 32) & ~0x1f) == 0 &&
            ((1 << (_la - 32)) &
              ((1 << (KarolParser.T__31 - 32)) |
                (1 << (KarolParser.T__32 - 32)) |
                (1 << (KarolParser.T__33 - 32)) |
                (1 << (KarolParser.T__34 - 32)) |
                (1 << (KarolParser.T__35 - 32)) |
                (1 << (KarolParser.T__36 - 32)) |
                (1 << (KarolParser.T__37 - 32)) |
                (1 << (KarolParser.T__38 - 32)) |
                (1 << (KarolParser.T__39 - 32)) |
                (1 << (KarolParser.IDENTIFIER - 32)))) !==
              0)
        ) {
          this.state = 180;
          this.statement();
          this.state = 185;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }

      this.state = 188;
      _la = this._input.LA(1);
      if (!(_la === KarolParser.T__26 || _la === KarolParser.T__27)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 18, KarolParser.RULE_instruction);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 190;
      _la = this._input.LA(1);
      if (
        !(
          ((_la - 29) & ~0x1f) == 0 &&
          ((1 << (_la - 29)) &
            ((1 << (KarolParser.T__28 - 29)) |
              (1 << (KarolParser.T__29 - 29)) |
              (1 << (KarolParser.T__30 - 29)) |
              (1 << (KarolParser.T__31 - 29)) |
              (1 << (KarolParser.T__32 - 29)) |
              (1 << (KarolParser.T__33 - 29)) |
              (1 << (KarolParser.T__34 - 29)) |
              (1 << (KarolParser.T__35 - 29)) |
              (1 << (KarolParser.T__36 - 29)) |
              (1 << (KarolParser.T__37 - 29)) |
              (1 << (KarolParser.T__38 - 29)) |
              (1 << (KarolParser.T__39 - 29)))) !==
            0
        )
      ) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  parameterizedinstruction() {
    let localctx = new ParameterizedinstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, KarolParser.RULE_parameterizedinstruction);
    try {
      this.state = 220;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case KarolParser.T__28:
          this.enterOuterAlt(localctx, 1);
          this.state = 192;
          this.match(KarolParser.T__28);
          this.state = 193;
          this.match(KarolParser.T__15);
          this.state = 194;
          this.number();
          this.state = 195;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__31:
          this.enterOuterAlt(localctx, 2);
          this.state = 197;
          this.match(KarolParser.T__31);
          this.state = 198;
          this.match(KarolParser.T__15);
          this.state = 201;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case KarolParser.T__56:
            case KarolParser.T__57:
            case KarolParser.T__58:
            case KarolParser.T__59:
            case KarolParser.T__60:
              this.state = 199;
              this.color();
              break;
            case KarolParser.DIGIT:
              this.state = 200;
              this.number();
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 203;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__32:
          this.enterOuterAlt(localctx, 3);
          this.state = 205;
          this.match(KarolParser.T__32);
          this.state = 206;
          this.match(KarolParser.T__15);
          this.state = 207;
          this.number();
          this.state = 208;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__33:
          this.enterOuterAlt(localctx, 4);
          this.state = 210;
          this.match(KarolParser.T__33);
          this.state = 211;
          this.match(KarolParser.T__15);
          this.state = 212;
          this.color();
          this.state = 213;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__35:
          this.enterOuterAlt(localctx, 5);
          this.state = 215;
          this.match(KarolParser.T__35);
          this.state = 216;
          this.match(KarolParser.T__15);
          this.state = 217;
          this.number();
          this.state = 218;
          this.match(KarolParser.T__16);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 22, KarolParser.RULE_conditionexpression);
    try {
      this.state = 236;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 222;
          this.match(KarolParser.T__40);
          this.state = 223;
          this.conditionexpression();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 224;
          this.condition();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
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
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 231;
          this.parameterizedcondition();
          break;

        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 232;
          this.match(KarolParser.T__13);
          this.state = 233;
          this.match(KarolParser.T__14);
          this.state = 234;
          this.parameterizedcondition();
          break;

        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 235;
          this.customConditionCall();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  customConditionCall() {
    let localctx = new CustomConditionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, KarolParser.RULE_customConditionCall);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 238;
      this.match(KarolParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 26, KarolParser.RULE_condition);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 240;
      _la = this._input.LA(1);
      if (
        !(
          ((_la - 42) & ~0x1f) == 0 &&
          ((1 << (_la - 42)) &
            ((1 << (KarolParser.T__41 - 42)) |
              (1 << (KarolParser.T__42 - 42)) |
              (1 << (KarolParser.T__43 - 42)) |
              (1 << (KarolParser.T__44 - 42)) |
              (1 << (KarolParser.T__45 - 42)) |
              (1 << (KarolParser.T__46 - 42)) |
              (1 << (KarolParser.T__47 - 42)) |
              (1 << (KarolParser.T__48 - 42)) |
              (1 << (KarolParser.T__49 - 42)) |
              (1 << (KarolParser.T__50 - 42)) |
              (1 << (KarolParser.T__51 - 42)) |
              (1 << (KarolParser.T__52 - 42)) |
              (1 << (KarolParser.T__53 - 42)) |
              (1 << (KarolParser.T__54 - 42)) |
              (1 << (KarolParser.T__55 - 42)))) !==
            0
        )
      ) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  parameterizedcondition() {
    let localctx = new ParameterizedconditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, KarolParser.RULE_parameterizedcondition);
    try {
      this.state = 274;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case KarolParser.EOF:
        case KarolParser.T__1:
        case KarolParser.T__2:
        case KarolParser.T__4:
        case KarolParser.T__5:
        case KarolParser.T__7:
        case KarolParser.T__8:
        case KarolParser.T__10:
        case KarolParser.T__11:
        case KarolParser.T__13:
        case KarolParser.T__17:
        case KarolParser.T__19:
        case KarolParser.T__20:
        case KarolParser.T__23:
        case KarolParser.T__24:
        case KarolParser.T__25:
        case KarolParser.T__26:
        case KarolParser.T__27:
        case KarolParser.T__28:
        case KarolParser.T__29:
        case KarolParser.T__30:
        case KarolParser.T__31:
        case KarolParser.T__32:
        case KarolParser.T__33:
        case KarolParser.T__34:
        case KarolParser.T__35:
        case KarolParser.T__36:
        case KarolParser.T__37:
        case KarolParser.T__38:
        case KarolParser.T__39:
        case KarolParser.IDENTIFIER:
          this.enterOuterAlt(localctx, 1);

          break;
        case KarolParser.T__51:
          this.enterOuterAlt(localctx, 2);
          this.state = 243;
          this.match(KarolParser.T__51);
          this.state = 244;
          this.match(KarolParser.T__15);
          this.state = 247;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case KarolParser.T__56:
            case KarolParser.T__57:
            case KarolParser.T__58:
            case KarolParser.T__59:
            case KarolParser.T__60:
              this.state = 245;
              this.color();
              break;
            case KarolParser.DIGIT:
              this.state = 246;
              this.number();
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 249;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__52:
          this.enterOuterAlt(localctx, 3);
          this.state = 251;
          this.match(KarolParser.T__52);
          this.state = 252;
          this.match(KarolParser.T__15);
          this.state = 255;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case KarolParser.T__56:
            case KarolParser.T__57:
            case KarolParser.T__58:
            case KarolParser.T__59:
            case KarolParser.T__60:
              this.state = 253;
              this.color();
              break;
            case KarolParser.DIGIT:
              this.state = 254;
              this.number();
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 257;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__53:
          this.enterOuterAlt(localctx, 4);
          this.state = 259;
          this.match(KarolParser.T__53);
          this.state = 260;
          this.match(KarolParser.T__15);
          this.state = 261;
          this.color();
          this.state = 262;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__54:
          this.enterOuterAlt(localctx, 5);
          this.state = 264;
          this.match(KarolParser.T__54);
          this.state = 265;
          this.match(KarolParser.T__15);
          this.state = 266;
          this.color();
          this.state = 267;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__55:
          this.enterOuterAlt(localctx, 6);
          this.state = 269;
          this.match(KarolParser.T__55);
          this.state = 270;
          this.match(KarolParser.T__15);
          this.state = 271;
          this.number();
          this.state = 272;
          this.match(KarolParser.T__16);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 30, KarolParser.RULE_color);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 276;
      _la = this._input.LA(1);
      if (
        !(
          ((_la - 57) & ~0x1f) == 0 &&
          ((1 << (_la - 57)) &
            ((1 << (KarolParser.T__56 - 57)) |
              (1 << (KarolParser.T__57 - 57)) |
              (1 << (KarolParser.T__58 - 57)) |
              (1 << (KarolParser.T__59 - 57)) |
              (1 << (KarolParser.T__60 - 57)))) !==
            0
        )
      ) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 32, KarolParser.RULE_number);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 279;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 278;
        this.match(KarolParser.DIGIT);
        this.state = 281;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (_la === KarolParser.DIGIT);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
KarolParser.T__57 = 58;
KarolParser.T__58 = 59;
KarolParser.T__59 = 60;
KarolParser.T__60 = 61;
KarolParser.IDENTIFIER = 62;
KarolParser.LETTER = 63;
KarolParser.DIGIT = 64;
KarolParser.WS = 65;

KarolParser.RULE_karol = 0;
KarolParser.RULE_definition = 1;
KarolParser.RULE_methoddefinition = 2;
KarolParser.RULE_conditiondefinition = 3;
KarolParser.RULE_statement = 4;
KarolParser.RULE_customMethodCall = 5;
KarolParser.RULE_iteration = 6;
KarolParser.RULE_loop = 7;
KarolParser.RULE_conditional = 8;
KarolParser.RULE_instruction = 9;
KarolParser.RULE_parameterizedinstruction = 10;
KarolParser.RULE_conditionexpression = 11;
KarolParser.RULE_customConditionCall = 12;
KarolParser.RULE_condition = 13;
KarolParser.RULE_parameterizedcondition = 14;
KarolParser.RULE_color = 15;
KarolParser.RULE_number = 16;

class KarolContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_karol;
  }

  definition = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(DefinitionContext);
    } else {
      return this.getTypedRuleContext(DefinitionContext, i);
    }
  };

  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitKarol(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class DefinitionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_definition;
  }

  conditiondefinition() {
    return this.getTypedRuleContext(ConditiondefinitionContext, 0);
  }

  methoddefinition() {
    return this.getTypedRuleContext(MethoddefinitionContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitDefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class MethoddefinitionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_methoddefinition;
  }

  IDENTIFIER() {
    return this.getToken(KarolParser.IDENTIFIER, 0);
  }

  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitMethoddefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ConditiondefinitionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_conditiondefinition;
  }

  IDENTIFIER() {
    return this.getToken(KarolParser.IDENTIFIER, 0);
  }

  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitConditiondefinition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class StatementContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_statement;
  }

  iteration() {
    return this.getTypedRuleContext(IterationContext, 0);
  }

  loop() {
    return this.getTypedRuleContext(LoopContext, 0);
  }

  conditional() {
    return this.getTypedRuleContext(ConditionalContext, 0);
  }

  instruction() {
    return this.getTypedRuleContext(InstructionContext, 0);
  }

  parameterizedinstruction() {
    return this.getTypedRuleContext(ParameterizedinstructionContext, 0);
  }

  customMethodCall() {
    return this.getTypedRuleContext(CustomMethodCallContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class CustomMethodCallContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_customMethodCall;
  }

  IDENTIFIER() {
    return this.getToken(KarolParser.IDENTIFIER, 0);
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitCustomMethodCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class IterationContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_iteration;
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitIteration(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class LoopContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_loop;
  }

  conditionexpression() {
    return this.getTypedRuleContext(ConditionexpressionContext, 0);
  }

  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitLoop(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ConditionalContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_conditional;
  }

  conditionexpression() {
    return this.getTypedRuleContext(ConditionexpressionContext, 0);
  }

  statement = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StatementContext);
    } else {
      return this.getTypedRuleContext(StatementContext, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitConditional(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class InstructionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_instruction;
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitInstruction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ParameterizedinstructionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_parameterizedinstruction;
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  color() {
    return this.getTypedRuleContext(ColorContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitParameterizedinstruction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ConditionexpressionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_conditionexpression;
  }

  conditionexpression() {
    return this.getTypedRuleContext(ConditionexpressionContext, 0);
  }

  condition() {
    return this.getTypedRuleContext(ConditionContext, 0);
  }

  parameterizedcondition() {
    return this.getTypedRuleContext(ParameterizedconditionContext, 0);
  }

  customConditionCall() {
    return this.getTypedRuleContext(CustomConditionCallContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitConditionexpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class CustomConditionCallContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_customConditionCall;
  }

  IDENTIFIER() {
    return this.getToken(KarolParser.IDENTIFIER, 0);
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitCustomConditionCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ConditionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_condition;
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitCondition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ParameterizedconditionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_parameterizedcondition;
  }

  color() {
    return this.getTypedRuleContext(ColorContext, 0);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitParameterizedcondition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ColorContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_color;
  }

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitColor(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NumberContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KarolParser.RULE_number;
  }

  DIGIT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(KarolParser.DIGIT);
    } else {
      return this.getToken(KarolParser.DIGIT, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
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
KarolParser.CustomMethodCallContext = CustomMethodCallContext;
KarolParser.IterationContext = IterationContext;
KarolParser.LoopContext = LoopContext;
KarolParser.ConditionalContext = ConditionalContext;
KarolParser.InstructionContext = InstructionContext;
KarolParser.ParameterizedinstructionContext = ParameterizedinstructionContext;
KarolParser.ConditionexpressionContext = ConditionexpressionContext;
KarolParser.CustomConditionCallContext = CustomConditionCallContext;
KarolParser.ConditionContext = ConditionContext;
KarolParser.ParameterizedconditionContext = ParameterizedconditionContext;
KarolParser.ColorContext = ColorContext;
KarolParser.NumberContext = NumberContext;
