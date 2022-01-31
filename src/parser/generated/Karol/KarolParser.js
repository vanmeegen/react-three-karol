// Generated from D:/projects/react-three-karol/antlrgrammar\Karol.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";
import KarolVisitor from "./KarolVisitor.js";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0003C\u0113\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
  "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
  "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
  '\u0003\u0002\u0007\u0002"\n\u0002\f\u0002\u000e\u0002%\u000b\u0002',
  "\u0003\u0002\u0003\u0002\u0007\u0002)\n\u0002\f\u0002\u000e\u0002,\u000b",
  "\u0002\u0003\u0002\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u0002",
  "3\u000b\u0002\u0003\u0002\u0006\u00026\n\u0002\r\u0002\u000e\u00027",
  "\u0005\u0002:\n\u0002\u0003\u0003\u0003\u0003\u0005\u0003>\n\u0003\u0003",
  "\u0004\u0003\u0004\u0003\u0004\u0007\u0004C\n\u0004\f\u0004\u000e\u0004",
  "F\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
  "\u0004L\n\u0004\f\u0004\u000e\u0004O\u000b\u0004\u0003\u0004\u0005\u0004",
  "R\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005W\n\u0005\f",
  "\u0005\u000e\u0005Z\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006c\n\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0005\u0006k\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006o\n\u0006\u0003",
  "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006u\n\u0006\u0005",
  "\u0006w\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
  "\u0007}\n\u0007\f\u0007\u000e\u0007\u0080\u000b\u0007\u0003\u0007\u0003",
  "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0088\n\b\f\b\u000e\b",
  "\u008b\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0091\n\b\f\b",
  "\u000e\b\u0094\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
  "\b\u009b\n\b\f\b\u000e\b\u009e\u000b\b\u0003\b\u0003\b\u0003\b\u0005",
  "\b\u00a3\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00a9\n\t\f\t\u000e",
  "\t\u00ac\u000b\t\u0003\t\u0003\t\u0007\t\u00b0\n\t\f\t\u000e\t\u00b3",
  "\u000b\t\u0005\t\u00b5\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
  "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
  "\u0003\u000b\u0003\u000b\u0005\u000b\u00c4\n\u000b\u0003\u000b\u0003",
  "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
  "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
  "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00d7\n\u000b",
  "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
  "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00e6\n\f\u0003\r\u0003\r",
  "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e",
  "\u00ef\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
  "\u000e\u0003\u000e\u0005\u000e\u00f7\n\u000e\u0003\u000e\u0003\u000e",
  "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
  "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
  "\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u010a\n\u000e\u0003",
  "\u000f\u0003\u000f\u0003\u0010\u0006\u0010\u010f\n\u0010\r\u0010\u000e",
  "\u0010\u0110\u0003\u0010\u0002\u0002\u0011\u0002\u0004\u0006\b\n\f\u000e",
  "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e\u0002\u000b\u0003\u0002",
  "\u0004\u0005\u0003\u0002\u0007\b\u0003\u0002\n\u000b\u0003\u0002\r\u000e",
  "\u0003\u0002\u0016\u0017\u0003\u0002\u001d\u001e\u0003\u0002\u001f*",
  "\u0003\u0002,:\u0003\u0002;?\u0002\u0131\u00029\u0003\u0002\u0002\u0002",
  "\u0004=\u0003\u0002\u0002\u0002\u0006Q\u0003\u0002\u0002\u0002\bS\u0003",
  "\u0002\u0002\u0002\nv\u0003\u0002\u0002\u0002\fx\u0003\u0002\u0002\u0002",
  "\u000e\u00a2\u0003\u0002\u0002\u0002\u0010\u00a4\u0003\u0002\u0002\u0002",
  "\u0012\u00b8\u0003\u0002\u0002\u0002\u0014\u00d6\u0003\u0002\u0002\u0002",
  "\u0016\u00e5\u0003\u0002\u0002\u0002\u0018\u00e7\u0003\u0002\u0002\u0002",
  "\u001a\u0109\u0003\u0002\u0002\u0002\u001c\u010b\u0003\u0002\u0002\u0002",
  '\u001e\u010e\u0003\u0002\u0002\u0002 "\u0005\u0004\u0003\u0002! \u0003',
  '\u0002\u0002\u0002"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002',
  "#$\u0003\u0002\u0002\u0002$&\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002",
  "\u0002&*\u0007\u0003\u0002\u0002')\u0005\n\u0006\u0002('\u0003\u0002",
  "\u0002\u0002),\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003",
  "\u0002\u0002\u0002+-\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002",
  "-:\t\u0002\u0002\u0002.0\u0005\u0004\u0003\u0002/.\u0003\u0002\u0002",
  "\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002",
  "\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000246\u0005",
  "\n\u0006\u000254\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027",
  "5\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028:\u0003\u0002\u0002",
  "\u00029#\u0003\u0002\u0002\u000291\u0003\u0002\u0002\u0002:\u0003\u0003",
  "\u0002\u0002\u0002;>\u0005\b\u0005\u0002<>\u0005\u0006\u0004\u0002=",
  ";\u0003\u0002\u0002\u0002=<\u0003\u0002\u0002\u0002>\u0005\u0003\u0002",
  "\u0002\u0002?@\u0007\u0006\u0002\u0002@D\u0007@\u0002\u0002AC\u0005",
  "\n\u0006\u0002BA\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002D",
  "B\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EG\u0003\u0002\u0002",
  "\u0002FD\u0003\u0002\u0002\u0002GR\t\u0003\u0002\u0002HI\u0007\t\u0002",
  "\u0002IM\u0007@\u0002\u0002JL\u0005\n\u0006\u0002KJ\u0003\u0002\u0002",
  "\u0002LO\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002",
  "\u0002\u0002NP\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002PR\t",
  "\u0004\u0002\u0002Q?\u0003\u0002\u0002\u0002QH\u0003\u0002\u0002\u0002",
  "R\u0007\u0003\u0002\u0002\u0002ST\u0007\f\u0002\u0002TX\u0007@\u0002",
  "\u0002UW\u0005\n\u0006\u0002VU\u0003\u0002\u0002\u0002WZ\u0003\u0002",
  "\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y[\u0003",
  "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\t\u0005\u0002\u0002",
  "\\\t\u0003\u0002\u0002\u0002]w\u0005\f\u0007\u0002^w\u0005\u000e\b\u0002",
  "_w\u0005\u0010\t\u0002`b\u0005\u0012\n\u0002ac\u0007\u000f\u0002\u0002",
  "ba\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cw\u0003\u0002\u0002",
  "\u0002de\u0007\u0010\u0002\u0002ef\u0007\u0011\u0002\u0002fg\u0005\u0012",
  "\n\u0002gh\u0007\u0012\u0002\u0002hj\u0007\u0013\u0002\u0002ik\u0007",
  "\u000f\u0002\u0002ji\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002",
  "kw\u0003\u0002\u0002\u0002ln\u0005\u0014\u000b\u0002mo\u0007\u000f\u0002",
  "\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002ow\u0003\u0002",
  "\u0002\u0002pq\u0007\u0010\u0002\u0002qr\u0007\u0011\u0002\u0002rt\u0005",
  "\u0014\u000b\u0002su\u0007\u000f\u0002\u0002ts\u0003\u0002\u0002\u0002",
  "tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002v]\u0003\u0002\u0002",
  "\u0002v^\u0003\u0002\u0002\u0002v_\u0003\u0002\u0002\u0002v`\u0003\u0002",
  "\u0002\u0002vd\u0003\u0002\u0002\u0002vl\u0003\u0002\u0002\u0002vp\u0003",
  "\u0002\u0002\u0002w\u000b\u0003\u0002\u0002\u0002xy\u0007\u0014\u0002",
  "\u0002yz\u0005\u001e\u0010\u0002z~\u0007\u0015\u0002\u0002{}\u0005\n",
  "\u0006\u0002|{\u0003\u0002\u0002\u0002}\u0080\u0003\u0002\u0002\u0002",
  "~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0081",
  "\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0082",
  "\t\u0006\u0002\u0002\u0082\r\u0003\u0002\u0002\u0002\u0083\u0084\u0007",
  "\u0014\u0002\u0002\u0084\u0085\u0007\u0018\u0002\u0002\u0085\u0089\u0005",
  "\u0016\f\u0002\u0086\u0088\u0005\n\u0006\u0002\u0087\u0086\u0003\u0002",
  "\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002",
  "\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003\u0002",
  "\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u008d\t\u0006",
  "\u0002\u0002\u008d\u00a3\u0003\u0002\u0002\u0002\u008e\u0092\u0007\u0014",
  "\u0002\u0002\u008f\u0091\u0005\n\u0006\u0002\u0090\u008f\u0003\u0002",
  "\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
  "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002",
  "\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u0096\t\u0006",
  "\u0002\u0002\u0096\u0097\u0007\u0018\u0002\u0002\u0097\u00a3\u0005\u0016",
  "\f\u0002\u0098\u009c\u0007\u0014\u0002\u0002\u0099\u009b\u0005\n\u0006",
  "\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009e\u0003\u0002\u0002",
  "\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002",
  "\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002",
  "\u0002\u009f\u00a0\t\u0006\u0002\u0002\u00a0\u00a1\u0007\u0019\u0002",
  "\u0002\u00a1\u00a3\u0005\u0016\f\u0002\u00a2\u0083\u0003\u0002\u0002",
  "\u0002\u00a2\u008e\u0003\u0002\u0002\u0002\u00a2\u0098\u0003\u0002\u0002",
  "\u0002\u00a3\u000f\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u001a\u0002",
  "\u0002\u00a5\u00a6\u0005\u0016\f\u0002\u00a6\u00aa\u0007\u001b\u0002",
  "\u0002\u00a7\u00a9\u0005\n\u0006\u0002\u00a8\u00a7\u0003\u0002\u0002",
  "\u0002\u00a9\u00ac\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002",
  "\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00b4\u0003\u0002\u0002",
  "\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ad\u00b1\u0007\u001c\u0002",
  "\u0002\u00ae\u00b0\u0005\n\u0006\u0002\u00af\u00ae\u0003\u0002\u0002",
  "\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002",
  "\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002",
  "\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b4\u00ad\u0003\u0002\u0002",
  "\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002",
  "\u0002\u00b6\u00b7\t\u0007\u0002\u0002\u00b7\u0011\u0003\u0002\u0002",
  "\u0002\u00b8\u00b9\t\b\u0002\u0002\u00b9\u0013\u0003\u0002\u0002\u0002",
  "\u00ba\u00bb\u0007\u001f\u0002\u0002\u00bb\u00bc\u0007\u0012\u0002\u0002",
  "\u00bc\u00bd\u0005\u001e\u0010\u0002\u00bd\u00be\u0007\u0013\u0002\u0002",
  '\u00be\u00d7\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007"\u0002\u0002',
  "\u00c0\u00c3\u0007\u0012\u0002\u0002\u00c1\u00c4\u0005\u001c\u000f\u0002",
  "\u00c2\u00c4\u0005\u001e\u0010\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002",
  "\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002",
  "\u00c5\u00c6\u0007\u0013\u0002\u0002\u00c6\u00d7\u0003\u0002\u0002\u0002",
  "\u00c7\u00c8\u0007#\u0002\u0002\u00c8\u00c9\u0007\u0012\u0002\u0002",
  "\u00c9\u00ca\u0005\u001e\u0010\u0002\u00ca\u00cb\u0007\u0013\u0002\u0002",
  "\u00cb\u00d7\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007$\u0002\u0002",
  "\u00cd\u00ce\u0007\u0012\u0002\u0002\u00ce\u00cf\u0005\u001c\u000f\u0002",
  "\u00cf\u00d0\u0007\u0013\u0002\u0002\u00d0\u00d7\u0003\u0002\u0002\u0002",
  "\u00d1\u00d2\u0007&\u0002\u0002\u00d2\u00d3\u0007\u0012\u0002\u0002",
  "\u00d3\u00d4\u0005\u001e\u0010\u0002\u00d4\u00d5\u0007\u0013\u0002\u0002",
  "\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6\u00ba\u0003\u0002\u0002\u0002",
  "\u00d6\u00bf\u0003\u0002\u0002\u0002\u00d6\u00c7\u0003\u0002\u0002\u0002",
  "\u00d6\u00cc\u0003\u0002\u0002\u0002\u00d6\u00d1\u0003\u0002\u0002\u0002",
  "\u00d7\u0015\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007+\u0002\u0002",
  "\u00d9\u00e6\u0005\u0016\f\u0002\u00da\u00e6\u0005\u0018\r\u0002\u00db",
  "\u00dc\u0007\u0010\u0002\u0002\u00dc\u00dd\u0007\u0011\u0002\u0002\u00dd",
  "\u00de\u0005\u0018\r\u0002\u00de\u00df\u0007\u0012\u0002\u0002\u00df",
  "\u00e0\u0007\u0013\u0002\u0002\u00e0\u00e6\u0003\u0002\u0002\u0002\u00e1",
  "\u00e6\u0005\u001a\u000e\u0002\u00e2\u00e3\u0007\u0010\u0002\u0002\u00e3",
  "\u00e4\u0007\u0011\u0002\u0002\u00e4\u00e6\u0005\u001a\u000e\u0002\u00e5",
  "\u00d8\u0003\u0002\u0002\u0002\u00e5\u00da\u0003\u0002\u0002\u0002\u00e5",
  "\u00db\u0003\u0002\u0002\u0002\u00e5\u00e1\u0003\u0002\u0002\u0002\u00e5",
  "\u00e2\u0003\u0002\u0002\u0002\u00e6\u0017\u0003\u0002\u0002\u0002\u00e7",
  "\u00e8\t\t\u0002\u0002\u00e8\u0019\u0003\u0002\u0002\u0002\u00e9\u010a",
  "\u0003\u0002\u0002\u0002\u00ea\u00eb\u00076\u0002\u0002\u00eb\u00ee",
  "\u0007\u0012\u0002\u0002\u00ec\u00ef\u0005\u001c\u000f\u0002\u00ed\u00ef",
  "\u0005\u001e\u0010\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ed",
  "\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\u00f1",
  "\u0007\u0013\u0002\u0002\u00f1\u010a\u0003\u0002\u0002\u0002\u00f2\u00f3",
  "\u00077\u0002\u0002\u00f3\u00f6\u0007\u0012\u0002\u0002\u00f4\u00f7",
  "\u0005\u001c\u000f\u0002\u00f5\u00f7\u0005\u001e\u0010\u0002\u00f6\u00f4",
  "\u0003\u0002\u0002\u0002\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f8",
  "\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007\u0013\u0002\u0002\u00f9\u010a",
  "\u0003\u0002\u0002\u0002\u00fa\u00fb\u00078\u0002\u0002\u00fb\u00fc",
  "\u0007\u0012\u0002\u0002\u00fc\u00fd\u0005\u001c\u000f\u0002\u00fd\u00fe",
  "\u0007\u0013\u0002\u0002\u00fe\u010a\u0003\u0002\u0002\u0002\u00ff\u0100",
  "\u00079\u0002\u0002\u0100\u0101\u0007\u0012\u0002\u0002\u0101\u0102",
  "\u0005\u001c\u000f\u0002\u0102\u0103\u0007\u0013\u0002\u0002\u0103\u010a",
  "\u0003\u0002\u0002\u0002\u0104\u0105\u0007:\u0002\u0002\u0105\u0106",
  "\u0007\u0012\u0002\u0002\u0106\u0107\u0005\u001e\u0010\u0002\u0107\u0108",
  "\u0007\u0013\u0002\u0002\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u00e9",
  "\u0003\u0002\u0002\u0002\u0109\u00ea\u0003\u0002\u0002\u0002\u0109\u00f2",
  "\u0003\u0002\u0002\u0002\u0109\u00fa\u0003\u0002\u0002\u0002\u0109\u00ff",
  "\u0003\u0002\u0002\u0002\u0109\u0104\u0003\u0002\u0002\u0002\u010a\u001b",
  "\u0003\u0002\u0002\u0002\u010b\u010c\t\n\u0002\u0002\u010c\u001d\u0003",
  "\u0002\u0002\u0002\u010d\u010f\u0007B\u0002\u0002\u010e\u010d\u0003",
  "\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110\u010e\u0003",
  "\u0002\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u001f\u0003",
  "\u0002\u0002\u0002 #*179=DMQXbjntv~\u0089\u0092\u009c\u00a2\u00aa\u00b1",
  "\u00b4\u00c3\u00d6\u00e5\u00ee\u00f6\u0109\u0110",
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
    "iteration",
    "loop",
    "conditional",
    "instruction",
    "parameterizedinstruction",
    "conditionexpression",
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
      this.state = 55;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 33;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) & ((1 << KarolParser.T__3) | (1 << KarolParser.T__6) | (1 << KarolParser.T__9))) !== 0
          ) {
            this.state = 30;
            this.definition();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 36;
          this.match(KarolParser.T__0);
          this.state = 40;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la - 14) & ~0x1f) == 0 &&
            ((1 << (_la - 14)) &
              ((1 << (KarolParser.T__13 - 14)) |
                (1 << (KarolParser.T__17 - 14)) |
                (1 << (KarolParser.T__23 - 14)) |
                (1 << (KarolParser.T__28 - 14)) |
                (1 << (KarolParser.T__29 - 14)) |
                (1 << (KarolParser.T__30 - 14)) |
                (1 << (KarolParser.T__31 - 14)) |
                (1 << (KarolParser.T__32 - 14)) |
                (1 << (KarolParser.T__33 - 14)) |
                (1 << (KarolParser.T__34 - 14)) |
                (1 << (KarolParser.T__35 - 14)) |
                (1 << (KarolParser.T__36 - 14)) |
                (1 << (KarolParser.T__37 - 14)) |
                (1 << (KarolParser.T__38 - 14)) |
                (1 << (KarolParser.T__39 - 14)))) !==
              0
          ) {
            this.state = 37;
            this.statement();
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 43;
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
          this.state = 47;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) & ((1 << KarolParser.T__3) | (1 << KarolParser.T__6) | (1 << KarolParser.T__9))) !== 0
          ) {
            this.state = 44;
            this.definition();
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 51;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          do {
            this.state = 50;
            this.statement();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          } while (
            ((_la - 14) & ~0x1f) == 0 &&
            ((1 << (_la - 14)) &
              ((1 << (KarolParser.T__13 - 14)) |
                (1 << (KarolParser.T__17 - 14)) |
                (1 << (KarolParser.T__23 - 14)) |
                (1 << (KarolParser.T__28 - 14)) |
                (1 << (KarolParser.T__29 - 14)) |
                (1 << (KarolParser.T__30 - 14)) |
                (1 << (KarolParser.T__31 - 14)) |
                (1 << (KarolParser.T__32 - 14)) |
                (1 << (KarolParser.T__33 - 14)) |
                (1 << (KarolParser.T__34 - 14)) |
                (1 << (KarolParser.T__35 - 14)) |
                (1 << (KarolParser.T__36 - 14)) |
                (1 << (KarolParser.T__37 - 14)) |
                (1 << (KarolParser.T__38 - 14)) |
                (1 << (KarolParser.T__39 - 14)))) !==
              0
          );
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
      this.state = 59;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case KarolParser.T__9:
          this.enterOuterAlt(localctx, 1);
          this.state = 57;
          this.conditiondefinition();
          break;
        case KarolParser.T__3:
        case KarolParser.T__6:
          this.enterOuterAlt(localctx, 2);
          this.state = 58;
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
      this.state = 79;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case KarolParser.T__3:
          this.enterOuterAlt(localctx, 1);
          this.state = 61;
          this.match(KarolParser.T__3);
          this.state = 62;
          this.match(KarolParser.IDENTIFIER);
          this.state = 66;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la - 14) & ~0x1f) == 0 &&
            ((1 << (_la - 14)) &
              ((1 << (KarolParser.T__13 - 14)) |
                (1 << (KarolParser.T__17 - 14)) |
                (1 << (KarolParser.T__23 - 14)) |
                (1 << (KarolParser.T__28 - 14)) |
                (1 << (KarolParser.T__29 - 14)) |
                (1 << (KarolParser.T__30 - 14)) |
                (1 << (KarolParser.T__31 - 14)) |
                (1 << (KarolParser.T__32 - 14)) |
                (1 << (KarolParser.T__33 - 14)) |
                (1 << (KarolParser.T__34 - 14)) |
                (1 << (KarolParser.T__35 - 14)) |
                (1 << (KarolParser.T__36 - 14)) |
                (1 << (KarolParser.T__37 - 14)) |
                (1 << (KarolParser.T__38 - 14)) |
                (1 << (KarolParser.T__39 - 14)))) !==
              0
          ) {
            this.state = 63;
            this.statement();
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 69;
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
          this.state = 70;
          this.match(KarolParser.T__6);
          this.state = 71;
          this.match(KarolParser.IDENTIFIER);
          this.state = 75;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la - 14) & ~0x1f) == 0 &&
            ((1 << (_la - 14)) &
              ((1 << (KarolParser.T__13 - 14)) |
                (1 << (KarolParser.T__17 - 14)) |
                (1 << (KarolParser.T__23 - 14)) |
                (1 << (KarolParser.T__28 - 14)) |
                (1 << (KarolParser.T__29 - 14)) |
                (1 << (KarolParser.T__30 - 14)) |
                (1 << (KarolParser.T__31 - 14)) |
                (1 << (KarolParser.T__32 - 14)) |
                (1 << (KarolParser.T__33 - 14)) |
                (1 << (KarolParser.T__34 - 14)) |
                (1 << (KarolParser.T__35 - 14)) |
                (1 << (KarolParser.T__36 - 14)) |
                (1 << (KarolParser.T__37 - 14)) |
                (1 << (KarolParser.T__38 - 14)) |
                (1 << (KarolParser.T__39 - 14)))) !==
              0
          ) {
            this.state = 72;
            this.statement();
            this.state = 77;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 78;
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
      this.state = 81;
      this.match(KarolParser.T__9);
      this.state = 82;
      this.match(KarolParser.IDENTIFIER);
      this.state = 86;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        ((_la - 14) & ~0x1f) == 0 &&
        ((1 << (_la - 14)) &
          ((1 << (KarolParser.T__13 - 14)) |
            (1 << (KarolParser.T__17 - 14)) |
            (1 << (KarolParser.T__23 - 14)) |
            (1 << (KarolParser.T__28 - 14)) |
            (1 << (KarolParser.T__29 - 14)) |
            (1 << (KarolParser.T__30 - 14)) |
            (1 << (KarolParser.T__31 - 14)) |
            (1 << (KarolParser.T__32 - 14)) |
            (1 << (KarolParser.T__33 - 14)) |
            (1 << (KarolParser.T__34 - 14)) |
            (1 << (KarolParser.T__35 - 14)) |
            (1 << (KarolParser.T__36 - 14)) |
            (1 << (KarolParser.T__37 - 14)) |
            (1 << (KarolParser.T__38 - 14)) |
            (1 << (KarolParser.T__39 - 14)))) !==
          0
      ) {
        this.state = 83;
        this.statement();
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 89;
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
      this.state = 116;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 91;
          this.iteration();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 92;
          this.loop();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 93;
          this.conditional();
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 94;
          this.instruction();
          this.state = 96;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 95;
            this.match(KarolParser.T__12);
          }

          break;

        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 98;
          this.match(KarolParser.T__13);
          this.state = 99;
          this.match(KarolParser.T__14);
          this.state = 100;
          this.instruction();
          this.state = 101;
          this.match(KarolParser.T__15);
          this.state = 102;
          this.match(KarolParser.T__16);
          this.state = 104;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 103;
            this.match(KarolParser.T__12);
          }

          break;

        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 106;
          this.parameterizedinstruction();
          this.state = 108;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 107;
            this.match(KarolParser.T__12);
          }

          break;

        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 110;
          this.match(KarolParser.T__13);
          this.state = 111;
          this.match(KarolParser.T__14);
          this.state = 112;
          this.parameterizedinstruction();
          this.state = 114;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === KarolParser.T__12) {
            this.state = 113;
            this.match(KarolParser.T__12);
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

  iteration() {
    let localctx = new IterationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, KarolParser.RULE_iteration);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 118;
      this.match(KarolParser.T__17);
      this.state = 119;
      this.number();
      this.state = 120;
      this.match(KarolParser.T__18);
      this.state = 124;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        ((_la - 14) & ~0x1f) == 0 &&
        ((1 << (_la - 14)) &
          ((1 << (KarolParser.T__13 - 14)) |
            (1 << (KarolParser.T__17 - 14)) |
            (1 << (KarolParser.T__23 - 14)) |
            (1 << (KarolParser.T__28 - 14)) |
            (1 << (KarolParser.T__29 - 14)) |
            (1 << (KarolParser.T__30 - 14)) |
            (1 << (KarolParser.T__31 - 14)) |
            (1 << (KarolParser.T__32 - 14)) |
            (1 << (KarolParser.T__33 - 14)) |
            (1 << (KarolParser.T__34 - 14)) |
            (1 << (KarolParser.T__35 - 14)) |
            (1 << (KarolParser.T__36 - 14)) |
            (1 << (KarolParser.T__37 - 14)) |
            (1 << (KarolParser.T__38 - 14)) |
            (1 << (KarolParser.T__39 - 14)))) !==
          0
      ) {
        this.state = 121;
        this.statement();
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 127;
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
    this.enterRule(localctx, 12, KarolParser.RULE_loop);
    var _la = 0; // Token type
    try {
      this.state = 160;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 129;
          this.match(KarolParser.T__17);
          this.state = 130;
          this.match(KarolParser.T__21);
          this.state = 131;
          this.conditionexpression();
          this.state = 135;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la - 14) & ~0x1f) == 0 &&
            ((1 << (_la - 14)) &
              ((1 << (KarolParser.T__13 - 14)) |
                (1 << (KarolParser.T__17 - 14)) |
                (1 << (KarolParser.T__23 - 14)) |
                (1 << (KarolParser.T__28 - 14)) |
                (1 << (KarolParser.T__29 - 14)) |
                (1 << (KarolParser.T__30 - 14)) |
                (1 << (KarolParser.T__31 - 14)) |
                (1 << (KarolParser.T__32 - 14)) |
                (1 << (KarolParser.T__33 - 14)) |
                (1 << (KarolParser.T__34 - 14)) |
                (1 << (KarolParser.T__35 - 14)) |
                (1 << (KarolParser.T__36 - 14)) |
                (1 << (KarolParser.T__37 - 14)) |
                (1 << (KarolParser.T__38 - 14)) |
                (1 << (KarolParser.T__39 - 14)))) !==
              0
          ) {
            this.state = 132;
            this.statement();
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 138;
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
          this.state = 140;
          this.match(KarolParser.T__17);
          this.state = 144;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la - 14) & ~0x1f) == 0 &&
            ((1 << (_la - 14)) &
              ((1 << (KarolParser.T__13 - 14)) |
                (1 << (KarolParser.T__17 - 14)) |
                (1 << (KarolParser.T__23 - 14)) |
                (1 << (KarolParser.T__28 - 14)) |
                (1 << (KarolParser.T__29 - 14)) |
                (1 << (KarolParser.T__30 - 14)) |
                (1 << (KarolParser.T__31 - 14)) |
                (1 << (KarolParser.T__32 - 14)) |
                (1 << (KarolParser.T__33 - 14)) |
                (1 << (KarolParser.T__34 - 14)) |
                (1 << (KarolParser.T__35 - 14)) |
                (1 << (KarolParser.T__36 - 14)) |
                (1 << (KarolParser.T__37 - 14)) |
                (1 << (KarolParser.T__38 - 14)) |
                (1 << (KarolParser.T__39 - 14)))) !==
              0
          ) {
            this.state = 141;
            this.statement();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 147;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__19 || _la === KarolParser.T__20)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 148;
          this.match(KarolParser.T__21);
          this.state = 149;
          this.conditionexpression();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 150;
          this.match(KarolParser.T__17);
          this.state = 154;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (
            ((_la - 14) & ~0x1f) == 0 &&
            ((1 << (_la - 14)) &
              ((1 << (KarolParser.T__13 - 14)) |
                (1 << (KarolParser.T__17 - 14)) |
                (1 << (KarolParser.T__23 - 14)) |
                (1 << (KarolParser.T__28 - 14)) |
                (1 << (KarolParser.T__29 - 14)) |
                (1 << (KarolParser.T__30 - 14)) |
                (1 << (KarolParser.T__31 - 14)) |
                (1 << (KarolParser.T__32 - 14)) |
                (1 << (KarolParser.T__33 - 14)) |
                (1 << (KarolParser.T__34 - 14)) |
                (1 << (KarolParser.T__35 - 14)) |
                (1 << (KarolParser.T__36 - 14)) |
                (1 << (KarolParser.T__37 - 14)) |
                (1 << (KarolParser.T__38 - 14)) |
                (1 << (KarolParser.T__39 - 14)))) !==
              0
          ) {
            this.state = 151;
            this.statement();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 157;
          _la = this._input.LA(1);
          if (!(_la === KarolParser.T__19 || _la === KarolParser.T__20)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 158;
          this.match(KarolParser.T__22);
          this.state = 159;
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
    this.enterRule(localctx, 14, KarolParser.RULE_conditional);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 162;
      this.match(KarolParser.T__23);
      this.state = 163;
      this.conditionexpression();
      this.state = 164;
      this.match(KarolParser.T__24);
      this.state = 168;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        ((_la - 14) & ~0x1f) == 0 &&
        ((1 << (_la - 14)) &
          ((1 << (KarolParser.T__13 - 14)) |
            (1 << (KarolParser.T__17 - 14)) |
            (1 << (KarolParser.T__23 - 14)) |
            (1 << (KarolParser.T__28 - 14)) |
            (1 << (KarolParser.T__29 - 14)) |
            (1 << (KarolParser.T__30 - 14)) |
            (1 << (KarolParser.T__31 - 14)) |
            (1 << (KarolParser.T__32 - 14)) |
            (1 << (KarolParser.T__33 - 14)) |
            (1 << (KarolParser.T__34 - 14)) |
            (1 << (KarolParser.T__35 - 14)) |
            (1 << (KarolParser.T__36 - 14)) |
            (1 << (KarolParser.T__37 - 14)) |
            (1 << (KarolParser.T__38 - 14)) |
            (1 << (KarolParser.T__39 - 14)))) !==
          0
      ) {
        this.state = 165;
        this.statement();
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 178;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === KarolParser.T__25) {
        this.state = 171;
        this.match(KarolParser.T__25);
        this.state = 175;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la - 14) & ~0x1f) == 0 &&
          ((1 << (_la - 14)) &
            ((1 << (KarolParser.T__13 - 14)) |
              (1 << (KarolParser.T__17 - 14)) |
              (1 << (KarolParser.T__23 - 14)) |
              (1 << (KarolParser.T__28 - 14)) |
              (1 << (KarolParser.T__29 - 14)) |
              (1 << (KarolParser.T__30 - 14)) |
              (1 << (KarolParser.T__31 - 14)) |
              (1 << (KarolParser.T__32 - 14)) |
              (1 << (KarolParser.T__33 - 14)) |
              (1 << (KarolParser.T__34 - 14)) |
              (1 << (KarolParser.T__35 - 14)) |
              (1 << (KarolParser.T__36 - 14)) |
              (1 << (KarolParser.T__37 - 14)) |
              (1 << (KarolParser.T__38 - 14)) |
              (1 << (KarolParser.T__39 - 14)))) !==
            0
        ) {
          this.state = 172;
          this.statement();
          this.state = 177;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }

      this.state = 180;
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
    this.enterRule(localctx, 16, KarolParser.RULE_instruction);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 182;
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
    this.enterRule(localctx, 18, KarolParser.RULE_parameterizedinstruction);
    try {
      this.state = 212;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case KarolParser.T__28:
          this.enterOuterAlt(localctx, 1);
          this.state = 184;
          this.match(KarolParser.T__28);
          this.state = 185;
          this.match(KarolParser.T__15);
          this.state = 186;
          this.number();
          this.state = 187;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__31:
          this.enterOuterAlt(localctx, 2);
          this.state = 189;
          this.match(KarolParser.T__31);
          this.state = 190;
          this.match(KarolParser.T__15);
          this.state = 193;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case KarolParser.T__56:
            case KarolParser.T__57:
            case KarolParser.T__58:
            case KarolParser.T__59:
            case KarolParser.T__60:
              this.state = 191;
              this.color();
              break;
            case KarolParser.DIGIT:
              this.state = 192;
              this.number();
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 195;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__32:
          this.enterOuterAlt(localctx, 3);
          this.state = 197;
          this.match(KarolParser.T__32);
          this.state = 198;
          this.match(KarolParser.T__15);
          this.state = 199;
          this.number();
          this.state = 200;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__33:
          this.enterOuterAlt(localctx, 4);
          this.state = 202;
          this.match(KarolParser.T__33);
          this.state = 203;
          this.match(KarolParser.T__15);
          this.state = 204;
          this.color();
          this.state = 205;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__35:
          this.enterOuterAlt(localctx, 5);
          this.state = 207;
          this.match(KarolParser.T__35);
          this.state = 208;
          this.match(KarolParser.T__15);
          this.state = 209;
          this.number();
          this.state = 210;
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
    this.enterRule(localctx, 20, KarolParser.RULE_conditionexpression);
    try {
      this.state = 227;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 214;
          this.match(KarolParser.T__40);
          this.state = 215;
          this.conditionexpression();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 216;
          this.condition();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 217;
          this.match(KarolParser.T__13);
          this.state = 218;
          this.match(KarolParser.T__14);
          this.state = 219;
          this.condition();
          this.state = 220;
          this.match(KarolParser.T__15);
          this.state = 221;
          this.match(KarolParser.T__16);
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 223;
          this.parameterizedcondition();
          break;

        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 224;
          this.match(KarolParser.T__13);
          this.state = 225;
          this.match(KarolParser.T__14);
          this.state = 226;
          this.parameterizedcondition();
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

  condition() {
    let localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, KarolParser.RULE_condition);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 229;
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
    this.enterRule(localctx, 24, KarolParser.RULE_parameterizedcondition);
    try {
      this.state = 263;
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
          this.enterOuterAlt(localctx, 1);

          break;
        case KarolParser.T__51:
          this.enterOuterAlt(localctx, 2);
          this.state = 232;
          this.match(KarolParser.T__51);
          this.state = 233;
          this.match(KarolParser.T__15);
          this.state = 236;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case KarolParser.T__56:
            case KarolParser.T__57:
            case KarolParser.T__58:
            case KarolParser.T__59:
            case KarolParser.T__60:
              this.state = 234;
              this.color();
              break;
            case KarolParser.DIGIT:
              this.state = 235;
              this.number();
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 238;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__52:
          this.enterOuterAlt(localctx, 3);
          this.state = 240;
          this.match(KarolParser.T__52);
          this.state = 241;
          this.match(KarolParser.T__15);
          this.state = 244;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case KarolParser.T__56:
            case KarolParser.T__57:
            case KarolParser.T__58:
            case KarolParser.T__59:
            case KarolParser.T__60:
              this.state = 242;
              this.color();
              break;
            case KarolParser.DIGIT:
              this.state = 243;
              this.number();
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 246;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__53:
          this.enterOuterAlt(localctx, 4);
          this.state = 248;
          this.match(KarolParser.T__53);
          this.state = 249;
          this.match(KarolParser.T__15);
          this.state = 250;
          this.color();
          this.state = 251;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__54:
          this.enterOuterAlt(localctx, 5);
          this.state = 253;
          this.match(KarolParser.T__54);
          this.state = 254;
          this.match(KarolParser.T__15);
          this.state = 255;
          this.color();
          this.state = 256;
          this.match(KarolParser.T__16);
          break;
        case KarolParser.T__55:
          this.enterOuterAlt(localctx, 6);
          this.state = 258;
          this.match(KarolParser.T__55);
          this.state = 259;
          this.match(KarolParser.T__15);
          this.state = 260;
          this.number();
          this.state = 261;
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
    this.enterRule(localctx, 26, KarolParser.RULE_color);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 265;
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
    this.enterRule(localctx, 28, KarolParser.RULE_number);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 268;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 267;
        this.match(KarolParser.DIGIT);
        this.state = 270;
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
KarolParser.RULE_iteration = 5;
KarolParser.RULE_loop = 6;
KarolParser.RULE_conditional = 7;
KarolParser.RULE_instruction = 8;
KarolParser.RULE_parameterizedinstruction = 9;
KarolParser.RULE_conditionexpression = 10;
KarolParser.RULE_condition = 11;
KarolParser.RULE_parameterizedcondition = 12;
KarolParser.RULE_color = 13;
KarolParser.RULE_number = 14;

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

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitStatement(this);
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

  accept(visitor) {
    if (visitor instanceof KarolVisitor) {
      return visitor.visitConditionexpression(this);
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
KarolParser.IterationContext = IterationContext;
KarolParser.LoopContext = LoopContext;
KarolParser.ConditionalContext = ConditionalContext;
KarolParser.InstructionContext = InstructionContext;
KarolParser.ParameterizedinstructionContext = ParameterizedinstructionContext;
KarolParser.ConditionexpressionContext = ConditionexpressionContext;
KarolParser.ConditionContext = ConditionContext;
KarolParser.ParameterizedconditionContext = ParameterizedconditionContext;
KarolParser.ColorContext = ColorContext;
KarolParser.NumberContext = NumberContext;
