// Generated from D:/projects/react-three-karol/antlrgrammar\Karol.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0002C\u02b4\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
  "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
  "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
  "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
  "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
  "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
  "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
  "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
  '\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004"\t"\u0004#',
  "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004'\t'\u0004(\t(\u0004)\t)\u0004",
  "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
  "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
  "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
  "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0003\u0002\u0003\u0002\u0003\u0002",
  "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
  "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
  "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
  "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
  "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
  "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
  "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
  "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
  "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
  "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
  "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
  "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
  "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
  "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
  "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
  "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
  "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
  "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
  "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
  "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
  "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
  "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
  "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
  "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
  "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
  "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
  "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
  "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
  "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
  "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
  "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
  "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
  "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
  "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
  "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
  "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
  "\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 ",
  "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003",
  '!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003"\u0003"\u0003"\u0003"',
  '\u0003"\u0003"\u0003"\u0003"\u0003"\u0003#\u0003#\u0003#\u0003',
  "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003",
  "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
  "$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
  "&\u0003&\u0003&\u0003'\u0003'\u0003'\u0003'\u0003'\u0003'\u0003",
  "'\u0003'\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003",
  ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003*\u0003*\u0003",
  "*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003",
  "+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
  ",\u0003,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003-\u0003-\u0003",
  "-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
  ".\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
  "/\u0003/\u0003/\u0003/\u00030\u00030\u00030\u00030\u00030\u00030\u0003",
  "0\u00030\u00030\u00031\u00031\u00031\u00031\u00031\u00031\u00031\u0003",
  "1\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
  "2\u00032\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u00033\u0003",
  "3\u00033\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u0003",
  "4\u00034\u00034\u00034\u00034\u00035\u00035\u00035\u00035\u00035\u0003",
  "5\u00035\u00035\u00035\u00035\u00036\u00036\u00036\u00036\u00036\u0003",
  "6\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u0003",
  "7\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u00038\u0003",
  "8\u00038\u00038\u00038\u00038\u00038\u00038\u00038\u00038\u00038\u0003",
  "8\u00038\u00038\u00039\u00039\u00039\u00039\u00039\u00039\u00039\u0003",
  "9\u00039\u00039\u0003:\u0003:\u0003:\u0003:\u0003;\u0003;\u0003;\u0003",
  ";\u0003;\u0003<\u0003<\u0003<\u0003<\u0003<\u0003=\u0003=\u0003=\u0003",
  "=\u0003=\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003",
  "?\u0003?\u0003?\u0007?\u029e\n?\f?\u000e?\u02a1\u000b?\u0003@\u0005",
  "@\u02a4\n@\u0003A\u0003A\u0003B\u0003B\u0003B\u0007B\u02ab\nB\fB\u000e",
  "B\u02ae\u000bB\u0003B\u0005B\u02b1\nB\u0003B\u0003B\u0002\u0002C\u0003",
  "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
  "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
  "\u0011!\u0012#\u0013%\u0014'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
  "3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K'M(O)Q*S+U,W-Y.",
  "[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y>{?}@\u007fA\u0081B\u0083C\u0003\u0002",
  "\u0006\u0005\u0002//C\\c|\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f",
  '""\u0003\u0002\u007f\u007f\u0002\u02b7\u0002\u0003\u0003\u0002\u0002',
  "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
  "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
  "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
  "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
  "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
  "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002",
  "\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002",
  "\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002",
  "\u0002%\u0003\u0002\u0002\u0002\u0002'\u0003\u0002\u0002\u0002\u0002",
  ")\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003",
  "\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002",
  "\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002",
  "\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002",
  "\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002",
  "?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003",
  "\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002",
  "\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002",
  "\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002",
  "\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002",
  "U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003",
  "\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002",
  "\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002",
  "\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002",
  "\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002",
  "k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003",
  "\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002",
  "\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002\u0002",
  "\u0002\u0002y\u0003\u0002\u0002\u0002\u0002{\u0003\u0002\u0002\u0002",
  "\u0002}\u0003\u0002\u0002\u0002\u0002\u007f\u0003\u0002\u0002\u0002",
  "\u0002\u0081\u0003\u0002\u0002\u0002\u0002\u0083\u0003\u0002\u0002\u0002",
  "\u0003\u0085\u0003\u0002\u0002\u0002\u0005\u008e\u0003\u0002\u0002\u0002",
  "\u0007\u009b\u0003\u0002\u0002\u0002\t\u00a5\u0003\u0002\u0002\u0002",
  "\u000b\u00af\u0003\u0002\u0002\u0002\r\u00bd\u0003\u0002\u0002\u0002",
  "\u000f\u00c8\u0003\u0002\u0002\u0002\u0011\u00d0\u0003\u0002\u0002\u0002",
  "\u0013\u00dc\u0003\u0002\u0002\u0002\u0015\u00e5\u0003\u0002\u0002\u0002",
  "\u0017\u00ef\u0003\u0002\u0002\u0002\u0019\u00fd\u0003\u0002\u0002\u0002",
  "\u001b\u0108\u0003\u0002\u0002\u0002\u001d\u010a\u0003\u0002\u0002\u0002",
  "\u001f\u0110\u0003\u0002\u0002\u0002!\u0112\u0003\u0002\u0002\u0002",
  "#\u0114\u0003\u0002\u0002\u0002%\u0116\u0003\u0002\u0002\u0002'\u0121",
  "\u0003\u0002\u0002\u0002)\u0125\u0003\u0002\u0002\u0002+\u0134\u0003",
  "\u0002\u0002\u0002-\u0140\u0003\u0002\u0002\u0002/\u0148\u0003\u0002",
  "\u0002\u00021\u014c\u0003\u0002\u0002\u00023\u0151\u0003\u0002\u0002",
  "\u00025\u0156\u0003\u0002\u0002\u00027\u015c\u0003\u0002\u0002\u0002",
  "9\u0165\u0003\u0002\u0002\u0002;\u016b\u0003\u0002\u0002\u0002=\u0173",
  "\u0003\u0002\u0002\u0002?\u017f\u0003\u0002\u0002\u0002A\u018c\u0003",
  "\u0002\u0002\u0002C\u0195\u0003\u0002\u0002\u0002E\u019e\u0003\u0002",
  "\u0002\u0002G\u01aa\u0003\u0002\u0002\u0002I\u01b7\u0003\u0002\u0002",
  "\u0002K\u01be\u0003\u0002\u0002\u0002M\u01c2\u0003\u0002\u0002\u0002",
  "O\u01ca\u0003\u0002\u0002\u0002Q\u01d2\u0003\u0002\u0002\u0002S\u01da",
  "\u0003\u0002\u0002\u0002U\u01e0\u0003\u0002\u0002\u0002W\u01e8\u0003",
  "\u0002\u0002\u0002Y\u01f5\u0003\u0002\u0002\u0002[\u01fe\u0003\u0002",
  "\u0002\u0002]\u0208\u0003\u0002\u0002\u0002_\u0212\u0003\u0002\u0002",
  "\u0002a\u021b\u0003\u0002\u0002\u0002c\u0223\u0003\u0002\u0002\u0002",
  "e\u0230\u0003\u0002\u0002\u0002g\u0238\u0003\u0002\u0002\u0002i\u0245",
  "\u0003\u0002\u0002\u0002k\u024f\u0003\u0002\u0002\u0002m\u025e\u0003",
  "\u0002\u0002\u0002o\u0267\u0003\u0002\u0002\u0002q\u0275\u0003\u0002",
  "\u0002\u0002s\u027f\u0003\u0002\u0002\u0002u\u0283\u0003\u0002\u0002",
  "\u0002w\u0288\u0003\u0002\u0002\u0002y\u028d\u0003\u0002\u0002\u0002",
  "{\u0292\u0003\u0002\u0002\u0002}\u029a\u0003\u0002\u0002\u0002\u007f",
  "\u02a3\u0003\u0002\u0002\u0002\u0081\u02a5\u0003\u0002\u0002\u0002\u0083",
  "\u02b0\u0003\u0002\u0002\u0002\u0085\u0086\u0007R\u0002\u0002\u0086",
  "\u0087\u0007t\u0002\u0002\u0087\u0088\u0007q\u0002\u0002\u0088\u0089",
  "\u0007i\u0002\u0002\u0089\u008a\u0007t\u0002\u0002\u008a\u008b\u0007",
  "c\u0002\u0002\u008b\u008c\u0007o\u0002\u0002\u008c\u008d\u0007o\u0002",
  "\u0002\u008d\u0004\u0003\u0002\u0002\u0002\u008e\u008f\u0007g\u0002",
  "\u0002\u008f\u0090\u0007p\u0002\u0002\u0090\u0091\u0007f\u0002\u0002",
  "\u0091\u0092\u0007g\u0002\u0002\u0092\u0093\u0007R\u0002\u0002\u0093",
  "\u0094\u0007t\u0002\u0002\u0094\u0095\u0007q\u0002\u0002\u0095\u0096",
  "\u0007i\u0002\u0002\u0096\u0097\u0007t\u0002\u0002\u0097\u0098\u0007",
  "c\u0002\u0002\u0098\u0099\u0007o\u0002\u0002\u0099\u009a\u0007o\u0002",
  "\u0002\u009a\u0006\u0003\u0002\u0002\u0002\u009b\u009c\u0007,\u0002",
  "\u0002\u009c\u009d\u0007R\u0002\u0002\u009d\u009e\u0007t\u0002\u0002",
  "\u009e\u009f\u0007q\u0002\u0002\u009f\u00a0\u0007i\u0002\u0002\u00a0",
  "\u00a1\u0007t\u0002\u0002\u00a1\u00a2\u0007c\u0002\u0002\u00a2\u00a3",
  "\u0007o\u0002\u0002\u00a3\u00a4\u0007o\u0002\u0002\u00a4\b\u0003\u0002",
  "\u0002\u0002\u00a5\u00a6\u0007C\u0002\u0002\u00a6\u00a7\u0007p\u0002",
  "\u0002\u00a7\u00a8\u0007y\u0002\u0002\u00a8\u00a9\u0007g\u0002\u0002",
  "\u00a9\u00aa\u0007k\u0002\u0002\u00aa\u00ab\u0007u\u0002\u0002\u00ab",
  "\u00ac\u0007w\u0002\u0002\u00ac\u00ad\u0007p\u0002\u0002\u00ad\u00ae",
  "\u0007i\u0002\u0002\u00ae\n\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
  "g\u0002\u0002\u00b0\u00b1\u0007p\u0002\u0002\u00b1\u00b2\u0007f\u0002",
  "\u0002\u00b2\u00b3\u0007g\u0002\u0002\u00b3\u00b4\u0007C\u0002\u0002",
  "\u00b4\u00b5\u0007p\u0002\u0002\u00b5\u00b6\u0007y\u0002\u0002\u00b6",
  "\u00b7\u0007g\u0002\u0002\u00b7\u00b8\u0007k\u0002\u0002\u00b8\u00b9",
  "\u0007u\u0002\u0002\u00b9\u00ba\u0007w\u0002\u0002\u00ba\u00bb\u0007",
  "p\u0002\u0002\u00bb\u00bc\u0007i\u0002\u0002\u00bc\f\u0003\u0002\u0002",
  "\u0002\u00bd\u00be\u0007,\u0002\u0002\u00be\u00bf\u0007C\u0002\u0002",
  "\u00bf\u00c0\u0007p\u0002\u0002\u00c0\u00c1\u0007y\u0002\u0002\u00c1",
  "\u00c2\u0007g\u0002\u0002\u00c2\u00c3\u0007k\u0002\u0002\u00c3\u00c4",
  "\u0007u\u0002\u0002\u00c4\u00c5\u0007w\u0002\u0002\u00c5\u00c6\u0007",
  "p\u0002\u0002\u00c6\u00c7\u0007i\u0002\u0002\u00c7\u000e\u0003\u0002",
  "\u0002\u0002\u00c8\u00c9\u0007O\u0002\u0002\u00c9\u00ca\u0007g\u0002",
  "\u0002\u00ca\u00cb\u0007v\u0002\u0002\u00cb\u00cc\u0007j\u0002\u0002",
  "\u00cc\u00cd\u0007q\u0002\u0002\u00cd\u00ce\u0007f\u0002\u0002\u00ce",
  "\u00cf\u0007g\u0002\u0002\u00cf\u0010\u0003\u0002\u0002\u0002\u00d0",
  "\u00d1\u0007g\u0002\u0002\u00d1\u00d2\u0007p\u0002\u0002\u00d2\u00d3",
  "\u0007f\u0002\u0002\u00d3\u00d4\u0007g\u0002\u0002\u00d4\u00d5\u0007",
  "O\u0002\u0002\u00d5\u00d6\u0007g\u0002\u0002\u00d6\u00d7\u0007v\u0002",
  "\u0002\u00d7\u00d8\u0007j\u0002\u0002\u00d8\u00d9\u0007q\u0002\u0002",
  "\u00d9\u00da\u0007f\u0002\u0002\u00da\u00db\u0007g\u0002\u0002\u00db",
  "\u0012\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007,\u0002\u0002\u00dd",
  "\u00de\u0007O\u0002\u0002\u00de\u00df\u0007g\u0002\u0002\u00df\u00e0",
  "\u0007v\u0002\u0002\u00e0\u00e1\u0007j\u0002\u0002\u00e1\u00e2\u0007",
  "q\u0002\u0002\u00e2\u00e3\u0007f\u0002\u0002\u00e3\u00e4\u0007g\u0002",
  "\u0002\u00e4\u0014\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007D\u0002",
  "\u0002\u00e6\u00e7\u0007g\u0002\u0002\u00e7\u00e8\u0007f\u0002\u0002",
  "\u00e8\u00e9\u0007k\u0002\u0002\u00e9\u00ea\u0007p\u0002\u0002\u00ea",
  "\u00eb\u0007i\u0002\u0002\u00eb\u00ec\u0007w\u0002\u0002\u00ec\u00ed",
  "\u0007p\u0002\u0002\u00ed\u00ee\u0007i\u0002\u0002\u00ee\u0016\u0003",
  "\u0002\u0002\u0002\u00ef\u00f0\u0007g\u0002\u0002\u00f0\u00f1\u0007",
  "p\u0002\u0002\u00f1\u00f2\u0007f\u0002\u0002\u00f2\u00f3\u0007g\u0002",
  "\u0002\u00f3\u00f4\u0007D\u0002\u0002\u00f4\u00f5\u0007g\u0002\u0002",
  "\u00f5\u00f6\u0007f\u0002\u0002\u00f6\u00f7\u0007k\u0002\u0002\u00f7",
  "\u00f8\u0007p\u0002\u0002\u00f8\u00f9\u0007i\u0002\u0002\u00f9\u00fa",
  "\u0007w\u0002\u0002\u00fa\u00fb\u0007p\u0002\u0002\u00fb\u00fc\u0007",
  "i\u0002\u0002\u00fc\u0018\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007",
  ",\u0002\u0002\u00fe\u00ff\u0007D\u0002\u0002\u00ff\u0100\u0007g\u0002",
  "\u0002\u0100\u0101\u0007f\u0002\u0002\u0101\u0102\u0007k\u0002\u0002",
  "\u0102\u0103\u0007p\u0002\u0002\u0103\u0104\u0007i\u0002\u0002\u0104",
  "\u0105\u0007w\u0002\u0002\u0105\u0106\u0007p\u0002\u0002\u0106\u0107",
  "\u0007i\u0002\u0002\u0107\u001a\u0003\u0002\u0002\u0002\u0108\u0109",
  "\u0007=\u0002\u0002\u0109\u001c\u0003\u0002\u0002\u0002\u010a\u010b",
  "\u0007M\u0002\u0002\u010b\u010c\u0007c\u0002\u0002\u010c\u010d\u0007",
  "t\u0002\u0002\u010d\u010e\u0007q\u0002\u0002\u010e\u010f\u0007n\u0002",
  "\u0002\u010f\u001e\u0003\u0002\u0002\u0002\u0110\u0111\u00070\u0002",
  "\u0002\u0111 \u0003\u0002\u0002\u0002\u0112\u0113\u0007*\u0002\u0002",
  '\u0113"\u0003\u0002\u0002\u0002\u0114\u0115\u0007+\u0002\u0002\u0115',
  "$\u0003\u0002\u0002\u0002\u0116\u0117\u0007y\u0002\u0002\u0117\u0118",
  "\u0007k\u0002\u0002\u0118\u0119\u0007g\u0002\u0002\u0119\u011a\u0007",
  "f\u0002\u0002\u011a\u011b\u0007g\u0002\u0002\u011b\u011c\u0007t\u0002",
  "\u0002\u011c\u011d\u0007j\u0002\u0002\u011d\u011e\u0007q\u0002\u0002",
  "\u011e\u011f\u0007n\u0002\u0002\u011f\u0120\u0007g\u0002\u0002\u0120",
  "&\u0003\u0002\u0002\u0002\u0121\u0122\u0007o\u0002\u0002\u0122\u0123",
  "\u0007c\u0002\u0002\u0123\u0124\u0007n\u0002\u0002\u0124(\u0003\u0002",
  "\u0002\u0002\u0125\u0126\u0007g\u0002\u0002\u0126\u0127\u0007p\u0002",
  "\u0002\u0127\u0128\u0007f\u0002\u0002\u0128\u0129\u0007g\u0002\u0002",
  "\u0129\u012a\u0007y\u0002\u0002\u012a\u012b\u0007k\u0002\u0002\u012b",
  "\u012c\u0007g\u0002\u0002\u012c\u012d\u0007f\u0002\u0002\u012d\u012e",
  "\u0007g\u0002\u0002\u012e\u012f\u0007t\u0002\u0002\u012f\u0130\u0007",
  "j\u0002\u0002\u0130\u0131\u0007q\u0002\u0002\u0131\u0132\u0007n\u0002",
  "\u0002\u0132\u0133\u0007g\u0002\u0002\u0133*\u0003\u0002\u0002\u0002",
  "\u0134\u0135\u0007,\u0002\u0002\u0135\u0136\u0007y\u0002\u0002\u0136",
  "\u0137\u0007k\u0002\u0002\u0137\u0138\u0007g\u0002\u0002\u0138\u0139",
  "\u0007f\u0002\u0002\u0139\u013a\u0007g\u0002\u0002\u013a\u013b\u0007",
  "t\u0002\u0002\u013b\u013c\u0007j\u0002\u0002\u013c\u013d\u0007q\u0002",
  "\u0002\u013d\u013e\u0007n\u0002\u0002\u013e\u013f\u0007g\u0002\u0002",
  "\u013f,\u0003\u0002\u0002\u0002\u0140\u0141\u0007u\u0002\u0002\u0141",
  "\u0142\u0007q\u0002\u0002\u0142\u0143\u0007n\u0002\u0002\u0143\u0144",
  "\u0007c\u0002\u0002\u0144\u0145\u0007p\u0002\u0002\u0145\u0146\u0007",
  "i\u0002\u0002\u0146\u0147\u0007g\u0002\u0002\u0147.\u0003\u0002\u0002",
  "\u0002\u0148\u0149\u0007d\u0002\u0002\u0149\u014a\u0007k\u0002\u0002",
  "\u014a\u014b\u0007u\u0002\u0002\u014b0\u0003\u0002\u0002\u0002\u014c",
  "\u014d\u0007y\u0002\u0002\u014d\u014e\u0007g\u0002\u0002\u014e\u014f",
  "\u0007p\u0002\u0002\u014f\u0150\u0007p\u0002\u0002\u01502\u0003\u0002",
  "\u0002\u0002\u0151\u0152\u0007f\u0002\u0002\u0152\u0153\u0007c\u0002",
  "\u0002\u0153\u0154\u0007p\u0002\u0002\u0154\u0155\u0007p\u0002\u0002",
  "\u01554\u0003\u0002\u0002\u0002\u0156\u0157\u0007u\u0002\u0002\u0157",
  "\u0158\u0007q\u0002\u0002\u0158\u0159\u0007p\u0002\u0002\u0159\u015a",
  "\u0007u\u0002\u0002\u015a\u015b\u0007v\u0002\u0002\u015b6\u0003\u0002",
  "\u0002\u0002\u015c\u015d\u0007g\u0002\u0002\u015d\u015e\u0007p\u0002",
  "\u0002\u015e\u015f\u0007f\u0002\u0002\u015f\u0160\u0007g\u0002\u0002",
  "\u0160\u0161\u0007y\u0002\u0002\u0161\u0162\u0007g\u0002\u0002\u0162",
  "\u0163\u0007p\u0002\u0002\u0163\u0164\u0007p\u0002\u0002\u01648\u0003",
  "\u0002\u0002\u0002\u0165\u0166\u0007,\u0002\u0002\u0166\u0167\u0007",
  "y\u0002\u0002\u0167\u0168\u0007g\u0002\u0002\u0168\u0169\u0007p\u0002",
  "\u0002\u0169\u016a\u0007p\u0002\u0002\u016a:\u0003\u0002\u0002\u0002",
  "\u016b\u016c\u0007U\u0002\u0002\u016c\u016d\u0007e\u0002\u0002\u016d",
  "\u016e\u0007j\u0002\u0002\u016e\u016f\u0007t\u0002\u0002\u016f\u0170",
  "\u0007k\u0002\u0002\u0170\u0171\u0007v\u0002\u0002\u0171\u0172\u0007",
  "v\u0002\u0002\u0172<\u0003\u0002\u0002\u0002\u0173\u0174\u0007N\u0002",
  "\u0002\u0174\u0175\u0007k\u0002\u0002\u0175\u0176\u0007p\u0002\u0002",
  "\u0176\u0177\u0007m\u0002\u0002\u0177\u0178\u0007u\u0002\u0002\u0178",
  "\u0179\u0007F\u0002\u0002\u0179\u017a\u0007t\u0002\u0002\u017a\u017b",
  "\u0007g\u0002\u0002\u017b\u017c\u0007j\u0002\u0002\u017c\u017d\u0007",
  "g\u0002\u0002\u017d\u017e\u0007p\u0002\u0002\u017e>\u0003\u0002\u0002",
  "\u0002\u017f\u0180\u0007T\u0002\u0002\u0180\u0181\u0007g\u0002\u0002",
  "\u0181\u0182\u0007e\u0002\u0002\u0182\u0183\u0007j\u0002\u0002\u0183",
  "\u0184\u0007v\u0002\u0002\u0184\u0185\u0007u\u0002\u0002\u0185\u0186",
  "\u0007F\u0002\u0002\u0186\u0187\u0007t\u0002\u0002\u0187\u0188\u0007",
  "g\u0002\u0002\u0188\u0189\u0007j\u0002\u0002\u0189\u018a\u0007g\u0002",
  "\u0002\u018a\u018b\u0007p\u0002\u0002\u018b@\u0003\u0002\u0002\u0002",
  "\u018c\u018d\u0007J\u0002\u0002\u018d\u018e\u0007k\u0002\u0002\u018e",
  "\u018f\u0007p\u0002\u0002\u018f\u0190\u0007n\u0002\u0002\u0190\u0191",
  "\u0007g\u0002\u0002\u0191\u0192\u0007i\u0002\u0002\u0192\u0193\u0007",
  "g\u0002\u0002\u0193\u0194\u0007p\u0002\u0002\u0194B\u0003\u0002\u0002",
  "\u0002\u0195\u0196\u0007C\u0002\u0002\u0196\u0197\u0007w\u0002\u0002",
  "\u0197\u0198\u0007h\u0002\u0002\u0198\u0199\u0007j\u0002\u0002\u0199",
  "\u019a\u0007g\u0002\u0002\u019a\u019b\u0007d\u0002\u0002\u019b\u019c",
  "\u0007g\u0002\u0002\u019c\u019d\u0007p\u0002\u0002\u019dD\u0003\u0002",
  "\u0002\u0002\u019e\u019f\u0007O\u0002\u0002\u019f\u01a0\u0007c\u0002",
  "\u0002\u01a0\u01a1\u0007t\u0002\u0002\u01a1\u01a2\u0007m\u0002\u0002",
  "\u01a2\u01a3\u0007g\u0002\u0002\u01a3\u01a4\u0007U\u0002\u0002\u01a4",
  "\u01a5\u0007g\u0002\u0002\u01a5\u01a6\u0007v\u0002\u0002\u01a6\u01a7",
  "\u0007|\u0002\u0002\u01a7\u01a8\u0007g\u0002\u0002\u01a8\u01a9\u0007",
  "p\u0002\u0002\u01a9F\u0003\u0002\u0002\u0002\u01aa\u01ab\u0007O\u0002",
  "\u0002\u01ab\u01ac\u0007c\u0002\u0002\u01ac\u01ad\u0007t\u0002\u0002",
  "\u01ad\u01ae\u0007m\u0002\u0002\u01ae\u01af\u0007g\u0002\u0002\u01af",
  "\u01b0\u0007N\u0002\u0002\u01b0\u01b1\u0007\u00f8\u0002\u0002\u01b1",
  "\u01b2\u0007u\u0002\u0002\u01b2\u01b3\u0007e\u0002\u0002\u01b3\u01b4",
  "\u0007j\u0002\u0002\u01b4\u01b5\u0007g\u0002\u0002\u01b5\u01b6\u0007",
  "p\u0002\u0002\u01b6H\u0003\u0002\u0002\u0002\u01b7\u01b8\u0007Y\u0002",
  "\u0002\u01b8\u01b9\u0007c\u0002\u0002\u01b9\u01ba\u0007t\u0002\u0002",
  "\u01ba\u01bb\u0007v\u0002\u0002\u01bb\u01bc\u0007g\u0002\u0002\u01bc",
  "\u01bd\u0007p\u0002\u0002\u01bdJ\u0003\u0002\u0002\u0002\u01be\u01bf",
  "\u0007V\u0002\u0002\u01bf\u01c0\u0007q\u0002\u0002\u01c0\u01c1\u0007",
  "p\u0002\u0002\u01c1L\u0003\u0002\u0002\u0002\u01c2\u01c3\u0007D\u0002",
  "\u0002\u01c3\u01c4\u0007g\u0002\u0002\u01c4\u01c5\u0007g\u0002\u0002",
  "\u01c5\u01c6\u0007p\u0002\u0002\u01c6\u01c7\u0007f\u0002\u0002\u01c7",
  "\u01c8\u0007g\u0002\u0002\u01c8\u01c9\u0007p\u0002\u0002\u01c9N\u0003",
  "\u0002\u0002\u0002\u01ca\u01cb\u0007u\u0002\u0002\u01cb\u01cc\u0007",
  "e\u0002\u0002\u01cc\u01cd\u0007j\u0002\u0002\u01cd\u01ce\u0007p\u0002",
  "\u0002\u01ce\u01cf\u0007g\u0002\u0002\u01cf\u01d0\u0007n\u0002\u0002",
  "\u01d0\u01d1\u0007n\u0002\u0002\u01d1P\u0003\u0002\u0002\u0002\u01d2",
  "\u01d3\u0007n\u0002\u0002\u01d3\u01d4\u0007c\u0002\u0002\u01d4\u01d5",
  "\u0007p\u0002\u0002\u01d5\u01d6\u0007i\u0002\u0002\u01d6\u01d7\u0007",
  "u\u0002\u0002\u01d7\u01d8\u0007c\u0002\u0002\u01d8\u01d9\u0007o\u0002",
  "\u0002\u01d9R\u0003\u0002\u0002\u0002\u01da\u01db\u0007p\u0002\u0002",
  "\u01db\u01dc\u0007k\u0002\u0002\u01dc\u01dd\u0007e\u0002\u0002\u01dd",
  "\u01de\u0007j\u0002\u0002\u01de\u01df\u0007v\u0002\u0002\u01dfT\u0003",
  "\u0002\u0002\u0002\u01e0\u01e1\u0007K\u0002\u0002\u01e1\u01e2\u0007",
  "u\u0002\u0002\u01e2\u01e3\u0007v\u0002\u0002\u01e3\u01e4\u0007Y\u0002",
  "\u0002\u01e4\u01e5\u0007c\u0002\u0002\u01e5\u01e6\u0007p\u0002\u0002",
  "\u01e6\u01e7\u0007f\u0002\u0002\u01e7V\u0003\u0002\u0002\u0002\u01e8",
  "\u01e9\u0007P\u0002\u0002\u01e9\u01ea\u0007k\u0002\u0002\u01ea\u01eb",
  "\u0007e\u0002\u0002\u01eb\u01ec\u0007j\u0002\u0002\u01ec\u01ed\u0007",
  "v\u0002\u0002\u01ed\u01ee\u0007K\u0002\u0002\u01ee\u01ef\u0007u\u0002",
  "\u0002\u01ef\u01f0\u0007v\u0002\u0002\u01f0\u01f1\u0007Y\u0002\u0002",
  "\u01f1\u01f2\u0007c\u0002\u0002\u01f2\u01f3\u0007p\u0002\u0002\u01f3",
  "\u01f4\u0007f\u0002\u0002\u01f4X\u0003\u0002\u0002\u0002\u01f5\u01f6",
  "\u0007K\u0002\u0002\u01f6\u01f7\u0007u\u0002\u0002\u01f7\u01f8\u0007",
  "v\u0002\u0002\u01f8\u01f9\u0007U\u0002\u0002\u01f9\u01fa\u0007\u00fe",
  "\u0002\u0002\u01fa\u01fb\u0007f\u0002\u0002\u01fb\u01fc\u0007g\u0002",
  "\u0002\u01fc\u01fd\u0007p\u0002\u0002\u01fdZ\u0003\u0002\u0002\u0002",
  "\u01fe\u01ff\u0007K\u0002\u0002\u01ff\u0200\u0007u\u0002\u0002\u0200",
  "\u0201\u0007v\u0002\u0002\u0201\u0202\u0007P\u0002\u0002\u0202\u0203",
  "\u0007q\u0002\u0002\u0203\u0204\u0007t\u0002\u0002\u0204\u0205\u0007",
  "f\u0002\u0002\u0205\u0206\u0007g\u0002\u0002\u0206\u0207\u0007p\u0002",
  "\u0002\u0207\\\u0003\u0002\u0002\u0002\u0208\u0209\u0007K\u0002\u0002",
  "\u0209\u020a\u0007u\u0002\u0002\u020a\u020b\u0007v\u0002\u0002\u020b",
  "\u020c\u0007Y\u0002\u0002\u020c\u020d\u0007g\u0002\u0002\u020d\u020e",
  "\u0007u\u0002\u0002\u020e\u020f\u0007v\u0002\u0002\u020f\u0210\u0007",
  "g\u0002\u0002\u0210\u0211\u0007p\u0002\u0002\u0211^\u0003\u0002\u0002",
  "\u0002\u0212\u0213\u0007K\u0002\u0002\u0213\u0214\u0007u\u0002\u0002",
  "\u0214\u0215\u0007v\u0002\u0002\u0215\u0216\u0007Q\u0002\u0002\u0216",
  "\u0217\u0007u\u0002\u0002\u0217\u0218\u0007v\u0002\u0002\u0218\u0219",
  "\u0007g\u0002\u0002\u0219\u021a\u0007p\u0002\u0002\u021a`\u0003\u0002",
  "\u0002\u0002\u021b\u021c\u0007K\u0002\u0002\u021c\u021d\u0007u\u0002",
  "\u0002\u021d\u021e\u0007v\u0002\u0002\u021e\u021f\u0007X\u0002\u0002",
  "\u021f\u0220\u0007q\u0002\u0002\u0220\u0221\u0007n\u0002\u0002\u0221",
  "\u0222\u0007n\u0002\u0002\u0222b\u0003\u0002\u0002\u0002\u0223\u0224",
  "\u0007P\u0002\u0002\u0224\u0225\u0007k\u0002\u0002\u0225\u0226\u0007",
  "e\u0002\u0002\u0226\u0227\u0007j\u0002\u0002\u0227\u0228\u0007v\u0002",
  "\u0002\u0228\u0229\u0007K\u0002\u0002\u0229\u022a\u0007u\u0002\u0002",
  "\u022a\u022b\u0007v\u0002\u0002\u022b\u022c\u0007X\u0002\u0002\u022c",
  "\u022d\u0007q\u0002\u0002\u022d\u022e\u0007n\u0002\u0002\u022e\u022f",
  "\u0007n\u0002\u0002\u022fd\u0003\u0002\u0002\u0002\u0230\u0231\u0007",
  "K\u0002\u0002\u0231\u0232\u0007u\u0002\u0002\u0232\u0233\u0007v\u0002",
  "\u0002\u0233\u0234\u0007N\u0002\u0002\u0234\u0235\u0007g\u0002\u0002",
  "\u0235\u0236\u0007g\u0002\u0002\u0236\u0237\u0007t\u0002\u0002\u0237",
  "f\u0003\u0002\u0002\u0002\u0238\u0239\u0007P\u0002\u0002\u0239\u023a",
  "\u0007k\u0002\u0002\u023a\u023b\u0007e\u0002\u0002\u023b\u023c\u0007",
  "j\u0002\u0002\u023c\u023d\u0007v\u0002\u0002\u023d\u023e\u0007K\u0002",
  "\u0002\u023e\u023f\u0007u\u0002\u0002\u023f\u0240\u0007v\u0002\u0002",
  "\u0240\u0241\u0007N\u0002\u0002\u0241\u0242\u0007g\u0002\u0002\u0242",
  "\u0243\u0007g\u0002\u0002\u0243\u0244\u0007t\u0002\u0002\u0244h\u0003",
  "\u0002\u0002\u0002\u0245\u0246\u0007K\u0002\u0002\u0246\u0247\u0007",
  "u\u0002\u0002\u0247\u0248\u0007v\u0002\u0002\u0248\u0249\u0007\\\u0002",
  "\u0002\u0249\u024a\u0007k\u0002\u0002\u024a\u024b\u0007g\u0002\u0002",
  "\u024b\u024c\u0007i\u0002\u0002\u024c\u024d\u0007g\u0002\u0002\u024d",
  "\u024e\u0007n\u0002\u0002\u024ej\u0003\u0002\u0002\u0002\u024f\u0250",
  "\u0007P\u0002\u0002\u0250\u0251\u0007k\u0002\u0002\u0251\u0252\u0007",
  "e\u0002\u0002\u0252\u0253\u0007j\u0002\u0002\u0253\u0254\u0007v\u0002",
  "\u0002\u0254\u0255\u0007K\u0002\u0002\u0255\u0256\u0007u\u0002\u0002",
  "\u0256\u0257\u0007v\u0002\u0002\u0257\u0258\u0007\\\u0002\u0002\u0258",
  "\u0259\u0007k\u0002\u0002\u0259\u025a\u0007g\u0002\u0002\u025a\u025b",
  "\u0007i\u0002\u0002\u025b\u025c\u0007g\u0002\u0002\u025c\u025d\u0007",
  "n\u0002\u0002\u025dl\u0003\u0002\u0002\u0002\u025e\u025f\u0007K\u0002",
  "\u0002\u025f\u0260\u0007u\u0002\u0002\u0260\u0261\u0007v\u0002\u0002",
  "\u0261\u0262\u0007O\u0002\u0002\u0262\u0263\u0007c\u0002\u0002\u0263",
  "\u0264\u0007t\u0002\u0002\u0264\u0265\u0007m\u0002\u0002\u0265\u0266",
  "\u0007g\u0002\u0002\u0266n\u0003\u0002\u0002\u0002\u0267\u0268\u0007",
  "P\u0002\u0002\u0268\u0269\u0007k\u0002\u0002\u0269\u026a\u0007e\u0002",
  "\u0002\u026a\u026b\u0007j\u0002\u0002\u026b\u026c\u0007v\u0002\u0002",
  "\u026c\u026d\u0007K\u0002\u0002\u026d\u026e\u0007u\u0002\u0002\u026e",
  "\u026f\u0007v\u0002\u0002\u026f\u0270\u0007O\u0002\u0002\u0270\u0271",
  "\u0007c\u0002\u0002\u0271\u0272\u0007t\u0002\u0002\u0272\u0273\u0007",
  "m\u0002\u0002\u0273\u0274\u0007g\u0002\u0002\u0274p\u0003\u0002\u0002",
  "\u0002\u0275\u0276\u0007J\u0002\u0002\u0276\u0277\u0007c\u0002\u0002",
  "\u0277\u0278\u0007v\u0002\u0002\u0278\u0279\u0007\\\u0002\u0002\u0279",
  "\u027a\u0007k\u0002\u0002\u027a\u027b\u0007g\u0002\u0002\u027b\u027c",
  "\u0007i\u0002\u0002\u027c\u027d\u0007g\u0002\u0002\u027d\u027e\u0007",
  "n\u0002\u0002\u027er\u0003\u0002\u0002\u0002\u027f\u0280\u0007t\u0002",
  "\u0002\u0280\u0281\u0007q\u0002\u0002\u0281\u0282\u0007v\u0002\u0002",
  "\u0282t\u0003\u0002\u0002\u0002\u0283\u0284\u0007i\u0002\u0002\u0284",
  "\u0285\u0007g\u0002\u0002\u0285\u0286\u0007n\u0002\u0002\u0286\u0287",
  "\u0007d\u0002\u0002\u0287v\u0003\u0002\u0002\u0002\u0288\u0289\u0007",
  "d\u0002\u0002\u0289\u028a\u0007n\u0002\u0002\u028a\u028b\u0007c\u0002",
  "\u0002\u028b\u028c\u0007w\u0002\u0002\u028cx\u0003\u0002\u0002\u0002",
  "\u028d\u028e\u0007i\u0002\u0002\u028e\u028f\u0007t\u0002\u0002\u028f",
  "\u0290\u0007\u00fe\u0002\u0002\u0290\u0291\u0007p\u0002\u0002\u0291",
  "z\u0003\u0002\u0002\u0002\u0292\u0293\u0007u\u0002\u0002\u0293\u0294",
  "\u0007e\u0002\u0002\u0294\u0295\u0007j\u0002\u0002\u0295\u0296\u0007",
  "y\u0002\u0002\u0296\u0297\u0007c\u0002\u0002\u0297\u0298\u0007t\u0002",
  "\u0002\u0298\u0299\u0007|\u0002\u0002\u0299|\u0003\u0002\u0002\u0002",
  "\u029a\u029f\u0005\u007f@\u0002\u029b\u029e\u0005\u007f@\u0002\u029c",
  "\u029e\u0005\u0081A\u0002\u029d\u029b\u0003\u0002\u0002\u0002\u029d",
  "\u029c\u0003\u0002\u0002\u0002\u029e\u02a1\u0003\u0002\u0002\u0002\u029f",
  "\u029d\u0003\u0002\u0002\u0002\u029f\u02a0\u0003\u0002\u0002\u0002\u02a0",
  "~\u0003\u0002\u0002\u0002\u02a1\u029f\u0003\u0002\u0002\u0002\u02a2",
  "\u02a4\t\u0002\u0002\u0002\u02a3\u02a2\u0003\u0002\u0002\u0002\u02a4",
  "\u0080\u0003\u0002\u0002\u0002\u02a5\u02a6\t\u0003\u0002\u0002\u02a6",
  "\u0082\u0003\u0002\u0002\u0002\u02a7\u02b1\t\u0004\u0002\u0002\u02a8",
  "\u02ac\u0007}\u0002\u0002\u02a9\u02ab\n\u0005\u0002\u0002\u02aa\u02a9",
  "\u0003\u0002\u0002\u0002\u02ab\u02ae\u0003\u0002\u0002\u0002\u02ac\u02aa",
  "\u0003\u0002\u0002\u0002\u02ac\u02ad\u0003\u0002\u0002\u0002\u02ad\u02af",
  "\u0003\u0002\u0002\u0002\u02ae\u02ac\u0003\u0002\u0002\u0002\u02af\u02b1",
  "\u0007\u007f\u0002\u0002\u02b0\u02a7\u0003\u0002\u0002\u0002\u02b0\u02a8",
  "\u0003\u0002\u0002\u0002\u02b1\u02b2\u0003\u0002\u0002\u0002\u02b2\u02b3",
  "\bB\u0002\u0002\u02b3\u0084\u0003\u0002\u0002\u0002\b\u0002\u029d\u029f",
  "\u02a3\u02ac\u02b0\u0003\b\u0002\u0002",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

export default class KarolLexer extends antlr4.Lexer {
  static grammarFileName = "Karol.g4";
  static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
  static modeNames = ["DEFAULT_MODE"];
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
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "T__7",
    "T__8",
    "T__9",
    "T__10",
    "T__11",
    "T__12",
    "T__13",
    "T__14",
    "T__15",
    "T__16",
    "T__17",
    "T__18",
    "T__19",
    "T__20",
    "T__21",
    "T__22",
    "T__23",
    "T__24",
    "T__25",
    "T__26",
    "T__27",
    "T__28",
    "T__29",
    "T__30",
    "T__31",
    "T__32",
    "T__33",
    "T__34",
    "T__35",
    "T__36",
    "T__37",
    "T__38",
    "T__39",
    "T__40",
    "T__41",
    "T__42",
    "T__43",
    "T__44",
    "T__45",
    "T__46",
    "T__47",
    "T__48",
    "T__49",
    "T__50",
    "T__51",
    "T__52",
    "T__53",
    "T__54",
    "T__55",
    "T__56",
    "T__57",
    "T__58",
    "T__59",
    "T__60",
    "IDENTIFIER",
    "LETTER",
    "DIGIT",
    "WS",
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
  }

  get atn() {
    return atn;
  }
}

KarolLexer.EOF = antlr4.Token.EOF;
KarolLexer.T__0 = 1;
KarolLexer.T__1 = 2;
KarolLexer.T__2 = 3;
KarolLexer.T__3 = 4;
KarolLexer.T__4 = 5;
KarolLexer.T__5 = 6;
KarolLexer.T__6 = 7;
KarolLexer.T__7 = 8;
KarolLexer.T__8 = 9;
KarolLexer.T__9 = 10;
KarolLexer.T__10 = 11;
KarolLexer.T__11 = 12;
KarolLexer.T__12 = 13;
KarolLexer.T__13 = 14;
KarolLexer.T__14 = 15;
KarolLexer.T__15 = 16;
KarolLexer.T__16 = 17;
KarolLexer.T__17 = 18;
KarolLexer.T__18 = 19;
KarolLexer.T__19 = 20;
KarolLexer.T__20 = 21;
KarolLexer.T__21 = 22;
KarolLexer.T__22 = 23;
KarolLexer.T__23 = 24;
KarolLexer.T__24 = 25;
KarolLexer.T__25 = 26;
KarolLexer.T__26 = 27;
KarolLexer.T__27 = 28;
KarolLexer.T__28 = 29;
KarolLexer.T__29 = 30;
KarolLexer.T__30 = 31;
KarolLexer.T__31 = 32;
KarolLexer.T__32 = 33;
KarolLexer.T__33 = 34;
KarolLexer.T__34 = 35;
KarolLexer.T__35 = 36;
KarolLexer.T__36 = 37;
KarolLexer.T__37 = 38;
KarolLexer.T__38 = 39;
KarolLexer.T__39 = 40;
KarolLexer.T__40 = 41;
KarolLexer.T__41 = 42;
KarolLexer.T__42 = 43;
KarolLexer.T__43 = 44;
KarolLexer.T__44 = 45;
KarolLexer.T__45 = 46;
KarolLexer.T__46 = 47;
KarolLexer.T__47 = 48;
KarolLexer.T__48 = 49;
KarolLexer.T__49 = 50;
KarolLexer.T__50 = 51;
KarolLexer.T__51 = 52;
KarolLexer.T__52 = 53;
KarolLexer.T__53 = 54;
KarolLexer.T__54 = 55;
KarolLexer.T__55 = 56;
KarolLexer.T__56 = 57;
KarolLexer.T__57 = 58;
KarolLexer.T__58 = 59;
KarolLexer.T__59 = 60;
KarolLexer.T__60 = 61;
KarolLexer.IDENTIFIER = 62;
KarolLexer.LETTER = 63;
KarolLexer.DIGIT = 64;
KarolLexer.WS = 65;